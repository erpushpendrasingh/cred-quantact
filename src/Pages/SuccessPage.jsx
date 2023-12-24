import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
const SuccessPage = () => {
     return (
          <Box
               h="100vh"
               bg={"black"}
               w={"100%"}
               display={"flex"}
               flexDirection={"column"}
               alignItems={"center"}
               justifyContent={"center"}
          >
               <Image w={"70%"} src="./congrats.png" />
               <Text color={"#FFFF"}>you won</Text>
               <Image mt={"100px"} w="50px" src="./approved.png" />
               <Heading as={"h2"} color="#cccc">
                    1
               </Heading>
               <Text mt={"90px"} color={"#FFFF"}>
                    Tap to skip
               </Text>
          </Box>
     );
};

export default SuccessPage;
