import React from "react";
import { Box, Stack, Image, Center, Text,ListIcon } from "@chakra-ui/react";
import Logo from "../Images/Footer/Footer.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <Box>
      <Image src={Logo} />
      </Box>
    </>
  );
}
