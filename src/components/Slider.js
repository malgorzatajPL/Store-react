import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import SvgButton from "./Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
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
  right: ${(props) => props.direction === "right" && "20px"};
  cursor: pointer;
  opacity: 0.8;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 0.7s ease;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 90vh;
  position: relative;
  .data {
    width: 100vw;
    display: flex;
  }
`;

const ImgSlide = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const InfoSlide = styled.div`
  flex: 1;
  padding: 50px 90px 20px 0;
  height: 80%;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
}
`;
const TitleSlide = styled.h1`
  font-size: 60px;
  margin: 20px 0;
`;
const DescriptionSlide = styled.p`
  margin: 20px 0 40px 0;
  text-transform: uppercase;
  font-size: 22px;
`;

function Slider() {
  const [data, setData] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  const getAllData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {data ? (
          data.map((data) => {
            return (
              <>
                <Slide>
                  <div className="data" key={data.id}>
                    <Arrow direction="left" onClick={() => handleClick("left")}>
                      <ArrowBackIosNew />
                    </Arrow>
                    <ImgSlide>
                      <img
                        src={data.image}
                        alt="slider img"
                        style={{ width: "320px" }}
                      />
                    </ImgSlide>
                    <InfoSlide>
                      <TitleSlide>{data.title}</TitleSlide>
                      <DescriptionSlide>{data.description}</DescriptionSlide>
                      <SvgButton />
                    </InfoSlide>
                    <Arrow
                      direction="right"
                      onClick={() => handleClick("right")}
                    >
                      <ArrowForwardIos />
                    </Arrow>
                  </div>
                </Slide>
              </>
            );
          })
        ) : (
          <h3>No data yet</h3>
        )}
      </Wrapper>
    </Container>
  );
}
export default Slider;
