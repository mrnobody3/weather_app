import { Container } from "@mui/material";
import React from "react";
import NavBar from "../NavBar";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NavBar />
      </Container>
    </StyledHeader>
  );
};

export default Header;
