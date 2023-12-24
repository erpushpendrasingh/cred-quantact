import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
     const navigate = useNavigate();
     return (
          <Wrapper>
               <NavWrapper>
                    <IoIosArrowRoundBack
                         size={40}
                         onClick={() => navigate("/menu-page")}
                    />
               </NavWrapper>
               <ContainerTitle>RESERVED FOR YOU</ContainerTitle>
               <Card>
                    <Image src="./spin.jpg" />
                    <Box
                         display={"flex"}
                         alignItems={"flex-start"}
                         justifyContent={"space-around"}
                         pt={5}
                    >
                         <Box p={5} width={"60%"}>
                              <CardText> WIN THE</CardText>
                              <ItemDes>skullcandy evo</ItemDes>
                              <ItemDes>over ear headphone</ItemDes>
                              <Button bg={"#cccc"}>1 UNIT ONLY</Button>
                         </Box>
                         <Box>
                              <Text>MAKE IT YOURS</Text>
                              <Box display={"flex"}>
                                   <ItemDes>€2,000</ItemDes>
                                   <ItemDes
                                        style={{
                                             textDecoration: "line-through",
                                        }}
                                   >
                                        €2,000
                                   </ItemDes>
                              </Box>
                         </Box>
                    </Box>
               </Card>
               <Box
                    w={"100%"}
                    bg={"black"}
                    h="50px"
                    color={"#FFFF"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
               >
                    <Text>Know more</Text>
                    {"  "}&nbsp; &nbsp;
                    <FaArrowRightLong />
               </Box>
               <ContainerTitle>ACCESS ENDS ON DEC 24TH</ContainerTitle>
               <Card2>
                    <Image
                         style={{
                              position: "absolute",
                              right: "10px",
                              top: "10px",
                         }}
                         src="./spin.jpg"
                    />

                    <Box p={5} width={"60%"}>
                         <CardText> SPIN & WIN</CardText>
                         <ItemDes>a trip to Goa</ItemDes>
                         <ItemDes>worth ₹ 16,000</ItemDes>
                         <Button bg={"#FFF"}>1 LUCKY WINNER</Button>
                    </Box>
               </Card2>
          </Wrapper>
     );
};

export default ProductsPage;
const Wrapper = styled.div`
     width: 100%;
     height: 100vh;
     padding: 10px;
     margin: auto;
`;
const NavWrapper = styled.div`
     width: 100%;
     height: 50px;
     display: flex;
     align-items: center;
`;
const ContainerTitle = styled.h6`
     color: #6c5d5d;
     height: 50px;
     padding-top: 15px;
`;
const Card = styled.div`
     /* border: 10px solid red; */
     width: 100%;
     height: 55vh;
     background-image: url("./card1img.jpg");
     background-position: bottom;
     background-repeat: no-repeat;
     background-size: cover;
     position: relative;
`;
const CardText = styled.h6`
     /* font-weight: 800; */
     font-size: 10px;
`;
const ItemDes = styled.h4`
     font-weight: 600;
     /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
`;
const Image = styled.img`
     background-color: transparent;
     position: absolute;
     right: 5px;
     bottom: 15px;
     width: 70px;
`;
const Card2 = styled.div`
     width: 100%;
     height: 25vh;
     background-image: url("./goa.jpg");
     background-position: bottom;
     background-repeat: no-repeat;
     background-size: cover;
     position: relative;
`;
