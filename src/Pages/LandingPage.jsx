import styled from "styled-components";
import "../App.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
     const navigate = useNavigate();
     return (
          <Wrapper onClick={() => navigate("/user-register")}>
               <Container className="App">
                    <Image src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" />
               </Container>
               <TextWrapper>
                    <Title>WELCOME TO THE CLUB </Title>
                    <SubTitles>
                         {" "}
                         make payments. <br /> earn rewards.
                    </SubTitles>
               </TextWrapper>
          </Wrapper>
     );
}

export default LandingPage;

const Wrapper = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     margin: auto;
`;

const Container = styled.div`
     width: 100%;
     height: 100vh;
     margin: auto;
     background-image: url("./landing-page-img.jpg");
     background-position: center;
     background-repeat: no-repeat;
     background-size: contain;
     background-color: black;
     color: #ffff;
     position: relative;
`;
const Image = styled.img`
     width: 50px;
     height: auto;
     position: absolute;
     right: 15px;
     top: 15px;
`;

const TextWrapper = styled.div`
     color: #ffff;
     position: absolute;
     bottom: 100px;
     left: 30px;
`;
const Title = styled.h5`
     color: #cccc;
`;
const SubTitles = styled.h2`
     padding-top: 5px;
    
`;

