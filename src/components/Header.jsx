import { Box, Button, Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <Box
      aria-label="Header"
      px="8rem"
      py="2rem"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <HStack display={"flex"}>
        <Image src={logo} width="2rem" />
        <Heading fontSize="2xl">Node Blogs</Heading>
      </HStack>
      <HStack>
        <Button colorScheme="teal">Login</Button>
      </HStack>
    </Box>
  );
};

export default Header;
