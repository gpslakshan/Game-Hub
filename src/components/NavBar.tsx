import { Box, HStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Box display="flex" alignItems="center">
        <Image src={logo} alt="Dan Abramov" boxSize="60px" />
        <Text>Game-Hub</Text>
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
