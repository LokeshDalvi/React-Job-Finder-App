import React from "react";
import "./index.css";
import Home from "./components/Home";
import Hero from "./components/Hero";
import JobListing from "./components/JobListing";
import jobs from './jobs.json'


const App = () => {

  return (
    <>
      <Home />
      <Hero />            
      <JobListing/> 
    </>
  );
};

export default App;
