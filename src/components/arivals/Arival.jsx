import Card from "./../card/Card";
import "./arival.css";
import imgCard1 from "./../../img/cards/01.jpg";
import imgCard2 from "./../../img/cards/02.jpg";
import imgCard3 from "./../../img/cards/03.jpg";
function Arival() {
  return (
    <section className="arival">
      <div className="container">
        <h2 className="arival__title">NEW ARRIVALS</h2>
        <div className="arivals__content">
          <div className="arival__cards">
            <Card title="Hoodies & Sweetshirt" img={imgCard1} />
            <Card title="Coats & Parkas" img={imgCard2} />
            <Card title="Tees & T-Shirt" img={imgCard3} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Arival;
