import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MenuComponent from "./menuComponent";

const Menu = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <MenuComponent />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
