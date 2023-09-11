import React from "react";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import LaptopIcon from "@mui/icons-material/Laptop";
import {Mobile_SideBar} from "./Mobile_SideBar";

export const Mobile_Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      p="10px"
      display={{ base: "flex", md: "none", lg: "none" }}
      alignItems={"center"}
      bgColor="white"
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"}>
        <Mobile_SideBar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Text fontSize={"18px"} fontWeight={"500"} textAlign={"left"} ml="10px">
          Assessment
        </Text>
      </Flex>
      <Box>
        <LaptopIcon />
      </Box>
    </Flex>
  );
};
