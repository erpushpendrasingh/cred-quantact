import React from "react";
import styled from "styled-components";
import "../App.css";
import { CiSettings } from "react-icons/ci";
import { FaSwatchbook } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { SiReactquery } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { GrCreditCard } from "react-icons/gr";
import { BsFillPostageFill } from "react-icons/bs";
import { MdOutlineScoreboard } from "react-icons/md";
import { BsBagHeart } from "react-icons/bs";
import { MdMapsHomeWork } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { LuFlower } from "react-icons/lu";


import { Avatar, AvatarGroup, Box, Text } from "@chakra-ui/react";
import { menu } from "../data";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";
const MenuPages = () => {
     const navigate = useNavigate();
     return (
          <Wrapper>
               <TopBar>
                    <Images src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" />
                    <AvatarGroup size="sm" max={2}>
                         <Avatar
                              name="Ryan Florence"
                              src="https://bit.ly/ryan-florence"
                         />
                         <Avatar
                              name="Segun Adebayo"
                              src="https://bit.ly/sage-adebayo"
                         />
                         <Avatar
                              name="Kent Dodds"
                              src="https://bit.ly/kent-c-dodds"
                         />
                         <Avatar
                              name="Kent Dodds"
                              src="https://bit.ly/kent-c-dodds"
                         />
                         <Avatar
                              name="Kent Dodds"
                              src="https://bit.ly/kent-c-dodds"
                         />
                    </AvatarGroup>

                    <CiSettings size={50} />
               </TopBar>
               <Text mt="5" color={"#cccc"}>
                    YOUR MONEY
               </Text>
               <YourMoneyWrapper>
                    <YourMoneyTab>
                         <Box display={"flex"} alignItems={"center"} gap={2}>
                              <FaSwatchbook />
                              <Text>CRED cash</Text>
                         </Box>
                         <Box display={"flex"} alignItems={"center"} gap={2}>
                              <Text>₹ 60,000</Text>
                              <MdChevronRight />
                         </Box>
                    </YourMoneyTab>
                    <YourMoneyTab>
                         <Box display={"flex"} alignItems={"center"} gap={2}>
                              <SiReactquery />

                              <Text>CNRB xx 1885</Text>
                              <IoIosArrowDown />
                         </Box>
                         <Box display={"flex"} alignItems={"center"} gap={2}>
                              <Text>check balance</Text>
                              <MdChevronRight />
                         </Box>
                    </YourMoneyTab>
               </YourMoneyWrapper>
               <Text mt="5" color={"#cccc"}>
                    EXPLORE CRED
               </Text>

               <MenuContainer>
                    <IconMenuWrapper>
                         <IconAndTextWrapper>
                              <Box
                                   bg="#262626"
                                   w="70px"
                                   h="70px"
                                   borderRadius={"50%"}
                                   display={"flex"}
                                   alignItems={"center"}
                                   justifyContent={"center"}
                              >
                                   <GrCreditCard size={30} />
                              </Box>
                              <Text fontSize={"10px"} color="green">
                                   Link UPI
                              </Text>

                              <Text>credit</Text>
                              <Text>cards</Text>
                         </IconAndTextWrapper>

                         <IconAndTextWrapper>
                              <Box
                                   bg="#262626"
                                   w="70px"
                                   h="70px"
                                   borderRadius={"50%"}
                                   display={"flex"}
                                   alignItems={"center"}
                                   justifyContent={"center"}
                              >
                                   <BsFillPostageFill size={30} />
                              </Box>
                              <Text>bills &</Text>
                              <Text>recharges</Text>
                         </IconAndTextWrapper>
                         <IconAndTextWrapper
                              onClick={() => navigate("/products-page")}
                         >
                              <Box
                                   bg="#262626"
                                   w="120px"
                                   h="70px"
                                   borderRadius={"25%"}
                                   display={"flex"}
                                   alignItems={"center"}
                                   justifyContent={"center"}
                              >
                                   <MdOutlineScoreboard size={40} />
                              </Box>
                              <Text>rewards</Text>
                         </IconAndTextWrapper>
                    </IconMenuWrapper>
                    <IconMenuWrapper>
                         <IconAndTextWrapper>
                              <Box
                                   bg="#262626"
                                   w="70px"
                                   h="70px"
                                   borderRadius={"50%"}
                                   display={"flex"}
                                   alignItems={"center"}
                                   justifyContent={"center"}
                              >
                                   <BsBagHeart size={30} />
                              </Box>

                              <Text>shopping</Text>
                         </IconAndTextWrapper>

                         <IconAndTextWrapper>
                              <Box
                                   bg="#262626"
                                   w="70px"
                                   h="70px"
                                   borderRadius={"50%"}
                                   display={"flex"}
                                   alignItems={"center"}
                                   justifyContent={"center"}
                              >
                                   <MdMapsHomeWork size={30} />
                              </Box>

                              <Text>rent via</Text>
                              <Text>credit card</Text>
                         </IconAndTextWrapper>

                         <IconAndTextWrapper>
                              <Box
                                   bg="#262626"
                                   w="70px"
                                   h="70px"
                                   borderRadius={"50%"}
                                   display={"flex"}
                                   alignItems={"center"}
                                   justifyContent={"center"}
                              >
                                   <CiGift size={30} />
                              </Box>
                              <Text fontSize={"10px"} color="green">
                                   UPTO 1000
                              </Text>

                              <Text>refer</Text>
                         </IconAndTextWrapper>

                         <IconAndTextWrapper
                              onClick={() => navigate("/show-products")}
                         >
                              <Box
                                   bg="#262626"
                                   w="70px"
                                   h="70px"
                                   borderRadius={"50%"}
                                   display={"flex"}
                                   alignItems={"center"}
                                   justifyContent={"center"}
                              >
                                   <LuFlower size={30} />
                              </Box>
                              <Text>view all</Text>
                         </IconAndTextWrapper>
                    </IconMenuWrapper>
               </MenuContainer>
               <NeedAtentionContainer>
                    <Box
                         w="100%"
                         h="120px"
                         bg="#262626"
                         borderRadius="40% 40% 0 0"
                         position="relative"
                         display={"flex"}
                         alignItems={"center"}
                         justifyContent={"space-around"}
                    >
                         {menu?.map((item, index) => (
                              <Menu key={index} item={item} />
                         ))}
                    </Box>
               </NeedAtentionContainer>
          </Wrapper>
     );
};

export default MenuPages;
const Wrapper = styled.div`
     width: 100%;
     height: 100vh;
     background-color: black;
     color: #ffff;
     padding: 10px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
`;

const TopBar = styled.div`
     width: 100%;
     height: 60px;
     display: flex;
     align-items: center;
     justify-content: space-between;
`;

const YourMoneyWrapper = styled.div`
     width: 100%;
     height: 110px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 2px;
`;
const YourMoneyTab = styled.div`
     padding: 5px;
     width: 100%;
     height: 50px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     background-color: #262626;
`;

const MenuContainer = styled.div`
     width: 100%;
     height: 300px;
`;
const IconAndTextWrapper = styled.div`
     height: 120px;
     display: flex;
     flex-direction: column;
     align-items: center;
`;
const IconMenuWrapper = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap: 5px;
`;
const NeedAtentionContainer = styled.div`
     height: 100px;
     display: flex;
     align-items: center;
     justify-content: space-between;
`;
const Images = styled.img`
     width: 50px;
     height: auto;
`;
