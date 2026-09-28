import { useMemo } from 'react'

interface ConnectionProps {
  fromX: number
  fromY: number
  toX: number
  toY: number
  fromPosition?: 'top' | 'bottom' | 'left' | 'right'
  toPosition?: 'top' | 'bottom' | 'left' | 'right'
  label?: string
  onDelete: () => void
}

const Connection = ({ fromX, fromY, toX, toY, fromPosition = 'right', toPosition = 'left', label, onDelete }: ConnectionProps) => {
  const midX = (fromX + toX) / 2
  const midY = (fromY + toY) / 2
  
  // Calculate orthogonal path with 90-degree turns
  const orthogonalPath = useMemo(() => {
    const dx = toX - fromX
    const dy = toY - fromY
    
    // Calculate intermediate points based on connector positions
    let path = `M ${fromX} ${fromY}`
    
    // Get starting offset based on fromPosition
    const startOffset = 30
    let startX = fromX
    let startY = fromY
    
    switch (fromPosition) {
      case 'top':
        startY -= startOffset
        break
      case 'bottom':
        startY += startOffset
        break
      case 'left':
        startX -= startOffset
        break
      case 'right':
        startX += startOffset
        break
    }
    
    // Get ending offset based on toPosition
    const endOffset = 30
    let endX = toX
    let endY = toY
    
    switch (toPosition) {
      case 'top':
        endY -= endOffset
        break
      case 'bottom':
        endY += endOffset
        break
      case 'left':
        endX -= endOffset
        break
      case 'right':
        endX += endOffset
        break
    }
    
    // Add first segment to get away from start node
    path += ` L ${startX} ${startY}`
    
    // Determine routing strategy
    const horizontalFirst = Math.abs(dx) > Math.abs(dy)
    
    if (horizontalFirst) {
      // Go horizontal first, then vertical
      const midX = (startX + endX) / 2
      path += ` L ${midX} ${startY}`
      path += ` L ${midX} ${endY}`
      path += ` L ${endX} ${endY}`
    } else {
      // Go vertical first, then horizontal
      const midY = (startY + endY) / 2
      path += ` L ${startX} ${midY}`
      path += ` L ${endX} ${midY}`
      path += ` L ${endX} ${endY}`
    }
    
    // Add final segment to end node
    path += ` L ${toX} ${toY}`
    
    return path
  }, [fromX, fromY, toX, toY, fromPosition, toPosition])
  
  // Calculate arrow position and angle
  const arrowSize = 10
  const arrowOffset = 12 // Distance from connector
  
  // Calculate the direction of the final segment (from endX,endY to toX,toY)
  const arrowAngle = useMemo(() => {
    // Calculate where the final segment starts (endX,endY)
    let endX = toX
    let endY = toY
    const endOffset = 30
    
    switch (toPosition) {
      case 'top':
        endY -= endOffset // Final segment comes from below
        break
      case 'bottom':
        endY += endOffset // Final segment comes from above
        break
      case 'left':
        endX -= endOffset // Final segment comes from right
        break
      case 'right':
        endX += endOffset // Final segment comes from left
        break
    }
    
    // Angle from endX,endY to toX,toY (direction arrow should point)
    return Math.atan2(toY - endY, toX - endX)
  }, [toX, toY, toPosition])
  
  // Position arrow tip back from connector along the final segment
  const arrowTipX = toX - arrowOffset * Math.cos(arrowAngle)
  const arrowTipY = toY - arrowOffset * Math.sin(arrowAngle)
  
  // Arrow points - tip at arrowTipX, arrowTipY, pointing toward connector
  const arrowPoints = [
    `${arrowTipX},${arrowTipY}`,
    `${arrowTipX - arrowSize * Math.cos(arrowAngle - Math.PI / 6)},${arrowTipY - arrowSize * Math.sin(arrowAngle - Math.PI / 6)}`,
    `${arrowTipX - arrowSize * Math.cos(arrowAngle + Math.PI / 6)},${arrowTipY - arrowSize * Math.sin(arrowAngle + Math.PI / 6)}`
  ].join(' ')
  
  return (
    <g className="group">
      {/* Orthogonal connection line */}
      <path
        d={orthogonalPath}
        stroke="#94a3b8"
        strokeWidth={2}
        fill="none"
        className="group-hover:stroke-blue-400 transition-colors"
      />
      
      {/* Animated flow indicator */}
      <circle r="3" fill="#3b82f6">
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          path={orthogonalPath}
          rotate="auto"
        />
      </circle>
      
      {/* Arrowhead */}
      <polygon
        points={arrowPoints}
        fill="#94a3b8"
        className="group-hover:fill-blue-400 transition-colors"
      />
      
      {/* Label */}
      {label && (
        <text
          x={midX}
          y={midY - 10}
          textAnchor="middle"
          fill="#94a3b8"
          fontSize={12}
          className="group-hover:fill-blue-400 transition-colors"
        >
          {label}
        </text>
      )}
      
      {/* Delete button (shown on hover) */}
      <foreignObject x={midX - 10} y={midY - 10} width={20} height={20}>
        <button
          onClick={onDelete}
          className="w-5 h-5 bg-red-500 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-red-600"
          title="Delete connection"
        >
          ×
        </button>
      </foreignObject>
    </g>
  )
}

export default Connection
