import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", form);

      alert("Registered successfully 🎉");

      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account 🍰
        </h2>

        <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 mb-3 border rounded" />
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 mb-3 border rounded" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 mb-3 border rounded" />
        <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 mb-3 border rounded" />
        <input name="address" placeholder="Address" onChange={handleChange} className="w-full p-2 mb-3 border rounded" />

        <button className="w-full bg-pink-500 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;