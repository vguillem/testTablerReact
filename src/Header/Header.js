import React, {Component} from 'react';
import "tabler-react/dist/Tabler.css";
import { Nav } from "tabler-react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Nav>
        <Nav.Item>
          <Link to="/">
            Index
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/auth">
            Login
          </Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Header;