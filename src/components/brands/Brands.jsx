import "./brands.css";
import HM from "./../../img/brands/HM.png";
import Obey from "./../../img/brands/Obey.png";
import Shopify from "./../../img/brands/Shopify.png";
import Lacoste from "./../../img/brands/Lacoste.png";
import Levis from "./../../img/brands/Levis.png";
import amazon from "./../../img/brands/Amazon.png";
function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands__content">
          <ul className="brands__list">
            <li className="brands__item">
              <a href="#!" className="brends__link">
                <img src={HM} alt="h/m" />
              </a>
            </li>
            <li className="brands__item">
              <a href="#!" className="brends__link">
                <img src={Obey} alt="Obey" />
              </a>
            </li>
            <li className="brands__item">
              <a href="#!" className="brends__link">
                <img src={Shopify} alt="Shopify" />
              </a>
            </li>
            <li className="brands__item">
              <a href="#!" className="brends__link">
                <img src={Lacoste} alt="Lacoste" />
              </a>
            </li>
            <li className="brands__item">
              <a href="#!" className="brends__link">
                <img src={Levis} alt="Levis" />
              </a>
            </li>
            <li className="brands__item">
              <a href="#!" className="brends__link">
                <img src={amazon} alt="amazon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Brands;
