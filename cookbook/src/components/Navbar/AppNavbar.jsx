import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

function AppNavbar () {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Acasă</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#addRecipePage">Adaugă o rețetă</Nav.Link>
                        <Nav.Link href="#seeRecipes">Vezi rețetele</Nav.Link>
                        <Nav.Link href="#login">Autentificare</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
