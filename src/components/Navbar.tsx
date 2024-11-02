import { useEffect, useState } from "react";
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
          <a href="/">
            <img src="image/logo.jpeg" alt="Pangsui Logo image" />
          </a>
        </div>
        <div className="navbar__menu">
          <ul className="navbar__menu-list">
            <li className="navbar__menu-item">
              <a href="#home" className="navbar__menu-link">
                Home
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#portfolio" className="navbar__menu-link">
                Portfolio
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#publications" className="navbar__menu-link">
                Publications
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#certifications" className="navbar__menu-link">
                Certifications
              </a>
            </li>

            <li className="navbar__menu-item">
              <a href="#cv" className="navbar__menu-link">
                Resume
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#contact" className="navbar__menu-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <NavBarMobileMenu />
      </div>
    </nav>
  );
}

export default Navbar;
