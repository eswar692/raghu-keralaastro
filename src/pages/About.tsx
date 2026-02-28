import { person_name } from "../Genaral/secret";

export default function About() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]" />

      {/* Subtle star glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.15),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto text-gray-200">
        {/* About Content */}
        <div className="max-w-3xl">
          <h2
            className="
              font-playfair font-bold
              text-3xl md:text-5xl mb-8
              bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
              bg-clip-text text-transparent
            "
          >
            About Us
          </h2>

          <p className="font-inter text-base md:text-lg leading-relaxed text-gray-300 space-y-6">
            <span className="block">
              Astrologer{" "}
              <span className="font-semibold text-yellow-400">
                {person_name}
              </span>{" "}
              is a respected spiritual consultant known for providing thoughtful
              and traditional astrology guidance rooted in experience and
              wisdom.
            </span>

            <span className="block">
              With years of practice in astrology, he helps individuals gain
              clarity about relationships, marriage, career paths, and personal
              life decisions through careful interpretation and consultation.
            </span>

            <span className="block">
              Services include palm reading, face analysis, horoscope guidance,
              photo-based consultations, and phone consultations designed to
              support informed and balanced decision-making.
            </span>

            <span className="block">
              Clients value his calm approach, confidentiality, and sincere
              effort to guide them toward harmony and self-understanding.
            </span>

            <span className="block font-medium text-gray-200">
              If you are seeking meaningful spiritual insight, trusted guidance
              is available.
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      </div>
    </section>
  );
}
