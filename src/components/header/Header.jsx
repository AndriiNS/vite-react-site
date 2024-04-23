import logoHeader from "./../../img/icons/logo.svg";
import "./header.css";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoHeader} alt="logo" />
            <span>FASHION</span>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  CATALOGUE
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  FASHION
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  FAVOURITE
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#" className="header__nav-link">
                  LIFESTYLE
                </a>
              </li>
              <button className="header__nav-btn">SIGN UP</button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
