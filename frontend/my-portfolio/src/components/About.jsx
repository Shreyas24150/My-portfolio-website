import React from "react";
import profileImg from "../assets/profile.jpg"; // place your profile image in src/assets/

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-10 pt-32 pb-20">
      <img src={profileImg} alt="profile" className="rounded-full w-40 h-40 mb-6 md:mb-0 md:mr-10 shadow-lg" />
      <div>
        <p className="text-gray-300 max-w-xl">
          Cloud and DevOps enthusiast with a B.Tech in Cloud Computing and Mobile Technology, skilled in deploying
          scalable infrastructure using AWS, Terraform, Docker. Experienced in building CI/CD pipelines with automating
          cloud operations. Strong understanding of Linux, networking, and Infrastructure as Code (IaC). Passionate about
          solving real-world problems through automation and modern DevOps practices.
        </p>
      </div>
    </div>
  );
}
