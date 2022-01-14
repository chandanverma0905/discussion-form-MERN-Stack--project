import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  return (
    <div>
      <Header>
        <Link to="/">
          <Button colorScheme="teal">Signup</Button>
        </Link>
      </Header>
    </div>
  );
};

export default Login;
