import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBarMobileMenu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  function handlClick() {
    setToggleMenu(() => !toggleMenu);
  }
  return (
    <div className="navbar__mobile-menu">
      <div className="navbar__mobile-menu-toggle" onClick={handlClick}>
        <i className="fas fa-bars fa-2x"></i>
      </div>

      {/* <!-- Mobile Menu Items --> */}
      <div
        className={`navbar__mobile-menu-items${toggleMenu ? " active" : ""}`}
      >
        <ul className="navbar__mobil-menu-list">
          <li className="navbar__mobile-menu-item">
            <NavLink
              className="navbar__mobile-menu-link"
              onClick={handlClick}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink
              to="/portfolio"
              className="navbar__mobile-menu-link"
              onClick={handlClick}
            >
              portfolio
            </NavLink>
          </li>
          <li className="navbar__mobile-menu-item">
            <NavLink
              to="/publication"
              className="navbar__mobile-menu-link"
              onClick={handlClick}
            >
              Publications
            </NavLink>
          </li>
          <li className="navbar__mobile-menu-item">
            <NavLink
              to="/certification"
              className="navbar__mobile-menu-link"
              onClick={handlClick}
            >
              Certifications
            </NavLink>
          </li>
          <li className="navbar__mobile-menu-item">
            <NavLink
              to="/resume"
              className="navbar__mobile-menu-link"
              onClick={handlClick}
            >
              CV
            </NavLink>
          </li>
          <li className="navbar__mobile-menu-item">
            <NavLink
              to="/contact"
              className="navbar__mobile-menu-link"
              onClick={handlClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarMobileMenu;
