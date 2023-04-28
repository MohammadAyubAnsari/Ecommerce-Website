import { Container } from "react-bootstrap";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ProductList from "../Products/ProductList";
import { useContext } from "react";
import CartContext from "../Context/Context";
import CartContainer from "../Cart/CartContainer";

const StorePage = () => {
  const ctx = useContext(CartContext);
  return (
    <div>
      <Header />
      <Container>
        <ProductList />
      </Container>
      {ctx.cartOpen && <CartContainer />}
      <Footer />
    </div>
  );
};

export default StorePage;
