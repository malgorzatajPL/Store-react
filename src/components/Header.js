import React from "react";
import styled from "styled-components";
import { device } from "../media queries/mediaQueries";
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
  @media ${device.mobileS} {
    flex-direction: column;
    position: sticky;
    z-index: 10;
    position: fixed;
    background-color: #fbfbfb;
    box-shadow: 7px 5px 5px rgb(0 0 0 / 10%);
    width: -webkit-fill-available;
  }
  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
  }
  .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root {
    font-family: "Inconsolata", monospace;
  }
`;

const Nav = styled.div`
  flex: 1;
  list-style-type: none;
  text-decoration: none;
  display: inline-block;
  padding-left: 20px;
  coursor: pointer;
  @media ${device.mobileS} {
    display: flex;
    padding: 0;
  }
  @media ${device.tablet} {
    display: contents;
  }
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
  @media ${device.mobileS} {
    padding-top: 30px;
  }
  @media ${device.tablet} {
    padding-top: 0;
    padding-left:20px;
  }
`;

const Header = () => {
  return (
    <HeaderPrimary>
      <Nav>
        <MenuIcon sx={{ fontSize: "50px", padding: "5px" }}></MenuIcon>
        <Logo>Example shop</Logo>
      </Nav>
      <Category />
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
