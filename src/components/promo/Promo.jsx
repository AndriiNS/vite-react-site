import "./promo.css";
import promoImg from "./../../img/header-img.jpg";
function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <h2 className="promo__title">
              <span className="for-lets">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className="form-iniq">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </h2>
            <p className="promo__descr">Live for Influential and Innovative fashion!</p>
            <div className="promo__inner">
              <a href="#!" className="promo__btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Promo;
