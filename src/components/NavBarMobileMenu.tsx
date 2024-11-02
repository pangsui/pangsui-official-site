import { useState } from "react";

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
            <a
              href="#home"
              className="navbar__mobile-menu-link"
              onClick={handlClick}
            >
              Home
            </a>
          </li>
          <li className="navbar__menu-item">
            <a
              href="#portfolio"
              className="navbar__mobile-menu-link"
              onClick={handlClick}
            >
              portfolio
            </a>
          </li>
          <li className="navbar__mobile-menu-item">
            <a
              href="#publications"
              className="navbar__mobile-menu-link"
              onClick={handlClick}
            >
              Publications
            </a>
          </li>
          <li className="navbar__mobile-menu-item">
            <a
              href="#certifications"
              className="navbar__mobile-menu-link"
              onClick={handlClick}
            >
              Certifications
            </a>
          </li>
          <li className="navbar__mobile-menu-item">
            <a
              href="#cv"
              className="navbar__mobile-menu-link"
              onClick={handlClick}
            >
              Resume
            </a>
          </li>
          <li className="navbar__mobile-menu-item">
            <a
              href="#contact"
              className="navbar__mobile-menu-link"
              onClick={handlClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarMobileMenu;
