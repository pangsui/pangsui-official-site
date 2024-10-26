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
              <a href="#" className="navbar__menu-link">
                Home
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#features" className="navbar__menu-link">
                Portfolio
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#preview" className="navbar__menu-link">
                Publications
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#details" className="navbar__menu-link">
                Curriculum Vitae
              </a>
            </li>
            <li className="navbar__menu-item">
              <a href="#download" className="navbar__menu-link">
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
