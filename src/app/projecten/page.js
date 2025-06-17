import React from "react";
import ProjectCard from "@/components/Projectcard";

const page = () => {
  return (
    <div>
      <ProjectCard name="CSS" link="https://github.com/Liamvanbart1/CSS" />
      <ProjectCard
        name="Browser Tech"
        link="https://github.com/Liamvanbart1/BT"
      />
      <ProjectCard name="API" link="https://github.com/Liamvanbart1/API-2425" />
      <ProjectCard
        name="Hackathon"
        link="https://github.com/Liamvanbart1/Team10"
      />
      <ProjectCard name="HCD" link="https://github.com/Liamvanbart1/HCD_WEB" />
      <ProjectCard
        name="Meesterproef"
        link="https://github.com/Liamvanbart1/Framez"
      />
    </div>
  );
};

export default page;
