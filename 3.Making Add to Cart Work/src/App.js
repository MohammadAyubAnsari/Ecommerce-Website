import ProductList from "./components/Products/ProductList.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import { Container } from "react-bootstrap";
import CartContainer from "./components/Cart/CartContainer";
import CartContext from "./components/Context/Context.jsx";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const ctxObj = {
    cartOpen: cartOpen,
    setCartOpen: setCartOpen,
    orderList: orderList,
    setOrderList: setOrderList,
  };

  return (
    <div>
      <CartContext.Provider value={ctxObj}>
        <Header />
        <Container>
          <ProductList />
        </Container>
        {cartOpen && <CartContainer></CartContainer>}
      </CartContext.Provider>
    </div>
  );
};

export default App;
