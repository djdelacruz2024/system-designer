import { create } from 'zustand'

export type NodeType = 
  | 'database' | 'service' | 'api' | 'loadbalancer' | 'cache' | 'queue' | 'client' | 'server' 
  | 'ai-agent' | 'vector-db' | 'llm' | 'embedding' | 'orchestrator'
  | 'chatgpt' | 'claude' | 'openai' | 'anthropic'
  | 'docker' | 'kubernetes' | 'jenkins' | 'git' | 'terraform' | 'ansible' | 'ci-cd'
  | 'firewall' | 'vpn' | 'auth' | 'encryption' | 'ssl' | 'key-management'
  | 'router' | 'switch' | 'proxy' | 'dns' | 'cdn'
  | 'aws' | 'azure' | 'gcp' | 'lambda' | 'cloud-function' | 'cloud-storage'
  | 'hadoop' | 'spark' | 'kafka' | 'data-lake' | 'etl' | 'data-pipeline'
  | 'ios' | 'android' | 'react-native' | 'flutter' | 'app-store'
  | 'sensor' | 'iot-gateway' | 'iot-device' | 'mqtt' | 'edge-computing'
  | 'smart-contract' | 'ledger' | 'wallet' | 'mining' | 'blockchain-node'
  | 'unit-test' | 'e2e-test' | 'mock' | 'stub' | 'coverage'
  | 'prometheus' | 'grafana' | 'logs' | 'metrics' | 'alerts'
  | 'model-registry' | 'training-pipeline' | 'feature-store' | 'experiment-tracking'
  | 'sql' | 'nosql' | 'graph-db' | 'time-series' | 'document-db' | 'key-value'
export type ConnectorPosition = 'top' | 'bottom' | 'left' | 'right'

export interface Node {
  id: string
  type: NodeType
  x: number
  y: number
  label: string
  width: number
  height: number
}

export interface Connection {
  id: string
  fromNodeId: string
  toNodeId: string
  fromPosition: ConnectorPosition
  toPosition: ConnectorPosition
  label?: string
  isTemplate?: boolean
}

export interface Group {
  id: string
  x: number
  y: number
  width: number
  height: number
  label: string
}

interface DesignerStore {
  nodes: Node[]
  zoom: number
  setZoom: (zoom: number) => void
  connections: Connection[]
  groups: Group[]
  selectedNodeIds: string[]
  selectedConnectionId: string | null
  selectedGroupId: string | null
  isDragging: boolean
  dragOffset: { x: number; y: number }
  dragPosition: { x: number; y: number } | null
  isConnecting: boolean
  connectingFromNodeId: string | null
  connectingFromPosition: ConnectorPosition | null
  isDrawingMode: boolean
  isGroupDrawingMode: boolean
  isDrawing: boolean
  drawingStart: { x: number; y: number } | null
  drawingEnd: { x: number; y: number } | null
  drawnLines: { start: { x: number; y: number }; end: { x: number; y: number } }[]
  groupDrawingStart: { x: number; y: number } | null
  groupDrawingEnd: { x: number; y: number } | null
  
  addNode: (node: Node) => void
  updateNode: (id: string, updates: Partial<Node>) => void
  deleteNode: (id: string) => void
  selectNode: (id: string | null, addToSelection?: boolean) => void
  clearSelection: () => void
  selectConnection: (id: string | null) => void
  selectGroup: (id: string | null) => void
  startDrag: (nodeId: string, offsetX: number, offsetY: number) => void
  dragNode: (x: number, y: number) => void
  endDrag: () => void
  
  addConnection: (connection: Connection) => void
  deleteConnection: (id: string) => void
  startConnecting: (nodeId: string, position: ConnectorPosition) => void
  endConnecting: (nodeId: string | null, position: ConnectorPosition | null) => void
  connectSelectedNodes: () => void
  
  toggleDrawingMode: () => void
  toggleGroupDrawingMode: () => void
  startDrawing: (x: number, y: number) => void
  updateDrawing: (x: number, y: number) => void
  endDrawing: () => void
  undoLastLine: () => void
  clearAllLines: () => void
  
  startGroupDrawing: (x: number, y: number) => void
  updateGroupDrawing: (x: number, y: number) => void
  endGroupDrawing: () => void
  deleteGroup: (id: string) => void
  updateGroup: (id: string, updates: Partial<Group>) => void
  
  clearAll: () => void
  loadDesign: (nodes: Node[], connections: Connection[]) => void
}

export const useStore = create<DesignerStore>((set) => ({
  nodes: [],
  zoom: 1,
  connections: [],
  groups: [],
  selectedNodeIds: [],
  selectedConnectionId: null,
  selectedGroupId: null,
  isDragging: false,
  dragOffset: { x: 0, y: 0 },
  dragPosition: null,
  isConnecting: false,
  connectingFromNodeId: null,
  connectingFromPosition: null,
  isDrawingMode: false,
  isGroupDrawingMode: false,
  isDrawing: false,
  drawingStart: null,
  drawingEnd: null,
  drawnLines: [],
  groupDrawingStart: null,
  groupDrawingEnd: null,
  
  setZoom: (zoom) => set({ zoom }),
  
  addNode: (node) => set((state) => ({ nodes: [...state.nodes, node] })),
  
  updateNode: (id, updates) => set((state) => ({
    nodes: state.nodes.map((node) => 
      node.id === id ? { ...node, ...updates } : node
    )
  })),
  
  deleteNode: (id) => set((state) => ({
    nodes: state.nodes.filter((node) => node.id !== id),
    connections: state.connections.filter((conn) => 
      conn.fromNodeId !== id && conn.toNodeId !== id
    ),
    selectedNodeIds: state.selectedNodeIds.filter(nodeId => nodeId !== id)
  })),
  
  selectNode: (id, addToSelection = false) => set((state) => {
    if (id === null) {
      return { selectedNodeIds: [], selectedConnectionId: null }
    }
    if (addToSelection) {
      if (state.selectedNodeIds.includes(id)) {
        return { selectedNodeIds: state.selectedNodeIds.filter(nodeId => nodeId !== id) }
      }
      return { selectedNodeIds: [...state.selectedNodeIds, id], selectedConnectionId: null }
    }
    return { selectedNodeIds: [id], selectedConnectionId: null }
  }),
  
  clearSelection: () => set({ selectedNodeIds: [], selectedConnectionId: null, selectedGroupId: null }),
  
  selectConnection: (id) => set({ selectedConnectionId: id, selectedNodeIds: [], selectedGroupId: null }),
  
  selectGroup: (id) => set({ selectedGroupId: id, selectedNodeIds: [], selectedConnectionId: null }),
  
  startDrag: (nodeId, offsetX, offsetY) => set({
    isDragging: true,
    selectedNodeIds: [nodeId],
    dragOffset: { x: offsetX, y: offsetY },
    dragPosition: null
  }),
  
  dragNode: (x, y) => set((state) => {
    if (state.selectedNodeIds.length === 0 || !state.isDragging) return state
    return {
      nodes: state.nodes.map((node) =>
        state.selectedNodeIds.includes(node.id)
          ? { ...node, x: x - state.dragOffset.x, y: y - state.dragOffset.y }
          : node
      ),
      dragPosition: { x, y }
    }
  }),
  
  endDrag: () => set({ isDragging: false, dragOffset: { x: 0, y: 0 }, dragPosition: null }),
  
  addConnection: (connection) => set((state) => ({
    connections: [...state.connections, connection]
  })),
  
  deleteConnection: (id) => set((state) => ({
    connections: state.connections.filter((conn) => conn.id !== id)
  })),
  
  startConnecting: (nodeId, position) => set({
    isConnecting: true,
    connectingFromNodeId: nodeId,
    connectingFromPosition: position
  }),
  
  endConnecting: (nodeId, position) => set((state) => {
    if (state.connectingFromNodeId && nodeId && state.connectingFromNodeId !== nodeId && state.connectingFromPosition && position) {
      const newConnection: Connection = {
        id: `conn-${Date.now()}`,
        fromNodeId: state.connectingFromNodeId,
        toNodeId: nodeId,
        fromPosition: state.connectingFromPosition,
        toPosition: position
      }
      return {
        connections: [...state.connections, newConnection],
        isConnecting: false,
        connectingFromNodeId: null,
        connectingFromPosition: null
      }
    }
    return {
      isConnecting: false,
      connectingFromNodeId: null,
      connectingFromPosition: null
    }
  }),
  
  connectSelectedNodes: () => set((state) => {
    if (state.selectedNodeIds.length < 2) return state
    
    const [fromId, ...toIds] = state.selectedNodeIds
    const fromNode = state.nodes.find(n => n.id === fromId)
    
    if (!fromNode) return state
    
    // Create connections from first node to all other selected nodes
    const newConnections: Connection[] = []
    
    toIds.forEach(toId => {
      const toNode = state.nodes.find(n => n.id === toId)
      if (!toNode) return
      
      // Calculate best connector positions based on relative positions
      let fromPosition: ConnectorPosition = 'right'
      let toPosition: ConnectorPosition = 'left'
      
      const dx = toNode.x - fromNode.x
      const dy = toNode.y - fromNode.y
      
      if (Math.abs(dx) > Math.abs(dy)) {
        // Horizontal dominant
        fromPosition = dx > 0 ? 'right' : 'left'
        toPosition = dx > 0 ? 'left' : 'right'
      } else {
        // Vertical dominant
        fromPosition = dy > 0 ? 'bottom' : 'top'
        toPosition = dy > 0 ? 'top' : 'bottom'
      }
      
      newConnections.push({
        id: `conn-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        fromNodeId: fromId,
        toNodeId: toId,
        fromPosition,
        toPosition,
        isTemplate: false
      })
    })
    
    return {
      connections: [...state.connections, ...newConnections],
      selectedNodeIds: []
    }
  }),
  
  clearAll: () => set({
    nodes: [],
    connections: [],
    selectedNodeIds: [],
    selectedConnectionId: null
  }),
  
  loadDesign: (nodes, connections) => set({
    nodes,
    connections,
    selectedNodeIds: [],
    selectedConnectionId: null
  }),
  
  toggleDrawingMode: () => set((state) => ({
    isDrawingMode: !state.isDrawingMode,
    isDrawing: false,
    drawingStart: null,
    drawingEnd: null
  })),
  
  toggleGroupDrawingMode: () => set((state) => ({
    isGroupDrawingMode: !state.isGroupDrawingMode,
    groupDrawingStart: null,
    groupDrawingEnd: null
  })),
  
  startDrawing: (x, y) => set({
    isDrawing: true,
    drawingStart: { x, y },
    drawingEnd: { x, y }
  }),
  
  updateDrawing: (x, y) => set({
    drawingEnd: { x, y }
  }),
  
  endDrawing: () => set((state) => {
    if (state.drawingStart && state.drawingEnd) {
      return {
        isDrawing: false,
        drawingStart: null,
        drawingEnd: null,
        drawnLines: [...state.drawnLines, { start: state.drawingStart, end: state.drawingEnd }]
      }
    }
    return {
      isDrawing: false,
      drawingStart: null,
      drawingEnd: null
    }
  }),
  
  clearAllLines: () => set({
    drawnLines: []
  }),
  
  undoLastLine: () => set((state) => ({
    drawnLines: state.drawnLines.slice(0, -1)
  })),
  
  startGroupDrawing: (x, y) => set({
    groupDrawingStart: { x, y },
    groupDrawingEnd: { x, y }
  }),
  
  updateGroupDrawing: (x, y) => set((state) => {
    if (!state.groupDrawingStart) return state
    return { groupDrawingEnd: { x, y } }
  }),
  
  endGroupDrawing: () => set((state) => {
    if (!state.groupDrawingStart || !state.groupDrawingEnd) return state
    const width = Math.abs(state.groupDrawingEnd.x - state.groupDrawingStart.x)
    const height = Math.abs(state.groupDrawingEnd.y - state.groupDrawingStart.y)
    const x = Math.min(state.groupDrawingStart.x, state.groupDrawingEnd.x)
    const y = Math.min(state.groupDrawingStart.y, state.groupDrawingEnd.y)
    
    if (width < 20 || height < 20) {
      return {
        groupDrawingStart: null,
        groupDrawingEnd: null
      }
    }
    
    const newGroup: Group = {
      id: `group-${Date.now()}`,
      x,
      y,
      width,
      height,
      label: 'Group'
    }
    
    return {
      groups: [...state.groups, newGroup],
      groupDrawingStart: null,
      groupDrawingEnd: null
    }
  }),
  
  deleteGroup: (id) => set((state) => ({
    groups: state.groups.filter((g) => g.id !== id),
    selectedGroupId: state.selectedGroupId === id ? null : state.selectedGroupId
  })),
  
  updateGroup: (id, updates) => set((state) => ({
    groups: state.groups.map((g) => 
      g.id === id ? { ...g, ...updates } : g
    )
  }))
}))
