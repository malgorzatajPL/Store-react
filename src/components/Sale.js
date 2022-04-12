import React from "react";
import styled from "styled-components";
import { device } from "../media queries/mediaQueries";
const SaleStyle = styled.section`
  display: flex;
  width: 100%;
  background-color: #533558;
  color: #fff;
  justify-content: space-around;
  margin: 100px 0;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
  img {
    @media ${device.mobileS} {
      width: 300px;
      margin:0 auto;
    }
    @media ${device.tablet} {
      width: 400px;
      margin:initial;
    }
  }
  .content-sale {
    padding: 40px;
    font: caption;
    display: flex;
    flex-direction: column;
    @media ${device.mobileS} {
      text-align: center;
    }
    @media ${device.tablet} {
      text-align: inherit;
    }
    h3 {
      font-size: 40px;
    }
    p {
      font-size: 24px;
    }
  }
`;

export const Sale = () => {
  return (
    <SaleStyle>
      <div className='content-sale'>
        <h3>Fliquet ipsum finibus eget</h3>
        <p>
          Nunc non dolor facilisis, vehicula urna ut, feugiat nibh. Mauris
          suscipit scelerisque efficitur.
        </p>
      </div>
      <img src='./sale.png' width={400} />
    </SaleStyle>
  );
};
