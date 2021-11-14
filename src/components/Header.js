import React from "react";
import styled from "styled-components";

import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";

const HeaderPrimary = styled.div`
  justify-content: space-between;
  position: relative;
  padding: 20px;
  display: flex;
`;

const Nav = styled.div`
  flex: 1;
  font-family: "Inconsolata", monospace;
  list-style-type: none;
  text-decoration: none;
  display: inline-block;
`;

const Logo = styled.div`
  font-family: "Pacifico", cursive;
  font-size: 28px;
  padding: 10px;
  text-align: center;
  color: #FE4A49;
  flex: 1;
`;
const CustomerDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Header = () => {
  return (
    <HeaderPrimary>
      <Nav>
        <MenuIcon sx={{ fontSize: "50px", padding: "5px" }}></MenuIcon>
      </Nav>
      <Logo>Example shop</Logo>
      <CustomerDetails>
        <Badge badgeContent={1} color='secondary'>
          <ShoppingBasketOutlinedIcon
            sx={{ fontSize: "40px", padding: "5px 0"}}
          />
        </Badge>
        <LoginIcon sx={{ fontSize: "40px", padding: "5px 20px" }} />
      </CustomerDetails>
    </HeaderPrimary>
  );
};

export default Header;
