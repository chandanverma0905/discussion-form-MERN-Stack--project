import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Signup = () => {
  const [form, setForm] = useState({ username: "", password: "", email: "" });

  const handleInputChange = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setForm({ ...form, [key]: value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert(form.username);
  };

  return (
    <div>
      <Header>
        <Link to="/login">
          <Button colorScheme="teal" variant={"outline"}>
            Login
          </Button>
        </Link>
      </Header>
      <Center w="100%" height={"50vh"}>
        <Box width="26rem" borderRadius={"10px"} shadow={"xl"} padding={"2rem"}>
          <VStack spacing={4}>
            <Text fontSize={"1.5rem"} fontWeight={"bold"} color="teal">
              Create new account 🤩
            </Text>
            <Box w="100%">
              <Text mb="1">Email</Text>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </Box>
            <Box w="100%">
              <Text mb="1">Username</Text>
              <Input
                name="username"
                type="username"
                value={form.username}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </Box>
            <Box w="100%">
              <Text mb="1">Password</Text>
              <Input
                name="password"
                type="password"
                value={form.password}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </Box>
            <Button colorScheme={"teal"} onClick={handleSignupSubmit}>
              Signup
            </Button>
          </VStack>
        </Box>
      </Center>
    </div>
  );
};

export default Signup;
