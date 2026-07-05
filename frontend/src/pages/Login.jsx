import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      // SAVE TOKEN
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      alert("Login successful 🎉");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login 🍰
        </h2>

        <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 mb-3 border rounded" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 mb-3 border rounded" />

        <button className="w-full bg-[#4E342E] text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;