import { useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-[#4E342E]">
          The Cake's Basket
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#4E342E] font-medium">
          <li className="hover:text-pink-500 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-pink-500 cursor-pointer transition">
            Cakes
          </li>

          <li className="hover:text-pink-500 cursor-pointer transition">
            Custom Cakes
          </li>

          <li className="hover:text-pink-500 cursor-pointer transition">
            About
          </li>
        </ul>

        {/* Search */}
        <div className="hidden md:flex items-center bg-pink-100 px-4 py-2 rounded-full">
          <FiSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search cakes..."
            className="bg-transparent outline-none px-2"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-[#4E342E] text-xl">

          {/* <FaShoppingCart className="cursor-pointer hover:scale-110 transition" /> */}
          <Link to="/cart">
            <div className="relative cursor-pointer text-xl hover:scale-110 transition">
              <FaShoppingCart />
            </div>
          </Link>

          {user?.role === "admin" && (
            <Link to="/admin" className="hover:text-pink-500 transition">
              Admin Panel
            </Link>
          )}

          <div className="relative">

            {/* USER ICON */}
            <FaUser
              onClick={() => setOpen(!open)}
              className="cursor-pointer hover:scale-110 transition text-xl"
            />

            {/* DROPDOWN */}
            {open && (
              <div className="absolute right-0 mt-3 w-44 bg-white shadow-lg rounded-xl overflow-hidden z-50">

                {!user ? (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpen(false)}
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpen(false)}
                    >
                      Register
                    </Link>

                  </>
                ) : (
                  <>
                    <div className="px-4 py-2 font-semibold text-[#4E342E]">
                      👋 {user.name}
                    </div>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    >
                      Logout
                    </button>
                  </>
                )}

              </div>
            )}

          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4 text-[#4E342E] font-medium">
            <li>Home</li>
            <li>Cakes</li>
            <li>Custom Cakes</li>
            <li>About</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;