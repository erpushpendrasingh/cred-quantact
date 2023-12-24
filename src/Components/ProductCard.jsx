import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const ProductCard = () => {
     return (
          <Box border={"1px solid #cccc"} m="auto" w="310px" h="220px">
               <Card>
                    <Box
                         display={"flex"}
                         alignItems={"flex-start"}
                         justifyContent={"space-around"}
                    >
                         <Box width={"60%"}>
                              <Text> WIN THE</Text>
                              <Text fontSize="15px">
                                   <span
                                        style={{
                                             width: "50%",
                                             fontWeight: "bold",
                                             color: "#2c2828cc",
                                        }}
                                   >
                                        skullcandy evo <br /> over ear headphone
                                   </span>
                              </Text>

                              <Button
                                   bg={"#cccc"}
                                   fontSize={"10px"}
                                   w="80px"
                                   h="30px"
                              >
                                   1 UNIT ONLY
                              </Button>
                         </Box>
                         <Box>
                              <Text  w="100%">MAKE IT YOURS</Text>
                              <Box display={"flex"}>
                                   <Text fontSize="15px">
                                        <span
                                             style={{
                                                  width: "100%",
                                                  fontWeight: "bold",
                                                  color: "#2c2828cc",
                                                  textDecoration:
                                                       "line-through",
                                             }}
                                        >
                                             €2,000 ₹12,999
                                        </span>
                                   </Text>
                              </Box>
                         </Box>
                    </Box>
                    <Image
                         src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41JACWT-wWL._SL1200_.jpg"
                         w="60%"
                         m="5px auto"
                         h="100px"
                         alt="product img"
                    />
               </Card>
          </Box>
     );
};

export default ProductCard;
const Card = styled.div`
     width: 100%;
     background-position: bottom;
     background-repeat: no-repeat;
     background-size: contain;
     padding: 10px;
`;
