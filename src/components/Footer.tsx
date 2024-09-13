import Head from "next/head";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="mt-[9rem] p-4 bg-deep-blue">
      <Head>
        <title>Breakfast To Breakfast</title>
        <meta
          name="description"
          content="Breakfast To Breakfast restaurant information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-white">
          {" "}
          {/* Applied text-white here */}
          <header className="p-4 col-span-4 md:col-span-1 flex items-start">
            <Image
              src="/logo.png"
              alt="Breakfast To Breakfast Logo"
              width={50}
              height={50}
            />
            <h1 className="ml-4 text-[1rem] font-bold mt-[1rem]">
              Breakfast To Breakfast
            </h1>
          </header>
          <section className="p-4 col-span-4 md:col-span-1">
            <h2 className="text-[1rem] font-semibold mb-4">Opening Hours</h2>
            <ul>
              <li className="text-[0.9rem] text-white mb-[1rem]">
                Sunday: 08:00am - 6:00pm
              </li>
              <li className="text-[0.9rem] text-white mb-[1rem]">
                Monday: 08:00am - 8:00pm
              </li>
              <li className="text-[0.9rem] text-white mb-[1rem]">
                Tuesday: 08:00am - 8:00pm
              </li>
              <li className="text-[0.9rem] text-white mb-[1rem]">
                Wednesday: 08:00am - 8:00pm
              </li>
              <li className="text-[0.9rem] text-white mb-[1rem]">
                Thursday: 08:00am - 8:00pm
              </li>
              <li className="text-[0.9rem] text-white mb-[1rem]">
                Friday: 08:00am - 8:00pm
              </li>
              <li className="text-[0.9rem] text-white mb-[1rem]">
                Saturday: 08:00am - 6:00pm
              </li>
            </ul>
          </section>
          <section className="p-4 col-span-4 md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-white mb-[0.5rem]">Address: Osu 6th St, Accra</p>
            <p className="text-white mb-[0.5rem]">Phone: 020 880 0008</p>
            <p className="text-white mb-[0.5rem]">
              Email: b2baccraght@gmail.com
            </p>
          </section>
          <section className="p-4 col-span-4 md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Feedback</h2>
            <p className="text-white mb-4">
              Let us know what is on your mind. Send us your feedback
            </p>
            <form>
              <input
                className="w-full p-2 mb-4 border rounded"
                type="email"
                placeholder="Email"
                required
              />
              <textarea
                className="w-full p-2 mb-4 border rounded"
                placeholder="Your feedback"
                required
              ></textarea>
              <button
                className="px-4 py-2 bg-slate-500 hover:bg-slate-600 text-white rounded"
                type="submit"
              >
                Send
              </button>
            </form>
          </section>
        </div>

        <footer className="h-[60px] flex justify-center items-center bg-custom-blue text-white">
          <p>© 2018 - 2024</p>
        </footer>
      </main>
    </div>
  );
};
export default Footer;
