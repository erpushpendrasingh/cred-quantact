import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FaInfoCircle } from "react-icons/fa";
import { style } from "../Pages/spinStyle";

const WheelComponent = ({
     segments,
     segColors,
     winningSegment,
     onFinished,
     primaryColor,
     primaryColoraround,
     contrastColor,
     buttonText,
     isOnlyOnce = true,
     size = 290,
     upDuration = 1000,
     downDuration = 100,
     fontFamily = "proxima-nova",
     width = 80,
     height = 80,
}) => {
     let currentSegment = "";
     let isStarted = false;
     const [isFinished, setFinished] = useState(false);
     let timerHandle = 0;
     const timerDelay = segments.length;
     let angleCurrent = 0;
     let angleDelta = 0;
     let canvasContext = null;
     let maxSpeed = Math.PI / `${segments.length}`;
     const upTime = segments.length * upDuration;
     const downTime = segments.length * downDuration;
     let spinStart = 0;
     let frames = 0;
     const centerX = 200;
     const centerY = 200;
     useEffect(() => {
          initCanvas();
          wheelDraw();
          setTimeout(() => {
               window.scrollTo(0, 1);
          }, 0);
     }, []);
     const handleSpin = () => {
          initCanvas();
          wheelDraw();
          spin();
     };

     const initCanvas = () => {
          let canvas = document.getElementById("canvas");
          if (navigator.appVersion.indexOf("MSIE") !== -1) {
               canvas = document.createElement("canvas");
               canvas.setAttribute("width", width);
               canvas.setAttribute("height", height);
               canvas.setAttribute("id", "canvas");
               document.getElementById("wheel").appendChild(canvas);
          }
          canvasContext = canvas.getContext("2d");
     };

     const spin = () => {
          isStarted = true;
          if (timerHandle === 0) {
               spinStart = new Date().getTime();
               maxSpeed = Math.PI / segments.length;
               frames = 0;
               timerHandle = setInterval(onTimerTick, timerDelay);
          }
     };
     const onTimerTick = () => {
          frames++;
          draw();
          const duration = new Date().getTime() - spinStart;
          let progress = 0;
          let finished = false;
          if (duration < upTime) {
               progress = duration / upTime;
               angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2);
          } else {
               if (winningSegment) {
                    if (
                         currentSegment === winningSegment &&
                         frames > segments.length
                    ) {
                         progress = duration / upTime;
                         angleDelta =
                              maxSpeed *
                              Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
                         progress = 1;
                    } else {
                         progress = duration / downTime;
                         angleDelta =
                              maxSpeed *
                              Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
                    }
               } else {
                    progress = duration / downTime;
                    if (progress >= 0.8) {
                         angleDelta =
                              (maxSpeed / 1.2) *
                              Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
                    } else if (progress >= 0.98) {
                         angleDelta =
                              (maxSpeed / 2) *
                              Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
                    } else
                         angleDelta =
                              maxSpeed *
                              Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
               }
               if (progress >= 1) finished = true;
          }

          angleCurrent += angleDelta;
          while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2;
          if (finished) {
               setFinished(true);
               onFinished(currentSegment);
               clearInterval(timerHandle);
               timerHandle = 0;
               angleDelta = 0;
          }
     };

     const wheelDraw = () => {
          clear();
          drawWheel();
          drawNeedle();
     };

     const draw = () => {
          clear();
          drawWheel();
          drawNeedle();
     };

     const drawSegment = (key, lastAngle, angle) => {
          const ctx = canvasContext;
          const value = segments[key];
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.arc(centerX, centerY, size, lastAngle, angle, false);
          ctx.lineTo(centerX, centerY);
          ctx.closePath();
          ctx.fillStyle = segColors[key];
          ctx.fill();
          ctx.stroke();
          ctx.save();
          ctx.translate(centerX, centerY);
          ctx.rotate((lastAngle + angle) / 2);
          ctx.fillStyle = contrastColor || "white";
          ctx.font = "bold 1em " + fontFamily;
          ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);
          ctx.restore();
     };

     const drawWheel = () => {
          const ctx = canvasContext;
          let lastAngle = angleCurrent;
          const len = segments.length;
          const PI2 = Math.PI * 2;
          ctx.lineWidth = 1;
          ctx.strokeStyle = primaryColor || "black";
          ctx.textBaseline = "middle";
          ctx.textAlign = "center";
          ctx.font = "1em " + fontFamily;

          for (let i = 1; i <= len; i++) {
               const angle = PI2 * (i / len) + angleCurrent;
               drawSegment(i - 1, lastAngle, angle);
               lastAngle = angle;
          }

          // Draw a center circle
          ctx.beginPath();
          ctx.arc(centerX, centerY, 40, 0, PI2, false);
          ctx.closePath();
          ctx.fillStyle = primaryColor || "black";
          ctx.lineWidth = 2;
          ctx.strokeStyle = contrastColor || "white";
          ctx.fill();

          // Draw first line of text
          ctx.font = "bold 0.8em " + fontFamily;
          ctx.fillStyle = contrastColor || "white";
          ctx.textAlign = "center";
          ctx.fillText("Beat", centerX, centerY - 8);

          // Draw second line of text
          ctx.fillText("the wheel", centerX, centerY + 13);
          ctx.stroke();

          // Draw outer circle
          ctx.beginPath();
          ctx.arc(centerX, centerY, 600, 0, PI2, false); // Use a numeric value for the radius
          ctx.closePath();
          ctx.lineWidth = 30;
          ctx.strokeStyle = "red";
          ctx.stroke();
     };

     const drawNeedle = () => {
          const ctx = canvasContext;
          ctx.lineWidth = 1;
          ctx.strokeStyle = contrastColor || "white";
          ctx.fillStyle = contrastColor || "white";
          ctx.beginPath();
          ctx.moveTo(centerX + 10, centerY - 40);
          ctx.lineTo(centerX - 10, centerY - 40);
          ctx.lineTo(centerX, centerY - 60);
          ctx.closePath();
          ctx.fill();
          const change = angleCurrent + Math.PI / 2;
          let i =
               segments.length -
               Math.floor((change / (Math.PI * 2)) * segments.length) -
               1;
          if (i < 0) i = i + segments.length;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "transparent";
          ctx.font = "bold 1em " + fontFamily;
          currentSegment = segments[i];
          isStarted &&
               ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);
     };

     const clear = () => {
          const ctx = canvasContext;
          ctx.clearRect(0, 0, 1000, 800);
     };
     return (
          <>
               <div id="wheel">
                    <canvas
                         id="canvas"
                         width="400px"
                         height="400px"
                         style={{
                              pointerEvents:
                                   isFinished && isOnlyOnce ? "none" : "auto",
                         }}
                    />
               </div>
               <div style={style.detailsDiv}>
                    <Text color={"#fff"} style={style.commonText}>
                         <FaInfoCircle size={"18px"} style={style.fontMargin} />
                         details
                    </Text>
                    <Text color={"#fff"} style={style.commonText}>
                         spin for{" "}
                         <HiOutlineCurrencyRupee
                              size={"18px"}
                              style={style.fontMargin}
                         />{" "}
                         {" 2,000 "}
                    </Text>
               </div>
               <button style={style.spinBtn} onClick={handleSpin}>
                    <span style={style.spinBtn2}>Spin</span>
               </button>
          </>
     );
};
export default WheelComponent;
