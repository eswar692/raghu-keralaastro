import { useState } from "react";
import { ChevronDown, ChevronUp, Shield } from "lucide-react";
import { business_name, person_name, phone_number } from "../Genaral/secret";

const terms = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the services provided by " +
      business_name +
      ", you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.",
  },
  {
    title: "Nature of Services",
    content:
      business_name +
      " provides astrology consultations, spiritual guidance, horoscope readings, Vastu advice, and related services. All services are offered for entertainment, guidance, and personal insight purposes only. Results may vary and are not guaranteed.",
  },
  {
    title: "No Guarantee of Results",
    content:
      "Astrology and spiritual consultation is based on traditional knowledge and personal interpretation. We do not guarantee any specific outcome, result, or change in circumstances. Clients should use guidance received as one of many inputs for personal decision-making.",
  },
  {
    title: "Confidentiality",
    content:
      "All personal information shared during consultations is treated with strict confidentiality. We do not share, sell, or distribute your personal details to any third party without your explicit consent, except as required by law.",
  },
  {
    title: "Payment & Refund Policy",
    content:
      "Consultation fees are to be paid in advance as agreed. Due to the personal and time-intensive nature of our services, fees are generally non-refundable once a session has commenced. In exceptional circumstances, refund requests may be reviewed on a case-by-case basis.",
  },
  {
    title: "Client Responsibility",
    content:
      "Clients are responsible for the decisions they make based on consultations received. " +
      business_name +
      " shall not be held liable for any personal, financial, legal, or emotional consequences arising from actions taken based on our guidance.",
  },
  {
    title: "Age Requirement",
    content:
      "Our services are intended for individuals aged 18 years and above. By using our services, you confirm that you are at least 18 years old or have obtained parental/guardian consent.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website including text, images, graphics, and design elements are the property of " +
      business_name +
      ". Reproduction, distribution, or use of any content without prior written permission is strictly prohibited.",
  },
  {
    title: "Limitation of Liability",
    content:
      business_name +
      " shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability in any matter is limited to the amount paid for the specific consultation in question.",
  },
  {
    title: "Modifications to Terms",
    content:
      "We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of our services after any such changes constitutes your acceptance of the new terms.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Kerala, India.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about these Terms and Conditions, please contact us at " +
      phone_number +
      ". We are happy to clarify any concerns before you proceed with our services.",
  },
];

export default function TermsAndConditions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative py-24 px-6 overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-amber-500/10 border border-amber-500/30">
              <Shield className="w-8 h-8 text-amber-400" />
            </div>
          </div>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Terms & Conditions
          </h1>
          <p className="font-inter text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Please read these terms carefully before using the services of{" "}
            <span className="text-amber-400 font-medium">{business_name}</span>.
          </p>
          <p className="font-inter text-gray-500 text-xs mt-3">
            Last updated: January 2025
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {terms.map((term, i) => (
            <div
              key={i}
              className="
                border border-white/10
                rounded-2xl overflow-hidden
                bg-white/5 backdrop-blur-lg
                transition-all duration-300
              "
            >
              {/* Question Row */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-amber-500/60 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-playfair text-base md:text-lg text-yellow-300 group-hover:text-amber-400 transition-colors">
                    {term.title}
                  </h3>
                </div>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {/* Answer */}
              {openIndex === i && (
                <div className="px-6 pb-6 border-t border-white/5">
                  <p className="font-inter text-gray-300 text-sm md:text-base leading-relaxed mt-4 pl-10">
                    {term.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-center">
          <p className="font-inter text-gray-300 text-sm leading-relaxed">
            By using our services, you acknowledge that you have read,
            understood, and agree to these Terms & Conditions.
          </p>
          <p className="font-inter text-amber-400 text-sm font-medium mt-2">
            {business_name} — {person_name}
          </p>
        </div>
      </div>
    </section>
  );
}
