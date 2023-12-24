import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { Text } from "@chakra-ui/react";
import { style } from "./spinStyle";
import WheelComponent from "../Components/WheelComponent";
import { useNavigate } from "react-router-dom";
const SpinPage = () => {
     const navigate = useNavigate();
     const segments = ["$ 1,000", "Watch", "$ 5,000", "Headphone"];
     const segColors = ["#FE8743", "#E77BEB", "#B1EE31", "#9B59FB"];
     const onFinished = (winner) => {
          localStorage.setItem("winner", winner);
          setTimeout(() => {
               navigate("/winnings");
          }, 5000);
     };
     return (
          <div id="wheelCircle" style={style}>
               <div style={style.head}>
                    <Text onClick={() => navigate("/menu-page")}>
                         <IoIosArrowRoundBack size={"48px"} />
                    </Text>
                    <div style={style.subHead}>
                         <Text style={style.commonText}>
                              <HiOutlineCurrencyRupee size={"20px"} />{" "}
                              <span>{" 1,000 "}</span>
                         </Text>
                         <Text style={style.commonText}>
                              <HiOutlineCurrencyRupee size={"20px"} />{" "}
                              <span>{" 0 "}</span>
                         </Text>
                    </div>
               </div>
               <div style={style.div1}></div>
               <WheelComponent
                    segments={segments}
                    segColors={segColors}
                    winningSegment=""
                    onFinished={(winner) => onFinished(winner)}
                    primaryColor="#000"
                    primaryColoraround="#B1EE31"
                    contrastColor="white"
                    buttonText="Beat the wheel"
                    isOnlyOnce={false}
                    size={120}
                    upDuration={50}
                    downDuration={1000}
               />
               <div style={style.div2}></div>
          </div>
     );
};

export default SpinPage;
