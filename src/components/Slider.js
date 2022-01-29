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
  height: 100vh;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

const ImgSlide = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  justify-content: center;
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

// const getAllData = () => {
//   const [data, setData] = useState();
//   axios
//     .get("https://fakestoreapi.com/products")
//     .then((response) => {
//       console.log(response.data);
//       setData(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const Slider = () => {
//   useEffect(() => {
//     getAllData();
//    }, []);
//   if (!image) return null;
//   return (
//     <div>
{
  /* <Container>
        <Arrow direction="left">
          <ArrowBackIosNew />
        </Arrow>
        <Wrapper>
          <Slide>
            <ImgSlide>
              <img src={image} alt="slider img" style={{ width: "250px" }} />
            </ImgSlide>
            <InfoSlide>
              <h2 className="title">{title}</h2>
              <p className="description">{description}</p>
              <SvgButton />
            </InfoSlide>
          </Slide>
        </Wrapper>
        <Arrow direction="right">
          <ArrowForwardIos />
        </Arrow>
      </Container> */
}
{
  /* 
      {data ? ( data.map((data) => {
return (
<div className="data" key={data.id}>
<h3>{data.name}</h3>
</div>
); })) : (
<h3>No data yet</h3>
)}
    </div>
  );
};

export default Slider; */
}

function Slider() {
  const [data, setData] = useState("");
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
    <>
              <Arrow direction="left">
        <ArrowBackIosNew />
      </Arrow>
              <Arrow direction="right">
                <ArrowForwardIos />
              </Arrow>
      
      {data ? (
        data.map((data) => {
          return (
            <>
              <Slide>
                <div className="data" key={data.id}>
                  <ImgSlide>
                    <img
                      src={data.image}
                      alt="slider img"
                      style={{ width: "250px" }}
                    />
                  </ImgSlide>
                  <InfoSlide>
                    <h3>{data.title}</h3>
                    <h3>{data.description}</h3>
                  </InfoSlide>
                </div>
                <SvgButton />
              </Slide>
            </>
          );
        })
      ) : (
        <h3>No data yet</h3>
      )}
    </>
  );
}
export default Slider;
