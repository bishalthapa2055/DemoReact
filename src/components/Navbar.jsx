import "./navbar.css";
import Logo from "../images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container" >
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className="nav__links">
          {links.map(({ name, path }, index) => {
            return (
              <>
                <li>
                  <NavLink to={path} key={name}>{name}</NavLink>
                </li>
              </>
            );
          })}
        </ul>
        <button className="nav__toggle_btn">Shop</button>
      </div>
    </nav>
  );
};

export default Navbar;
