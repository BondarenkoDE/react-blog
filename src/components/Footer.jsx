import React from "react";
import { Navbar, Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React Blog</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Bondarenko Dmitriy / Frontend Developer</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
