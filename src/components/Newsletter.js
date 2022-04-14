import React from "react";
import styled from "styled-components";
import { device } from "../media queries/mediaQueries";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
const NewsletterStyle = styled.section`
  display: flex;
  width: 100%;
  background-color: #3d5a5c;
  color: #fff;
  justify-content: space-around;
  margin: 100px 0;
  flex-direction: column;
 
  img {
    @media ${device.mobileS} {
      width: 300px;
      margin: 0 auto;
    }
    @media ${device.tablet} {
      width: 400px;
      margin: initial;
    }
  }
  .content-newsletter {
    padding: 40px;
    font: caption;
    display: flex;
    flex-direction: column;
    text-align: center;
    .title-newsletter {
      font-size: 50px;
    }
    .text-newsletter {
      font-size: 24px;
      line-height: 1.5;
      padding-bottom: 20px;
    }
    .input-newsletter {
      display: flex;
      justify-content: center;
    }
  }
`;

const InputNewsletter = styled.input`
  border: none;
  width: 150px;
  transition: width 0.35s ease-in-out;
  padding: 0 15px;
  &:focus {
    outline: none;
    width: 250px;
  }
`;

export const Newsletter = () => {
  return (
    <NewsletterStyle>
      <div className='content-newsletter'>
        <h2 className='title-newsletter'>Newsletter</h2>
        <p className='text-newsletter'>Neque porro quisquam.</p>
        <div className='input-newsletter'>
          <InputNewsletter placeholder='Your email' type='text' />
          <DoubleArrowIcon
            style={{
              backgroundColor: "#fff",
              color: "#3d5a5c",
              fontSize: "2em",
              padding: "5px",
            }}
          />
        </div>
      </div>
    </NewsletterStyle>
  );
};
