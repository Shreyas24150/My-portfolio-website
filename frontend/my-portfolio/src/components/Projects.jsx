import React from "react";

export default function Projects() {
  return (
    <div className="px-10 py-20 text-center">
      <h2 className="text-3xl font-bold mb-10 ">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">CloudTraffix</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            secure, cloud-integrated platform designed to monitor,
            identify, and mitigate bugs and security threats
          </p>
          <a href="https://github.com/Shreyas24150/cloudtraffix-secure-cloud" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 ease-in-out">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
