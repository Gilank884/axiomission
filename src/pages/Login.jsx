import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/main");
  };

  return (
    <div className="min-h-screen bg-[#FFFCF1] flex flex-col">
      {/* Navbar Logo */}
      <header className="w-full shadow px-6 py-4 bg-white flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-11" />
        </div>
      </header>

      {/* Form Login */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white rounded-md shadow-md p-8 w-full max-w-md">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Masuk ke Akun</h2>
          <p className="text-center text-gray-500 mb-6">Yuk, lanjutin belajarmu di videobelajar.</p>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">E-Mail *</label>
              <input type="email" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>

            {/* Password + Eye */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Kata Sandi *</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full border px-3 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <img src="/vector.png" alt="Toggle Password" className="w-5 h-5" />
                </button>
              </div>
              <div className="text-right text-sm mt-1">
                <button
                      type="button"
                      className="text-gray-400 hover:text-gray-600 underline"
                      onClick={() => alert('Fitur lupa password belum tersedia')}
                     > Lupa Password?
                   </button>

              </div>
            </div>

            {/* Tombol Masuk */}
            <Link to="/main">
            <button
              type="submit"
              className="w-full bg-[#27C55A] text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Masuk
            </button>
            </Link>

            {/* Jarak */}
            <div className="h-2"></div>

            {/* Tombol Daftar */}
            <Link to="/register">
              <button
                type="button"
                className="w-full bg-[#DFFFEF] text-[#27C55A] py-2 rounded-md border border-[#27C55A]"
              >
                Daftar
              </button>
            </Link>

            {/* Divider "atau" */}
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-3 text-sm text-gray-400">atau</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Tombol Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100"
            >
              <img
                src="/google.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Masuk dengan Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
