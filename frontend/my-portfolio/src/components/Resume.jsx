import React from "react";

export default function Resume() {
  return (
    <div className="px-10 py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Resume</h2>
      <a
        href="https://github.com/Shreyas24150/resume/raw/main/Resume.pdf"
        download
        className="bg-blue-600 px-6 py-3 rounded font-bold hover:bg-blue-500"
      >
        Download Resume
      </a>
    </div>
  );
}
