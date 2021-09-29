import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from "./components/navBar";
import ItemListContainer from './components/itemListContainer';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Barra/>
      <header className="App-header">
      <Container>
          <div className="row">
            <div className="col-md-4">
              <ItemListContainer title="Card title 1" greeting="Esto es el greeting de la card 1"/>
            </div>
            <div className="col-md-4">
              <ItemListContainer title="Card title 2" greeting="Esto es el greeting de la card 2"/>
            </div>
            <div className="col-md-4">
              <ItemListContainer title="Card title 3" greeting="Esto es el greeting de la card 3"/>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
