import { NavList, NavListItem, NavLinkItem } from "./NavBar.styled";

const NavBar = () => {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <NavLinkItem to="/">Home</NavLinkItem>
        </NavListItem>
        <NavListItem>
          <NavLinkItem to="/weather">Weather</NavLinkItem>
        </NavListItem>
      </NavList>
    </nav>
  );
};
export default NavBar;
