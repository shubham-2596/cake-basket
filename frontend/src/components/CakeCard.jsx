import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CakeCard = ({ cake }) => {
  return (
    <Link to={`/product/${cake.id}`}>
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:scale-105 transition duration-300 relative">

        {/* Wishlist Icon */}
        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-110 transition">
          <FaHeart className="text-gray-400 hover:text-pink-500" />
        </div>

        {/* Image */}
        <img
          src={cake.image}
          alt={cake.title}
          className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Content */}
        <div className="p-4">

          <h2 className="text-lg font-semibold text-[#4E342E]">
            {cake.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1 text-yellow-500">
            <FaStar />
            <span className="text-sm text-gray-600">
              {cake.rating}
            </span>
          </div>

          {/* Price */}
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xl font-bold text-[#4E342E]">
              ₹{cake.price}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹{cake.oldPrice}
            </span>

            <span className="text-sm text-green-600">
              {cake.discount}% OFF
            </span>
          </div>

          {/* Delivery */}
          <p className="text-sm text-gray-500 mt-1">
            🚚 {cake.deliveryTime}
          </p>

          {/* Button */}
          <button className="mt-4 w-full bg-[#4E342E] text-white py-2 rounded-xl hover:bg-[#3b2a24] transition">
            Add to Cart
          </button>

        </div>
      </div>
    </Link>
  );
};

export default CakeCard;