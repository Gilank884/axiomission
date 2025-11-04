import React from "react";
import google from "../assets/google.png";
import flagID from "../assets/flag-id.png";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Navbar */}
      <header className="w-full shadow px-6 py-4 bg-white flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-11" />
        </div>
      </header>

      {/* Register Card */}
      <div className="bg-white shadow-md rounded-lg px-8 py-10 mt-8 w-full max-w-md mb-8">
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Pendaftaran Akun</h2>
        <p className="text-center text-gray-500 mb-6">Yuk, daftarkan akunmu sekarang juga!</p>

        {/* Registration Form */}
        <form>
          {/* Nama */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Nama Lengkap"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="email@example.com"
            />
          </div>

          {/* No. HP */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              No. Hp <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              {/* Kode Negara */}
              <div className="flex items-center border border-gray-300 rounded px-2 bg-gray-50 mr-2">
                <img src={flagID} alt="Indo Flag" className="w-5 h-4 mr-1" />
                <span className="text-sm">+62</span>
                <svg className="w-4 h-4 ml-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {/* Input Nomor HP */}
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="81234567890"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="********"
            />
          </div>

          {/* Tombol Register */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Daftar
          </button>
        </form>

        {/* Atau */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">atau</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Tombol Google */}
        <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
          <img src={google} alt="Google" className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium text-gray-700">Daftar dengan Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
