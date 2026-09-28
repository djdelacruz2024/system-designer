import { Node, NodeType } from '../store/useStore'
import { 
  Database, Server, Globe, Scale, HardDrive, MessageSquare, Monitor, Cpu, Bot, Brain, Sparkles, Workflow,
  Container, Layers, Wrench, GitBranch, Globe2, Play, Shield, Lock, Key, Wifi, Network, 
  Cloud, Zap, BarChart3, Smartphone, Radio, Link2, Beaker, FlaskConical,
  CheckCircle2, FileCheck, Bug, Activity, Gauge, Archive, GitFork, TreeDeciduous, Clock, FileJson,
  MessageCircle, Building2
} from 'lucide-react'
import { useStore } from '../store/useStore'

interface NodeComponentProps {
  node: Node
  isSelected: boolean
  onSelect: (e: React.MouseEvent) => void
  onStartDrag: (e: React.MouseEvent) => void
}

const iconMap: Record<NodeType, any> = {
  // Original
  database: Database,
  service: Server,
  api: Globe,
  loadbalancer: Scale,
  cache: HardDrive,
  queue: MessageSquare,
  client: Monitor,
  server: Cpu,
  'ai-agent': Bot,
  'vector-db': Database,
  llm: Brain,
  embedding: Sparkles,
  orchestrator: Workflow,
  chatgpt: MessageCircle,
  claude: MessageCircle,
  openai: Building2,
  anthropic: Building2,
  // DevOps
  docker: Container,
  kubernetes: Layers,
  jenkins: Wrench,
  git: GitBranch,
  terraform: Globe2,
  ansible: Play,
  'ci-cd': Zap,
  // Security
  firewall: Shield,
  vpn: Lock,
  auth: Key,
  encryption: Lock,
  ssl: Shield,
  'key-management': Key,
  // Networking
  router: Network,
  switch: Network,
  proxy: Globe,
  dns: Globe,
  cdn: Cloud,
  // Cloud
  aws: Cloud,
  azure: Cloud,
  gcp: Cloud,
  lambda: Zap,
  'cloud-function': Zap,
  'cloud-storage': Database,
  // Big Data
  hadoop: BarChart3,
  spark: Zap,
  kafka: Activity,
  'data-lake': Database,
  etl: Archive,
  'data-pipeline': GitFork,
  // Mobile
  ios: Smartphone,
  android: Smartphone,
  'react-native': Smartphone,
  flutter: Smartphone,
  'app-store': Smartphone,
  // IoT
  sensor: Radio,
  'iot-gateway': Network,
  'iot-device': Radio,
  mqtt: Wifi,
  'edge-computing': Cpu,
  // Blockchain
  'smart-contract': FileJson,
  ledger: Archive,
  wallet: Lock,
  mining: Cpu,
  'blockchain-node': Link2,
  // Testing
  'unit-test': CheckCircle2,
  'e2e-test': FileCheck,
  mock: Beaker,
  stub: FlaskConical,
  coverage: Gauge,
  // Monitoring
  prometheus: Activity,
  grafana: BarChart3,
  logs: FileJson,
  metrics: Gauge,
  alerts: Bug,
  // MLOps
  'model-registry': Archive,
  'training-pipeline': GitFork,
  'feature-store': Database,
  'experiment-tracking': Activity,
  // Database subcategories
  sql: Database,
  nosql: Database,
  'graph-db': TreeDeciduous,
  'time-series': Clock,
  'document-db': FileJson,
  'key-value': Database
}

const colorMap: Record<NodeType, string> = {
  // Original
  database: 'bg-blue-100 border-blue-300 text-blue-800',
  service: 'bg-green-100 border-green-300 text-green-800',
  api: 'bg-purple-100 border-purple-300 text-purple-800',
  loadbalancer: 'bg-orange-100 border-orange-300 text-orange-800',
  cache: 'bg-red-100 border-red-300 text-red-800',
  queue: 'bg-yellow-100 border-yellow-300 text-yellow-800',
  client: 'bg-pink-100 border-pink-300 text-pink-800',
  server: 'bg-cyan-100 border-cyan-300 text-cyan-800',
  'ai-agent': 'bg-indigo-100 border-indigo-300 text-indigo-800',
  'vector-db': 'bg-violet-100 border-violet-300 text-violet-800',
  llm: 'bg-rose-100 border-rose-300 text-rose-800',
  embedding: 'bg-amber-100 border-amber-300 text-amber-800',
  orchestrator: 'bg-teal-100 border-teal-300 text-teal-800',
  chatgpt: 'bg-emerald-100 border-emerald-300 text-emerald-800',
  claude: 'bg-orange-100 border-orange-300 text-orange-800',
  openai: 'bg-emerald-200 border-emerald-400 text-emerald-900',
  anthropic: 'bg-orange-200 border-orange-400 text-orange-900',
  // DevOps - Blue tones
  docker: 'bg-blue-100 border-blue-300 text-blue-800',
  kubernetes: 'bg-blue-200 border-blue-400 text-blue-900',
  jenkins: 'bg-blue-50 border-blue-200 text-blue-700',
  git: 'bg-orange-100 border-orange-300 text-orange-800',
  terraform: 'bg-purple-100 border-purple-300 text-purple-800',
  ansible: 'bg-red-100 border-red-300 text-red-800',
  'ci-cd': 'bg-green-100 border-green-300 text-green-800',
  // Security - Red tones
  firewall: 'bg-red-100 border-red-300 text-red-800',
  vpn: 'bg-red-200 border-red-400 text-red-900',
  auth: 'bg-orange-100 border-orange-300 text-orange-800',
  encryption: 'bg-purple-100 border-purple-300 text-purple-800',
  ssl: 'bg-yellow-100 border-yellow-300 text-yellow-800',
  'key-management': 'bg-pink-100 border-pink-300 text-pink-800',
  // Networking - Green tones
  router: 'bg-green-100 border-green-300 text-green-800',
  switch: 'bg-green-200 border-green-400 text-green-900',
  proxy: 'bg-teal-100 border-teal-300 text-teal-800',
  dns: 'bg-cyan-100 border-cyan-300 text-cyan-800',
  cdn: 'bg-blue-100 border-blue-300 text-blue-800',
  // Cloud - Sky tones
  aws: 'bg-orange-100 border-orange-300 text-orange-800',
  azure: 'bg-blue-100 border-blue-300 text-blue-800',
  gcp: 'bg-red-100 border-red-300 text-red-800',
  lambda: 'bg-yellow-100 border-yellow-300 text-yellow-800',
  'cloud-function': 'bg-purple-100 border-purple-300 text-purple-800',
  'cloud-storage': 'bg-cyan-100 border-cyan-300 text-cyan-800',
  // Big Data - Purple tones
  hadoop: 'bg-purple-100 border-purple-300 text-purple-800',
  spark: 'bg-orange-100 border-orange-300 text-orange-800',
  kafka: 'bg-red-100 border-red-300 text-red-800',
  'data-lake': 'bg-blue-100 border-blue-300 text-blue-800',
  etl: 'bg-green-100 border-green-300 text-green-800',
  'data-pipeline': 'bg-teal-100 border-teal-300 text-teal-800',
  // Mobile - Pink tones
  ios: 'bg-gray-100 border-gray-300 text-gray-800',
  android: 'bg-green-100 border-green-300 text-green-800',
  'react-native': 'bg-blue-100 border-blue-300 text-blue-800',
  flutter: 'bg-cyan-100 border-cyan-300 text-cyan-800',
  'app-store': 'bg-purple-100 border-purple-300 text-purple-800',
  // IoT - Orange tones
  sensor: 'bg-orange-100 border-orange-300 text-orange-800',
  'iot-gateway': 'bg-amber-100 border-amber-300 text-amber-800',
  'iot-device': 'bg-yellow-100 border-yellow-300 text-yellow-800',
  mqtt: 'bg-green-100 border-green-300 text-green-800',
  'edge-computing': 'bg-purple-100 border-purple-300 text-purple-800',
  // Blockchain - Gold tones
  'smart-contract': 'bg-yellow-100 border-yellow-300 text-yellow-800',
  ledger: 'bg-amber-100 border-amber-300 text-amber-800',
  wallet: 'bg-orange-100 border-orange-300 text-orange-800',
  mining: 'bg-red-100 border-red-300 text-red-800',
  'blockchain-node': 'bg-purple-100 border-purple-300 text-purple-800',
  // Testing - Green tones
  'unit-test': 'bg-green-100 border-green-300 text-green-800',
  'e2e-test': 'bg-teal-100 border-teal-300 text-teal-800',
  mock: 'bg-blue-100 border-blue-300 text-blue-800',
  stub: 'bg-indigo-100 border-indigo-300 text-indigo-800',
  coverage: 'bg-purple-100 border-purple-300 text-purple-800',
  // Monitoring - Gray tones
  prometheus: 'bg-orange-100 border-orange-300 text-orange-800',
  grafana: 'bg-orange-200 border-orange-400 text-orange-900',
  logs: 'bg-gray-100 border-gray-300 text-gray-800',
  metrics: 'bg-blue-100 border-blue-300 text-blue-800',
  alerts: 'bg-red-100 border-red-300 text-red-800',
  // MLOps - Pink tones
  'model-registry': 'bg-pink-100 border-pink-300 text-pink-800',
  'training-pipeline': 'bg-purple-100 border-purple-300 text-purple-800',
  'feature-store': 'bg-blue-100 border-blue-300 text-blue-800',
  'experiment-tracking': 'bg-teal-100 border-teal-300 text-teal-800',
  // Database subcategories
  sql: 'bg-blue-100 border-blue-300 text-blue-800',
  nosql: 'bg-green-100 border-green-300 text-green-800',
  'graph-db': 'bg-purple-100 border-purple-300 text-purple-800',
  'time-series': 'bg-orange-100 border-orange-300 text-orange-800',
  'document-db': 'bg-yellow-100 border-yellow-300 text-yellow-800',
  'key-value': 'bg-red-100 border-red-300 text-red-800'
}

const NodeComponent = ({ node, isSelected, onSelect, onStartDrag }: NodeComponentProps) => {
  const Icon = iconMap[node.type]
  const colors = colorMap[node.type]
  const { isDrawingMode } = useStore()
  
  return (
    <div
      className={`absolute flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all shadow-sm hover:shadow-md select-none ${
        colors
      } ${isSelected && !isDrawingMode ? 'ring-2 ring-blue-500 ring-offset-2' : ''} ${
        isDrawingMode ? 'cursor-crosshair' : 'cursor-move'
      } ${isDrawingMode ? 'pointer-events-none' : ''}`}
      style={{
        left: node.x,
        top: node.y,
        width: node.width,
        height: node.height,
        zIndex: isSelected && !isDrawingMode ? 10 : 1
      }}
      onMouseDown={(e) => {
        e.stopPropagation()
        if (!isDrawingMode) {
          onSelect(e)
          // Only start drag if not holding shift (for multi-selection)
          if (!e.shiftKey) {
            onStartDrag(e)
          }
        }
      }}
    >
      <Icon size={28} className="mb-1" />
      <span className="text-xs font-medium text-center font-sans">{node.label}</span>
    </div>
  )
}

export default NodeComponent
