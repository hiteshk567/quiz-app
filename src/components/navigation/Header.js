import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Header.css";

const MainHeader = () => {
  return (
    <header className="main-header">
      <h1 className="main-navigation__title">
        <Link to="/">QUIZ APP</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <ul className="nav-links">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
