import { useMemo } from 'react'

interface TemplateConnectionProps {
  fromX: number
  fromY: number
  toX: number
  toY: number
}

const TemplateConnection = ({ fromX, fromY, toX, toY }: TemplateConnectionProps) => {
  const path = useMemo(() => {
    const dx = toX - fromX
    const dy = toY - fromY
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    // Control points for curved line
    const controlOffset = Math.min(distance * 0.4, 100)
    
    // Determine control point direction based on relative positions
    let cp1x = fromX
    let cp1y = fromY
    let cp2x = toX
    let cp2y = toY
    
    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal dominant
      cp1x += controlOffset
      cp2x -= controlOffset
    } else {
      // Vertical dominant
      cp1y += controlOffset
      cp2y -= controlOffset
    }
    
    return `M ${fromX} ${fromY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${toX} ${toY}`
  }, [fromX, fromY, toX, toY])
  
  // Calculate arrow angle at the end point
  const arrowAngle = useMemo(() => {
    const dx = toX - fromX
    const dy = toY - fromY
    return Math.atan2(dy, dx)
  }, [fromX, fromY, toX, toY])
  
  const arrowSize = 10
  const arrowX = toX - arrowSize * Math.cos(arrowAngle)
  const arrowY = toY - arrowSize * Math.sin(arrowAngle)
  
  // Arrow points
  const arrowPoints = [
    `${toX},${toY}`,
    `${arrowX - arrowSize * Math.cos(arrowAngle - Math.PI / 6)},${arrowY - arrowSize * Math.sin(arrowAngle - Math.PI / 6)}`,
    `${arrowX - arrowSize * Math.cos(arrowAngle + Math.PI / 6)},${arrowY - arrowSize * Math.sin(arrowAngle + Math.PI / 6)}`
  ].join(' ')
  
  return (
    <g>
      {/* Simple red line for testing */}
      <line
        x1={fromX}
        y1={fromY}
        x2={toX}
        y2={toY}
        stroke="#ef4444"
        strokeWidth={4}
        strokeDasharray="8,4"
      />
    </g>
  )
}

export default TemplateConnection
