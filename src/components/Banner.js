import React from "react";
import styled from "styled-components"
import {device} from "../media queries/mediaQueries"
const BannerStyle = styled.section`
  padding: 0 40px 20px 40px;
  text-align: center;
  @media ${device.mobileS} { 
padding-top:300px;
  }
  @media ${device.tablet} { 
   padding-top:150px; 
  }
  h3 {
    font-family: "Allura", cursive;
    font-size: 70px;
    margin-top: 0;
    @media ${device.mobile} {
      font-size:40px;
    }
  }
  p {
    padding: 0 60px 60px 60px;
    line-height: 2;
    @media ${device.mobileS} { 
    padding:0;
  }
  }
`;

export const Banner = () => {
  return (
    <BannerStyle>
      <h3>Fusce tellus nulla</h3>
      <p>
        Vestibulum tempus, metus non tempor vulputate, leo augue hendrerit arcu,
        non vulputate leo mauris at nibh. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Morbi tempus auctor
        eros. Nulla cursus enim a porta venenatis. Nunc non dolor facilisis,
        vehicula urna ut, feugiat nibh. Mauris suscipit scelerisque efficitur.
        Aliquam lectus nisi, pretium in scelerisque ac, vulputate id mauris. Sed
        feugiat est turpis, fringilla aliquet ipsum finibus eget.
      </p>
    </BannerStyle>
  );
};
