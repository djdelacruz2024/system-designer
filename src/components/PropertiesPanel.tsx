import { useStore } from '../store/useStore'

const PropertiesPanel = () => {
  const { nodes, selectedNodeId, updateNode, deleteNode } = useStore()
  const selectedNode = nodes.find(n => n.id === selectedNodeId)
  
  if (!selectedNode) {
    return (
      <div className="w-72 bg-gray-900 border-l border-gray-700 p-4">
        <h3 className="text-lg font-bold text-white mb-4">Properties</h3>
        <p className="text-sm text-gray-400">Select a component to view its properties</p>
      </div>
    )
  }
  
  return (
    <div className="w-72 bg-gray-900 border-l border-gray-700 p-4 flex flex-col">
      <h3 className="text-lg font-bold text-white mb-4">Properties</h3>
      
      <div className="space-y-4 flex-1">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Label</label>
          <input
            type="text"
            value={selectedNode.label}
            onChange={(e) => updateNode(selectedNode.id, { label: e.target.value })}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Type</label>
          <div className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm capitalize">
            {selectedNode.type}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">X Position</label>
            <input
              type="number"
              value={Math.round(selectedNode.x)}
              onChange={(e) => updateNode(selectedNode.id, { x: Number(e.target.value) })}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Y Position</label>
            <input
              type="number"
              value={Math.round(selectedNode.y)}
              onChange={(e) => updateNode(selectedNode.id, { y: Number(e.target.value) })}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Width</label>
            <input
              type="number"
              value={selectedNode.width}
              onChange={(e) => updateNode(selectedNode.id, { width: Number(e.target.value) })}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Height</label>
            <input
              type="number"
              value={selectedNode.height}
              onChange={(e) => updateNode(selectedNode.id, { height: Number(e.target.value) })}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      
      <button
        onClick={() => deleteNode(selectedNode.id)}
        className="mt-4 w-full px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white text-sm transition-colors"
      >
        Delete Component
      </button>
    </div>
  )
}

export default PropertiesPanel
