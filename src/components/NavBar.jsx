
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget } from "./CartWidget";
// import { MyProducts } from './MyProducts';

export const NavBar = () => (

  <Navbar bg="primary" data-bs-theme="primary">
    <Container>
      <Navbar.Brand href="#home">Logitch G</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Productos</Nav.Link>
        <Nav.Link href="#pricing">Accesorios</Nav.Link>
      </Nav><CartWidget />
    </Container>
  </Navbar>

 
);
