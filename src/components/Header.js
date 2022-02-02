import React from "react";
import styled from "styled-components";

import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import { Category } from "./Category";

const HeaderPrimary = styled.div`
  justify-content: space-between;
  position: relative;
  padding: 20px;
  display: flex;
  align-items: center;
  .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root {
    font-family: "Inconsolata", monospace;
  }
`;

const Nav = styled.div`
  flex: 1;
  list-style-type: none;
  text-decoration: none;
  display: inline-block;
  padding-left:20px;
  coursor:pointer;
`;

const Logo = styled.div`
  font-family: "Pacifico", cursive;
  font-size: 28px;
  padding: 10px;
  text-align: center;
  color: #fe4a49;
  flex: 6;
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
      <Category />
      <Logo>Example shop</Logo>
      <CustomerDetails>
        <Badge badgeContent={1} color="secondary">
          <ShoppingBasketOutlinedIcon
            sx={{ fontSize: "40px", padding: "5px 0" }}
          />
        </Badge>
        <LoginIcon sx={{ fontSize: "40px", padding: "5px 20px" }} />
      </CustomerDetails>
    </HeaderPrimary>
  );
};
export default Header;
