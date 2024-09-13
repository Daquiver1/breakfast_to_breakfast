// components/AboutUs.tsx
import Image from "next/image";

const AboutUsComponent: React.FC = () => {
  const teamMembers = [
    {
      name: "Tyler Davis",
      position: "CEO",
      image: "/about_us_title.svg",
    },
    {
      name: "Isabella Avery",
      position: "Executive Chef",
      image: "/about_us_human1.svg",
    },
    {
      name: "Mason Williams",
      position: "Head of Customer Experience",
      image: "/about_us_human1.svg",
    },
    {
      name: "Belinda Olsen",
      position: "Marketing Manager",
      image: "/about_us_human1.svg",
    },
    {
      name: "Alex Johnson",
      position: "Front of House Supervisor",
      image: "/about_us_human1.svg",
    },
    {
      name: "Grace Thompson",
      position: "Barista",
      image: "/about_us_human1.svg",
    },
  ];
  const ambianceImages = [
    { src: "/about_us_ambiance1.svg", alt: "Restaurant exterior at night" },
    { src: "/about_us_ambiance2.svg", alt: "Modern interior dining area" },
    { src: "/about_us_ambiance3.svg", alt: "Table setting" },
    { src: "/about_us_ambiance4.svg", alt: "Decorative plants and dishes" },
  ];
  return (
    <div className="flex flex-col items-center text-center p-5">
      {/* Header image with title */}
      <Image
        src="/about_us_title.svg"
        alt="About Us"
        width={265}
        height={112}
      />
      <div className="relative w-full">
        <Image
          src="/about_us_header.svg"
          alt="About Us"
          layout="responsive"
          width={646}
          height={200}
        />
      </div>
      <div className="w-full max-w-4xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Text */}
        <div className="flex-1 text-left mb-8 md:mb-0 md:mr-8">
          <h2 className="text-sm font-bold text-custom-blue mb-4">ABOUT US</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-deep-blue mb-4">
            Your Breakfast, Your Way!
          </h3>
          <p className="text-[#4b4b4b] text-sm md:text-base">
            In the heart of Osu, a culinary adventure began in 2018 with the
            birth of Breakfast for Breakfast. Founded by a group of passionate
            food enthusiasts, our journey is a testament to the belief that
            every meal should be a celebration, a moment to savor and remember.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="relative w-full md:w-1/2 aspect-square">
          <div className="absolute inset-0 bg-[#1e3a8a] rounded-full overflow-hidden">
            <Image
              src="/about_us1.svg"
              alt="Breakfast"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">Our Team</h2>
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Wake Up to Something Delicious
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                height={600}
                width={400}
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ambiance */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-sm font-bold text-custom-blue mb-4">
          Our Ambiance
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-deep-blue mb-4">
          Relax, Unwind, and Enjoy the Atmosphere
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={ambianceImages[0].src}
              alt={ambianceImages[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={ambianceImages[1].src}
                alt={ambianceImages[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={ambianceImages[2].src}
                  alt={ambianceImages[2].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={ambianceImages[3].src}
                  alt={ambianceImages[3].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Commitment*/}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-900 rounded-full absolute top-0 left-0 -z-10"></div>
              <img
                src="/about_us_passion.svg"
                alt="Chef preparing food"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
              COMMITMENT TO QUALITY
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Where Passion Meets Perfection in Every Bite
            </h1>
            <p className="text-gray-600">
              At Breakfast to Breakfast, we use only the freshest, locally
              sourced ingredients to ensure every dish is of the highest
              quality. Our dedication to excellence means you can always expect
              delicious, beautifully presented meals.
            </p>
          </div>
        </div>
      </div>

      {/* Join Us*/}
      <div className="bg-cyan-500 rounded-lg p-6 flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-white text-2xl font-bold mb-2">Join Us</h2>
          <p className="text-white text-sm mb-4">
            Come experience the best meals at Breakfast to Breakfast. Make a
            reservation or order today and enjoy a memorable dining experience.
            We look forward to serving you!
          </p>
          <button className="bg-navy-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Join us
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src="/about_us_cocktail.svg"
            alt="Colorful cocktails"
            className="w-32 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
