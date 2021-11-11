import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";
import styled from "styled-components";

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
  color: #626262;
`;

const Logo = styled.div`
  font-family: "Pacifico", cursive;
  font-size: 28px;
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
      <Logo>Example shop</Logo>
      <Nav>
        
      </Nav>
      <CustomerDetails>
        <ShoppingBasketOutlinedIcon sx={{ fontSize: "40px", padding: "5px" }} />
        <LoginIcon sx={{ fontSize: "40px", padding: "5px" }} />
      </CustomerDetails>
    </HeaderPrimary>
  );
};

export default Header;
