import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Menu = ({ item }) => {
     const navigate = useNavigate();
     const { name, icon } = item;
     return (
          <IconAndTextWrapper onClick={() => navigate("/spin-page")}>
               <Box
                    border={"1px solid #FFF"}
                    bg="black"
                    w="70px"
                    h="70px"
                    borderRadius={"50%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
               >
                    {icon}
               </Box>

               <Text>{name}</Text>
          </IconAndTextWrapper>
     );
};

export default Menu;

const IconAndTextWrapper = styled.div`
     height: 120px;
     display: flex;
     flex-direction: column;
     align-items: center;
`;
