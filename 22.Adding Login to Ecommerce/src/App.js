import { useState, useEffect } from "react";
import CartContext from "./components/Context/Context.jsx";

import { Route, Routes } from "react-router-dom";
import StorePage from "./components/Pages/Store.jsx";
import AboutPage from "./components/Pages/About.jsx";
import HomePage from "./components/Pages/Home.jsx";
import ContactUs from "./components/Pages/ContactUs.jsx";
import ProductDetails from "./components/Pages/ProductDetails.js";

import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";

import CartContainer from "./components/Cart/CartContainer.jsx";
import SignUpModal from "./components/AuthForm/SignUpModal.js";
import ProfilePage from "./components/Pages/ProfilePage.js";

const App = () => {
  const userIdToken = localStorage.getItem("idToken")
    ? localStorage.getItem("idToken")
    : "";
  // const userLoggedIn = userIdToken === "" ? false : true;
  const userLoggedIn = !!userIdToken;
  const [cartOpen, setCartOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [signInModalVisibility, setSignInModalVisibility] = useState(false);

  const [idToken, setIdToken] = useState(userIdToken);
  const [isLoggedIn, setIsLoggedIn] = useState(userLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        localStorage.removeItem("idToken");
        setIdToken(null);
      }, 1 * 60 * 1000);
      // return clearTimeout(timer);
    }
  });

  const ctxObj = {
    cartOpen: cartOpen,
    setCartOpen: setCartOpen,
    orderList: orderList,
    setOrderList: setOrderList,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn,
    idToken: idToken,
    setIdToken: setIdToken,
    signInModalVisibility: signInModalVisibility,
    setSignInModalVisibility: setSignInModalVisibility,
  };

  return (
    <div>
      <CartContext.Provider value={ctxObj}>
        <SignUpModal />
        <Header />
        <Routes>
          <Route path="/" element={<StorePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="user/:userID" element={<ProfilePage />} />
          <Route path="/products/:productID" element={<ProductDetails />} />
        </Routes>
        <Footer />
        {cartOpen && <CartContainer></CartContainer>}
      </CartContext.Provider>
    </div>
  );
};

export default App;
