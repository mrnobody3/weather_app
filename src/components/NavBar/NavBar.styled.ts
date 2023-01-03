import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLinkItem = styled(NavLink)`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.38;
  color: white;
  cursor: pointer;

  &:hover,
  &:focus,
  &.active {
    color: #0991ef;
    text-decoration: underline;
  }

  &.active {
    color: #6bb1dc;
    text-decoration: underline;
    cursor: default;
  }
`;
