import { forwardRef, useEffect, useRef, useState } from 'react'
import { useStore, Node, ConnectorPosition } from '../store/useStore'
import NodeComponent from './NodeComponent'
import Connection from './Connection'
import ConnectionComponent from './Connection'

const Canvas = forwardRef<HTMLDivElement>((_, ref) => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const drawingCanvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [canvasSize, setCanvasSize] = useState({ width: 5000, height: 5000 })
  
  const {
    nodes,
    connections,
    groups,
    selectedNodeIds,
    selectedConnectionId,
    selectedGroupId,
    isDragging,
    isConnecting,
    connectingFromNodeId,
    connectingFromPosition,
    isDrawingMode,
    isGroupDrawingMode,
    isDrawing,
    drawingStart,
    drawingEnd,
    drawnLines,
    groupDrawingStart,
    groupDrawingEnd,
    zoom,
    setZoom,
    selectNode,
    clearSelection,
    selectConnection,
    selectGroup,
    startDrag,
    dragNode,
    endDrag,
    startConnecting,
    endConnecting,
    deleteNode,
    deleteConnection,
    startDrawing,
    updateDrawing,
    endDrawing,
    toggleGroupDrawingMode,
    startGroupDrawing,
    updateGroupDrawing,
    endGroupDrawing,
    deleteGroup,
    updateGroup
  } = useStore()
  
  const getConnectorPosition = (node: Node, position: ConnectorPosition) => {
    switch (position) {
      case 'top':
        return { x: node.x + node.width / 2, y: node.y }
      case 'bottom':
        return { x: node.x + node.width / 2, y: node.y + node.height }
      case 'left':
        return { x: node.x, y: node.y + node.height / 2 }
      case 'right':
        return { x: node.x + node.width, y: node.y + node.height / 2 }
    }
  }
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isDrawingMode) {
      const rect = canvasRef.current?.getBoundingClientRect()
      if (rect && canvasRef.current) {
        const x = (e.clientX - rect.left + canvasRef.current.scrollLeft) / zoom
        const y = (e.clientY - rect.top + canvasRef.current.scrollTop) / zoom
        startDrawing(x, y)
      }
    } else if (isGroupDrawingMode) {
      const rect = canvasRef.current?.getBoundingClientRect()
      if (rect && canvasRef.current) {
        const x = (e.clientX - rect.left + canvasRef.current.scrollLeft) / zoom
        const y = (e.clientY - rect.top + canvasRef.current.scrollTop) / zoom
        startGroupDrawing(x, y)
      }
    } else if (e.target === canvasRef.current) {
      selectNode(null)
      selectGroup(null)
    }
  }
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect && canvasRef.current) {
      const x = (e.clientX - rect.left + canvasRef.current.scrollLeft) / zoom
      const y = (e.clientY - rect.top + canvasRef.current.scrollTop) / zoom
      setMousePos({ x, y })
      
      if (isDragging) {
        e.preventDefault()
        // Use requestAnimationFrame for smoother updates
        requestAnimationFrame(() => {
          dragNode(x, y)
        })
      }
      
      if (isDrawing && isDrawingMode) {
        updateDrawing(x, y)
      }
      
      if (isGroupDrawingMode && groupDrawingStart) {
        updateGroupDrawing(x, y)
      }
    }
  }
  
  const handleMouseUp = () => {
    if (isDragging) {
      endDrag()
    }
    if (isConnecting) {
      endConnecting(null, null)
    }
    if (isDrawing) {
      endDrawing()
    }
    if (isGroupDrawingMode && groupDrawingStart) {
      endGroupDrawing()
    }
  }
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      if (selectedGroupId) {
        deleteGroup(selectedGroupId)
      } else if (selectedConnectionId) {
        deleteConnection(selectedConnectionId)
      } else if (selectedNodeIds.length > 0) {
        selectedNodeIds.forEach(id => deleteNode(id))
      }
    }
    if (e.key === 'Escape') {
      if (isConnecting) {
        endConnecting(null, null)
      }
      if (isGroupDrawingMode) {
        toggleGroupDrawingMode()
      }
      clearSelection()
    }
    // Zoom with +/-
    if (e.key === '+' || e.key === '=') {
      setZoom(Math.min(zoom * 1.1, 3))
    }
    if (e.key === '-' || e.key === '_') {
      setZoom(Math.max(zoom / 1.1, 0.3))
    }
    // Reset zoom with 0
    if (e.key === '0') {
      setZoom(1)
    }
  }
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedNodeIds, isConnecting, selectedGroupId, isGroupDrawingMode])
  
  // Auto-scale groups to fit nodes inside them
  useEffect(() => {
    groups.forEach(group => {
      // Find all nodes that are inside this group
      const nodesInGroup = nodes.filter(node => 
        node.x >= group.x && 
        node.x + node.width <= group.x + group.width &&
        node.y >= group.y && 
        node.y + node.height <= group.y + group.height
      )
      
      if (nodesInGroup.length > 0) {
        // Calculate new bounds to fit all nodes with padding
        const padding = 20
        const minX = Math.min(...nodesInGroup.map(n => n.x)) - padding
        const minY = Math.min(...nodesInGroup.map(n => n.y)) - padding
        const maxX = Math.max(...nodesInGroup.map(n => n.x + n.width)) + padding
        const maxY = Math.max(...nodesInGroup.map(n => n.y + n.height)) + padding
        
        const newWidth = maxX - minX
        const newHeight = maxY - minY
        
        // Only update if the size actually changed significantly
        if (Math.abs(newWidth - group.width) > 5 || Math.abs(newHeight - group.height) > 5) {
          updateGroup(group.id, {
            x: minX,
            y: minY,
            width: newWidth,
            height: newHeight
          })
        }
      }
    })
  }, [nodes, groups])

  // Auto-expand canvas when nodes are placed outside current bounds
  useEffect(() => {
    if (nodes.length === 0) return
    
    const padding = 200
    const maxX = Math.max(...nodes.map(n => n.x + n.width)) + padding
    const maxY = Math.max(...nodes.map(n => n.y + n.height)) + padding
    
    setCanvasSize(prev => ({
      width: Math.max(prev.width, maxX),
      height: Math.max(prev.height, maxY)
    }))
  }, [nodes])

  // Resize canvas to match container
  useEffect(() => {
    const canvas = drawingCanvasRef.current
    const container = canvasRef.current
    if (!canvas || !container) return
    
    const resizeCanvas = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])
  
  // Render drawn lines on canvas
  useEffect(() => {
    const canvas = drawingCanvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationFrameId: number
    
    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw all saved lines
      ctx.strokeStyle = '#3b82f6'
      ctx.lineWidth = 3
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      
      drawnLines.forEach(line => {
        ctx.beginPath()
        ctx.moveTo(line.start.x, line.start.y)
        ctx.lineTo(line.end.x, line.end.y)
        ctx.stroke()
      })
      
      // Draw current line being drawn
      if (drawingStart && drawingEnd) {
        ctx.beginPath()
        ctx.moveTo(drawingStart.x, drawingStart.y)
        ctx.lineTo(drawingEnd.x, drawingEnd.y)
        ctx.stroke()
      }
    }
    
    animationFrameId = requestAnimationFrame(render)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [drawnLines, drawingStart, drawingEnd])
  
  const connectingFromNode = nodes.find(n => n.id === connectingFromNodeId)
  const connectingFromPos = connectingFromNode && connectingFromPosition 
    ? getConnectorPosition(connectingFromNode, connectingFromPosition)
    : null
  
  return (
    <div
      ref={(el) => {
        canvasRef.current = el
        if (typeof ref === 'function') ref(el)
        else if (ref) ref.current = el
      }}
      className={`w-full h-full bg-gray-50 relative overflow-auto ${
        isDrawingMode ? 'cursor-crosshair' : 'cursor-default'
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={(e) => {
        if (e.target === canvasRef.current && !isDrawingMode) {
          selectNode(null)
        }
      }}
      onWheel={(e) => {
        e.preventDefault()
        const delta = e.deltaY > 0 ? 0.9 : 1.1
        setZoom(Math.max(0.3, Math.min(3, zoom * delta)))
      }}
    >
      <div
        className="absolute"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: '0 0',
          width: canvasSize.width,
          height: canvasSize.height,
          minWidth: '100%',
          minHeight: '100%'
        }}
      >
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Groups */}
      {groups.map((group) => (
        <div
          key={group.id}
          className={`absolute border-2 transition-all ${
            selectedGroupId === group.id ? 'border-blue-500 bg-blue-50' : 'border-gray-400 bg-gray-50'
          }`}
          style={{
            left: group.x,
            top: group.y,
            width: group.width,
            height: group.height,
            zIndex: 0,
            borderStyle: 'dashed',
            borderRadius: '12px'
          }}
          onClick={(e) => {
            e.stopPropagation()
            selectGroup(group.id)
          }}
        />
      ))}
      
      {/* Group drawing preview */}
      {isGroupDrawingMode && groupDrawingStart && groupDrawingEnd && (
        <div
          className="absolute border-2 border-purple-400 bg-purple-50 border-dashed"
          style={{
            left: Math.min(groupDrawingStart.x, groupDrawingEnd.x),
            top: Math.min(groupDrawingStart.y, groupDrawingEnd.y),
            width: Math.abs(groupDrawingEnd.x - groupDrawingStart.x),
            height: Math.abs(groupDrawingEnd.y - groupDrawingStart.y),
            zIndex: 100,
            borderRadius: '12px',
            pointerEvents: 'none'
          }}
        />
      )}
      
      {/* Group drawing mode indicator */}
      {isGroupDrawingMode && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium z-50">
          Group Mode - Click and drag to draw a group
        </div>
      )}
      
      {/* Connections */}
      <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, width: '100%', height: '100%' }}>
        {connections.map((conn) => {
          const fromNode = nodes.find(n => n.id === conn.fromNodeId)
          const toNode = nodes.find(n => n.id === conn.toNodeId)
          if (!fromNode || !toNode) return null
          
          const fromPos = getConnectorPosition(fromNode, conn.fromPosition)
          const toPos = getConnectorPosition(toNode, conn.toPosition)
          
          const isSelected = selectedConnectionId === conn.id
          
          return (
            <g style={{ pointerEvents: 'auto' }}>
              <ConnectionComponent
                fromX={fromPos.x}
                fromY={fromPos.y}
                toX={toPos.x}
                toY={toPos.y}
                fromPosition={conn.fromPosition}
                toPosition={conn.toPosition}
                onDelete={() => deleteConnection(conn.id)}
              />
              {/* Selection highlight */}
              {isSelected && (
                <path
                  d={`M ${fromPos.x} ${fromPos.y} L ${toPos.x} ${toPos.y}`}
                  stroke="#3b82f6"
                  strokeWidth={6}
                  fill="none"
                  opacity={0.3}
                  style={{ pointerEvents: 'none' }}
                />
              )}
            </g>
          )
        })}
        
        {/* Temporary connection line while connecting */}
        {isConnecting && connectingFromPos && (() => {
          const dx = mousePos.x - connectingFromPos.x
          const dy = mousePos.y - connectingFromPos.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const controlOffset = Math.min(distance * 0.4, 100)
          
          let cp1x = connectingFromPos.x
          let cp1y = connectingFromPos.y
          let cp2x = mousePos.x
          let cp2y = mousePos.y
          
          if (Math.abs(dx) > Math.abs(dy)) {
            cp1x += controlOffset
            cp2x -= controlOffset
          } else {
            cp1y += controlOffset
            cp2y -= controlOffset
          }
          
          const curvePath = `M ${connectingFromPos.x} ${connectingFromPos.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${mousePos.x} ${mousePos.y}`
          
          return (
            <path
              d={curvePath}
              stroke="#3b82f6"
              strokeWidth={2}
              fill="none"
              strokeDasharray="5,5"
            />
          )
        })()}
      </svg>
      
      {/* Drawing canvas for freehand drawing */}
      <canvas
        ref={drawingCanvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      {/* Drawing mode indicator */}
      {isDrawingMode && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium z-50">
          Drawing Mode - Click and drag to draw lines
        </div>
      )}
      
      {/* Nodes */}
      {nodes.map((node) => (
        <NodeComponent
          key={node.id}
          node={node}
          isSelected={selectedNodeIds.includes(node.id)}
          onSelect={(e) => {
            if (e.shiftKey) {
              selectNode(node.id, true)
            } else {
              selectNode(node.id)
            }
          }}
          onStartDrag={(e) => {
            const rect = canvasRef.current?.getBoundingClientRect()
            if (rect && canvasRef.current) {
              const mouseX = (e.clientX - rect.left + canvasRef.current.scrollLeft) / zoom
              const mouseY = (e.clientY - rect.top + canvasRef.current.scrollTop) / zoom
              startDrag(node.id, mouseX - node.x, mouseY - node.y)
            }
          }}
        />
      ))}
      </div>
    </div>
  )
})

Canvas.displayName = 'Canvas'

export default Canvas
