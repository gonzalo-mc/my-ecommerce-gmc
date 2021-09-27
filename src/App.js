import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from "./components/navBar";
function App() {
  return (
    <div className="App">
      <Barra/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Aqui escribiré mi proyecto de REACT JS para Coder 💪🏼</h1>
      </header>
    </div>
  );
}

export default App;
