import React from "react";
const CartContext = React.createContext({
  productlist: [],
  cartOpen: false,
  setCartOpen: () => {},
  orderList: [],
  setOrderList: () => {},
  idToken: "",
  setIdToken: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  signInModalVisibility: false,
  setSignInModalVisibility: () => {},
});

export default CartContext;
