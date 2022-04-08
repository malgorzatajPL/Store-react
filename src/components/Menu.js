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
  ul {
    display: flex;
    flex-direction: column;
  }
`;

const Menu = () => {
  const [showMore, setShowMore] = useState(false);
  const MoreAddons = () => (
    <MenuStyle>
      <div
        id='results'
        className='search-results'
        style={{
          transition: "transform 1s ease-in-out",  transform: 'translateY(-10%)'
        }}>
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

  function handleClick() {
    setShowMore({ showMore: !showMore });
  }

  return (
    <>
      {showMore ? <MoreAddons /> : null}
      <MenuIcon
        sx={{ fontSize: "50px", padding: "5px" }}
        style={{ lineHeight: "4", position: "absolute", top: "15px" }}
        onClick={() => setShowMore(!showMore)}
      />
    </>
  );
};

export default Menu;
