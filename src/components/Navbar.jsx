import React from "react";
import ProfilePic from "../assets/profile.png";

const Navbar = () => {
  return (
    <header className="w-full shadow px-6 py-4 bg-white flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-11" />
      </div>
      
<div className="hidden md:flex items-center space-x-4">
  <h1 className="text-lg  text-gray-600">Kategori</h1>
  <img
    src={ProfilePic}
    alt="Profile"
    className="w-10 h-10 rounded-xl object-cover"
  />
</div>


<div className="flex md:hidden">
  <button>
    <svg
      className="w-6 h-6 text-gray-700"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</div>
    </header>
  );
};

export default Navbar;
