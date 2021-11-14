import React from "react";
import styled from "styled-components";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import SvgButton from "./Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: pink;
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f7f2f7;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.8;
`;

const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Image = styled.image`
  height: 80%;
`;
const ImgSlide = styled.div`
  flex: 1;
  height: 100%;
`;

const InfoSlide = styled.div`
  flex: 1;
  padding: 50px;
  height: 80%;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
}
`;
const TitleSlide = styled.h1`
  font-size: 70px;
  margin: 20px 0;
`;
const DescriptionSlide = styled.p`
  margin: 20px 0;
  text-transform: uppercase;
  font-size: 24px;
`;

const Slider = () => {
  return (
    <div>
      <Container>
        <Arrow direction='left'>
          <ArrowBackIosNew />
        </Arrow>
        <Wrapper>
          <Slide>
            <ImgSlide>
              <Image />
            </ImgSlide>
            <InfoSlide>
              <TitleSlide>SALE</TitleSlide>
              <DescriptionSlide>
                Neque porro quisquam est qui dolorem
              </DescriptionSlide>

              <SvgButton />
            </InfoSlide>
          </Slide>
        </Wrapper>
        <Arrow direction='right'>
          <ArrowForwardIos />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
