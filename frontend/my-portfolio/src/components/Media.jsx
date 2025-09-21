import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Media = () => {
  return (
    <section
      id="media"
      className="bg-gray-900 text-white py-12 px-6 md:px-20 lg:px-32"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">🗲 Get in Touch</h2>
        <p className="text-gray-400 mb-10">
          Connect with me through the following platforms. I’m active on GitHub,
          LinkedIn, and always available via email
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:shreyasacharya6516@gmail.com"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-lg w-full sm:w-auto"
          >
            <FaEnvelope className="text-blue-500 text-xl" />
            <span className="font-medium">Email</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Shreyas24150"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-lg w-full sm:w-auto"
          >
            <FaGithub className="text-gray-300 text-xl" />
            <span className="font-medium">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shreyas-acharya-68000a288"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-lg w-full sm:w-auto"
          >
            <FaLinkedin className="text-blue-400 text-xl" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Media;
