import { Phone, MessageCircle } from "lucide-react";
import { phone_number, whatsapp_number } from "../Genaral/secret";

const services = [
  {
    name: "Love Problems",
    desc: "Guidance for misunderstandings, emotional balance, and relationship clarity.",
    img: "https://i.pinimg.com/1200x/3f/f5/89/3ff5895bca8970847577656ffe788eff.jpg",
  },
  {
    name: "Marriage Issues",
    desc: "Support for marital harmony, compatibility, and family understanding.",
    img: "https://i.pinimg.com/736x/fa/ee/46/faee46287149c9a2470c20d26318fee1.jpg",
  },
  {
    // ✅ FIXED
    name: "Vedic Spiritual Consultation",
    desc: "Traditional spiritual practices focused on positive influence and harmony.",
    img: "https://i.pinimg.com/736x/3b/11/5b/3b115b361d84a05cd8476628f303d621.jpg",
  },
  {
    name: "Career Growth",
    desc: "Insight for job direction, professional stability, and decision clarity.",
    img: "https://i.pinimg.com/736x/2d/21/ff/2d21ff0997bd7bdfb46491c3d13798c3.jpg",
  },
  {
    name: "Finance Problems",
    desc: "Astrology-based guidance for financial planning and stability.",
    img: "https://i.pinimg.com/736x/53/3a/25/533a25d0fd940cc5fc8b5fdaf457b14a.jpg",
  },
  {
    name: "Education Guidance",
    desc: "Support for focus, learning paths, and academic confidence.",
    img: "https://i.pinimg.com/736x/7f/8a/60/7f8a6099a523cc79342eaee0a29e92f8.jpg",
  },
  {
    name: "Court Cases",
    desc: "Spiritual consultation for patience, clarity, and mental strength.",
    img: "https://i.pinimg.com/1200x/fb/4e/36/fb4e36b171a92fb4d391f3bc6a90e8a5.jpg",
  },
  {
    name: "Future Predictions",
    desc: "Horoscope guidance to understand upcoming phases of life.",
    img: "https://i.pinimg.com/1200x/40/6d/94/406d941b9978384bd9008b1f81c613a3.jpg",
  },
  {
    // ✅ FIXED
    name: "Relationship Harmony Rituals",
    desc: "Focused spiritual rituals aimed at restoring balance and confidence.",
    img: "https://i.pinimg.com/736x/29/33/52/293352f5c1a543ac609caa6544329af2.jpg",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_60%)]" />

      {/* Heading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <h2
          className="
          font-playfair font-bold
          text-4xl md:text-6xl
          bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
          bg-clip-text text-transparent
        "
        >
          Our Astrology Services
        </h2>
        <p className="mt-6 font-inter text-gray-300 text-base md:text-lg">
          Thoughtful astrology guidance designed to support clarity, balance,
          and informed life decisions.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="
              group bg-white/5 backdrop-blur-lg
              border border-white/10
              rounded-3xl overflow-hidden
              shadow-xl hover:shadow-2xl
              transition-all duration-300
            "
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={service.img}
                alt={service.name}
                className="
                  w-full h-full object-cover
                  group-hover:scale-110
                  transition-transform duration-700
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="font-playfair text-xl text-yellow-400 mb-2">
                {service.name}
              </h3>
              <p className="font-inter text-sm text-gray-300 flex-grow">
                {service.desc}
              </p>

              {/* CTA */}
              <div className="mt-6 flex gap-3">
                <a
                  href={`tel:${phone_number}`}
                  className="
                    flex items-center gap-2
                    px-4 py-2 rounded-full
                    bg-amber-500 text-gray-900
                    font-medium text-sm
                    hover:bg-amber-600
                    transition
                  "
                >
                  <Phone size={16} /> Call
                </a>

                <a
                  href={`https://wa.me/${whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-4 py-2 rounded-full
                    bg-emerald-500 text-white
                    font-medium text-sm
                    hover:bg-emerald-600
                    transition
                  "
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
