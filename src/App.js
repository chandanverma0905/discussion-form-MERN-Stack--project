import {
  Center,
  ChakraProvider
} from "@chakra-ui/react";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Center></Center>
    </ChakraProvider>
  );
}

export default App;
