import "./App.css";
import "./components/Welcome";
import Welcome from "./components/Welcome";
import Boton from "./components/Boton";

function App() {
  return (
    <div className="App">
      <p>Inicio</p>
      <Boton numero="1" className="btn" />
      <Boton numero="2" />
      <Boton numero="3" />
    </div>
  );
}

export default App;
