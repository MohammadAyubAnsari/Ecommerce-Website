import { useState } from "react";
import CartContext from "./components/Context/Context.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StorePage from "./components/Pages/Store.jsx";
import AboutPage from "./components/Pages/About.jsx";
import HomePage from "./components/Pages/Home.jsx";

const router = createBrowserRouter([
  { path: "/", element: <StorePage /> },
  { path: "/About", element: <AboutPage /> },
  { path: "/Home", element: <HomePage /> },
]);

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
        <RouterProvider router={router} />
      </CartContext.Provider>
    </div>
  );
};

export default App;
