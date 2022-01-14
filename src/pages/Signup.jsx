import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Signup = () => {
  return (
    <div>
      <Header>
        <Link to="/login">
          <Button colorScheme="teal">Login</Button>
        </Link>
      </Header>
    </div>
  );
};

export default Signup;
