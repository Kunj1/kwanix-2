// import logo from './logo.svg';
import './App.css';

// import { ReactFlow, Controls, Background } from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import Navbar from './Components/Navbar';
import FlowDiagramCreator from './Components/FlowDiagramCreator';


function App() {
  return (
    <>
      <Navbar />
      <FlowDiagramCreator />
    </>
  );
}

export default App;
