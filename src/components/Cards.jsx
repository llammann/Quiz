import React from "react";
import Add from "./Add";
import { getUser } from "../assets/middleware/api/users";
import { useState } from "react";
import axios from "axios";
import greenone from "../assets/images/greenone.webp";
import { HeartOutlined } from "@ant-design/icons";
import { HeartFilled } from "@ant-design/icons";

import { ShoppingFilled } from "@ant-design/icons";

import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";

function Cards({
  products,
  setProducts,
  users,
  setUsers,
  WishlistState,
  setWishlistState,
  BasketState,
  setBasketState,
}) {
  console.log("🚀 ~ file: Cards.jsx:6 ~ Cards ~ products:", products);

  //   console.log(users.filter((elem) => elem.isAdmin === true).length);

  console.log(
    "🚀 ~ file: Cards.jsx:26 ~ Cards ~ WishlistState:",
    WishlistState
  );

  // Favorite button
  // function FavBtn() {
  //     console.log("hey bi")
  // }

  return (
    <>
      <SimpleGrid
        style={{ padding: "90px" }}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <img src={greenone} />
              <CardHeader>
                <Heading size="md">{product.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{product.description}</Text>
                <Text>ID: {product.id}</Text>
                <Text>Price: {product.price}</Text>
              </CardBody>
              <CardFooter>
                <div className="buttons">
                  <Button
                    style={{ marginRight: "30px" }}
                    id={product.id}
                    onClick={(e) => {
                      // API POST WISHLIST

                      if (localStorage.getItem("searchedUserName")) {
                        let searchedUserName =
                          localStorage.getItem("searchedUserName");
                        console.log(searchedUserName);
                        let searchedUser = users.find(
                          (user) => user.name === searchedUserName
                        );
                        if (searchedUser) {
                          console.log("bax bu", searchedUser.id);
                        } else {
                          console.log("nerde");
                        }
                      }

                      getUser(5).then((res) => {
                        // console.log(res);
                      });

                      // console.log("heyyy")
                      // console.log(e.currentTarget.id);
                      let check = WishlistState.includes(e.currentTarget.id);
                      if (!check) {
                        setWishlistState([
                          ...WishlistState,
                          e.currentTarget.id,
                        ]);
                        console.log(WishlistState);
                        // LOCAL
                        let wishlistarray = [];

                        if (localStorage.getItem("WishlistLocal")) {
                          wishlistarray = JSON.parse(
                            localStorage.getItem("WishlistLocal")
                          );
                        }

                        wishlistarray.push(e.currentTarget.id);

                        localStorage.setItem(
                          "WishlistLocal",
                          JSON.stringify(wishlistarray)
                        );

                        console.log(wishlistarray);

                        localStorage.setItem(
                          "WishlistLocal",
                          JSON.stringify(wishlistarray)
                        );
                      } else {
                        console.log("already at wishlist");
                      }
                    }}
                  >
                    {/* ICON */}
                    {!WishlistState.includes(product.id) ? (
                      <HeartOutlined />
                    ) : (
                      <HeartFilled />
                    )}
                  </Button>
                  <Button
                    style={{ marginRight: "30px" }}
                    id={product.id}
                    onClick={(e) => {
                      console.log(e.currentTarget.id);
                      setBasketState([...BasketState, e.currentTarget.id]);
                      console.log(BasketState);
                      // LOCAL
                      let baskettarray = [];
                      if (JSON.parse(localStorage.getItem("BasketLocal"))) {
                        baskettarray = [
                          ...JSON.parse(localStorage.getItem("BasketLocal")),
                          e.currentTarget.id,
                        ];
                      }
                      localStorage.setItem(
                        "BasketLocal",
                        JSON.stringify(baskettarray)
                      );
                    }}
                  >
                    <ShoppingFilled />
                  </Button>
                  {product.discountPercent !== 0 ? (
                    <Button
                      style={{ marginRight: "30px", backgroundColor: "green" }}
                    >
                      {product.discountPercent}%
                    </Button>
                  ) : null}

                  {/* <Button>
                  <HeartFilled />
                </Button> */}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
      {/* <Add products={products} setProducts={setProducts} /> */}
    </>
  );
}

export default Cards;
