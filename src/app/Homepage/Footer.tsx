import Head from 'next/head';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="mt-[9rem] p-4 bg-[#FEFDF5]">
      <Head>
        <title>Breakfast To Breakfast</title>
        <meta name="description" content="Breakfast To Breakfast restaurant information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <header className="bg-white p-4 rounded shadow col-span-4 md:col-span-1">
            <Image src="/logo.png" alt="Breakfast To Breakfast Logo" width={50} height={50} />
            <h1 className="ml-4 text-2xl font-bold">Breakfast To Breakfast</h1>
          </header>

          <section className="bg-white p-4 rounded shadow col-span-4 md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Opening Hours</h2>
            <ul>
              <li>Sunday: 08:00am - 6:00pm</li>
              <li>Monday: 08:00am - 8:00pm</li>
              <li>Tuesday: 08:00am - 8:00pm</li>
              <li>Wednesday: 08:00am - 8:00pm</li>
              <li>Thursday: 08:00am - 8:00pm</li>
              <li>Friday: 08:00am - 8:00pm</li>
              <li>Saturday: 08:00am - 6:00pm</li>
            </ul>
          </section>

          <section className="bg-white p-4 rounded shadow col-span-4 md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>Address: Osu 6th St, Accra</p>
            <p>Phone: 020 880 0008</p>
            <p>Email: b2baccraght@gmail.com</p>
          </section>

          <section className="bg-white p-4 rounded shadow col-span-4 md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Feedback</h2>
            <p className="mb-4">Let us know what is on your mind. Send us your feedback</p>
            <form>
              <input className="w-full p-2 mb-4 border rounded" type="email" placeholder="Email" required />
              <textarea className="w-full p-2 mb-4 border rounded" placeholder="Your feedback" required></textarea>
              <button className="px-4 py-2 bg-slate-500 hover:bg-slate-600 text-white rounded" type="submit">Send</button>
            </form>
          </section>
        </div>

        <footer className="mt-8 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            {/* <a href="#"><Image src="/instagram.png" alt="Instagram" width={24} height={24} /></a>
            <a href="#"><Image src="/facebook.png" alt="Facebook" width={24} height={24} /></a>
            <a href="#"><Image src="/twitter.png" alt="Twitter" width={24} height={24} /></a> */}
          </div>
          <p>© 2018 - 2024</p>
        </footer>
      </main>
    </div>
  )
}
export default Footer;