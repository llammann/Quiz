import React from "react";
import "./App.css";
import { ChakraProvider, Table } from "@chakra-ui/react";

import Big from "./Big";
function App() {
  return (
      <ChakraProvider>
        <Big />
      </ChakraProvider>
  );
}

export default App;
