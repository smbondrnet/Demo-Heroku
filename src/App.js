import logo from './logo.svg';
import './App.css';
import { Excalidraw } from "@excalidraw/excalidraw";

function App() {
  return (
    <>
    <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
    <div style={{ height: "500px" }}>
      <Excalidraw />
    </div>
  </>
  );
}

export default App;
