import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "cert-1 (1).png",
  "cert-2.png",
  "https://allproblemsolutionastro.com/images/Award-2.jpg",
  "https://allproblemsolutionastro.com/images/Award-3.jpg",
  "IMG-20250926-WA0012.jpg",
  "IMG-20250926-WA0013.jpg",
  "IMG-20250926-WA0015.jpg",
  "IMG-20250926-WA0016.jpg",
  "IMG-20250926-WA0017.jpg",
  "IMG-20250926-WA0018.jpg",
  "IMG-20250926-WA0019.jpg",
  "IMG-20250926-WA0020.jpg",
];

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      <h1 className="mt-5 text-center font-extrabold text-4xl md:text-6xl relative">
        {/* Gradient fill with stroke */}
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-600 
                   relative z-10 font-poppins"
        >
          Famous Vashikaran
        </span>
        {/* Stroke effect using pseudo-layer */}
        <span className="absolute inset-0 text-black/90 -z-10 font-poppins tracking-wider">
          Famous Vashikaran
        </span>

        <br />

        <span className="text-lg md:text-2xl block mt-2 text-gray-100 font-medium">
          Specialist — Trusted Remedies
        </span>
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="cursor-pointer rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border-4 border-red-500 w-full h-48 object-cover"
            onClick={() => setSelectedImage(src)}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-h-[90%] max-w-[90%] rounded-2xl shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGrid;
