import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import SecondSec from "./SecondSec";

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <SecondSec />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
