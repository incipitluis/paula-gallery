import React from "react";
import CardCarousel from "./card-carousel";

const Projects = () => {
  return (
    <div className="flex flex-col w-full p-10 text-stone-900 dark:text-purple-200 mb-8">
      <div className="w-full mx-auto p-12">
        <h2 className="text-4xl font-semibold">Projects</h2>
      </div>
      <div>
        <CardCarousel />
      </div>
    </div>
  );
};

export default Projects;
