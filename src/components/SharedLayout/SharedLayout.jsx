import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
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
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
