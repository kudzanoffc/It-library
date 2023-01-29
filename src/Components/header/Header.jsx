import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Navbar, Form, Nav } from "react-bootstrap";
import "./header.css";
import logo from "./logo.svg";
export default class header extends Component {
  render() {
    return (
      <>
        <Navbar fixed="top" width="80%" bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top "
                alt="logo"
              ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link className="nav-item" to={"/"}>
                  Главная
                </Link>
                <Link className="nav-item" to={"/news"}>
                  Новости
                </Link>
                <Link className="nav-item" to={"/about"}>
                  О нас
                </Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Введите запрос..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-warning">Поиск</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
