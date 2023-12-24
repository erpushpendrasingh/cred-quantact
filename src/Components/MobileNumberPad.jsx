import React, {  useEffect } from "react";
import "./MobileNumberPad.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const MobileNumberPad = ({ inputValue, otp, setInputValue, setOtp, isOtp }) => {
     useEffect(() => {
          const handleKeyPress = (event) => {
               const key = event.key;
               if (key === "Backspace") {
                    handleBackspace();
               } else if (/[0-9]/.test(key)) {
                    appendNumericValue(key);
               }
          };

          window.addEventListener("keydown", handleKeyPress);

          return () => {
               window.removeEventListener("keydown", handleKeyPress);
          };
     }, []);
     const appendNumericValue = (value) => {
          const numericPart = value.match(/[0-9]/);
          if (numericPart && !isOtp) {
               setInputValue((prevValue) => prevValue + numericPart[0]);
          } else if (numericPart && isOtp && otp.length < 4) {
               setOtp((prevValue) => prevValue + numericPart[0]);
          }
     };

     const handleBackspace = () => {
          if (isOtp) {
               setOtp((prevValue) => prevValue.slice(0, -1));
          } else {
               setInputValue((prevValue) => prevValue.slice(0, -1));
          }
     };

     const handleButtonClick = (key) => {
          key === "X" ? handleBackspace() : appendNumericValue(key);
     };

     const numberPadLayout = [
          "1",
          "2 ABC",
          "3 DEF",
          "--",
          "4 GHI",
          "5 JKL",
          "6 MNO",
          "space",
          "7 PQRS",
          "8 TUV",
          "9 WXYZ",
          "X",
          "* #",
          "0  +",
          ".",
     ];

     return (
          <div className="mobile-number-pad">
               <div className="number-pad">
                    {numberPadLayout.map((key, index) => (
                         <button
                              key={index}
                              onClick={() => handleButtonClick(key)}
                              className={`number-pad-key ${
                                   key === "X"
                                        ? "delete-key"
                                        : key === "—>"
                                        ? "enter-key"
                                        : ""
                              }`}
                         >
                              {key}
                         </button>
                    ))}
                    <button
                         style={{
                              backgroundColor: "rgb(221, 167, 159)",
                              color: "#000",
                              borderRadius: "50px",
                              fontWeight: "bold",
                              textAlign: "center",
                         }}
                    >
                         <IoIosArrowRoundForward
                              size={"34px"}
                              style={{ margin: "auto" }}
                         />
                    </button>
               </div>
          </div>
     );
};

export default MobileNumberPad;
