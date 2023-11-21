import React from "react";
import { useRef } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function Register({
  users,
  setUsers,
  isLogged,
  setisLogged,
  isRegistered,
  setisRegistered,
}) {
  const name = useRef("");
  const pass = useRef("");
  const email = useRef("");
  const surname = useRef("");

  // console.log("goooooooooooooo")
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
        Register
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
        <FormLabel style={{ fontSize: "20px" }}>Username</FormLabel>
        <Input id={"name"} ref={name} type="text" style={{ padding: "20px" }} />

        <FormLabel style={{ fontSize: "20px" }}>Surname</FormLabel>
        <Input
          id={"surname"}
          ref={surname}
          type="text"
          style={{ padding: "20px" }}
        />

        <FormLabel style={{ fontSize: "20px" }}>Password</FormLabel>
        <Input
          id={"pass"}
          ref={pass}
          type="password"
          style={{ padding: "20px" }}
        />

        <FormLabel style={{ fontSize: "20px" }}>Email</FormLabel>
        <Input
          id={"email"}
          ref={email}
          type="email"
          style={{ padding: "20px", marginBottom: "20px" }}
        />

        <Button
          style={{ padding: "10px", fontSize: "15px" }}
          colorScheme="blue"
          onClick={(e) => {
            // console.log(users);
            // console.log(name.current.value);

            let newUser = {
              name: name.current.value,
              surname: surname.current.value,
              password: pass.current.value,
              email: email.current.value,
            };

            axios
              .post(
                "https://6549a154e182221f8d51b8a0.mockapi.io/users",
                newUser
              )
              .then((res) => {
                console.log(res.data);
                // setUsers([...users, res.new]); it must be like down,but it posted right
                setUsers([...users, res.data]);

                // setisRegistered(true)
                // setisLogged(false)
              });
          }}
        >
          Register
        </Button>
      </FormControl>
    </>
  );
}

export default Register;
