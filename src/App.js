import logo from "./logo.svg"
import './App.css';
import ListadeTareas from "./componentes/ListadeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={logo}
          className="freecodecamp-logo"
          alt="logo de freecodecamp" />
      </div>
      <div className="tareas-lista-principal">
          <h1>Mis Tareas</h1>
         <ListadeTareas />
          
      </div>
    </div>
  );
}

export default App;
