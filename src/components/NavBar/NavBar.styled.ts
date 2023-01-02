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
  color: #1c1c1c;
  cursor: pointer;

  &:hover,
  &:focus,
  &.active {
    color: #ff5c1f;
    text-decoration: underline;
  }

  &.active {
    color: #c51313;
    text-decoration: underline;
    cursor: default;
  }
`;
