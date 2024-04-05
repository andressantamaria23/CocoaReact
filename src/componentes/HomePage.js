import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { NavDropdown } from 'react-bootstrap'; 


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">CocoaFile</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Dashboards" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><Link to="/ListScheduling"></Link></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Link to="/ListDate">Inventario</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              <Link to="/ListPacient">Documentacion</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              <Link to="/ListProduct">Campesinos</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              <Link to="/ListSupplier">Productos</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              <Link to="/ListUser">Usuarios</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-dark" className="me-2">Perfil</Button>
            <Button variant="outline-dark">Cerrar Sesion</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
