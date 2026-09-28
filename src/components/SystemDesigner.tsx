import { useEffect, useRef, useState } from 'react'
import { useStore } from '../store/useStore'
import Canvas from './Canvas'
import Sidebar from './Sidebar'
import Toolbar from './Toolbar'
import PropertiesPanel from './PropertiesPanel'

const SystemDesigner = () => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [showProperties, setShowProperties] = useState(true)
  
  const { nodes, connections, groups, drawnLines, clearAll, loadDesign } = useStore()

  // Load a saved/imported design; throws if the data isn't a design
  const applyDesign = (json: string) => {
    const design = JSON.parse(json)
    if (!Array.isArray(design?.nodes) || !Array.isArray(design?.connections)) {
      throw new Error('Not a System Designer file')
    }
    loadDesign(
      design.nodes,
      design.connections,
      Array.isArray(design.groups) ? design.groups : [],
      Array.isArray(design.drawnLines) ? design.drawnLines : []
    )
  }

  // Auto-save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('system-design')
    if (saved) {
      try {
        applyDesign(saved)
      } catch (e) {
        console.error('Failed to load saved design', e)
      }
    }
  }, [loadDesign])

  useEffect(() => {
    localStorage.setItem('system-design', JSON.stringify({ nodes, connections, groups, drawnLines }))
  }, [nodes, connections, groups, drawnLines])
  
  const handleClear = () => {
    if (confirm('Are you sure you want to clear the entire design?')) {
      clearAll()
    }
  }
  
  const handleExport = () => {
    const data = JSON.stringify({ nodes, connections, groups, drawnLines }, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'system-design.json'
    a.click()
    URL.revokeObjectURL(url)
  }
  
  const handleImport = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          try {
            applyDesign(e.target?.result as string)
          } catch (err) {
            alert('Failed to import file: it is not a valid System Designer export.')
          }
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }
  
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <Toolbar 
          onClear={handleClear}
          onExport={handleExport}
          onImport={handleImport}
          onToggleProperties={() => setShowProperties(!showProperties)}
        />
        <div className="flex-1 relative overflow-hidden">
          <Canvas ref={canvasRef} />
        </div>
      </div>
      {showProperties && <PropertiesPanel />}
    </div>
  )
}

export default SystemDesigner
