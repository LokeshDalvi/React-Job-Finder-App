import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom"
import NavBar from "./NavBar";
const Home = ({ searchQuery, handleChange }) => {
  return (
    <>
      <NavBar searchQuery={searchQuery} handleChange={handleChange} />
      <Hero/>
    </>
  );
};

export default Home;
