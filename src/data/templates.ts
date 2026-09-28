import { Node, Connection } from '../store/useStore'

export interface Template {
  id: string
  name: string
  description: string
  category: string
  nodes: Node[]
  connections: Connection[]
}

export const templates: Template[] = [
  {
    id: 'basic-web-app',
    name: 'Basic Web Application',
    description: 'Simple 3-tier architecture with client, server, and database',
    category: 'Infrastructure',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 100,
        y: 200,
        label: 'Web Client',
        width: 120,
        height: 80
      },
      {
        id: 'server-1',
        type: 'server',
        x: 350,
        y: 200,
        label: 'App Server',
        width: 120,
        height: 80
      },
      {
        id: 'database-1',
        type: 'database',
        x: 600,
        y: 200,
        label: 'Database',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'client-1',
        toNodeId: 'server-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'server-1',
        toNodeId: 'database-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'microservices',
    name: 'Microservices Architecture',
    description: 'API Gateway with multiple microservices and shared database',
    category: 'Infrastructure',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 50,
        y: 200,
        label: 'Client',
        width: 120,
        height: 80
      },
      {
        id: 'api-1',
        type: 'api',
        x: 250,
        y: 200,
        label: 'API Gateway',
        width: 120,
        height: 80
      },
      {
        id: 'service-1',
        type: 'service',
        x: 450,
        y: 100,
        label: 'Auth Service',
        width: 120,
        height: 80
      },
      {
        id: 'service-2',
        type: 'service',
        x: 450,
        y: 200,
        label: 'User Service',
        width: 120,
        height: 80
      },
      {
        id: 'service-3',
        type: 'service',
        x: 450,
        y: 300,
        label: 'Order Service',
        width: 120,
        height: 80
      },
      {
        id: 'database-1',
        type: 'database',
        x: 650,
        y: 200,
        label: 'Main DB',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'client-1',
        toNodeId: 'api-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'api-1',
        toNodeId: 'service-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'api-1',
        toNodeId: 'service-2',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'api-1',
        toNodeId: 'service-3',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'service-1',
        toNodeId: 'database-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-6',
        fromNodeId: 'service-2',
        toNodeId: 'database-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-7',
        fromNodeId: 'service-3',
        toNodeId: 'database-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'load-balanced',
    name: 'Load Balanced Architecture',
    description: 'Load balancer distributing traffic to multiple servers',
    category: 'Infrastructure',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 50,
        y: 200,
        label: 'Clients',
        width: 120,
        height: 80
      },
      {
        id: 'lb-1',
        type: 'loadbalancer',
        x: 250,
        y: 200,
        label: 'Load Balancer',
        width: 120,
        height: 80
      },
      {
        id: 'server-1',
        type: 'server',
        x: 450,
        y: 100,
        label: 'Server 1',
        width: 120,
        height: 80
      },
      {
        id: 'server-2',
        type: 'server',
        x: 450,
        y: 200,
        label: 'Server 2',
        width: 120,
        height: 80
      },
      {
        id: 'server-3',
        type: 'server',
        x: 450,
        y: 300,
        label: 'Server 3',
        width: 120,
        height: 80
      },
      {
        id: 'cache-1',
        type: 'cache',
        x: 650,
        y: 200,
        label: 'Redis Cache',
        width: 120,
        height: 80
      },
      {
        id: 'database-1',
        type: 'database',
        x: 850,
        y: 200,
        label: 'Database',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'client-1',
        toNodeId: 'lb-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'lb-1',
        toNodeId: 'server-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'lb-1',
        toNodeId: 'server-2',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'lb-1',
        toNodeId: 'server-3',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'server-1',
        toNodeId: 'cache-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-6',
        fromNodeId: 'server-2',
        toNodeId: 'cache-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-7',
        fromNodeId: 'server-3',
        toNodeId: 'cache-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-8',
        fromNodeId: 'cache-1',
        toNodeId: 'database-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'event-driven',
    name: 'Event-Driven Architecture',
    description: 'Message queue with event-driven microservices',
    category: 'Infrastructure',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 50,
        y: 200,
        label: 'Client',
        width: 120,
        height: 80
      },
      {
        id: 'api-1',
        type: 'api',
        x: 250,
        y: 200,
        label: 'API Gateway',
        width: 120,
        height: 80
      },
      {
        id: 'queue-1',
        type: 'queue',
        x: 450,
        y: 200,
        label: 'Message Queue',
        width: 120,
        height: 80
      },
      {
        id: 'service-1',
        type: 'service',
        x: 650,
        y: 100,
        label: 'Email Service',
        width: 120,
        height: 80
      },
      {
        id: 'service-2',
        type: 'service',
        x: 650,
        y: 200,
        label: 'Analytics Service',
        width: 120,
        height: 80
      },
      {
        id: 'service-3',
        type: 'service',
        x: 650,
        y: 300,
        label: 'Notification Service',
        width: 120,
        height: 80
      },
      {
        id: 'database-1',
        type: 'database',
        x: 850,
        y: 200,
        label: 'Database',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'client-1',
        toNodeId: 'api-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'api-1',
        toNodeId: 'queue-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'queue-1',
        toNodeId: 'service-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'queue-1',
        toNodeId: 'service-2',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'queue-1',
        toNodeId: 'service-3',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-6',
        fromNodeId: 'service-2',
        toNodeId: 'database-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'rag-pipeline',
    name: 'RAG Pipeline',
    description: 'Retrieval Augmented Generation with vector database',
    category: 'AI & ML',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 50,
        y: 200,
        label: 'User Query',
        width: 120,
        height: 80
      },
      {
        id: 'api-1',
        type: 'api',
        x: 250,
        y: 200,
        label: 'API Gateway',
        width: 120,
        height: 80
      },
      {
        id: 'embedding-1',
        type: 'embedding',
        x: 450,
        y: 200,
        label: 'Embedding',
        width: 120,
        height: 80
      },
      {
        id: 'vector-db-1',
        type: 'vector-db',
        x: 650,
        y: 200,
        label: 'Vector DB',
        width: 120,
        height: 80
      },
      {
        id: 'llm-1',
        type: 'llm',
        x: 850,
        y: 200,
        label: 'LLM',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'client-1',
        toNodeId: 'api-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'api-1',
        toNodeId: 'embedding-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'embedding-1',
        toNodeId: 'vector-db-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'vector-db-1',
        toNodeId: 'llm-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'llm-1',
        toNodeId: 'api-1',
        fromPosition: 'bottom',
        toPosition: 'bottom'
      }
    ]
  },
  {
    id: 'ai-agent-workflow',
    name: 'AI Agent Workflow',
    description: 'Autonomous AI agent with tool orchestration',
    category: 'AI & ML',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 50,
        y: 200,
        label: 'User',
        width: 120,
        height: 80
      },
      {
        id: 'agent-1',
        type: 'ai-agent',
        x: 250,
        y: 200,
        label: 'AI Agent',
        width: 120,
        height: 80
      },
      {
        id: 'orchestrator-1',
        type: 'orchestrator',
        x: 450,
        y: 200,
        label: 'Orchestrator',
        width: 120,
        height: 80
      },
      {
        id: 'llm-1',
        type: 'llm',
        x: 650,
        y: 100,
        label: 'LLM',
        width: 120,
        height: 80
      },
      {
        id: 'vector-db-1',
        type: 'vector-db',
        x: 650,
        y: 200,
        label: 'Vector DB',
        width: 120,
        height: 80
      },
      {
        id: 'api-1',
        type: 'api',
        x: 650,
        y: 300,
        label: 'External API',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'client-1',
        toNodeId: 'agent-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'agent-1',
        toNodeId: 'orchestrator-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'orchestrator-1',
        toNodeId: 'llm-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'orchestrator-1',
        toNodeId: 'vector-db-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'orchestrator-1',
        toNodeId: 'api-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'multi-agent-system',
    name: 'Multi-Agent System',
    description: 'Collaborative AI agents with shared knowledge',
    category: 'AI & ML',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 50,
        y: 200,
        label: 'User',
        width: 120,
        height: 80
      },
      {
        id: 'orchestrator-1',
        type: 'orchestrator',
        x: 250,
        y: 200,
        label: 'Coordinator',
        width: 120,
        height: 80
      },
      {
        id: 'agent-1',
        type: 'ai-agent',
        x: 450,
        y: 100,
        label: 'Research Agent',
        width: 120,
        height: 80
      },
      {
        id: 'agent-2',
        type: 'ai-agent',
        x: 450,
        y: 200,
        label: 'Writing Agent',
        width: 120,
        height: 80
      },
      {
        id: 'agent-3',
        type: 'ai-agent',
        x: 450,
        y: 300,
        label: 'Code Agent',
        width: 120,
        height: 80
      },
      {
        id: 'vector-db-1',
        type: 'vector-db',
        x: 650,
        y: 200,
        label: 'Shared Memory',
        width: 120,
        height: 80
      },
      {
        id: 'llm-1',
        type: 'llm',
        x: 850,
        y: 200,
        label: 'LLM Backend',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'client-1',
        toNodeId: 'orchestrator-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'orchestrator-1',
        toNodeId: 'agent-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'orchestrator-1',
        toNodeId: 'agent-2',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'orchestrator-1',
        toNodeId: 'agent-3',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'agent-1',
        toNodeId: 'vector-db-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-6',
        fromNodeId: 'agent-2',
        toNodeId: 'vector-db-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-7',
        fromNodeId: 'agent-3',
        toNodeId: 'vector-db-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-8',
        fromNodeId: 'vector-db-1',
        toNodeId: 'llm-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'llm-chat-app',
    name: 'LLM Chat Application',
    description: 'Full-stack chat application with LLM integration',
    category: 'AI & ML',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 50,
        y: 200,
        label: 'Chat UI',
        width: 120,
        height: 80
      },
      {
        id: 'api-1',
        type: 'api',
        x: 250,
        y: 200,
        label: 'Chat API',
        width: 120,
        height: 80
      },
      {
        id: 'cache-1',
        type: 'cache',
        x: 450,
        y: 100,
        label: 'Redis Cache',
        width: 120,
        height: 80
      },
      {
        id: 'queue-1',
        type: 'queue',
        x: 450,
        y: 200,
        label: 'Message Queue',
        width: 120,
        height: 80
      },
      {
        id: 'service-1',
        type: 'service',
        x: 650,
        y: 200,
        label: 'Chat Service',
        width: 120,
        height: 80
      },
      {
        id: 'llm-1',
        type: 'llm',
        x: 850,
        y: 200,
        label: 'LLM',
        width: 120,
        height: 80
      },
      {
        id: 'database-1',
        type: 'database',
        x: 650,
        y: 300,
        label: 'Chat History',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'client-1',
        toNodeId: 'api-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'api-1',
        toNodeId: 'cache-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'api-1',
        toNodeId: 'queue-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'queue-1',
        toNodeId: 'service-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'service-1',
        toNodeId: 'llm-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-6',
        fromNodeId: 'service-1',
        toNodeId: 'database-1',
        fromPosition: 'bottom',
        toPosition: 'top'
      }
    ]
  },
  {
    id: 'mlops-pipeline',
    name: 'MLOps Training Pipeline',
    description: 'End-to-end ML model training and deployment pipeline',
    category: 'MLOps',
    nodes: [
      {
        id: 'training-1',
        type: 'training-pipeline',
        x: 50,
        y: 200,
        label: 'Training Pipeline',
        width: 120,
        height: 80
      },
      {
        id: 'feature-1',
        type: 'feature-store',
        x: 250,
        y: 200,
        label: 'Feature Store',
        width: 120,
        height: 80
      },
      {
        id: 'model-1',
        type: 'model-registry',
        x: 450,
        y: 200,
        label: 'Model Registry',
        width: 120,
        height: 80
      },
      {
        id: 'exp-1',
        type: 'experiment-tracking',
        x: 650,
        y: 200,
        label: 'Experiment Tracking',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'training-1',
        toNodeId: 'feature-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'feature-1',
        toNodeId: 'model-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'model-1',
        toNodeId: 'exp-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'data-pipeline',
    name: 'Big Data Pipeline',
    description: 'ETL pipeline with Hadoop and Spark processing',
    category: 'Data Science',
    nodes: [
      {
        id: 'source-1',
        type: 'database',
        x: 50,
        y: 200,
        label: 'Data Source',
        width: 120,
        height: 80
      },
      {
        id: 'etl-1',
        type: 'etl',
        x: 250,
        y: 200,
        label: 'ETL Process',
        width: 120,
        height: 80
      },
      {
        id: 'hadoop-1',
        type: 'hadoop',
        x: 450,
        y: 100,
        label: 'Hadoop Cluster',
        width: 120,
        height: 80
      },
      {
        id: 'spark-1',
        type: 'spark',
        x: 450,
        y: 200,
        label: 'Spark Jobs',
        width: 120,
        height: 80
      },
      {
        id: 'kafka-1',
        type: 'kafka',
        x: 650,
        y: 200,
        label: 'Kafka Stream',
        width: 120,
        height: 80
      },
      {
        id: 'datalake-1',
        type: 'data-lake',
        x: 850,
        y: 200,
        label: 'Data Lake',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'source-1',
        toNodeId: 'etl-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'etl-1',
        toNodeId: 'hadoop-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'etl-1',
        toNodeId: 'spark-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'spark-1',
        toNodeId: 'kafka-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'kafka-1',
        toNodeId: 'datalake-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'docker-k8s',
    name: 'Docker & Kubernetes',
    description: 'Containerized application with Kubernetes orchestration',
    category: 'DevOps',
    nodes: [
      {
        id: 'git-1',
        type: 'git',
        x: 50,
        y: 200,
        label: 'Git Repo',
        width: 120,
        height: 80
      },
      {
        id: 'jenkins-1',
        type: 'jenkins',
        x: 250,
        y: 200,
        label: 'Jenkins CI',
        width: 120,
        height: 80
      },
      {
        id: 'docker-1',
        type: 'docker',
        x: 450,
        y: 200,
        label: 'Docker Build',
        width: 120,
        height: 80
      },
      {
        id: 'k8s-1',
        type: 'kubernetes',
        x: 650,
        y: 200,
        label: 'Kubernetes',
        width: 120,
        height: 80
      },
      {
        id: 'cicd-1',
        type: 'ci-cd',
        x: 850,
        y: 200,
        label: 'CI/CD Pipeline',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'git-1',
        toNodeId: 'jenkins-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'jenkins-1',
        toNodeId: 'docker-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'docker-1',
        toNodeId: 'k8s-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'k8s-1',
        toNodeId: 'cicd-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'security-stack',
    name: 'Security Architecture',
    description: 'Multi-layered security with firewall, VPN, and authentication',
    category: 'Security',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 50,
        y: 200,
        label: 'User',
        width: 120,
        height: 80
      },
      {
        id: 'vpn-1',
        type: 'vpn',
        x: 250,
        y: 200,
        label: 'VPN Gateway',
        width: 120,
        height: 80
      },
      {
        id: 'firewall-1',
        type: 'firewall',
        x: 450,
        y: 200,
        label: 'Firewall',
        width: 120,
        height: 80
      },
      {
        id: 'auth-1',
        type: 'auth',
        x: 650,
        y: 200,
        label: 'Auth Service',
        width: 120,
        height: 80
      },
      {
        id: 'key-1',
        type: 'key-management',
        x: 850,
        y: 200,
        label: 'Key Management',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'client-1',
        toNodeId: 'vpn-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'vpn-1',
        toNodeId: 'firewall-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'firewall-1',
        toNodeId: 'auth-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'auth-1',
        toNodeId: 'key-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'cloud-architecture',
    name: 'Cloud Architecture',
    description: 'Multi-cloud setup with serverless functions',
    category: 'Cloud',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 50,
        y: 200,
        label: 'Client',
        width: 120,
        height: 80
      },
      {
        id: 'cdn-1',
        type: 'cdn',
        x: 250,
        y: 200,
        label: 'CDN',
        width: 120,
        height: 80
      },
      {
        id: 'aws-1',
        type: 'aws',
        x: 450,
        y: 100,
        label: 'AWS Lambda',
        width: 120,
        height: 80
      },
      {
        id: 'azure-1',
        type: 'azure',
        x: 450,
        y: 200,
        label: 'Azure Function',
        width: 120,
        height: 80
      },
      {
        id: 'gcp-1',
        type: 'gcp',
        x: 450,
        y: 300,
        label: 'GCP Function',
        width: 120,
        height: 80
      },
      {
        id: 'storage-1',
        type: 'cloud-storage',
        x: 650,
        y: 200,
        label: 'Cloud Storage',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'client-1',
        toNodeId: 'cdn-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'cdn-1',
        toNodeId: 'aws-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'cdn-1',
        toNodeId: 'azure-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'cdn-1',
        toNodeId: 'gcp-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'aws-1',
        toNodeId: 'storage-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-6',
        fromNodeId: 'azure-1',
        toNodeId: 'storage-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-7',
        fromNodeId: 'gcp-1',
        toNodeId: 'storage-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Architecture',
    description: 'Cross-platform mobile app with backend',
    category: 'Mobile',
    nodes: [
      {
        id: 'ios-1',
        type: 'ios',
        x: 50,
        y: 100,
        label: 'iOS App',
        width: 120,
        height: 80
      },
      {
        id: 'android-1',
        type: 'android',
        x: 50,
        y: 200,
        label: 'Android App',
        width: 120,
        height: 80
      },
      {
        id: 'rn-1',
        type: 'react-native',
        x: 50,
        y: 300,
        label: 'React Native',
        width: 120,
        height: 80
      },
      {
        id: 'api-1',
        type: 'api',
        x: 250,
        y: 200,
        label: 'API Gateway',
        width: 120,
        height: 80
      },
      {
        id: 'server-1',
        type: 'server',
        x: 450,
        y: 200,
        label: 'Backend Server',
        width: 120,
        height: 80
      },
      {
        id: 'db-1',
        type: 'database',
        x: 650,
        y: 200,
        label: 'Database',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'ios-1',
        toNodeId: 'api-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'android-1',
        toNodeId: 'api-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'rn-1',
        toNodeId: 'api-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'api-1',
        toNodeId: 'server-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'server-1',
        toNodeId: 'db-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'iot-system',
    name: 'IoT System',
    description: 'IoT sensors with gateway and edge computing',
    category: 'IoT',
    nodes: [
      {
        id: 'sensor-1',
        type: 'sensor',
        x: 50,
        y: 100,
        label: 'Temperature',
        width: 120,
        height: 80
      },
      {
        id: 'sensor-2',
        type: 'sensor',
        x: 50,
        y: 200,
        label: 'Humidity',
        width: 120,
        height: 80
      },
      {
        id: 'sensor-3',
        type: 'sensor',
        x: 50,
        y: 300,
        label: 'Motion',
        width: 120,
        height: 80
      },
      {
        id: 'gateway-1',
        type: 'iot-gateway',
        x: 250,
        y: 200,
        label: 'IoT Gateway',
        width: 120,
        height: 80
      },
      {
        id: 'mqtt-1',
        type: 'mqtt',
        x: 450,
        y: 200,
        label: 'MQTT Broker',
        width: 120,
        height: 80
      },
      {
        id: 'edge-1',
        type: 'edge-computing',
        x: 650,
        y: 200,
        label: 'Edge Computing',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'sensor-1',
        toNodeId: 'gateway-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'sensor-2',
        toNodeId: 'gateway-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'sensor-3',
        toNodeId: 'gateway-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'gateway-1',
        toNodeId: 'mqtt-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'mqtt-1',
        toNodeId: 'edge-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'blockchain-network',
    name: 'Blockchain Network',
    description: 'Blockchain nodes with smart contracts',
    category: 'Blockchain',
    nodes: [
      {
        id: 'wallet-1',
        type: 'wallet',
        x: 50,
        y: 200,
        label: 'User Wallet',
        width: 120,
        height: 80
      },
      {
        id: 'contract-1',
        type: 'smart-contract',
        x: 250,
        y: 200,
        label: 'Smart Contract',
        width: 120,
        height: 80
      },
      {
        id: 'node-1',
        type: 'blockchain-node',
        x: 450,
        y: 100,
        label: 'Node 1',
        width: 120,
        height: 80
      },
      {
        id: 'node-2',
        type: 'blockchain-node',
        x: 450,
        y: 200,
        label: 'Node 2',
        width: 120,
        height: 80
      },
      {
        id: 'node-3',
        type: 'blockchain-node',
        x: 450,
        y: 300,
        label: 'Node 3',
        width: 120,
        height: 80
      },
      {
        id: 'ledger-1',
        type: 'ledger',
        x: 650,
        y: 200,
        label: 'Distributed Ledger',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'wallet-1',
        toNodeId: 'contract-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'contract-1',
        toNodeId: 'node-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'contract-1',
        toNodeId: 'node-2',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'contract-1',
        toNodeId: 'node-3',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'node-1',
        toNodeId: 'ledger-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-6',
        fromNodeId: 'node-2',
        toNodeId: 'ledger-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-7',
        fromNodeId: 'node-3',
        toNodeId: 'ledger-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'testing-pipeline',
    name: 'Testing Pipeline',
    description: 'Automated testing with unit, E2E, and coverage',
    category: 'Testing',
    nodes: [
      {
        id: 'git-1',
        type: 'git',
        x: 50,
        y: 200,
        label: 'Git Push',
        width: 120,
        height: 80
      },
      {
        id: 'unit-1',
        type: 'unit-test',
        x: 250,
        y: 100,
        label: 'Unit Tests',
        width: 120,
        height: 80
      },
      {
        id: 'e2e-1',
        type: 'e2e-test',
        x: 250,
        y: 200,
        label: 'E2E Tests',
        width: 120,
        height: 80
      },
      {
        id: 'coverage-1',
        type: 'coverage',
        x: 450,
        y: 200,
        label: 'Coverage',
        width: 120,
        height: 80
      },
      {
        id: 'mock-1',
        type: 'mock',
        x: 650,
        y: 200,
        label: 'Mock Services',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'git-1',
        toNodeId: 'unit-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'git-1',
        toNodeId: 'e2e-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'unit-1',
        toNodeId: 'coverage-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'e2e-1',
        toNodeId: 'coverage-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'coverage-1',
        toNodeId: 'mock-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'monitoring-stack',
    name: 'Monitoring Stack',
    description: 'Full monitoring with Prometheus, Grafana, and alerts',
    category: 'Monitoring',
    nodes: [
      {
        id: 'app-1',
        type: 'service',
        x: 50,
        y: 200,
        label: 'Application',
        width: 120,
        height: 80
      },
      {
        id: 'prometheus-1',
        type: 'prometheus',
        x: 250,
        y: 200,
        label: 'Prometheus',
        width: 120,
        height: 80
      },
      {
        id: 'grafana-1',
        type: 'grafana',
        x: 450,
        y: 200,
        label: 'Grafana',
        width: 120,
        height: 80
      },
      {
        id: 'logs-1',
        type: 'logs',
        x: 650,
        y: 100,
        label: 'Log Aggregation',
        width: 120,
        height: 80
      },
      {
        id: 'metrics-1',
        type: 'metrics',
        x: 650,
        y: 200,
        label: 'Metrics',
        width: 120,
        height: 80
      },
      {
        id: 'alerts-1',
        type: 'alerts',
        x: 850,
        y: 200,
        label: 'Alerts',
        width: 120,
        height: 80
      }
    ],
    connections: [
      {
        id: 'conn-1',
        fromNodeId: 'app-1',
        toNodeId: 'prometheus-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-2',
        fromNodeId: 'prometheus-1',
        toNodeId: 'grafana-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-3',
        fromNodeId: 'prometheus-1',
        toNodeId: 'logs-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-4',
        fromNodeId: 'prometheus-1',
        toNodeId: 'metrics-1',
        fromPosition: 'right',
        toPosition: 'left'
      },
      {
        id: 'conn-5',
        fromNodeId: 'metrics-1',
        toNodeId: 'alerts-1',
        fromPosition: 'right',
        toPosition: 'left'
      }
    ]
  },
  {
    id: 'database-cluster',
    name: 'Database Cluster',
    description: 'Multi-database setup with SQL, NoSQL, and Graph DB',
    category: 'Databases',
    nodes: [
      {
        id: 'sql-1',
        type: 'sql',
        x: 50,
        y: 100,
        label: 'PostgreSQL',
        width: 120,
        height: 80
      },
      {
        id: 'nosql-1',
        type: 'nosql',
        x: 50,
        y: 200,
        label: 'MongoDB',
        width: 120,
        height: 80
      },
      {
        id: 'graph-1',
        type: 'graph-db',
        x: 50,
        y: 300,
        label: 'Neo4j',
        width: 120,
        height: 80
      },
      {
        id: 'timeseries-1',
        type: 'time-series',
        x: 250,
        y: 100,
        label: 'InfluxDB',
        width: 120,
        height: 80
      },
      {
        id: 'doc-1',
        type: 'document-db',
        x: 250,
        y: 200,
        label: 'CouchDB',
        width: 120,
        height: 80
      },
      {
        id: 'kv-1',
        type: 'key-value',
        x: 250,
        y: 300,
        label: 'Redis',
        width: 120,
        height: 80
      }
    ],
    connections: []
  },
  {
    id: 'enterprise-multi-agent-system',
    name: 'Enterprise Multi-Agent System',
    description: 'Complex multi-agent AI system with specialized agents, orchestration, and monitoring',
    category: 'AI & ML',
    nodes: [
      {
        id: 'orchestrator-1',
        type: 'orchestrator',
        x: 400,
        y: 50,
        label: 'Agent Orchestrator',
        width: 140,
        height: 80
      },
      {
        id: 'chatgpt-1',
        type: 'chatgpt',
        x: 100,
        y: 200,
        label: 'ChatGPT Agent',
        width: 120,
        height: 80
      },
      {
        id: 'claude-1',
        type: 'claude',
        x: 300,
        y: 200,
        label: 'Claude Agent',
        width: 120,
        height: 80
      },
      {
        id: 'agent-1',
        type: 'ai-agent',
        x: 500,
        y: 200,
        label: 'Research Agent',
        width: 120,
        height: 80
      },
      {
        id: 'agent-2',
        type: 'ai-agent',
        x: 700,
        y: 200,
        label: 'Analysis Agent',
        width: 120,
        height: 80
      },
      {
        id: 'agent-3',
        type: 'ai-agent',
        x: 900,
        y: 200,
        label: 'Writing Agent',
        width: 120,
        height: 80
      },
      {
        id: 'llm-1',
        type: 'llm',
        x: 200,
        y: 350,
        label: 'GPT-4',
        width: 120,
        height: 80
      },
      {
        id: 'llm-2',
        type: 'llm',
        x: 400,
        y: 350,
        label: 'Claude 3',
        width: 120,
        height: 80
      },
      {
        id: 'vector-db-1',
        type: 'vector-db',
        x: 600,
        y: 350,
        label: 'Vector Store',
        width: 120,
        height: 80
      },
      {
        id: 'embedding-1',
        type: 'embedding',
        x: 800,
        y: 350,
        label: 'Embedding Service',
        width: 120,
        height: 80
      },
      {
        id: 'cache-1',
        type: 'cache',
        x: 100,
        y: 500,
        label: 'Redis Cache',
        width: 120,
        height: 80
      },
      {
        id: 'queue-1',
        type: 'queue',
        x: 300,
        y: 500,
        label: 'Message Queue',
        width: 120,
        height: 80
      },
      {
        id: 'database-1',
        type: 'database',
        x: 500,
        y: 500,
        label: 'Agent Memory DB',
        width: 120,
        height: 80
      },
      {
        id: 'api-1',
        type: 'api',
        x: 700,
        y: 500,
        label: 'API Gateway',
        width: 120,
        height: 80
      },
      {
        id: 'prometheus-1',
        type: 'prometheus',
        x: 100,
        y: 650,
        label: 'Prometheus',
        width: 120,
        height: 80
      },
      {
        id: 'grafana-1',
        type: 'grafana',
        x: 300,
        y: 650,
        label: 'Grafana',
        width: 120,
        height: 80
      },
      {
        id: 'logs-1',
        type: 'logs',
        x: 500,
        y: 650,
        label: 'Log Aggregator',
        width: 120,
        height: 80
      }
    ],
    connections: [
      { id: 'conn-1', fromNodeId: 'orchestrator-1', fromPosition: 'bottom', toNodeId: 'chatgpt-1', toPosition: 'top', isTemplate: true },
      { id: 'conn-2', fromNodeId: 'orchestrator-1', fromPosition: 'bottom', toNodeId: 'claude-1', toPosition: 'top', isTemplate: true },
      { id: 'conn-3', fromNodeId: 'orchestrator-1', fromPosition: 'bottom', toNodeId: 'agent-1', toPosition: 'top', isTemplate: true },
      { id: 'conn-4', fromNodeId: 'orchestrator-1', fromPosition: 'bottom', toNodeId: 'agent-2', toPosition: 'top', isTemplate: true },
      { id: 'conn-5', fromNodeId: 'orchestrator-1', fromPosition: 'bottom', toNodeId: 'agent-3', toPosition: 'top', isTemplate: true },
      { id: 'conn-6', fromNodeId: 'chatgpt-1', fromPosition: 'bottom', toNodeId: 'llm-1', toPosition: 'top', isTemplate: true },
      { id: 'conn-7', fromNodeId: 'claude-1', fromPosition: 'bottom', toNodeId: 'llm-2', toPosition: 'top', isTemplate: true },
      { id: 'conn-8', fromNodeId: 'agent-1', fromPosition: 'bottom', toNodeId: 'vector-db-1', toPosition: 'top', isTemplate: true },
      { id: 'conn-9', fromNodeId: 'agent-2', fromPosition: 'bottom', toNodeId: 'vector-db-1', toPosition: 'top', isTemplate: true },
      { id: 'conn-10', fromNodeId: 'agent-3', fromPosition: 'bottom', toNodeId: 'embedding-1', toPosition: 'top', isTemplate: true },
      { id: 'conn-11', fromNodeId: 'vector-db-1', fromPosition: 'bottom', toNodeId: 'embedding-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-12', fromNodeId: 'cache-1', fromPosition: 'right', toNodeId: 'queue-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-13', fromNodeId: 'queue-1', fromPosition: 'right', toNodeId: 'database-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-14', fromNodeId: 'database-1', fromPosition: 'right', toNodeId: 'api-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-15', fromNodeId: 'orchestrator-1', fromPosition: 'left', toNodeId: 'cache-1', toPosition: 'top', isTemplate: true },
      { id: 'conn-16', fromNodeId: 'prometheus-1', fromPosition: 'right', toNodeId: 'grafana-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-17', fromNodeId: 'grafana-1', fromPosition: 'right', toNodeId: 'logs-1', toPosition: 'left', isTemplate: true }
    ]
  },
  {
    id: 'enterprise-cloud-architecture',
    name: 'Enterprise Cloud Architecture',
    description: 'Full enterprise cloud setup with multiple cloud providers, load balancing, and monitoring',
    category: 'Cloud',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 50,
        y: 300,
        label: 'Web Client',
        width: 120,
        height: 80
      },
      {
        id: 'cdn-1',
        type: 'cdn',
        x: 250,
        y: 300,
        label: 'CDN',
        width: 120,
        height: 80
      },
      {
        id: 'loadbalancer-1',
        type: 'loadbalancer',
        x: 450,
        y: 300,
        label: 'Load Balancer',
        width: 120,
        height: 80
      },
      {
        id: 'aws-1',
        type: 'aws',
        x: 650,
        y: 100,
        label: 'AWS Region',
        width: 140,
        height: 80
      },
      {
        id: 'azure-1',
        type: 'azure',
        x: 650,
        y: 250,
        label: 'Azure Region',
        width: 140,
        height: 80
      },
      {
        id: 'gcp-1',
        type: 'gcp',
        x: 650,
        y: 400,
        label: 'GCP Region',
        width: 140,
        height: 80
      },
      {
        id: 'service-1',
        type: 'service',
        x: 850,
        y: 100,
        label: 'App Service A',
        width: 120,
        height: 80
      },
      {
        id: 'service-2',
        type: 'service',
        x: 850,
        y: 200,
        label: 'App Service B',
        width: 120,
        height: 80
      },
      {
        id: 'service-3',
        type: 'service',
        x: 850,
        y: 300,
        label: 'App Service C',
        width: 120,
        height: 80
      },
      {
        id: 'kubernetes-1',
        type: 'kubernetes',
        x: 850,
        y: 400,
        label: 'K8s Cluster',
        width: 120,
        height: 80
      },
      {
        id: 'docker-1',
        type: 'docker',
        x: 1050,
        y: 100,
        label: 'Docker Container',
        width: 120,
        height: 80
      },
      {
        id: 'docker-2',
        type: 'docker',
        x: 1050,
        y: 200,
        label: 'Docker Container',
        width: 120,
        height: 80
      },
      {
        id: 'cloud-storage-1',
        type: 'cloud-storage',
        x: 1050,
        y: 300,
        label: 'S3 Storage',
        width: 120,
        height: 80
      },
      {
        id: 'lambda-1',
        type: 'lambda',
        x: 1050,
        y: 400,
        label: 'Lambda Function',
        width: 120,
        height: 80
      },
      {
        id: 'database-1',
        type: 'database',
        x: 1250,
        y: 100,
        label: 'Primary DB',
        width: 120,
        height: 80
      },
      {
        id: 'database-2',
        type: 'database',
        x: 1250,
        y: 200,
        label: 'Replica DB',
        width: 120,
        height: 80
      },
      {
        id: 'cache-1',
        type: 'cache',
        x: 1250,
        y: 300,
        label: 'Redis Cache',
        width: 120,
        height: 80
      },
      {
        id: 'queue-1',
        type: 'queue',
        x: 1250,
        y: 400,
        label: 'SQS Queue',
        width: 120,
        height: 80
      },
      {
        id: 'firewall-1',
        type: 'firewall',
        x: 1450,
        y: 100,
        label: 'Firewall',
        width: 120,
        height: 80
      },
      {
        id: 'vpn-1',
        type: 'vpn',
        x: 1450,
        y: 200,
        label: 'VPN Gateway',
        width: 120,
        height: 80
      },
      {
        id: 'prometheus-1',
        type: 'prometheus',
        x: 1450,
        y: 300,
        label: 'Prometheus',
        width: 120,
        height: 80
      },
      {
        id: 'grafana-1',
        type: 'grafana',
        x: 1450,
        y: 400,
        label: 'Grafana',
        width: 120,
        height: 80
      }
    ],
    connections: [
      { id: 'conn-1', fromNodeId: 'client-1', fromPosition: 'right', toNodeId: 'cdn-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-2', fromNodeId: 'cdn-1', fromPosition: 'right', toNodeId: 'loadbalancer-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-3', fromNodeId: 'loadbalancer-1', fromPosition: 'right', toNodeId: 'aws-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-4', fromNodeId: 'loadbalancer-1', fromPosition: 'right', toNodeId: 'azure-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-5', fromNodeId: 'loadbalancer-1', fromPosition: 'right', toNodeId: 'gcp-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-6', fromNodeId: 'aws-1', fromPosition: 'right', toNodeId: 'service-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-7', fromNodeId: 'aws-1', fromPosition: 'right', toNodeId: 'service-2', toPosition: 'left', isTemplate: true },
      { id: 'conn-8', fromNodeId: 'azure-1', fromPosition: 'right', toNodeId: 'service-3', toPosition: 'left', isTemplate: true },
      { id: 'conn-9', fromNodeId: 'gcp-1', fromPosition: 'right', toNodeId: 'kubernetes-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-10', fromNodeId: 'service-1', fromPosition: 'right', toNodeId: 'docker-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-11', fromNodeId: 'service-2', fromPosition: 'right', toNodeId: 'docker-2', toPosition: 'left', isTemplate: true },
      { id: 'conn-12', fromNodeId: 'service-3', fromPosition: 'right', toNodeId: 'cloud-storage-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-13', fromNodeId: 'kubernetes-1', fromPosition: 'right', toNodeId: 'lambda-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-14', fromNodeId: 'docker-1', fromPosition: 'right', toNodeId: 'database-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-15', fromNodeId: 'docker-2', fromPosition: 'right', toNodeId: 'database-2', toPosition: 'left', isTemplate: true },
      { id: 'conn-16', fromNodeId: 'cloud-storage-1', fromPosition: 'right', toNodeId: 'cache-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-17', fromNodeId: 'lambda-1', fromPosition: 'right', toNodeId: 'queue-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-18', fromNodeId: 'database-1', fromPosition: 'right', toNodeId: 'firewall-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-19', fromNodeId: 'database-2', fromPosition: 'right', toNodeId: 'vpn-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-20', fromNodeId: 'cache-1', fromPosition: 'right', toNodeId: 'prometheus-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-21', fromNodeId: 'queue-1', fromPosition: 'right', toNodeId: 'grafana-1', toPosition: 'left', isTemplate: true }
    ]
  },
  {
    id: 'enterprise-microservices',
    name: 'Enterprise Microservices Architecture',
    description: 'Complex microservices setup with API gateway, service mesh, and full observability',
    category: 'Infrastructure',
    nodes: [
      {
        id: 'client-1',
        type: 'client',
        x: 50,
        y: 300,
        label: 'Web Client',
        width: 120,
        height: 80
      },
      {
        id: 'api-1',
        type: 'api',
        x: 250,
        y: 300,
        label: 'API Gateway',
        width: 120,
        height: 80
      },
      {
        id: 'loadbalancer-1',
        type: 'loadbalancer',
        x: 450,
        y: 300,
        label: 'Load Balancer',
        width: 120,
        height: 80
      },
      {
        id: 'service-1',
        type: 'service',
        x: 650,
        y: 100,
        label: 'Auth Service',
        width: 120,
        height: 80
      },
      {
        id: 'service-2',
        type: 'service',
        x: 650,
        y: 200,
        label: 'User Service',
        width: 120,
        height: 80
      },
      {
        id: 'service-3',
        type: 'service',
        x: 650,
        y: 300,
        label: 'Order Service',
        width: 120,
        height: 80
      },
      {
        id: 'service-4',
        type: 'service',
        x: 650,
        y: 400,
        label: 'Payment Service',
        width: 120,
        height: 80
      },
      {
        id: 'service-5',
        type: 'service',
        x: 650,
        y: 500,
        label: 'Notification Service',
        width: 120,
        height: 80
      },
      {
        id: 'kubernetes-1',
        type: 'kubernetes',
        x: 850,
        y: 100,
        label: 'K8s Cluster A',
        width: 120,
        height: 80
      },
      {
        id: 'kubernetes-2',
        type: 'kubernetes',
        x: 850,
        y: 200,
        label: 'K8s Cluster B',
        width: 120,
        height: 80
      },
      {
        id: 'docker-1',
        type: 'docker',
        x: 1050,
        y: 100,
        label: 'Auth Container',
        width: 120,
        height: 80
      },
      {
        id: 'docker-2',
        type: 'docker',
        x: 1050,
        y: 200,
        label: 'User Container',
        width: 120,
        height: 80
      },
      {
        id: 'docker-3',
        type: 'docker',
        x: 1050,
        y: 300,
        label: 'Order Container',
        width: 120,
        height: 80
      },
      {
        id: 'docker-4',
        type: 'docker',
        x: 1050,
        y: 400,
        label: 'Payment Container',
        width: 120,
        height: 80
      },
      {
        id: 'docker-5',
        type: 'docker',
        x: 1050,
        y: 500,
        label: 'Notification Container',
        width: 120,
        height: 80
      },
      {
        id: 'database-1',
        type: 'database',
        x: 1250,
        y: 100,
        label: 'Auth DB',
        width: 120,
        height: 80
      },
      {
        id: 'database-2',
        type: 'database',
        x: 1250,
        y: 200,
        label: 'User DB',
        width: 120,
        height: 80
      },
      {
        id: 'database-3',
        type: 'database',
        x: 1250,
        y: 300,
        label: 'Order DB',
        width: 120,
        height: 80
      },
      {
        id: 'database-4',
        type: 'database',
        x: 1250,
        y: 400,
        label: 'Payment DB',
        width: 120,
        height: 80
      },
      {
        id: 'cache-1',
        type: 'cache',
        x: 1250,
        y: 500,
        label: 'Redis Cache',
        width: 120,
        height: 80
      },
      {
        id: 'queue-1',
        type: 'queue',
        x: 1450,
        y: 200,
        label: 'Event Queue',
        width: 120,
        height: 80
      },
      {
        id: 'queue-2',
        type: 'queue',
        x: 1450,
        y: 300,
        label: 'Message Queue',
        width: 120,
        height: 80
      },
      {
        id: 'prometheus-1',
        type: 'prometheus',
        x: 1450,
        y: 400,
        label: 'Prometheus',
        width: 120,
        height: 80
      },
      {
        id: 'grafana-1',
        type: 'grafana',
        x: 1450,
        y: 500,
        label: 'Grafana',
        width: 120,
        height: 80
      },
      {
        id: 'jenkins-1',
        type: 'jenkins',
        x: 1650,
        y: 100,
        label: 'Jenkins',
        width: 120,
        height: 80
      },
      {
        id: 'git-1',
        type: 'git',
        x: 1650,
        y: 200,
        label: 'Git',
        width: 120,
        height: 80
      },
      {
        id: 'ci-cd-1',
        type: 'ci-cd',
        x: 1650,
        y: 300,
        label: 'CI/CD Pipeline',
        width: 120,
        height: 80
      }
    ],
    connections: [
      { id: 'conn-1', fromNodeId: 'client-1', fromPosition: 'right', toNodeId: 'api-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-2', fromNodeId: 'api-1', fromPosition: 'right', toNodeId: 'loadbalancer-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-3', fromNodeId: 'loadbalancer-1', fromPosition: 'right', toNodeId: 'service-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-4', fromNodeId: 'loadbalancer-1', fromPosition: 'right', toNodeId: 'service-2', toPosition: 'left', isTemplate: true },
      { id: 'conn-5', fromNodeId: 'loadbalancer-1', fromPosition: 'right', toNodeId: 'service-3', toPosition: 'left', isTemplate: true },
      { id: 'conn-6', fromNodeId: 'loadbalancer-1', fromPosition: 'right', toNodeId: 'service-4', toPosition: 'left', isTemplate: true },
      { id: 'conn-7', fromNodeId: 'loadbalancer-1', fromPosition: 'right', toNodeId: 'service-5', toPosition: 'left', isTemplate: true },
      { id: 'conn-8', fromNodeId: 'service-1', fromPosition: 'right', toNodeId: 'kubernetes-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-9', fromNodeId: 'service-2', fromPosition: 'right', toNodeId: 'kubernetes-2', toPosition: 'left', isTemplate: true },
      { id: 'conn-10', fromNodeId: 'service-3', fromPosition: 'right', toNodeId: 'kubernetes-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-11', fromNodeId: 'service-4', fromPosition: 'right', toNodeId: 'kubernetes-2', toPosition: 'left', isTemplate: true },
      { id: 'conn-12', fromNodeId: 'service-5', fromPosition: 'right', toNodeId: 'kubernetes-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-13', fromNodeId: 'kubernetes-1', fromPosition: 'right', toNodeId: 'docker-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-14', fromNodeId: 'kubernetes-2', fromPosition: 'right', toNodeId: 'docker-2', toPosition: 'left', isTemplate: true },
      { id: 'conn-15', fromNodeId: 'kubernetes-1', fromPosition: 'right', toNodeId: 'docker-3', toPosition: 'left', isTemplate: true },
      { id: 'conn-16', fromNodeId: 'kubernetes-2', fromPosition: 'right', toNodeId: 'docker-4', toPosition: 'left', isTemplate: true },
      { id: 'conn-17', fromNodeId: 'kubernetes-1', fromPosition: 'right', toNodeId: 'docker-5', toPosition: 'left', isTemplate: true },
      { id: 'conn-18', fromNodeId: 'docker-1', fromPosition: 'right', toNodeId: 'database-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-19', fromNodeId: 'docker-2', fromPosition: 'right', toNodeId: 'database-2', toPosition: 'left', isTemplate: true },
      { id: 'conn-20', fromNodeId: 'docker-3', fromPosition: 'right', toNodeId: 'database-3', toPosition: 'left', isTemplate: true },
      { id: 'conn-21', fromNodeId: 'docker-4', fromPosition: 'right', toNodeId: 'database-4', toPosition: 'left', isTemplate: true },
      { id: 'conn-22', fromNodeId: 'docker-5', fromPosition: 'right', toNodeId: 'cache-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-23', fromNodeId: 'database-2', fromPosition: 'right', toNodeId: 'queue-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-24', fromNodeId: 'database-3', fromPosition: 'right', toNodeId: 'queue-2', toPosition: 'left', isTemplate: true },
      { id: 'conn-25', fromNodeId: 'cache-1', fromPosition: 'right', toNodeId: 'prometheus-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-26', fromNodeId: 'prometheus-1', fromPosition: 'right', toNodeId: 'grafana-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-27', fromNodeId: 'jenkins-1', fromPosition: 'bottom', toNodeId: 'git-1', toPosition: 'top', isTemplate: true },
      { id: 'conn-28', fromNodeId: 'git-1', fromPosition: 'bottom', toNodeId: 'ci-cd-1', toPosition: 'top', isTemplate: true }
    ]
  },
  {
    id: 'enterprise-data-pipeline',
    name: 'Enterprise Data Pipeline',
    description: 'Complete data pipeline with ingestion, processing, storage, and analytics',
    category: 'Data Science',
    nodes: [
      {
        id: 'sensor-1',
        type: 'sensor',
        x: 50,
        y: 100,
        label: 'Data Source A',
        width: 120,
        height: 80
      },
      {
        id: 'sensor-2',
        type: 'sensor',
        x: 50,
        y: 200,
        label: 'Data Source B',
        width: 120,
        height: 80
      },
      {
        id: 'sensor-3',
        type: 'sensor',
        x: 50,
        y: 300,
        label: 'Data Source C',
        width: 120,
        height: 80
      },
      {
        id: 'kafka-1',
        type: 'kafka',
        x: 250,
        y: 200,
        label: 'Kafka Stream',
        width: 120,
        height: 80
      },
      {
        id: 'etl-1',
        type: 'etl',
        x: 450,
        y: 100,
        label: 'ETL Process A',
        width: 120,
        height: 80
      },
      {
        id: 'etl-2',
        type: 'etl',
        x: 450,
        y: 200,
        label: 'ETL Process B',
        width: 120,
        height: 80
      },
      {
        id: 'etl-3',
        type: 'etl',
        x: 450,
        y: 300,
        label: 'ETL Process C',
        width: 120,
        height: 80
      },
      {
        id: 'spark-1',
        type: 'spark',
        x: 650,
        y: 200,
        label: 'Spark Cluster',
        width: 120,
        height: 80
      },
      {
        id: 'hadoop-1',
        type: 'hadoop',
        x: 850,
        y: 100,
        label: 'Hadoop Cluster',
        width: 120,
        height: 80
      },
      {
        id: 'data-lake-1',
        type: 'data-lake',
        x: 850,
        y: 200,
        label: 'Data Lake',
        width: 120,
        height: 80
      },
      {
        id: 'data-pipeline-1',
        type: 'data-pipeline',
        x: 850,
        y: 300,
        label: 'Data Pipeline',
        width: 120,
        height: 80
      },
      {
        id: 'sql-1',
        type: 'sql',
        x: 1050,
        y: 100,
        label: 'PostgreSQL',
        width: 120,
        height: 80
      },
      {
        id: 'nosql-1',
        type: 'nosql',
        x: 1050,
        y: 200,
        label: 'MongoDB',
        width: 120,
        height: 80
      },
      {
        id: 'vector-db-1',
        type: 'vector-db',
        x: 1050,
        y: 300,
        label: 'Vector DB',
        width: 120,
        height: 80
      },
      {
        id: 'time-series-1',
        type: 'time-series',
        x: 1050,
        y: 400,
        label: 'InfluxDB',
        width: 120,
        height: 80
      },
      {
        id: 'embedding-1',
        type: 'embedding',
        x: 1250,
        y: 300,
        label: 'Embedding Service',
        width: 120,
        height: 80
      },
      {
        id: 'llm-1',
        type: 'llm',
        x: 1250,
        y: 400,
        label: 'LLM Model',
        width: 120,
        height: 80
      },
      {
        id: 'ai-agent-1',
        type: 'ai-agent',
        x: 1450,
        y: 350,
        label: 'AI Analyst',
        width: 120,
        height: 80
      },
      {
        id: 'prometheus-1',
        type: 'prometheus',
        x: 1450,
        y: 100,
        label: 'Prometheus',
        width: 120,
        height: 80
      },
      {
        id: 'grafana-1',
        type: 'grafana',
        x: 1450,
        y: 200,
        label: 'Grafana',
        width: 120,
        height: 80
      },
      {
        id: 'logs-1',
        type: 'logs',
        x: 1450,
        y: 500,
        label: 'Log Aggregator',
        width: 120,
        height: 80
      }
    ],
    connections: [
      { id: 'conn-1', fromNodeId: 'sensor-1', fromPosition: 'right', toNodeId: 'kafka-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-2', fromNodeId: 'sensor-2', fromPosition: 'right', toNodeId: 'kafka-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-3', fromNodeId: 'sensor-3', fromPosition: 'right', toNodeId: 'kafka-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-4', fromNodeId: 'kafka-1', fromPosition: 'right', toNodeId: 'etl-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-5', fromNodeId: 'kafka-1', fromPosition: 'right', toNodeId: 'etl-2', toPosition: 'left', isTemplate: true },
      { id: 'conn-6', fromNodeId: 'kafka-1', fromPosition: 'right', toNodeId: 'etl-3', toPosition: 'left', isTemplate: true },
      { id: 'conn-7', fromNodeId: 'etl-1', fromPosition: 'right', toNodeId: 'spark-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-8', fromNodeId: 'etl-2', fromPosition: 'right', toNodeId: 'spark-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-9', fromNodeId: 'etl-3', fromPosition: 'right', toNodeId: 'spark-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-10', fromNodeId: 'spark-1', fromPosition: 'right', toNodeId: 'hadoop-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-11', fromNodeId: 'spark-1', fromPosition: 'right', toNodeId: 'data-lake-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-12', fromNodeId: 'spark-1', fromPosition: 'right', toNodeId: 'data-pipeline-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-13', fromNodeId: 'hadoop-1', fromPosition: 'right', toNodeId: 'sql-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-14', fromNodeId: 'data-lake-1', fromPosition: 'right', toNodeId: 'nosql-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-15', fromNodeId: 'data-pipeline-1', fromPosition: 'right', toNodeId: 'vector-db-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-16', fromNodeId: 'data-pipeline-1', fromPosition: 'right', toNodeId: 'time-series-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-17', fromNodeId: 'vector-db-1', fromPosition: 'right', toNodeId: 'embedding-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-18', fromNodeId: 'embedding-1', fromPosition: 'right', toNodeId: 'llm-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-19', fromNodeId: 'llm-1', fromPosition: 'right', toNodeId: 'ai-agent-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-20', fromNodeId: 'prometheus-1', fromPosition: 'right', toNodeId: 'grafana-1', toPosition: 'left', isTemplate: true },
      { id: 'conn-21', fromNodeId: 'grafana-1', fromPosition: 'bottom', toNodeId: 'logs-1', toPosition: 'top', isTemplate: true }
    ]
  }
]
