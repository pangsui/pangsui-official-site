import NavBarMobileMenu from "./NavBarMobileMenu";
function Navbar() {
  return (
    <nav className="navbar">
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
                CV
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
