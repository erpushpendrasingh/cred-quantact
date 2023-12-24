import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Winnings = () => {
     const navigate = useNavigate();
     const prize = localStorage.getItem("winner") || "";
     console.log("prize:", prize);
     const boxes = Array.from({ length: 11 }, (value, index) => index);
     return (
          <Box
               w="100%"
               h="100vh"
               bg={"black"}
               display={"flex"}
               flexDirection={"column"}
               alignItems={"center"}
               justifyContent={"center"}
               gap="5"
          >
               <Box w="100%" h="200px">
                    <Text
                         textAlign={"center"}
                         w="70%"
                         m="auto"
                         fontSize={"30px"}
                         color={"#ffff"}
                    >
                         make the most of your winnings{" "}
                    </Text>
                    <Box
                         display={"flex"}
                         flexDirection="column"
                         mt={5}
                         alignItems={"center"}
                         justifyContent={"center"}
                    >
                         <Image
                              src="./approved.png"
                              alt="approved.png"
                              w="50px"
                         />
                         <Box
                              w="100px"
                              h="40px"
                              m="auto"
                              borderRadius={"15px"}
                              bg={"#24E777"}
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"}
                              fontSize={"25px"}
                         >
                              1
                         </Box>
                    </Box>
               </Box>
               <Box
                    position={"relative"}
                    bg="#24E777"
                    w="70%"
                    h="50vh"
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
               >
                    <Box
                         display={"flex"}
                         position={"absolute"}
                         top={"-2"}
                         left="10%"
                         alignItems={"center"}
                         justifyContent={"center"}
                         m="auto"
                    >
                         {boxes.map((index) => (
                              <Box
                                   key={index}
                                   bg={"black"}
                                   h="20px"
                                   w="20px"
                                   borderRadius={"50%"}
                              ></Box>
                         ))}
                    </Box>
                    <Box
                         position={"absolute"}
                         top={"12%"}
                         left={"35%"}
                         border={"1px solid #fff"}
                         borderRadius={"50%"}
                         height="80px"
                         w="80px"
                    ></Box>
                    <Box
                         display={"flex"}
                         flexDirection={"column"}
                         alignItems={"center"}
                    >
                         <Text color={"#231212cc"} fontSize={"22px"}>
                              Nu Republic
                         </Text>
                         <Heading
                              fontSize={"20px"}
                              textAlign={"center"}
                              w="90%"
                         >
                              you won Cred {prize}
                         </Heading>
                    </Box>

                    <Box
                         position={"absolute"}
                         bottom={0}
                         bg={"blue"}
                         w="100%"
                         height={"60px"}
                         display={"flex"}
                         alignItems={"center"}
                         justifyContent={"center"}
                         onClick={() => navigate("/success-page")}
                    >
                         <Text fontSize={"20px"} color={"#fff"}>
                              Redeem now
                         </Text>
                    </Box>

                    <Box
                         display={"flex"}
                         position={"absolute"}
                         bottom={"-3"}
                         left="10%"
                         alignItems={"center"}
                         justifyContent={"center"}
                         m="auto"
                    >
                         {boxes.map((index) => (
                              <Box
                                   key={index}
                                   bg={"black"}
                                   h="20px"
                                   w="20px"
                                   borderRadius={"50%"}
                              ></Box>
                         ))}
                    </Box>
               </Box>
               <Text color={"#FFF"}>details</Text>
          </Box>
     );
};

export default Winnings;
