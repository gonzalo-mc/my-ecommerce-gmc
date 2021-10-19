

import {Navbar,Nav, NavDropdown, Button, Form, FormControl} from "react-bootstrap";
import CartButton from "../CartWidget/cartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Barra = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="ms-4 me-2" href="#">Mi Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Contacto</Nav.Link>
                    <NavDropdown title="Accesorios" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Link 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Link 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Aqui ira algo mas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl type="search" placeholder="Search" className="ms-4 mr-2" aria-label="Search"/>
                    <Button className="ms-1 me-2" variant="outline-success"> <FontAwesomeIcon icon={faSearch}/> </Button>
                </Form>
                <CartButton/>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Barra;