import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = ({ CartOpen }) => {
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
            <Nav.Link href="#home">
              <p>Home</p>
            </Nav.Link>
            <Nav.Link href="#store">
              <p>Store</p>
            </Nav.Link>
            <Nav.Link href="#about">
              <p>About</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav>
          <Nav.Link onClick={CartOpen}>
            <l>Cart</l>
          </Nav.Link>
        </Nav>
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
