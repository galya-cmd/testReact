import logo from './logo.svg';
import './App.css';
import Donut from "./components/charts/Donut";

function App() {
  return ( 
    <div className = "App" >
    <div className="container">
    <h1>Build React Graphs The Easy Way</h1>
    <div className="section">
      <Donut />
    </div>
  </div>
    </div>
  );
}

export default App;