import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
} from "lucide-react";
import Carousel from "../Genaral/Carousel";
import { motion } from "framer-motion";
import Testimonials from "../Genaral/Testimonial";
import FAQ from "../Genaral/FAQ";
import CardCarousel from "../Genaral/CardsCarousel";
import ImageGrid from "../Genaral/ImageGrid";
import AllReligion from "../Genaral/AllReligion";
import { person_name, phone_number, whatsapp_number } from "../Genaral/secret";
import VashikaranGrid from "../Genaral/VashikaranGrid";

const Home = () => {
  return (
    <div
      className="flex flex-col w-full h-full 
     bg-gradient-to-tr from-purple-700 via-violet-800 to-fuchsia-900

"
    >
      <Carousel />
      {/* <AllReligion /> */}
      <VashikaranGrid />
      <ImageGrid />
      <CardCarousel />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;

const Problems = () => {
  const problems = [
    {
      title: "Lost Love Back",
      desc: "Available via WhatsApp & Call. Speak directly for guidance and clarity.",
      img: "https://i.pinimg.com/736x/9e/62/89/9e6289902fb93c22b7245c4a72ab355d.jpg",
    },
    {
      title: "Marriage Problem Solution",
      desc: "Astrology-based guidance to resolve disputes and restore harmony.",
      img: "https://i.pinimg.com/1200x/65/b5/7a/65b57ad4bc6f7bc20fcbd8ea7bfe3191.jpg",
    },
    {
      title: "Vashikaran Specialist",
      desc: "Traditional spiritual consultation focused on relationship balance.",
      img: "https://i.pinimg.com/736x/d1/7b/6e/d17b6e6bbe4cb76812aea53029b0182d.jpg",
    },
  ];

  const reverseProblems = [...problems].reverse();

  return (
    <motion.section
      className="
        relative w-full py-24 px-6
        bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]
        overflow-hidden
      "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.25),transparent_60%)]" />

      <div className="relative z-10 grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {reverseProblems.map((problem, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -12 }}
            className="
              group rounded-3xl overflow-hidden
              bg-gradient-to-br from-fuchsia-600 via-rose-500 to-purple-700
              p-[2px] shadow-2xl
              hover:shadow-fuchsia-500/50
              transition-all
            "
          >
            {/* Inner Card */}
            <div className="bg-black/80 backdrop-blur-xl rounded-3xl h-full flex flex-col">
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={problem.img}
                  alt={problem.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition-transform duration-700
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <h3
                  className="
                    text-2xl font-extrabold mb-3
                    bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400
                    bg-clip-text text-transparent
                    montserrat
                  "
                >
                  {problem.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed poppins">
                  {problem.desc}
                </p>
              </div>

              {/* CTA */}
              <div className="pb-6 flex justify-center">
                <a
                  href={`https://wa.me/${whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="
                      flex items-center gap-2
                      px-8 py-3 rounded-full
                      font-semibold text-white
                      bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600
                      shadow-lg shadow-pink-500/40
                      hover:scale-105 hover:shadow-pink-500/70
                      transition-all
                    "
                  >
                    <Phone className="w-4 h-4" />
                    Online Chat
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const AboutAstrologer = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-200 via-red-200 to-pink-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div>
          <button className="bg-red-700 text-white px-5 py-2 rounded-full mb-6 text-sm md:text-base font-bold montserrat shadow-lg hover:scale-105 transition-transform">
            LET'S KNOW ABOUT
          </button>

          <h2 className="text-3xl md:text-5xl font-extrabold text-red-800 mb-6 montserrat drop-shadow-lg">
            {person_name}
          </h2>

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-4 open-sans">
            The world-famous astrologer{" "}
            <span className="font-bold text-red-600">{person_name}</span>{" "}
            provides powerful solutions for all life problems. Trained by his
            father and grandfather, he brings decades of experience and accurate
            guidance to his clients.
          </p>

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed open-sans">
            Renowned for understanding the core of every problem, he ensures
            complete satisfaction and lasting solutions. People from all over
            the world trust his advice for love, career, family, and spiritual
            guidance.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center relative group">
          <div className="relative w-full h-[450px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://i.pinimg.com/736x/ea/1d/12/ea1d121d1a00aec32b93a79d6bb72ae8.jpg"
              alt="Astrologer Banner"
              className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 rounded-3xl group-hover:bg-black/30 transition"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AstrologyServices = () => {
  const services = [
    {
      title: "Breakup Problem",
      desc: "Breakup Problem is very common in today's generation and if you are also going through the same then do use astrology to keep such separation problems far away.",
      img: "https://i.pinimg.com/736x/1c/77/2c/1c772cd72354da24308771d64fc70d02.jpg",
    },
    {
      title: "Gf/Bf Dispute",
      desc: "Gf/Bf Dispute always is a stressful situation. Astrological remedies help to keep your relationship smooth and healthy.",
      img: "https://i.pinimg.com/736x/a9/63/0d/a9630de48cbdf2fe602f0707e7e5a490.jpg",
    },
    {
      title: "Love Problem",
      desc: "It is not easy to come out from a Love Problem but astrology can provide a better path to keep love alive in relationships.",
      img: "https://i.pinimg.com/736x/04/f5/8b/04f58b8fa673e305280ffbefc464ed74.jpg",
    },
    {
      title: "Family Problem",
      desc: "When you want to get rid of Family Problem, use astrological remedies that bring peace and positivity at home.",
      img: "https://i.pinimg.com/1200x/65/90/34/6590344e50ed6a28c5baf17159f702fd.jpg",
    },
  ];
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-rose-50 via-pink-50 to-purple-100">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold montserrat mb-12">
          <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
            Our Other Astrology Services
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/70 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pink-300/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                <h3 className="absolute bottom-3 left-4 text-lg font-bold text-white drop-shadow-md montserrat">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <p className="text-gray-700 text-sm open-sans mb-5 leading-relaxed">
                  {service.desc}
                </p>

                {/* Button */}
                <a href={`tel:${phone_number}`}>
                  <button className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 shadow-md hover:shadow-lg hover:scale-105 transition">
                    <Phone className="w-4 h-4" />
                    Call us now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AstrologyServicesModern = () => {
  const services = [
    {
      title: "World Famous Vashikaran Specialist",
      img: "https://i.pinimg.com/736x/f4/dd/70/f4dd70b40b2060a6e0c9f81c5da1d137.jpg",
    },
    {
      title: "Marriage Problems Specialist",
      img: "https://astrologerdeepaksharma.in/images/s2.png",
    },
    {
      title: "Husband Wife Dispute",
      img: "https://astrologerdeepaksharma.in/images/s1.png",
    },
    {
      title: "Ex Love Back Expert",
      img: "https://astrologerdeepaksharma.in/images/s3.png",
    },
  ];
  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-100">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold montserrat mb-14">
          <span className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
            ✨ Best Astrology Services ✨
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/70 backdrop-blur-xl rounded-3xl border border-pink-200/50 shadow-xl hover:shadow-2xl hover:shadow-pink-400/40 overflow-hidden transition-transform hover:-translate-y-3 duration-500"
            >
              {/* Image */}
              <div className="flex justify-center mt-8">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-pink-400 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-orange-400/10 to-transparent opacity-70 mix-blend-overlay"></div>
                </div>
              </div>

              {/* Text */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold montserrat mb-4 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                  {service.title}
                </h3>

                {/* Call Button */}
                <a href={`tel:${phone_number}`}>
                  <button className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-semibold text-white shadow-lg bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 hover:shadow-xl hover:shadow-pink-400/60 hover:scale-105 transition">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllServicesModern = () => {
  const services = [
    {
      title: "Ex Love Back",
      icon: Heart,
      desc: "Astrological remedies to bring your ex back with love & trust.",
    },
    {
      title: "Court Case Solution",
      icon: Scale,
      desc: "Effective solutions for legal & court-related issues.",
    },
    {
      title: "Family Problem",
      icon: Users,
      desc: "Resolve disputes & bring peace at home with astrology.",
    },
    {
      title: "Business Problem",
      icon: Briefcase,
      desc: "Boost your career & business success with remedies.",
    },
    {
      title: "Childless Couple",
      icon: Users,
      desc: "Astrological remedies to bless couples with children.",
    },
  ];
  return (
    <div className="relative bg-gradient-to-tr from-rose-100 via-amber-50 to-orange-100 py-20 px-6 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-600 to-orange-500 mb-14 drop-shadow-lg">
          🔮 Explore Our Astrology Services 🔮
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <div
              key={id}
              className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-rose-100 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
            >
              {/* Icon or Image */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 montserrat group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed open-sans">
                {service.desc}
              </p>

              {/* Button */}
              <a href={`tel:${phone_number}`}>
                <button className="roboto flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-red-400/50 hover:scale-105 transition-all">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function HomeLastDesign() {
  return (
    <section className="relative bg-gradient-to-tr from-rose-50 via-orange-50 to-yellow-100 py-20 px-6 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src="https://i.pinimg.com/736x/00/1d/bb/001dbb9f0f876f5b467b2c74d8fcf23b.jpg"
              alt={person_name}
              className="w-80 h-80 rounded-full border-8 border-white shadow-2xl object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-pink-500 opacity-20 group-hover:opacity-30 blur-2xl transition"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 drop-shadow-lg">
            {person_name}
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800">
            🌟 Famous Astrologer in India 🌟
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
            With years of expertise in{" "}
            <span className="font-semibold text-red-600">
              Vastu, Horoscope & Vashikaran
            </span>
            , {person_name} has guided countless people across
            <span className="text-orange-600">
              {" "}
              Hindu, Muslim & Christian
            </span>{" "}
            communities, solving life problems with trusted remedies.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
            >
              <Phone size={20} /> Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
            >
              <MessageCircle size={20} /> Chat With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
