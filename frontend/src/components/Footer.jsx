// import {
//   FaInstagram,
//   FaFacebook,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#4E342E] text-white pt-16 pb-8 px-6">

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Brand */}
//         <div>
//           <h2 className="text-3xl font-bold mb-4">
//             Cake Bliss 🎂
//           </h2>
//           <p className="text-gray-300">
//             Delivering happiness in every bite. Fresh, creamy and premium cakes for every celebration.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">
//             Quick Links
//           </h3>
//           <ul className="space-y-2 text-gray-300">
//             <li className="hover:text-pink-300 cursor-pointer">Home</li>
//             <li className="hover:text-pink-300 cursor-pointer">Cakes</li>
//             <li className="hover:text-pink-300 cursor-pointer">Custom Cakes</li>
//             <li className="hover:text-pink-300 cursor-pointer">About Us</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">
//             Contact
//           </h3>
//           <p className="text-gray-300">📞 +91 98765 43210</p>
//           <p className="text-gray-300">📧 support@cakebliss.com</p>
//           <p className="text-gray-300">📍 Pune, India</p>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">
//             Newsletter
//           </h3>

//           <p className="text-gray-300 mb-3">
//             Get updates & offers
//           </p>

//           <input
//             type="email"
//             placeholder="Enter email"
//             className="w-full p-2 rounded-lg text-black outline-none"
//           />

//           <button className="mt-3 w-full bg-pink-500 hover:bg-pink-600 py-2 rounded-lg transition">
//             Subscribe
//           </button>
//         </div>

//       </div>

//       {/* Social + Bottom */}
//       <div className="mt-12 border-t border-gray-500 pt-6 flex flex-col md:flex-row items-center justify-between">

//         <p className="text-gray-300 text-sm">
//           © 2026 Cake Bliss. All rights reserved.
//         </p>

//         <div className="flex gap-5 mt-4 md:mt-0 text-xl">

//           <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />
//           <FaFacebook className="hover:text-pink-400 cursor-pointer transition" />
//           <FaTwitter className="hover:text-pink-400 cursor-pointer transition" />
//           <FaYoutube className="hover:text-pink-400 cursor-pointer transition" />

//         </div>

//       </div>

//     </footer>
//   );
// };

// export default Footer;
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4E342E] text-white pt-16 pb-8 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            The Cake's Basket 🎂
          </h2>

          <p className="text-gray-300">
            Delivering happiness in every bite. Fresh, creamy and premium cakes for every celebration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-pink-300 cursor-pointer">Home</li>
            <li className="hover:text-pink-300 cursor-pointer">Cakes</li>
            <li className="hover:text-pink-300 cursor-pointer">Custom Cakes</li>
            <li className="hover:text-pink-300 cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-300">📞 +91 9322854730</p>
          <p className="text-gray-300">📧 abhijitthorat2007@gmail.com</p>
          <p className="text-gray-300">📍 Punavale, Pune, India</p>
        </div>

        {/* Newsletter (UPDATED SECTION) */}
        {/* Newsletter (Improved Visibility) */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Stay Sweet 🍰
          </h3>

          <p className="text-gray-300 mb-4">
            Get fresh cake deals & offers in your inbox
          </p>

          <div className="bg-white rounded-2xl p-2 flex items-center shadow-lg">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-black outline-none rounded-xl"
            />

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition">
              Join
            </button>

          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-500 pt-6 flex flex-col md:flex-row items-center justify-between">

        <p className="text-gray-300 text-sm">
          © 2026 The Cake Basket. All rights reserved.
        </p>

        <div className="flex gap-5 mt-4 md:mt-0 text-xl">

          <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />
          <FaFacebook className="hover:text-pink-400 cursor-pointer transition" />
          <FaTwitter className="hover:text-pink-400 cursor-pointer transition" />
          <FaYoutube className="hover:text-pink-400 cursor-pointer transition" />

        </div>

      </div>

    </footer>
  );
};

export default Footer;