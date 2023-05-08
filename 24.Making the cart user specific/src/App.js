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

async function getUserCart(localId) {
  const response = await fetch(
    `https://react-prep-c8bee-default-rtdb.firebaseio.com/cart/${localId}.json`
  );
  const result = await response.json();
  console.log(result);
  return result;
}

async function updateUserCart(localId, data) {
  const response = await fetch(
    `https://react-prep-c8bee-default-rtdb.firebaseio.com/cart/${localId}.json`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

const App = () => {
  const userIdToken = localStorage.getItem("idToken")
    ? localStorage.getItem("idToken")
    : null;
  const userLoggedIn = !!userIdToken;
  const userLocalId = localStorage.getItem("userid");

  const [cartOpen, setCartOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [signInModalVisibility, setSignInModalVisibility] = useState(false);

  const [idToken, setIdToken] = useState(userIdToken);
  const [isLoggedIn, setIsLoggedIn] = useState(userLoggedIn);
  const [userid, setUserId] = useState(userLocalId);

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        localStorage.removeItem("idToken");
        setIdToken(null);
        setIsLoggedIn(null);
      }, 10 * 60 * 1000);
      // return clearTimeout(timer);
    }
  }, [isLoggedIn]);

  if (userid && orderList.length !== 0) {
    updateUserCart(userid, orderList);
  }

  useEffect(() => {
    getUserCart(userid).then((data) => {
      if (data) {
        setOrderList(data);
      }
    });
  }, [userid]);

  console.log("effect running");

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
    userid: userid,
    setUserId: setUserId,
  };

  return (
    <div>
      <CartContext.Provider value={ctxObj}>
        <SignUpModal />
        <Header />
        <Routes>
          {isLoggedIn && <Route path="/" element={<StorePage />} />}

          {isLoggedIn && <Route path="/home" element={<HomePage />} />}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          {isLoggedIn && (
            <Route path="user/:userID" element={<ProfilePage />} />
          )}
          {isLoggedIn && (
            <Route path="/products/:productID" element={<ProductDetails />} />
          )}
        </Routes>
        <Footer />
        {cartOpen && <CartContainer></CartContainer>}
      </CartContext.Provider>
    </div>
  );
};

export default App;
