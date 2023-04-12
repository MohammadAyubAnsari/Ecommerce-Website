import ProductList from "./components/Products/ProductList.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import { Container } from "react-bootstrap";
import CartContainer from "./components/Cart/CartContainer";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartElements = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <div>
      <Header CartOpen={handleCartOpen} />
      <Container>
        <ProductList />
      </Container>
      {cartOpen && <CartContainer orders={cartElements}></CartContainer>}
    </div>
  );
};

export default App;
