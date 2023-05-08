import { Nav, Navbar, Button } from "react-bootstrap";
import "./Header.css";
import CartContext from "../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const ctx = useContext(CartContext);

  const orderList = ctx.orderList;
  const signIn = ctx.isLoggedIn;

  let cartItemCount = 0;
  if (signIn) {
    orderList.forEach((item) => {
      cartItemCount += item.quantity;
    });
  }

  const loginLogoutHandler = () => {
    if (ctx.isLoggedIn) {
      localStorage.setItem("idToken", null);
      localStorage.removeItem("userid");
      ctx.setIsLoggedIn(false);
      ctx.setIdToken(null);
      ctx.setOrderList([]);
      ctx.setUserId(null);
    } else {
      ctx.setSignInModalVisibility(true);
    }
  };

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

        <Nav>
          {ctx.isLoggedIn && (
            <Link to={`/user/${ctx.idToken}`} className="nav-link">
              {" "}
              My Profile{" "}
            </Link>
          )}
        </Nav>
        <Nav>
          <Button
            variant="outline-danger"
            onClick={loginLogoutHandler}
            style={{ marginRight: "1rem" }}
          >{`${signIn ? "Logout" : "Login"}`}</Button>
        </Nav>

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
