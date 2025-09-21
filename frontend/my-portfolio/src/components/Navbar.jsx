import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 fixed top-0 w-full shadow-md z-10">
      <h1 className="text-3xl font-bold">Shreyas</h1>
      <ul className="flex space-x-6">
        {["About", "Skills", "Projects", "Resume", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
