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
            <a href="#" className="navbar__mobile-menu-link">
              Home
            </a>
          </li>
          <li className="navbar__menu-item">
            <a href="#feature" className="navbar__mobile-menu-link">
              Features
            </a>
          </li>
          <li className="navbar__mobile-menu-item">
            <a href="#preview" className="navbar__mobile-menu-link">
              Previews
            </a>
          </li>
          <li className="navbar__mobile-menu-item">
            <a href="#details" className="navbar__mobile-menu-link">
              Details
            </a>
          </li>
          <li className="navbar__mobile-menu-item">
            <a href="#download" className="navbar__mobile-menu-link">
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarMobileMenu;
