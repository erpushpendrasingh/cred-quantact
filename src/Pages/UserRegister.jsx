import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import {
     Checkbox,
     FormControlLabel,
     FormGroup,
     TextField,
} from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PinInput, PinInputField } from "@chakra-ui/react";
import MobileNumberPad from "../Components/MobileNumberPad";
import { useNavigate } from "react-router-dom";
const UserRegister = () => {
     const navigate = useNavigate();
     const [inputValue, setInputValue] = useState("");
     const [isOtp, setIsOtp] = useState(false);
     const [otp, setOtp] = useState("");
     console.log("otpotp", otp);
     const handleSubmitOtp = () => {
          console.log("otp", otp);
          localStorage.setItem("otp", otp);
          navigate("/menu-page");
     };
     const handleAgree = () => {
          localStorage.setItem("mobile", inputValue);
          setIsOtp(true);
     };
     return (
          <Box
               w="100%"
               h="100vh"
               display={"flex"}
               alignItems={"center"}
               flexDirection={"column"}
          >
               <Box
                    w="100%"
                    h="220px"
                    padding={"10px"}
                    margin={"0px auto"}
                    bg={"black"}
               >
                    <Text mt={5} color={"#ccc"} fontSize={"15px"}>
                         MEMBERSHIP APPLICATION
                    </Text>
                    <Heading
                         mt={2}
                         color={"#ffff"}
                         as={"h6"}
                         w="60%"
                         fontSize={"25px"}
                    >
                         tell us your mobile number
                    </Heading>
               </Box>
               <Box w="380px" h="425px" padding={"10px"}>
                    {isOtp ? (
                         <Otp
                              handleSubmitOtp={handleSubmitOtp}
                              otp={otp}
                              setOtp={setOtp}
                         />
                    ) : (
                         <>
                              <TextField
                                   label="MOBILE NUMBER"
                                   variant="outlined"
                                   type="text"
                                   value={inputValue}
                                   fullWidth
                                   style={{
                                        borderRadius: "10px",
                                   }}
                              />
                              <div
                                   style={{
                                        width: "380px",
                                        height: "28vh",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-around",
                                   }}
                              >
                                   <FormGroup>
                                        <FormControlLabel
                                             control={
                                                  <Checkbox
                                                       defaultChecked
                                                       sx={{
                                                            "&.Mui-checked": {
                                                                 "&, & + .MuiFormControlLabel-label":
                                                                      {
                                                                           color: "#000",
                                                                           textAlign:
                                                                                "justify",
                                                                           fontSize:
                                                                                "14px",
                                                                           alignItems:
                                                                                "center",
                                                                           margin: "10px 0px",
                                                                      },
                                                            },
                                                       }}
                                                  />
                                             }
                                             label="allow CRED to access your credit   information from RBI approved bureaus this does not impact your credit score."
                                        />
                                   </FormGroup>

                                   <button
                                        style={{
                                             width: "190px",
                                             color: "#ffffff",
                                             background: "#8A8A8A",
                                             padding: "10px 14px",
                                             display: "flex",
                                             flexDirection: "row",
                                             alignItems: "center",
                                        }}
                                        onClick={handleAgree}
                                   >
                                        {"Agree & Continue"}{" "}
                                        <IoIosArrowRoundForward size={"34px"} />
                                   </button>
                              </div>
                         </>
                    )}

                    <MobileNumberPad
                         inputValue={inputValue}
                         setInputValue={setInputValue}
                         isOtp={isOtp}
                         setOtp={setOtp}
                         otp={otp}
                    />
               </Box>
          </Box>
     );
};

export default UserRegister;

const Otp = ({ handleSubmitOtp, otp, setOtp }) => {
     return (
          <div
               style={{
                    width: "100%",
                    height: "38vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
               }}
          >
               <HStack justifyContent={"center"} mt={"15px"}>
                    <PinInput size="lg" value={otp} onChange={(e) => setOtp(e)}>
                         <PinInputField />
                         <PinInputField />
                         <PinInputField />
                         <PinInputField />
                    </PinInput>
               </HStack>
               <button
                    style={{
                         width: "145px",
                         color: "#ffffff",
                         background: "#8A8A8A",
                         padding: "10px 12px",
                         display: "flex",
                         flexDirection: "row",
                         alignItems: "center",
                         margin: "0 auto",
                    }}
                    onClick={handleSubmitOtp}
               >
                    {"Submit OTP"} <IoIosArrowRoundForward size={"34px"} />
               </button>
          </div>
     );
};
