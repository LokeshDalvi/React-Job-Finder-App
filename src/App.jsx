import React from "react";
import Home from "./components/Home";
import JobListing from "./components/JobListing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home searchQuery={searchQuery} handleChange={handleSearch} />,
      errorElement: <div>404 Not Found</div>,
    },
    {
      path: "/jobs",
      element: (
        <JobListing searchQuery={searchQuery} handleChange={handleSearch} />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
