import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Navbar, Nav, Form } from "react-bootstrap";
import logo from "./logo.svg";
export default class header extends Component {
  render() {
    return (
      <>
        <Navbar
          fixed="top"
          bg="dark"
          variant="dark"
          collapseOnSelect
          expand="md"
        >
          <Container>
            <Navbar.Brand>
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top "
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse
              className="justify-content-between"
              id="responsive-navbar-nav"
            >
              <Nav className="mr-a">
                <Nav.Link className="header-button" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="header-button" href="/news">
                  News
                </Nav.Link>
                <Nav.Link className="header-button" href="/about">
                  About me
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="me-2"
                ></Form.Control>
                <Button variant="outline-warning">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
