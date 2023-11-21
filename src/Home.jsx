// import { Table } from "@chakra-ui/react";
import Cards from "./components/Cards";
import Sortedbuttons from "./components/SortedButtons";
import Table from "./pages/Table";
import React from "react";

function Home({
  isLogged,
  setisLogged,
  products,
  setProducts,
  users,
  setUsers,
  WishlistState,
  setWishlistState,
  BasketState,
  setBasketState,
}) {
  return (
    <div>
      <h1
        style={{
          fontSize: "25px",
          backgroundColor: " rgb(100, 100, 213)",
          padding: "15px",
          marginBottom: "30px",
          color: "rgb(18, 18, 138)",
        }}
      >
        Home
      </h1>
      {isLogged ? (
        // <Table products={products} setProducts={setProducts} users={users} setUsers={setUsers} />
        <>
          <Sortedbuttons products={products} setProducts={setProducts} />
          <Cards
            products={products}
            setProducts={setProducts}
            users={users}
            setUsers={setUsers}
            WishlistState={WishlistState}
            setWishlistState={setWishlistState}
            BasketState={BasketState}
            setBasketState={setBasketState}
          />
          {(() => {
            if (localStorage.getItem("searchedUserName")) {
              let searchedUserName = localStorage.getItem("searchedUserName");
              console.log(searchedUserName);
              let searchedUser = users.find(
                (user) => user.name === searchedUserName
              );
              if (searchedUser) {
                if (searchedUser.isAdmin === true) {
                  return (
                    <>
                      {console.log("is admin")}
                      <Table
                        users={users}
                        setUsers={setUsers}
                        products={products}
                        setProducts={setProducts}
                      />
                    </>
                  );
                }
              } else {
                console.log("isn't admin");
                console.log(9/3)
              }
            }
          })()}
        </>
      ) : null}
    </div>
  );
}

export default Home;
