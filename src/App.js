// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from "./components/NavBar/navBar";
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/itemDetailContainer"

import home from "./Views/home/home"
import about from "./Views/about/about"
import contact from "./Views/contact/contact"

function App() {
  return (
      <Router>
        <div className="App">
          <Barra/>
          <Route path="/" exact component={ItemListContainer}/>
            <Route path="/category/:id" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route path="/cart" component={null}/>
          <header className="App-header">
            <Container>
              <ItemListContainer/>
            </Container>
          </header>
        </div>
      </Router>
  );
}

export default App;
