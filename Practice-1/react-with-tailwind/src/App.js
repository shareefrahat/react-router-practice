import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold bg-cyan-700 text-white py-5">
        React with Tailwind
      </h1>
      <Header></Header>
      <Cards></Cards>
    </div>
  );
}

export default App;
