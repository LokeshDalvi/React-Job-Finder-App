import React from "react";
import jobs from "../jobs.json";

const JobListing = ({ searchQuery }) => {
  const filteredJobs = jobs.filter((job) => {
    const query = searchQuery.toLowerCase();

    return (
      job.title.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query)
    );
  });

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6 cursor-pointer">
      {filteredJobs.map((job) => {
        return (
          <div
            key={job.id}
            className="bg-white shadow-md px-6 py-4 mx-4 rounded hover:shadow-lg transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-[#2541B2] mb-2">
              {job.title}
            </h2>
            <p className="text-gray-600">{job.description}</p>
            <p className="text-sm text-gray-500 italic">{job.location}</p>
            <p className="text-gray-600">{job.salary}</p>
          </div>
        );
      })}
    </div>
  );
};

export default JobListing;
