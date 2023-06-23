import "./navbar.css";
import Logo from "../images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import { useState } from "react";

const Navbar = () => {
  const [isNavShowing , setIsNavShowing] = useState(false)
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {links.map(({ name, path }, index) => {
            return (
              <>
                <li>
                  <NavLink
                    to={path}
                    key={name}
                    className={({ isActive }) => (isActive ? "active__nav" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
        <button className="nav__toggle_btn" onClick={()=>setIsNavShowing(!isNavShowing)}>

          {
            isNavShowing ? 'Close' : 'Menu'
          }
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
