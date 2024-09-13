import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ContactUsComponent from "./contactComponent";

const Contact = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <ContactUsComponent />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
