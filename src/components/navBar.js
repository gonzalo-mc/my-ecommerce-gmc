

import {Navbar,Nav, NavDropdown, Button, Form, FormControl} from "react-bootstrap";

const Barra = () =>{
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Mi Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
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
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    );
};

export default Barra;