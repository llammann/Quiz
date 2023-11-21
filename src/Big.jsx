import Layout from "./assets/layout";
import Home from "./Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Basket from "./pages/Basket";
import Table from "./pages/Table";
import ReactDOM from "react-dom/client";
import { getProducts } from "./assets/middleware/api/products";
import { getUsers } from "./assets/middleware/api/users";
import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Big() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const [isLogged, setisLogged] = useState(false);

  const [WishlistState, setWishlistState] = useState([]);
  const [BasketState, setBasketState] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      // console.log(res);
      setProducts(res);
    });
  }, []);

  useEffect(() => {
    getUsers().then((res) => {
      // console.log(res);
      setUsers(res);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              isLogged={isLogged}
              setisLogged={setisLogged}
              WishlistState={WishlistState}
              setWishlistState={setWishlistState}
              users={users}
              setUsers={setUsers}
            />
          }
        >
          <Route
            index
            element={
              <Home
                isLogged={isLogged}
                setisLogged={setisLogged}
                products={products}
                setProducts={setProducts}
                users={users}
                setUsers={setUsers}
                WishlistState={WishlistState}
                setWishlistState={setWishlistState}
                BasketState={BasketState}
                setBasketState={setBasketState}
                // setsearcUserName={setsearcUserName}
                // searcUserName={searcUserName}
              />
            }
          />
          <Route
            path="Login"
            element={
              <Login
                isLogged={isLogged}
                setisLogged={setisLogged}
                users={users}
                setUsers={setUsers}
              />
            }
          />
          <Route
            path="Register"
            element={<Register users={users} setUsers={setUsers} />}
          />
          <Route
            path="Wishlist"
            element={
              <Wishlist
                products={products}
                setProducts={setProducts}
                WishlistState={WishlistState}
                setWishlistState={setWishlistState}
              />
            }
          />
          <Route
            path="Basket"
            element={
              <Basket
                products={products}
                setProducts={setProducts}
                BasketState={BasketState}
                setBasketState={setBasketState}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Big;
