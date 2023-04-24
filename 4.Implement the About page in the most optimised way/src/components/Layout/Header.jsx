import { Nav, Navbar, Button } from "react-bootstrap";
import "./Header.css";
import CartContext from "../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const ctx = useContext(CartContext);
  const orderList = ctx.orderList;

  let cartItemCount = 0;
  orderList.forEach((item) => {
    cartItemCount += item.quantity;
  });

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
          </Nav>
        </Navbar.Collapse>

        <Nav>
          <Button
            variant="outline-warning"
            onClick={() => ctx.setCartOpen(true)}
          >{`Cart ${cartItemCount}`}</Button>
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
