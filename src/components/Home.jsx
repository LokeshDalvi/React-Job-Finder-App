import React from "react";
import { BsSearch } from "react-icons/bs";
const Home = ({ searchQuery, handleChange }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#03256C] sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt="React Logo"
          className="w-8 h-8"
        />
        <span className="text-cyan-300 text-2xl font-bold hover:text-cyan-100 transition-colors">
          JobFinder
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 w-1/3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-cyan-300 outline-none"
            value={searchQuery}
            onChange={(e) => handleChange(e.target.value)}
          />
          <BsSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6">
        {["Home", "Jobs", "Add Jobs", "Logout"].map((item) => (
          <span
            key={item}
            className="text-white font-medium hover:text-cyan-300 cursor-pointer transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Home;
