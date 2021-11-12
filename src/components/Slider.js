import React from "react";
import styled from "styled-components";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

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
left: ${props=> props.direction === 'left' && '10px'};
right: ${props=> props.direction === 'right' && '10px'};
`;

const Slider = () => {
  return (
    <div>
      <Container>
        <Arrow direction='left'>
          <ArrowBackIosNew />
        </Arrow>
          <Arrow direction='right'>
          <ArrowForwardIos />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
