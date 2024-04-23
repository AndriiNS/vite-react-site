import "./download.css";
import appStoreImg from "./../../img/brands/app-store.png";
import googlePlayImg from "./../../img/brands/google-play.png";
import phoneImg from "./../../img/phone.png";
function Download() {
  return (
    <section className="download">
      <div className="container">
        <div className="download__content">
          <div className="download__text">
            <h2 className="download__title">DOWNLOAD APP & GET THE VOUCHER!</h2>
            <p className="download__descr">
              Get 30% off for first transaction using Rondovision mobile app for now.
            </p>
            <div className="download__text-box">
              <img src={appStoreImg} alt="app-store" />
              <img src={googlePlayImg} alt="google-play" />
            </div>
          </div>
          <div className="download__img">
            <img src={phoneImg} alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Download;
