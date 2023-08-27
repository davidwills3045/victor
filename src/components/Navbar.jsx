// import { Link } from 'react-router-dom'
// import { FcLibrary } from "react-icons/fc";
import { useState } from "react";

import logo from "../images/Logo.svg";

export const Navbar = () => {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={nav ? "nav active" : "nav"}>
        <a href="#" className="logo1">
          <img src={logo} alt="" />
        </a>

        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li className="active">
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">What We Do</a>
          </li>
          <img src={logo} alt="logo" className="logo" />
          <li>
            <a href="#">App Features</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
