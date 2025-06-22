import React from "react";
import { BsSearch } from "react-icons/bs";
const Home = () => {
  return (
    <nav
      className="flex justify-between items-center px-6 py-4 border-white border-b-2"
      style={{ backgroundColor: "#03256C" }}
    >
      <div className="flex gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt=""
          className="w-10"
        />
        <span className="text-[#06BEE1] text-2xl font-bold cursor-pointer">
          Job Finder
        </span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          name="search"
          placeholder="Search jobs..."
          className="px-3 py-1 rounded bg-[#F4F6F8] text-[#2D3436] outline-none"
        />

        <button>
          <BsSearch />
        </button>
      </div>
      <div className="flex gap-3">
        <span className="text-white font-bold hover:text-cyan-400 cursor-pointer">
          Home
        </span>
        <span className="text-white font-bold hover:text-cyan-400 cursor-pointer">
          Jobs
        </span>
        <span className="text-white font-bold hover:text-cyan-400 cursor-pointer">
          Add Jobs
        </span>
        <span className="text-white font-bold hover:text-cyan-400 cursor-pointer">
          Logout
        </span>
      </div>
    </nav>
  );
};

export default Home;
