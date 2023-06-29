import "./navbar.css";

import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { links } from "../../data.js";
import { useState } from "react";

const Navbar = () => {
  const [isNavShowing , setIsNavShowing] = useState(false)
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo">
          <img src="https://d11airhslbrx5o.cloudfront.net/static/logo.png" alt="Nav Logo" />
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
                    onClick={()=>setIsNavShowing(prev => !prev)}
                  >
                    {name}
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
        <button className="nav__toggle_btn" onClick={()=>setIsNavShowing(prev => !prev)}>

          {
            isNavShowing ? <CloseIcon /> : <MenuIcon />
          }
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
