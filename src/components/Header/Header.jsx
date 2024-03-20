import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
