// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from "./components/NavBar/navBar";
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Barra/>
      <header className="App-header">
      <Container>
        <ItemListContainer/>
          {/* <div className="row">
            <div className="col-md-4">
              <ItemListContainer />
            </div>
            <div className="col-md-4">
              <ItemListContainer />
            </div>
            <div className="col-md-4">
              <ItemListContainer />
            </div>
          </div> */}
        </Container>
      </header>
    </div>
  );
}

export default App;
