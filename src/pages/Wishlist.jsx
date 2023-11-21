import React from "react";
import greenone from "../assets/images/greenone.webp";
import { HeartOutlined } from "@ant-design/icons";
import { HeartFilled } from "@ant-design/icons";

import { ShoppingFilled } from "@ant-design/icons";

import { Button, ButtonGroup } from "@chakra-ui/react";
import "../assets/style/Wishlist.module.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";

function Wishlist({ products, setProducts, WishlistState, setWishlistState }) {
  // LOCAL
  let wishlistarray = [];
  if (JSON.parse(localStorage.getItem("WishlistLocal"))) {
    wishlistarray = [...JSON.parse(localStorage.getItem("WishlistLocal"))];
  }
  // console.log(wishlistarray)

  return (
    <>
      <p
        className="wishHead"
        style={{
          fontSize: "25px",
          backgroundColor: " rgb(100, 100, 213)",
          padding: "15px",
          marginBottom: "30px",
          color: "rgb(18, 18, 138)",
        }}
      >
        Wishlist
      </p>
      <SimpleGrid
        className="cards"
        style={{ padding: "90px" }}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {wishlistarray.map((wish) => {
          console.log(wish);
          let product = products.find((prod) => prod.id === wish);
          console.log(product);
          if (product) {
            {
              return (
                <Card key={product.id}>
                  <img src={greenone} />
                  <CardHeader>
                    <Heading size="md">{product.name}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{product.description}</Text>
                    <h1>ID: {product.id}</h1>
                  </CardBody>
                  <CardFooter>
                    <Button
                      style={{ marginRight: "30px" }}
                      id={product.id}
                      onClick={(e) => {
                        // console.log("heyyy broo")
                        // console.log(e.target.id);
                        let check = WishlistState.includes(e.target.id);
                        if (check) {
                          let removed = WishlistState.filter(
                            (wish) => wish !== e.target.id
                          );
                          setWishlistState(removed);
                          console.log("silindi");
                          // LOCAL
                          localStorage.setItem(
                            "WishlistLocal",
                            JSON.stringify(removed)
                          );
                        } else {
                          console.log("silinmir");
                        }
                      }}
                    >
                      {<HeartOutlined />}
                    </Button>
                    <Button style={{ marginRight: "30px" }}>
                      <ShoppingFilled />
                    </Button>
                    <Button>{product.discountPercent}%</Button>
                    {/* <Button><HeartFilled /></Button> */}
                  </CardFooter>
                </Card>
              );
            }
          } else {
            return null;
          }
        })}
      </SimpleGrid>
    </>
  );
}

export default Wishlist;
