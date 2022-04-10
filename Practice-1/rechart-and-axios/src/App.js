import "./App.css";
import Axios from "./components/Axios/Axios";
import Rechart from "./components/Rechart/Rechart";

function App() {
  return (
    <div className="App">
      <h1>Rechart</h1>
      <Rechart></Rechart>
      <Axios></Axios>
    </div>
  );
}

export default App;
