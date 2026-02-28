import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import useInViewOnce from "./InView";
import { phone_number } from "./secret";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.2);

  const services = [
    "Vedic Astrology Guidance",
    "Love & Relationship Consultation",
    "Astrology Readings",
    "Marriage & Family Advice",
    "Career & Life Direction",
    "Personal Harmony Solutions",
  ];

  const whyChoose = [
    "Experienced Astrologer",
    "Confidential Consultation",
    "Trusted by Thousands",
    "Online & Offline Support",
    "Personalized Guidance",
  ];

  return (
    <motion.footer className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920')",
        }}
      />

      {/* Dark luxury overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#020617]/95 to-black/95" />

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* About */}
        <div>
          <h2 className="font-playfair text-2xl mb-4 text-yellow-400">
            About Our Astrology
          </h2>
          <p className="font-inter text-gray-300 leading-relaxed text-sm">
            We provide traditional astrology guidance rooted in experience and
            spiritual wisdom. Our consultations focus on clarity, balance, and
            informed decision-making for personal and family life.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-playfair text-2xl mb-4 text-yellow-400">
            Contact
          </h2>
          <p className="font-inter text-gray-300 text-sm mb-2">
            📞 {phone_number}
          </p>
          <p className="text-xs uppercase tracking-widest text-amber-300">
            Trusted • Confidential • Supportive
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-playfair text-2xl mb-4 text-yellow-400">
            Services
          </h2>
          <ul className="space-y-2">
            {services.map((service, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-gray-300 text-sm"
              >
                <ChevronRight className="w-4 h-4 text-amber-400" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose */}
        <div>
          <h2 className="font-playfair text-2xl mb-4 text-yellow-400">
            Why Choose Us
          </h2>
          <ul className="space-y-2">
            {whyChoose.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-gray-300 text-sm"
              >
                <ChevronRight className="w-4 h-4 text-amber-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/70">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Legal Links */}
          <div className="flex items-center gap-4 text-xs font-inter text-gray-400">
            <a
              href="/privacy-policy"
              className="hover:text-amber-400 transition"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="/terms" className="hover:text-amber-400 transition">
              Terms & Conditions
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs font-inter text-gray-500">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://keralaastro.in/"
              target="_blank"
              className="hover:text-amber-400 transition"
            >
              keralaastro.in
            </a>{" "}
            • All Rights Reserved
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
