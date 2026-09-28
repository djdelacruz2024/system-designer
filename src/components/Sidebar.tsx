import { useState, useMemo } from 'react'
import { useStore, NodeType } from '../store/useStore'
import { 
  Database, Server, Globe, Scale, HardDrive, MessageSquare, Monitor, Cpu, LayoutTemplate, Bot, Brain, Sparkles, Workflow, ChevronDown, ChevronRight, Search,
  Container, Layers, Wrench, GitBranch, Globe2, Play, Shield, Lock, Key, Wifi, Network, Cloud, Zap, BarChart3, Smartphone, Radio, Link2, Beaker, FlaskConical,
  CheckCircle2, FileCheck, Bug, Activity, Gauge, Archive, GitFork, TreeDeciduous, Clock, FileJson, MessageCircle, Building2
} from 'lucide-react'
import { templates } from '../data/templates'

const componentCategories = {
  'All Components': [
    { type: 'ai-agent' as NodeType, label: 'AI Agent', icon: Bot, description: 'Autonomous AI agent' },
    { type: 'llm' as NodeType, label: 'LLM', icon: Brain, description: 'Large Language Model' },
    { type: 'embedding' as NodeType, label: 'Embedding', icon: Sparkles, description: 'Text embedding service' },
    { type: 'orchestrator' as NodeType, label: 'Orchestrator', icon: Workflow, description: 'Workflow orchestration' },
    { type: 'chatgpt' as NodeType, label: 'ChatGPT', icon: MessageCircle, description: 'OpenAI ChatGPT API' },
    { type: 'claude' as NodeType, label: 'Claude', icon: MessageCircle, description: 'Anthropic Claude API' },
    { type: 'openai' as NodeType, label: 'OpenAI', icon: Building2, description: 'OpenAI Platform' },
    { type: 'anthropic' as NodeType, label: 'Anthropic', icon: Building2, description: 'Anthropic Platform' },
    { type: 'model-registry' as NodeType, label: 'Model Registry', icon: Archive, description: 'ML model versioning' },
    { type: 'training-pipeline' as NodeType, label: 'Training Pipeline', icon: GitFork, description: 'ML training workflows' },
    { type: 'feature-store' as NodeType, label: 'Feature Store', icon: Database, description: 'ML feature management' },
    { type: 'experiment-tracking' as NodeType, label: 'Experiment Tracking', icon: Activity, description: 'ML experiment tracking' },
    { type: 'database' as NodeType, label: 'Database', icon: Database, description: 'Store and manage data' },
    { type: 'vector-db' as NodeType, label: 'Vector DB', icon: Database, description: 'Vector similarity search' },
    { type: 'hadoop' as NodeType, label: 'Hadoop', icon: BarChart3, description: 'Distributed computing' },
    { type: 'spark' as NodeType, label: 'Spark', icon: Zap, description: 'Big data processing' },
    { type: 'kafka' as NodeType, label: 'Kafka', icon: Activity, description: 'Event streaming' },
    { type: 'data-lake' as NodeType, label: 'Data Lake', icon: Database, description: 'Raw data storage' },
    { type: 'etl' as NodeType, label: 'ETL', icon: Archive, description: 'Data transformation' },
    { type: 'data-pipeline' as NodeType, label: 'Data Pipeline', icon: GitFork, description: 'Data flow pipeline' },
    { type: 'sql' as NodeType, label: 'SQL Database', icon: Database, description: 'Relational database' },
    { type: 'nosql' as NodeType, label: 'NoSQL', icon: Database, description: 'Document database' },
    { type: 'graph-db' as NodeType, label: 'Graph DB', icon: TreeDeciduous, description: 'Graph database' },
    { type: 'time-series' as NodeType, label: 'Time Series', icon: Clock, description: 'Time series database' },
    { type: 'document-db' as NodeType, label: 'Document DB', icon: FileJson, description: 'Document database' },
    { type: 'key-value' as NodeType, label: 'Key-Value', icon: Database, description: 'Key-value store' },
    { type: 'docker' as NodeType, label: 'Docker', icon: Container, description: 'Container platform' },
    { type: 'kubernetes' as NodeType, label: 'Kubernetes', icon: Layers, description: 'Container orchestration' },
    { type: 'jenkins' as NodeType, label: 'Jenkins', icon: Wrench, description: 'CI/CD server' },
    { type: 'git' as NodeType, label: 'Git', icon: GitBranch, description: 'Version control' },
    { type: 'terraform' as NodeType, label: 'Terraform', icon: Globe2, description: 'Infrastructure as code' },
    { type: 'ansible' as NodeType, label: 'Ansible', icon: Play, description: 'Configuration management' },
    { type: 'ci-cd' as NodeType, label: 'CI/CD', icon: Zap, description: 'Continuous integration' },
    { type: 'firewall' as NodeType, label: 'Firewall', icon: Shield, description: 'Network security' },
    { type: 'vpn' as NodeType, label: 'VPN', icon: Lock, description: 'Virtual private network' },
    { type: 'auth' as NodeType, label: 'Auth', icon: Key, description: 'Authentication service' },
    { type: 'encryption' as NodeType, label: 'Encryption', icon: Lock, description: 'Data encryption' },
    { type: 'ssl' as NodeType, label: 'SSL/TLS', icon: Shield, description: 'Secure communication' },
    { type: 'key-management' as NodeType, label: 'Key Management', icon: Key, description: 'Cryptographic keys' },
    { type: 'router' as NodeType, label: 'Router', icon: Network, description: 'Network router' },
    { type: 'switch' as NodeType, label: 'Switch', icon: Network, description: 'Network switch' },
    { type: 'proxy' as NodeType, label: 'Proxy', icon: Globe, description: 'Proxy server' },
    { type: 'dns' as NodeType, label: 'DNS', icon: Globe, description: 'DNS server' },
    { type: 'cdn' as NodeType, label: 'CDN', icon: Cloud, description: 'Content delivery network' },
    { type: 'aws' as NodeType, label: 'AWS', icon: Cloud, description: 'Amazon Web Services' },
    { type: 'azure' as NodeType, label: 'Azure', icon: Cloud, description: 'Microsoft Azure' },
    { type: 'gcp' as NodeType, label: 'GCP', icon: Cloud, description: 'Google Cloud Platform' },
    { type: 'lambda' as NodeType, label: 'Lambda', icon: Zap, description: 'Serverless function' },
    { type: 'cloud-function' as NodeType, label: 'Cloud Function', icon: Zap, description: 'Cloud function' },
    { type: 'cloud-storage' as NodeType, label: 'Cloud Storage', icon: Database, description: 'Cloud object storage' },
    { type: 'service' as NodeType, label: 'Service', icon: Server, description: 'Microservice component' },
    { type: 'api' as NodeType, label: 'API Gateway', icon: Globe, description: 'REST/GraphQL API' },
    { type: 'loadbalancer' as NodeType, label: 'Load Balancer', icon: Scale, description: 'Distribute traffic' },
    { type: 'cache' as NodeType, label: 'Cache', icon: HardDrive, description: 'Redis/Memcached' },
    { type: 'queue' as NodeType, label: 'Message Queue', icon: MessageSquare, description: 'Async processing' },
    { type: 'server' as NodeType, label: 'Server', icon: Cpu, description: 'Application server' },
    { type: 'ios' as NodeType, label: 'iOS', icon: Smartphone, description: 'Apple iOS' },
    { type: 'android' as NodeType, label: 'Android', icon: Smartphone, description: 'Android platform' },
    { type: 'react-native' as NodeType, label: 'React Native', icon: Smartphone, description: 'Cross-platform mobile' },
    { type: 'flutter' as NodeType, label: 'Flutter', icon: Smartphone, description: 'Flutter framework' },
    { type: 'app-store' as NodeType, label: 'App Store', icon: Smartphone, description: 'App distribution' },
    { type: 'sensor' as NodeType, label: 'Sensor', icon: Radio, description: 'IoT sensor' },
    { type: 'iot-gateway' as NodeType, label: 'IoT Gateway', icon: Network, description: 'IoT gateway' },
    { type: 'iot-device' as NodeType, label: 'IoT Device', icon: Radio, description: 'IoT device' },
    { type: 'mqtt' as NodeType, label: 'MQTT', icon: Wifi, description: 'MQTT protocol' },
    { type: 'edge-computing' as NodeType, label: 'Edge Computing', icon: Cpu, description: 'Edge computing node' },
    { type: 'smart-contract' as NodeType, label: 'Smart Contract', icon: FileJson, description: 'Blockchain contract' },
    { type: 'ledger' as NodeType, label: 'Ledger', icon: Archive, description: 'Blockchain ledger' },
    { type: 'wallet' as NodeType, label: 'Wallet', icon: Lock, description: 'Crypto wallet' },
    { type: 'mining' as NodeType, label: 'Mining', icon: Cpu, description: 'Mining node' },
    { type: 'blockchain-node' as NodeType, label: 'Blockchain Node', icon: Link2, description: 'Blockchain node' },
    { type: 'unit-test' as NodeType, label: 'Unit Test', icon: CheckCircle2, description: 'Unit testing' },
    { type: 'e2e-test' as NodeType, label: 'E2E Test', icon: FileCheck, description: 'End-to-end testing' },
    { type: 'mock' as NodeType, label: 'Mock', icon: Beaker, description: 'Mock service' },
    { type: 'stub' as NodeType, label: 'Stub', icon: FlaskConical, description: 'Test stub' },
    { type: 'coverage' as NodeType, label: 'Coverage', icon: Gauge, description: 'Code coverage' },
    { type: 'prometheus' as NodeType, label: 'Prometheus', icon: Activity, description: 'Metrics monitoring' },
    { type: 'grafana' as NodeType, label: 'Grafana', icon: BarChart3, description: 'Visualization dashboard' },
    { type: 'logs' as NodeType, label: 'Logs', icon: FileJson, description: 'Log aggregation' },
    { type: 'metrics' as NodeType, label: 'Metrics', icon: Gauge, description: 'Metrics collection' },
    { type: 'alerts' as NodeType, label: 'Alerts', icon: Bug, description: 'Alerting system' },
    { type: 'client' as NodeType, label: 'Client', icon: Monitor, description: 'Web/Mobile client' }
  ],
  'AI & ML': [
    { type: 'ai-agent' as NodeType, label: 'AI Agent', icon: Bot, description: 'Autonomous AI agent' },
    { type: 'llm' as NodeType, label: 'LLM', icon: Brain, description: 'Large Language Model' },
    { type: 'embedding' as NodeType, label: 'Embedding', icon: Sparkles, description: 'Text embedding service' },
    { type: 'orchestrator' as NodeType, label: 'Orchestrator', icon: Workflow, description: 'Workflow orchestration' },
    { type: 'chatgpt' as NodeType, label: 'ChatGPT', icon: MessageCircle, description: 'OpenAI ChatGPT API' },
    { type: 'claude' as NodeType, label: 'Claude', icon: MessageCircle, description: 'Anthropic Claude API' },
    { type: 'openai' as NodeType, label: 'OpenAI', icon: Building2, description: 'OpenAI Platform' },
    { type: 'anthropic' as NodeType, label: 'Anthropic', icon: Building2, description: 'Anthropic Platform' }
  ],
  'MLOps': [
    { type: 'model-registry' as NodeType, label: 'Model Registry', icon: Archive, description: 'ML model versioning' },
    { type: 'training-pipeline' as NodeType, label: 'Training Pipeline', icon: GitFork, description: 'ML training workflows' },
    { type: 'feature-store' as NodeType, label: 'Feature Store', icon: Database, description: 'ML feature management' },
    { type: 'experiment-tracking' as NodeType, label: 'Experiment Tracking', icon: Activity, description: 'ML experiment tracking' }
  ],
  'Data Science': [
    { type: 'database' as NodeType, label: 'Database', icon: Database, description: 'Store and manage data' },
    { type: 'vector-db' as NodeType, label: 'Vector DB', icon: Database, description: 'Vector similarity search' },
    { type: 'hadoop' as NodeType, label: 'Hadoop', icon: BarChart3, description: 'Distributed computing' },
    { type: 'spark' as NodeType, label: 'Spark', icon: Zap, description: 'Big data processing' },
    { type: 'kafka' as NodeType, label: 'Kafka', icon: Activity, description: 'Event streaming' },
    { type: 'data-lake' as NodeType, label: 'Data Lake', icon: Database, description: 'Raw data storage' },
    { type: 'etl' as NodeType, label: 'ETL', icon: Archive, description: 'Data transformation' },
    { type: 'data-pipeline' as NodeType, label: 'Data Pipeline', icon: GitFork, description: 'Data flow pipeline' }
  ],
  'Databases': [
    { type: 'sql' as NodeType, label: 'SQL Database', icon: Database, description: 'Relational database' },
    { type: 'nosql' as NodeType, label: 'NoSQL', icon: Database, description: 'Document database' },
    { type: 'graph-db' as NodeType, label: 'Graph DB', icon: TreeDeciduous, description: 'Graph database' },
    { type: 'time-series' as NodeType, label: 'Time Series', icon: Clock, description: 'Time series database' },
    { type: 'document-db' as NodeType, label: 'Document DB', icon: FileJson, description: 'Document database' },
    { type: 'key-value' as NodeType, label: 'Key-Value', icon: Database, description: 'Key-value store' }
  ],
  'DevOps': [
    { type: 'docker' as NodeType, label: 'Docker', icon: Container, description: 'Container platform' },
    { type: 'kubernetes' as NodeType, label: 'Kubernetes', icon: Layers, description: 'Container orchestration' },
    { type: 'jenkins' as NodeType, label: 'Jenkins', icon: Wrench, description: 'CI/CD server' },
    { type: 'git' as NodeType, label: 'Git', icon: GitBranch, description: 'Version control' },
    { type: 'terraform' as NodeType, label: 'Terraform', icon: Globe2, description: 'Infrastructure as code' },
    { type: 'ansible' as NodeType, label: 'Ansible', icon: Play, description: 'Configuration management' },
    { type: 'ci-cd' as NodeType, label: 'CI/CD', icon: Zap, description: 'Continuous integration' }
  ],
  'Security': [
    { type: 'firewall' as NodeType, label: 'Firewall', icon: Shield, description: 'Network security' },
    { type: 'vpn' as NodeType, label: 'VPN', icon: Lock, description: 'Virtual private network' },
    { type: 'auth' as NodeType, label: 'Auth', icon: Key, description: 'Authentication service' },
    { type: 'encryption' as NodeType, label: 'Encryption', icon: Lock, description: 'Data encryption' },
    { type: 'ssl' as NodeType, label: 'SSL/TLS', icon: Shield, description: 'Secure communication' },
    { type: 'key-management' as NodeType, label: 'Key Management', icon: Key, description: 'Cryptographic keys' }
  ],
  'Networking': [
    { type: 'router' as NodeType, label: 'Router', icon: Network, description: 'Network router' },
    { type: 'switch' as NodeType, label: 'Switch', icon: Network, description: 'Network switch' },
    { type: 'proxy' as NodeType, label: 'Proxy', icon: Globe, description: 'Proxy server' },
    { type: 'dns' as NodeType, label: 'DNS', icon: Globe, description: 'DNS server' },
    { type: 'cdn' as NodeType, label: 'CDN', icon: Cloud, description: 'Content delivery network' }
  ],
  'Cloud': [
    { type: 'aws' as NodeType, label: 'AWS', icon: Cloud, description: 'Amazon Web Services' },
    { type: 'azure' as NodeType, label: 'Azure', icon: Cloud, description: 'Microsoft Azure' },
    { type: 'gcp' as NodeType, label: 'GCP', icon: Cloud, description: 'Google Cloud Platform' },
    { type: 'lambda' as NodeType, label: 'Lambda', icon: Zap, description: 'Serverless function' },
    { type: 'cloud-function' as NodeType, label: 'Cloud Function', icon: Zap, description: 'Cloud function' },
    { type: 'cloud-storage' as NodeType, label: 'Cloud Storage', icon: Database, description: 'Cloud object storage' }
  ],
  'Infrastructure': [
    { type: 'service' as NodeType, label: 'Service', icon: Server, description: 'Microservice component' },
    { type: 'api' as NodeType, label: 'API Gateway', icon: Globe, description: 'REST/GraphQL API' },
    { type: 'loadbalancer' as NodeType, label: 'Load Balancer', icon: Scale, description: 'Distribute traffic' },
    { type: 'cache' as NodeType, label: 'Cache', icon: HardDrive, description: 'Redis/Memcached' },
    { type: 'queue' as NodeType, label: 'Message Queue', icon: MessageSquare, description: 'Async processing' },
    { type: 'server' as NodeType, label: 'Server', icon: Cpu, description: 'Application server' }
  ],
  'Mobile': [
    { type: 'ios' as NodeType, label: 'iOS', icon: Smartphone, description: 'Apple iOS' },
    { type: 'android' as NodeType, label: 'Android', icon: Smartphone, description: 'Android platform' },
    { type: 'react-native' as NodeType, label: 'React Native', icon: Smartphone, description: 'Cross-platform mobile' },
    { type: 'flutter' as NodeType, label: 'Flutter', icon: Smartphone, description: 'Flutter framework' },
    { type: 'app-store' as NodeType, label: 'App Store', icon: Smartphone, description: 'App distribution' }
  ],
  'IoT': [
    { type: 'sensor' as NodeType, label: 'Sensor', icon: Radio, description: 'IoT sensor' },
    { type: 'iot-gateway' as NodeType, label: 'IoT Gateway', icon: Network, description: 'IoT gateway' },
    { type: 'iot-device' as NodeType, label: 'IoT Device', icon: Radio, description: 'IoT device' },
    { type: 'mqtt' as NodeType, label: 'MQTT', icon: Wifi, description: 'MQTT protocol' },
    { type: 'edge-computing' as NodeType, label: 'Edge Computing', icon: Cpu, description: 'Edge computing node' }
  ],
  'Blockchain': [
    { type: 'smart-contract' as NodeType, label: 'Smart Contract', icon: FileJson, description: 'Blockchain contract' },
    { type: 'ledger' as NodeType, label: 'Ledger', icon: Archive, description: 'Blockchain ledger' },
    { type: 'wallet' as NodeType, label: 'Wallet', icon: Lock, description: 'Crypto wallet' },
    { type: 'mining' as NodeType, label: 'Mining', icon: Cpu, description: 'Mining node' },
    { type: 'blockchain-node' as NodeType, label: 'Blockchain Node', icon: Link2, description: 'Blockchain node' }
  ],
  'Testing': [
    { type: 'unit-test' as NodeType, label: 'Unit Test', icon: CheckCircle2, description: 'Unit testing' },
    { type: 'e2e-test' as NodeType, label: 'E2E Test', icon: FileCheck, description: 'End-to-end testing' },
    { type: 'mock' as NodeType, label: 'Mock', icon: Beaker, description: 'Mock service' },
    { type: 'stub' as NodeType, label: 'Stub', icon: FlaskConical, description: 'Test stub' },
    { type: 'coverage' as NodeType, label: 'Coverage', icon: Gauge, description: 'Code coverage' }
  ],
  'Monitoring': [
    { type: 'prometheus' as NodeType, label: 'Prometheus', icon: Activity, description: 'Metrics monitoring' },
    { type: 'grafana' as NodeType, label: 'Grafana', icon: BarChart3, description: 'Visualization dashboard' },
    { type: 'logs' as NodeType, label: 'Logs', icon: FileJson, description: 'Log aggregation' },
    { type: 'metrics' as NodeType, label: 'Metrics', icon: Gauge, description: 'Metrics collection' },
    { type: 'alerts' as NodeType, label: 'Alerts', icon: Bug, description: 'Alerting system' }
  ],
  'Client': [
    { type: 'client' as NodeType, label: 'Client', icon: Monitor, description: 'Web/Mobile client' }
  ]
}

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<'components' | 'templates'>('components')
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'All Components': false,
    'AI & ML': false,
    'MLOps': false,
    'Data Science': false,
    'Databases': false,
    'DevOps': false,
    'Security': false,
    'Networking': false,
    'Cloud': false,
    'Infrastructure': false,
    'Mobile': false,
    'IoT': false,
    'Blockchain': false,
    'Testing': false,
    'Monitoring': false,
    'Client': false
  })
  const [expandedTemplateCategories, setExpandedTemplateCategories] = useState<Record<string, boolean>>({
    'All Templates': false,
    'AI & ML': false,
    'MLOps': false,
    'Data Science': false,
    'Databases': false,
    'DevOps': false,
    'Security': false,
    'Cloud': false,
    'Infrastructure': false,
    'Mobile': false,
    'IoT': false,
    'Blockchain': false,
    'Testing': false,
    'Monitoring': false
  })
  const [searchQuery, setSearchQuery] = useState('')
  const { addNode, loadDesign, clearAll } = useStore()
  
  // Filter components based on search query
  const filteredComponentCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return componentCategories
    }
    
    const query = searchQuery.toLowerCase()
    const filtered: Record<string, typeof componentCategories[keyof typeof componentCategories]> = {}
    
    Object.entries(componentCategories).forEach(([category, components]) => {
      const matchingComponents = components.filter(
        comp => comp.label.toLowerCase().includes(query) || comp.description.toLowerCase().includes(query)
      )
      if (matchingComponents.length > 0) {
        filtered[category] = matchingComponents
      }
    })
    
    return filtered
  }, [searchQuery])
  
  const handleDragStart = (e: React.DragEvent, type: NodeType, label: string) => {
    e.dataTransfer.setData('nodeType', type)
    e.dataTransfer.setData('nodeLabel', label)
  }
  
  const handleAddNode = (type: NodeType, label: string) => {
    const newNode = {
      id: `node-${Date.now()}`,
      type,
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 200,
      label,
      width: 120,
      height: 80
    }
    addNode(newNode)
  }
  
  const handleLoadTemplate = (template: typeof templates[0]) => {
    if (confirm(`Load template "${template.name}"? This will clear your current design.`)) {
      // Generate new IDs for nodes and connections to avoid conflicts
      const idMap = new Map<string, string>()
      const newNodes = template.nodes.map(node => {
        const newId = `node-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        idMap.set(node.id, newId)
        return { ...node, id: newId }
      })
      
      const newConnections = template.connections.map(conn => ({
        ...conn,
        id: `conn-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        fromNodeId: idMap.get(conn.fromNodeId) || conn.fromNodeId,
        toNodeId: idMap.get(conn.toNodeId) || conn.toNodeId,
        isTemplate: true
      }))
      
      
      clearAll()
      loadDesign(newNodes, newConnections)
    }
  }
  
  return (
    <div className="w-72 shrink-0 bg-slate-900 border-r border-slate-700 flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-slate-700">
        <button
          onClick={() => setActiveTab('components')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 ${
            activeTab === 'components'
              ? 'text-blue-400 bg-slate-800/50 border-b-2 border-blue-400'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
          }`}
        >
          Components
        </button>
        <button
          onClick={() => setActiveTab('templates')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 ${
            activeTab === 'templates'
              ? 'text-emerald-400 bg-slate-800/50 border-b-2 border-emerald-400'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
          }`}
        >
          Templates
        </button>
      </div>
      
      {activeTab === 'components' ? (
        <>
          <div className="p-4 border-b border-slate-700">
            <h2 className="text-lg font-bold text-white">Components</h2>
            <p className="text-sm text-slate-400 mt-1">Drag to canvas or click to add</p>
          </div>
          
          <div className="p-4 border-b border-slate-700">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {Object.entries(filteredComponentCategories).map(([category, components]) => (
              <div key={category}>
                <button
                  onClick={() => setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }))}
                  className="w-full flex items-center gap-2 p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  {expandedCategories[category] ? (
                    <ChevronDown size={16} className="text-slate-400" />
                  ) : (
                    <ChevronRight size={16} className="text-slate-400" />
                  )}
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">{category}</span>
                </button>
                {expandedCategories[category] && (
                  <div className="mt-2 space-y-2 pl-6">
                    {components.map(({ type, label, icon: Icon, description }) => (
                      <div
                        key={type}
                        draggable
                        onDragStart={(e) => handleDragStart(e, type, label)}
                        onClick={() => handleAddNode(type, label)}
                        className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 cursor-grab active:cursor-grabbing transition-all duration-200 border border-slate-700 hover:border-slate-600"
                      >
                        <div className="p-2 bg-slate-700/50 rounded-lg">
                          <Icon size={20} className="text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-200 text-sm">{label}</div>
                          <div className="text-xs text-slate-500">{description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="p-4 border-b border-slate-700">
            <h2 className="text-lg font-bold text-white">Templates</h2>
            <p className="text-sm text-slate-400 mt-1">Pre-built system architectures</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {(() => {
              const templateCategories: Record<string, typeof templates> = {
                'All Templates': templates,
                'AI & ML': templates.filter(t => t.category === 'AI & ML'),
                'MLOps': templates.filter(t => t.category === 'MLOps'),
                'Data Science': templates.filter(t => t.category === 'Data Science'),
                'Databases': templates.filter(t => t.category === 'Databases'),
                'DevOps': templates.filter(t => t.category === 'DevOps'),
                'Security': templates.filter(t => t.category === 'Security'),
                'Cloud': templates.filter(t => t.category === 'Cloud'),
                'Infrastructure': templates.filter(t => t.category === 'Infrastructure'),
                'Mobile': templates.filter(t => t.category === 'Mobile'),
                'IoT': templates.filter(t => t.category === 'IoT'),
                'Blockchain': templates.filter(t => t.category === 'Blockchain'),
                'Testing': templates.filter(t => t.category === 'Testing'),
                'Monitoring': templates.filter(t => t.category === 'Monitoring')
              }
              
              return Object.entries(templateCategories).map(([category, categoryTemplates]) => (
                <div key={category}>
                  <button
                    onClick={() => setExpandedTemplateCategories(prev => ({ ...prev, [category]: !prev[category] }))}
                    className="w-full flex items-center gap-2 p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
                  >
                    {expandedTemplateCategories[category] ? (
                      <ChevronDown size={16} className="text-slate-400" />
                    ) : (
                      <ChevronRight size={16} className="text-slate-400" />
                    )}
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">{category}</span>
                  </button>
                  {expandedTemplateCategories[category] && (
                    <div className="mt-2 space-y-2 pl-6">
                      {categoryTemplates.map((template) => (
                        <div
                          key={template.id}
                          onClick={() => handleLoadTemplate(template)}
                          className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-all duration-200 border border-slate-700 hover:border-slate-600"
                        >
                          <div className="p-2 bg-slate-700/50 rounded-lg mt-1">
                            <LayoutTemplate size={20} className="text-emerald-400" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-slate-200 text-sm">{template.name}</div>
                            <div className="text-xs text-slate-500 mt-1">{template.description}</div>
                            <div className="text-xs text-slate-600 mt-1">
                              {template.nodes.length} components • {template.connections.length} connections
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            })()}
          </div>
        </>
      )}
      
      <div className="p-4 border-t border-slate-700">
        <div className="text-xs text-slate-500">
          <p className="font-semibold mb-1 text-slate-400">Keyboard Shortcuts:</p>
          <p className="text-slate-600">Delete - Remove selected</p>
          <p className="text-slate-600">Escape - Cancel selection</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
