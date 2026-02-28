import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { phone_number, whatsapp_number } from "./secret";

export default function VashikaranGrid() {
  const items = [
    {
      title: "Stri Relationship Astrology",
      img: "https://i.pinimg.com/736x/b7/b4/f0/b7b4f0be7f149bd13a3717bf894b4441.jpg",
      desc: "Traditional astrological guidance focused on relationship balance and emotional understanding.",
    },
    {
      title: "Partner Harmony Consultation",
      img: "https://i.pinimg.com/1200x/3a/6d/2c/3a6d2c49a66ca4971d915430079bfaca.jpg",
      desc: "Astrological consultation aimed at restoring harmony and trust in partner relationships.",
    },
    {
      title: "Emotional Bonding Guidance",
      img: "https://i.pinimg.com/736x/d6/81/00/d68100dde806c12c6ccef9458435a94b.jpg",
      desc: "Vedic astrology guidance to strengthen emotional closeness and mutual understanding.",
    },
    {
      title: "Love & Relationship Astrology",
      img: "https://i.pinimg.com/1200x/65/d5/01/65d501e3d8df04fb41289e577b67b9da.jpg",
      desc: "Supportive astrology practices for love-related clarity and peaceful reconciliation.",
    },
    {
      title: "Marriage Guidance",
      img: "https://i.pinimg.com/1200x/65/b5/7a/65b57ad4bc6f7bc20fcbd8ea7bfe3191.jpg",
      desc: "Consultation for marital understanding, family balance, and important life decisions.",
    },
    {
      title: "Vastu Remedies",
      img: "https://i.pinimg.com/736x/d0/a8/b0/d0a8b0eac277064d1f698326f55f8abf.jpg",
      desc: "Vastu-based guidance to support harmony and positive energy in home and workplace.",
    },
    {
      title: "Career & Job Guidance",
      img: "https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg",
      desc: "Astrology insights for career planning, job stability, and professional growth.",
    },
    {
      title: "Family Harmony",
      img: "https://i.pinimg.com/736x/9a/ab/ac/9aabac56c514a27cbcc112b5fc220642.jpg",
      desc: "Astrological support for resolving family misunderstandings and restoring lasting peace.",
    },
    {
      title: "Emotional Recovery Guidance",
      img: "https://i.pinimg.com/736x/f9/83/a2/f983a2bb11d4e8058f3d65aa178c13d4.jpg",
      desc: "Compassionate guidance to move forward with clarity and strength after emotional setbacks.",
    },
    {
      title: "Spiritual Protection & Peace",
      img: "https://i0.wp.com/www.royalperspectives.com/wp-content/uploads/2023/08/what-do-your-enemies-hate-about-you-the-most-2-354-1574696841-0_dblbig.jpg?fit=1200%2C797&ssl=1",
      desc: "Ethical spiritual practices focused on emotional protection, inner peace, and positivity.",
    },
    {
      title: "Couples & Family Planning",
      img: "https://i.pinimg.com/736x/52/08/b9/5208b9f29d6163bb20c66768a3e03969.jpg",
      desc: "Astrology consultation for couples seeking clarity on family growth and life planning.",
    },
    {
      title: "Puja & Mantra Consultation",
      img: "https://i.pinimg.com/736x/43/8a/12/438a12dde5f045a8a6a4a25b1b1cccce.jpg",
      desc: "Customized spiritual rituals and mantra-based consultations rooted in Vedic tradition.",
    },
  ];

  const reverseItems = items.reverse();
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2
            className="
              font-playfair font-bold
              text-3xl md:text-5xl
              bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
              bg-clip-text text-transparent
            "
          >
            Vedic Astrology & Spiritual Guidance
          </h2>
          <p className="mt-4 font-inter text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Traditional astrology-based guidance offered across diverse
            spiritual traditions, focused on clarity, balance, and
            understanding.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {reverseItems.map((it, idx) => (
            <motion.article
              key={idx}
              className="
                group bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-3xl overflow-hidden
                shadow-xl hover:shadow-2xl
                transition-all duration-300
              "
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition-transform duration-700
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="font-playfair text-xl text-yellow-400 mb-2">
                  {it.title}
                </h3>
                <p className="font-inter text-sm text-gray-300 mb-5">
                  {it.desc}
                </p>

                {/* CTA */}
                <div className="flex justify-center gap-3">
                  <a
                    href={`tel:${phone_number}`}
                    className="
                      flex items-center gap-2
                      px-5 py-2 rounded-full
                      bg-amber-500 text-gray-900
                      font-medium text-sm
                      hover:bg-amber-600 transition
                    "
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>

                  <a
                    href={`https://wa.me/${whatsapp_number}`}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      px-5 py-2 rounded-full
                      bg-emerald-500 text-white
                      font-medium text-sm
                      hover:bg-emerald-600 transition
                    "
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
