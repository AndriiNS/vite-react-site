import Card from "../card/Card";
import "./favourite.css";
import img04 from "./../../img/cards/04.jpg";
import img05 from "./../../img/cards/05.jpg";

function Favourite() {
  return (
    <section className="favourite">
      <div className="container">
        <div className="favourite__content">
          <h2 className="favourite__title">Young’s Favourite</h2>
          <div className="favourite__inner">
            <Card title="Trending on instagram" img={img04} />
            <Card title="All Under $40" img={img05} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Favourite;
