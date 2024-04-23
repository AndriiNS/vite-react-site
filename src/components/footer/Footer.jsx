import "./footer.css";
import FooterFbImg from "./../../img/icons/fot-fb.svg";
import FooterInstaImg from "./../../img/icons/fot-inst.svg";
import FooterTwitterImg from "./../../img/icons/for-tw.svg";
import FooterInImg from "./../../img/icons/for-in.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__social">
            <h2 className="footer__title">FASHION</h2>
            <p className="footer__text">Complete your style with awesome clothes from us.</p>
            <div className="footer__social-list">
              <a href="#!">
                <img src={FooterFbImg} alt="faceboock" />
              </a>
              <a href="#!">
                <img src={FooterInstaImg} alt="insta" />
              </a>
              <a href="#!">
                <img src={FooterTwitterImg} alt="twitter" />
              </a>
              <a href="#!">
                <img src={FooterInImg} alt="linked" />
              </a>
            </div>
          </div>
          <div className="footer__menu">
            <nav>
              <h2 className="compani__title">Company</h2>
              <ul className="footer__menu-compani">
                <li className="compani__item">
                  <a href="#!" className="compani__link">
                    About
                  </a>
                </li>
                <li className="compani__item">
                  <a href="#!" className="compani__link">
                    Contact us
                  </a>
                </li>
                <li className="compani__item">
                  <a href="#!" className="compani__link">
                    Support
                  </a>
                </li>
                <li className="compani__item">
                  <a href="#!" className="compani__link">
                    Careers
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <h2 className="quik__title">Quick Link</h2>
              <ul className="footer__menu-quik">
                <li className="quik__item">
                  <a href="#!" className="quik__link">
                    Share Location
                  </a>
                </li>
                <li className="quik__item">
                  <a href="#!" className="quik__link">
                    Orders Tracking
                  </a>
                </li>
                <li className="quik__item">
                  <a href="#!" className="quik__link">
                    Size Guide
                  </a>
                </li>
                <li className="quik__item">
                  <a href="#!" className="quik__link">
                    FAQs
                  </a>
                </li>
              </ul>
            </nav>
            <nav>
              <h2 className="legal__title">Legal</h2>
              <ul className="Legal__list">
                <li className="Legal__item">
                  <a href="#!" className="Legal__link">
                    Terms & conditions
                  </a>
                </li>
                <li className="Legal__item">
                  <a href="#!" className="Legal__link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
