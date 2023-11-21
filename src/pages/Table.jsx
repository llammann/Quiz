import React from "react";
import Add from "../components/Add";
import axios from "axios";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Input } from "antd";

function Tablex({ products, setProducts, users, setUsers }) {
  // console.log(products);

  // console.log(users.filter((elem) => elem.isAdmin === true).length);

  return (
    <>
      <p
        style={{
          fontSize: "25px",
          backgroundColor: " rgb(100, 100, 213)",
          padding: "15px",
          marginBottom: "30px",
          color: "rgb(18, 18, 138)",
        }}
      >
        Table
      </p>
      <Add products={products} setProducts={setProducts} />
      <TableContainer>
        <Table variant="striped" colorScheme="grey600">
          <TableCaption>Products</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Category</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => {
              return (
                <Tr
                  key={product.id}
                  style={{ color: product.stockCount < 10 ? "red" : "green" }}
                >
                  <Td>{product.id}</Td>
                  <Td>{product.name}</Td>
                  <Td>{product.price}</Td>
                  <Td>{product.categoryFirst}</Td>
                  {/* EDIT */}
                  <Td>
                    <Button
                      colorScheme="facebook"
                      id={product.id}
                      onClick={(e) => {
                        // console.log("leman", e.target.id);
                        
                      }}
                    >
                      Edit
                    </Button>
                  </Td>

                  {/* DELETE */}
                  <Td>
                    {users.find((elem) => elem.isAdmin === true) ? (
                      <Button
                        colorScheme="red"
                        id={product.id}
                        onClick={(e) => {
                          // console.log(e.target.id)
                          let arr = [...products];
                          let deleted_arr = arr.filter(
                            (elem) => elem.id != e.target.id
                          );
                          setProducts(deleted_arr);

                          axios.delete(
                            "https://6549a154e182221f8d51b8a0.mockapi.io/products/" +
                              e.target.id
                          );
                        }}
                      >
                        Delete
                      </Button>
                    ) : null}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Button>Logout</Button>
    </>
  );
}

export default Tablex;
