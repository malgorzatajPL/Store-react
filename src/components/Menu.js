import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import { MenuItem, Text40 } from "./CustomText";

const MenuStyle = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  align-items: center;
  display: flex;
  justify-content: center;
  #results {
    position: absolute;
    transform: translateX(-1000%);
    -webkit-transform: translateX(-1000%);
    ul {
      display: flex;
      flex-direction: column;
    }
  }
  .fade {
    animation: slide-in 0.5s forwards;
    -webkit-animation: slide-in 0.5s forwards;
  }
  @keyframes slide-in {
    100% {
      transform: translateX(0%);
    }
  }

  @-webkit-keyframes slide-in {
    100% {
      -webkit-transform: translateX(0%);
    }
  }
`;

const Menu = () => {
  const [showMore, setShowMore] = useState(false);
  const [fade, setFade] = useState(false);
  console.log(fade);
  const MoreMenu = () => (
    <MenuStyle>
      <div
        id='results'
        className={fade ? "fade search-results" : "search-results"}>
        <div>
          <ul>
            <Text40>
              <MenuItem>
                <a href='#'>Home</a>
              </MenuItem>
            </Text40>
            <Text40>
              <MenuItem>
                <a href='#'>About Us</a>
              </MenuItem>
            </Text40>
            <Text40>
              <MenuItem>
                <a href='#'>Merch</a>
              </MenuItem>
            </Text40>
            <Text40>
              <MenuItem>
                <a href='#'>Contact</a>
              </MenuItem>
            </Text40>
          </ul>
        </div>
      </div>
    </MenuStyle>
  );
  return (
    <>
      {showMore ? <MoreMenu /> : null}
      <MenuIcon
        sx={{ fontSize: "50px", padding: "5px" }}
        style={{ lineHeight: "4", position: "absolute", top: "15px" }}
        onClick={() => setShowMore(!showMore) || setFade(!fade)}
      />
    </>
  );
};

export default Menu;
