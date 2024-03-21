import { NavLink } from "react-router-dom";
import { HeaderBox, HeaderContainer, NavList } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <NavLink to="/">CampersRental</NavLink>
        <nav>
          <NavList>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">favorites</NavLink>
            </li>
          </NavList>
        </nav>
      </HeaderBox>
    </HeaderContainer>
  );
};
