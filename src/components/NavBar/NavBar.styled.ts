import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/device";

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media ${device.desktop} {
    flex-direction: row;
    gap: 80px;
  }
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLinkItem = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.38;
  color: ${({ theme }) => theme.colors.black};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.accent};
    transition: color ${(p) => p.theme.animation.cubic};
    text-decoration: underline;
  }
`;
