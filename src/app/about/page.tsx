import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AboutUsComponent from "./aboutComponent";

const About = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <AboutUsComponent />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
