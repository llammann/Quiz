import { Button } from "antd";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getUser, postUser } from "../assets/middleware/api/users";
import axios from "axios";

function Logout({
  isLogged,
  setisLogged,
  WishlistState,
  setWishlistState,
  users,
  setUsers,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    // before remove wishlist

    if (localStorage.getItem("searchedUserName")) {
      let searchedUserName = localStorage.getItem("searchedUserName");
      console.log(searchedUserName);
      let searchedUser = users.find((user) => user.name === searchedUserName);
      if (searchedUser) {
        let wishes = JSON.parse(localStorage.getItem("WishlistLocal"));

        // Update the user's favorites (wishlist) in the database
        postUser(searchedUser.id, { favorites: wishes }).then(() => {
          console.log("Wishlist updated in the database");
        });
      } else {
        console.log("no user id");
      }
    }

    localStorage.removeItem("WishlistLocal");
    localStorage.removeItem("searchedUserName");
    setWishlistState([]);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <Button
      onClick={() => {
        navigate("/");
        setisLogged(false);
      }}
    >
      Log out
    </Button>
  );
}

export default Logout;
