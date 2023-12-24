import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box,  Text } from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";
import { HiArrowLongLeft } from "react-icons/hi2";
import { AiOutlineInbox } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsWallet } from "react-icons/bs";
import { data1 } from "../data";
import { useNavigate } from "react-router-dom";

const ShowProduct = () => {
     const navigate = useNavigate();
     return (
          <Box w="100%" h="100vh">
               <Box
                    w="100%"
                    h="60px"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p="2"
               >
                    <HiArrowLongLeft
                         size="40"
                         onClick={() => navigate("/menu-page")}
                    />
                    <Text fontSize="20px">
                         <span style={{ fontWeight: "bold", color: "black" }}>
                              CRED
                         </span>{" "}
                         <span style={{ color: "#2c2828cc" }}>STORE</span>
                    </Text>
                    <Box
                         w="90px"
                         display={"flex"}
                         alignItems={"center"}
                         justifyContent={"space-between"}
                    >
                         <AiOutlineInbox
                              style={{
                                   padding: "5px",
                                   border: "1px solid #cccc",
                                   borderRadius: "50%",
                              }}
                              size="40"
                         />
                         <RiShoppingCart2Line
                              style={{
                                   padding: "5px",
                                   border: "1px solid #cccc",
                                   borderRadius: "50%",
                              }}
                              size="40"
                         />
                    </Box>
               </Box>
               <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    width={"100%"}
                    h="40px"
                    mt={5}
                    bg={"#dddceb"}
                    p={3}
               >
                    <BsWallet />
                    <Text fontSize="15px">
                         <span style={{ color: "#2c2828cc" }}>
                              delivery to{" "}
                         </span>
                         <span style={{ fontWeight: "bold", color: "black" }}>
                              670645
                         </span>{" "}
                    </Text>
                    <MdKeyboardArrowRight />
               </Box>
               <Box width={"100%"} h="50px" mt={2} p={2}>
                    <Text fontSize="15px">
                         <span
                              style={{ fontWeight: "bold", color: "#2c2828cc" }}
                         >
                              beat the wheel: everyday at 9 PM
                         </span>{" "}
                    </Text>
               </Box>
               <Box p="2" w="100%" h="250px">
                    <Swiper
                        
                         spaceBetween={15}
                         slidesPerView={1}
                         onSlideChange={() => console.log("slide change")}
                         onSwiper={(swiper) => console.log(swiper)}
                    >
                         {data1?.map((item) => {
                              return (
                                   <SwiperSlide>
                                        <ProductCard item={item} />
                                   </SwiperSlide>
                              );
                         })}
                    </Swiper>
               </Box>
               <hr />
               <Box width={"100%"} h="50px" mt={2} p={2}>
                    <Text fontSize="15px">
                         <span
                              style={{ fontWeight: "bold", color: "#2c2828cc" }}
                         >
                              brands in focus
                         </span>
                    </Text>
               </Box>
               <Box w="100%" h="250px">
                    <ProductCard />
               </Box>

               <Box></Box>
          </Box>
     );
};

export default ShowProduct;
