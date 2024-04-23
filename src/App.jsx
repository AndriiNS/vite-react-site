import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Arival from "./components/arivals/Arival";
import Payday from "./components/payday/Payday";
import Favourite from "./components/favourite/Favourite";
import Download from "./components/download/Download";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arival />
      <Payday />
      <Favourite />
      <Download />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
