import React from "react";
import { useRef } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import Home from "../Home";
function Login({ users, setUsers, isLogged, setisLogged }) {
  const name = useRef("");
  const pass = useRef("");
  const navigate = useNavigate();
  return (
    <>
      <h1
        className="wishHead"
        style={{
          fontSize: "25px",
          backgroundColor: " rgb(100, 100, 213)",
          padding: "15px",
          marginBottom: "30px",
          color: "rgb(18, 18, 138)",
        }}
      >
        Login
      </h1>
      <FormControl
        style={{
          width: "30%",
          margin: "auto",
          backgroundColor: " rgb(192, 192, 226)",
          padding: "50px 30px",
          borderRadius: "15px",
        }}
      >
        <FormLabel style={{ fontSize: "20px" }}>Name</FormLabel>
        <Input
          id="nameInp"
          ref={name}
          type="text"
          style={{ padding: "20px" }}
        />
        <FormLabel style={{ fontSize: "20px" }}>Password</FormLabel>
        <Input
          id="passInp"
          ref={pass}
          type="password"
          style={{ padding: "20px", marginBottom: "20px" }}
        />
        <Button
          style={{ padding: "10px", fontSize: "15px" }}
          colorScheme="blue"
          onClick={(e) => {
            // console.log(users);
            // console.log("before log");

            // console.log(name.current.value)
            // console.log(pass.current.value)
            // console.log(user.name)

            users.map((user) => {
              // console.log(user);
              // console.log(name.current.value);
              // console.log(user.password, pass.current.value);
              let searched = users.find(
                (user) =>
                  user.name === name.current.value &&
                  user.password === pass.current.value
              );

              if (searched) {
                console.log("User found");
                setisLogged(true);
                navigate("..");
                let naming = name.current.value;
                localStorage.setItem("searchedUserName", naming);
                
              } else {
                console.log("User not found");
                setisLogged(false);
              }
            });
          }}
        >
          Login
        </Button>
      </FormControl>
    </>
  );
}

export default Login;
