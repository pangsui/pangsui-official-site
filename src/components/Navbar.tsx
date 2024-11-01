import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBarMobileMenu from "./NavBarMobileMenu";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled past 50px (adjust as needed)
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__container container">
        <div className="navbar__logo">
          <NavLink to="/">
            <img src="image/logo.jpeg" alt="Pangsui Logo image" />
          </NavLink>
        </div>
        <div className="navbar__menu">
          <ul className="navbar__menu-list">
            <li className="navbar__menu-item">
              <NavLink className="navbar__menu-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="navbar__menu-item">
              <NavLink to="/portfolio" className="navbar__menu-link">
                Portfolio
              </NavLink>
            </li>
            <li className="navbar__menu-item">
              <NavLink to="/publication" className="navbar__menu-link">
                Publications
              </NavLink>
            </li>
            <li className="navbar__menu-item">
              <NavLink to="/certification" className="navbar__menu-link">
                Certifications
              </NavLink>
            </li>

            <li className="navbar__menu-item">
              <NavLink to="/resume" className="navbar__menu-link">
                Resume
              </NavLink>
            </li>
            <li className="navbar__menu-item">
              <NavLink to="/contact" className="navbar__menu-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <NavBarMobileMenu />
      </div>
    </nav>
  );
}

export default Navbar;
