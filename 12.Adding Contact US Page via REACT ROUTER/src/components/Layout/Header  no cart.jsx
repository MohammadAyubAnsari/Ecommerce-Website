import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="justify-content-center"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/home" className="nav-link">
              <p>Home</p>
            </Link>
            <Link to="/" className="nav-link">
              <p>Store</p>
            </Link>
            <Link to="/about" className="nav-link">
              <p>About</p>
            </Link>
            <Link to="/contact" className="nav-link">
              <p>Contact Us</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Navbar bg="secondary" variant="dark" className="justify-content-center">
        <Navbar.Brand>
          <h1>The Generics</h1>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;
