import React from "react";
import "./index.css";
import Home from "./components/Home";
import Hero from "./components/Hero";
import JobListing from "./components/JobListing";
import jobs from "./jobs.json";

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <>
      <Home searchQuery={searchQuery} handleChange={handleSearch} />
      <Hero />
      <JobListing searchQuery={searchQuery} />
    </>
  );
};

export default App;
