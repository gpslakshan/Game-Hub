import { HStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="Dan Abramov" boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
