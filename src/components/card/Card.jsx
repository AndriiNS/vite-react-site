import "./card.css";
import arrow from "./../../img/icons/Arrow.svg";

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, img } = props;
  return (
    <div className="card">
      <a href="#!" className="card__link"></a>
      <img className="card__img" src={img} alt="img" />
      <div className="card__inner">
        <div className="card__text">
          <h3 className="card__text-title">{title} </h3>
          <p className="card__text-descr">Explore Now!</p>
        </div>
        <div className="card__btn">
          <button>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
