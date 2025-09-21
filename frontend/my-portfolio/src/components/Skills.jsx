import React from "react";
import { FaReact, FaGithub, FaLinux, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFlask, SiOpenstack, SiDocker, SiAmazonwebservices, SiTerraform,} from "react-icons/si";

const skills = [
  { name: "Linux", icon: <FaLinux size={40} color="white" /> },
  { name: "AWS", icon: <SiAmazonwebservices size={40} color="white" /> },
  { name: "Github", icon: <FaGithub size={40} color="white" /> },
  { name: "Docker", icon: <SiDocker size={40} color="white" /> },
  { name: "Terraform", icon: <SiTerraform size={40} color="white" /> },
  { name: "Python", icon: <FaPython size={40} color="white" /> },
  { name: "Flask", icon: <SiFlask size={40} color="white" /> },
  { name: "React JS", icon: <FaReact size={40} color="#61DAFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
  { name: "Openstack", icon: <SiOpenstack size={40} color="white" /> },
];

export default function Skills() {
  return (
    <div className="px-10 py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            {skill.icon}
            <p className="mt-4">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
