# System Designer

An interactive web-based system design tool for creating and visualizing system architecture diagrams.

## Features

- **Interactive Canvas**: Drag and drop components onto a grid-based canvas
- **Component Library**: 8 different component types including:
  - Database
  - Service (Microservice)
  - API Gateway
  - Load Balancer
  - Cache (Redis/Memcached)
  - Message Queue
  - Client (Web/Mobile)
  - Server
- **Connections**: Connect components with visual lines
- **Properties Panel**: Edit component properties (label, position, size)
- **Save/Load**: Auto-saves to localStorage, export/import JSON files
- **Keyboard Shortcuts**: Delete (remove selected), Escape (cancel selection)
- **Modern UI**: Built with React, TypeScript, and TailwindCSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd system-designer
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Add Components**: Click on a component in the sidebar or drag it onto the canvas
2. **Move Components**: Click and drag components to reposition them
3. **Connect Components**: Click the blue dot on the right side of a component to start a connection, then click another component to complete it
4. **Edit Properties**: Click a component to select it, then edit its properties in the right panel
5. **Delete**: Select a component and press Delete, or use the delete button in the properties panel
6. **Export**: Click the Export button to save your design as a JSON file
7. **Import**: Click the Import button to load a previously exported design
8. **Clear**: Click the Clear button to remove all components (requires confirmation)

## Keyboard Shortcuts

- `Delete` / `Backspace`: Remove selected component
- `Escape`: Cancel selection or connection

## Tech Stack

- **React 18**: UI framework
- **TypeScript**: Type safety
- **TailwindCSS**: Styling
- **Zustand**: State management
- **Lucide React**: Icons
- **Vite**: Build tool

## Project Structure

```
system-designer/
├── src/
│   ├── components/
│   │   ├── Canvas.tsx          # Main canvas area
│   │   ├── NodeComponent.tsx   # Individual component rendering
│   │   ├── Connection.tsx      # Connection line rendering
│   │   ├── Sidebar.tsx         # Component library
│   │   ├── Toolbar.tsx         # Top toolbar
│   │   ├── PropertiesPanel.tsx # Right panel for editing
│   │   └── SystemDesigner.tsx  # Main app component
│   ├── store/
│   │   └── useStore.ts         # Zustand state management
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Future Enhancements

This is an endless project with many potential improvements:

- [ ] Zoom and pan functionality
- [ ] Undo/redo history
- [ ] Component grouping
- [ ] More component types (CDN, Firewall, etc.)
- [ ] Connection labels and types
- [ ] Export to PNG/SVG
- [ ] Templates for common architectures
- [ ] Real-time collaboration
- [ ] Cloud storage integration
- [ ] Component validation and error checking
- [ ] Performance metrics visualization
- [ ] Auto-layout algorithms
- [ ] Dark/light theme toggle
- [ ] Custom component creation
- [ ] Keyboard shortcuts for all actions
- [ ] Search and filter components
- [ ] Layer management
- [ ] Snap-to-grid toggle
- [ ] Connection routing options
- [ ] Component duplication
- [ ] Copy/paste functionality

## License

MIT
