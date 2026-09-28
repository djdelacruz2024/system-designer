import { Trash2, Download, Upload, PanelRightOpen, Pencil, Eraser, Undo, Link, Box, Plus, Minus, RotateCcw } from 'lucide-react'
import { useStore } from '../store/useStore'

interface ToolbarProps {
  onClear: () => void
  onExport: () => void
  onImport: () => void
  onToggleProperties: () => void
}

const Toolbar = ({ onClear, onExport, onImport, onToggleProperties }: ToolbarProps) => {
  const { isDrawingMode, isGroupDrawingMode, toggleDrawingMode, toggleGroupDrawingMode, clearAllLines, undoLastLine, selectedNodeIds, connectSelectedNodes, zoom, setZoom } = useStore()
  
  return (
    <div className="h-16 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 flex items-center justify-between px-6 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            System Designer
          </h1>
          <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">Build Your System Architecture</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={toggleDrawingMode}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
            isDrawingMode
              ? 'bg-blue-500/20 border-blue-400 text-blue-400 shadow-lg shadow-blue-500/20'
              : 'bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white'
          }`}
          title={isDrawingMode ? 'Exit drawing mode' : 'Enter drawing mode'}
        >
          <Pencil size={16} />
          {isDrawingMode ? 'Drawing' : 'Draw'}
        </button>
        
        <button
          onClick={toggleGroupDrawingMode}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
            isGroupDrawingMode
              ? 'bg-purple-500/20 border-purple-400 text-purple-400 shadow-lg shadow-purple-500/20'
              : 'bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white'
          }`}
          title={isGroupDrawingMode ? 'Exit group drawing mode' : 'Draw group/cluster'}
        >
          <Box size={16} />
          {isGroupDrawingMode ? 'Grouping' : 'Group'}
        </button>
        
        <button
          onClick={undoLastLine}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 rounded-lg text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
          title="Undo last line"
        >
          <Undo size={16} />
          Undo
        </button>
        
        <button
          onClick={clearAllLines}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 rounded-lg text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
          title="Clear all drawn lines"
        >
          <Eraser size={16} />
          Clear Lines
        </button>
        
        <button
          onClick={connectSelectedNodes}
          disabled={selectedNodeIds.length < 2}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
            selectedNodeIds.length >= 2
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 hover:bg-emerald-500/30 shadow-lg shadow-emerald-500/20'
              : 'bg-slate-800/30 border-slate-700 text-slate-500 opacity-50 cursor-not-allowed'
          }`}
          title="Connect selected components (first selected connects to all others)"
        >
          <Link size={16} />
          Connect
        </button>
        
        <div className="w-px h-6 bg-slate-600 mx-2" />
        
        <button
          onClick={() => setZoom(Math.min(zoom * 1.2, 3))}
          className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 rounded-lg text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
          title="Zoom in"
        >
          <Plus size={16} />
        </button>
        
        <button
          onClick={() => setZoom(Math.max(zoom / 1.2, 0.3))}
          className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 rounded-lg text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
          title="Zoom out"
        >
          <Minus size={16} />
        </button>
        
        <button
          onClick={() => setZoom(1)}
          className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 rounded-lg text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
          title="Reset zoom"
        >
          <RotateCcw size={16} />
        </button>
        
        <span className="text-sm text-slate-400 font-semibold min-w-[60px] text-center tracking-wide">
          {Math.round(zoom * 100)}%
        </span>
        
        <div className="w-px h-6 bg-slate-600 mx-2" />
        
        <button
          onClick={onImport}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 rounded-lg text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
          title="Import design"
        >
          <Upload size={16} />
          Import
        </button>
        
        <button
          onClick={onExport}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 rounded-lg text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
          title="Export design"
        >
          <Download size={16} />
          Export
        </button>
        
        <button
          onClick={onClear}
          className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border-red-500/30 hover:bg-red-500/20 rounded-lg text-red-400 text-sm font-medium transition-all duration-200"
          title="Clear canvas"
        >
          <Trash2 size={16} />
          Clear
        </button>
        
        <div className="w-px h-6 bg-slate-600 mx-2" />
        
        <button
          onClick={onToggleProperties}
          className="p-2 bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 rounded-lg text-slate-300 hover:text-white transition-all duration-200"
          title="Toggle properties panel"
        >
          <PanelRightOpen size={18} />
        </button>
      </div>
    </div>
  )
}

export default Toolbar
