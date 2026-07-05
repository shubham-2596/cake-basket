import { motion } from "framer-motion";

const CustomCakes = () => {
  return (
    <section className="py-20 px-6 bg-[#FFF8F0]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-[#4E342E] text-center"
        >
          Bring Your Cake Vision To Life 🎂
        </motion.h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Savor every moment with custom cakes designed exactly the way you imagine — perfect for birthdays, weddings & celebrations.
        </p>

        {/* Main Banner */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-[#4E342E]">
              Design Your Dream Cake 🍓
            </h3>

            <p className="text-gray-600 mt-3">
              Choose flavor, size, design & message. Our expert bakers will craft it fresh for you.
            </p>

            <ul className="mt-5 space-y-2 text-gray-700">
              <li>✔ Fully Customized Designs</li>
              <li>✔ Fresh Ingredients</li>
              <li>✔ Same Day Delivery Available</li>
              <li>✔ Photo Cake Printing</li>
            </ul>

            <button className="mt-6 bg-[#4E342E] text-white px-8 py-3 rounded-full hover:scale-105 transition shadow-lg">
              Create Custom Cake
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-[40px] shadow-2xl hover:scale-105 transition duration-500"
              alt="custom cake"
            />
          </motion.div>

        </div>

        {/* CATEGORY CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-[#4E342E]">
              Birthday Cakes 🎉
            </h3>
            <p className="text-gray-600 mt-2">
              Colorful & fun designs for birthdays of all ages.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-[#4E342E]">
              Wedding Cakes 💍
            </h3>
            <p className="text-gray-600 mt-2">
              Elegant multi-tier cakes for your special day.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-[#4E342E]">
              Photo Cakes 📸
            </h3>
            <p className="text-gray-600 mt-2">
              Print your memories directly on delicious cakes.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CustomCakes;