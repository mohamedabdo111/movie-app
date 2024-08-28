import React, { useState } from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../style.css";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { getAllmovies, getsearchmovies } from "../redux/actions/actionmovie";
const Navbarr = () => {
  const onchanging = (i) => {
    searchFun(i);
  };

  const dispatch = useDispatch();

  const searchFun = (word) => {
    if (word === "") {
      dispatch(getAllmovies());
    } else {
      dispatch(getsearchmovies(word));
    }
  };

  return (
    <Navbar expand="lg" className="navbr">
      <Container>
        <Navbar.Brand href="#" className="col-xs-4 col-lg-">
          <a href="/">
            <img
              src={logo}
              style={{ width: "100px", height: "50px" }}
              alt="navbar"
            ></img>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll col-xs-8 col-lg-11">
          <Form className="d-flex w-100 search ">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2 rounded-4 "
              aria-label="Search"
              onChange={(e) => {
                onchanging(e.target.value);
              }}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="searchIcon"
            ></FontAwesomeIcon>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
