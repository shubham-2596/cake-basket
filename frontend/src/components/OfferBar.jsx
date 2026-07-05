import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const OfferBar = () => {
  const [showBar, setShowBar] = useState(true);

  if (!showBar) return null;

  return (
    <div className="bg-[#4E342E] text-white py-2 px-4 text-center relative">
      <p className="text-sm md:text-base">
        🎂 Flat 20% OFF on Premium Cakes | Free Delivery Above ₹999
      </p>

      <button
        onClick={() => setShowBar(false)}
        className="absolute right-4 top-3 hover:scale-110 transition"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default OfferBar;