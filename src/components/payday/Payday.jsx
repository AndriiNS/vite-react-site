import PaydayImg from "./../../img/payday-img.jpg";
import "./payday.css";
function Payday() {
  return (
    <section className="payday">
      <div className="container">
        <div className="payday__content">
          <div className="payday__img">
            <img src={PaydayImg} alt="img" />
          </div>
          <div className="payday__text">
            <h2 className="payday__title">
              <span className="for-lets">
                <span>PAYDAY</span>
              </span>
              SALE NOW
            </h2>
            <p className="payday__text">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <p className="payday__text">
              <b>1 June - 10 June 2021</b>*Terms & Conditions apply
            </p>
            <a className="payday__btn" href="#!">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Payday;
