import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './index.scss';

const Layout = props => {
  return (
    <React.Fragment>
      <div className="Navigation">
        <Navbar>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="logo.gif"
                width="50"
                height="50"
                className="logo d-inline-block align-top"
                alt=""
              />
            </Link>
          </Navbar.Brand>
          <Nav className="blog-menu mr-auto">
            <Nav className="ml-3">
              <Link to="/about">About</Link>
            </Nav>
            <Nav className="ml-3">
              <Link to="/archive">Archive</Link>
            </Nav>
          </Nav>
          <Nav className="ml-auto pl-2 mr-auto">
            <Form>
              <FormControl type="text" size="sm" placeholder="&#xe8b6;" className="buscador" />
            </Form>
          </Nav>
        </Navbar>
      </div>
      <main className="Content">{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
