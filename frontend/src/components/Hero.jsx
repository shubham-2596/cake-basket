import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#FFF8F0] min-h-screen flex items-center px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#4E342E]">
            Delicious Cakes For Every Celebration 🎂
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Premium handcrafted cakes made with love,
            elegance, and sweetness for your special moments.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#4E342E] text-white px-8 py-4 rounded-full hover:scale-105 transition shadow-lg">
              Order Now
            </button>

            <button className="border-2 border-[#4E342E] text-[#4E342E] px-8 py-4 rounded-full hover:bg-[#4E342E] hover:text-white transition">
              Explore
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
            alt="Cake"
            className="rounded-[40px] shadow-2xl hover:scale-105 transition duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;