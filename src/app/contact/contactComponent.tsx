import FAQPage from "@/components/faqPage";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUsComponent = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-2">
          <img
            src="/contact_us_title.svg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </h1>
        <p className="text-center text-gray-600 mb-8">Get in Touch</p>
        <p className="text-center text-gray-600 mb-12">
          Wed love to hear from you! Whether you have a question, feedback, or
          need assistance with your order, our team is here to help.
        </p>

        <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-xl bg-contact-bg bg-cover">
          {/* Contact Information */}
          <div className="lg:w-1/3 bg-navy-900 text-white p-8 bg-contact-info-bg">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <Mail className="mr-2" />
                b2b@gmail.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" />
                0201850008
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" />
                Osu Oxford Street 67th St Street Osu Greater
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
              <button
                type="submit"
                className="bg-cyan-500 text-white px-6 py-2 rounded-md hover:bg-cyan-600 transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <FAQPage />
      </div>
    </div>
  );
};

export default ContactUsComponent;
