import React from "react";
import Image from "next/image";

interface ProjectHeaderProps {
  title: string;
  description: string;
  mainImage: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  description,
  mainImage,
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full p-4 md:p-8 gap-8">
      {/* Left column: Image */}
      <div className="w-full md:w-1/2">
        <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-lg shadow-md">
          <Image
            src={mainImage}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Right column: Title and Description */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
          {title}
        </h1>
        <p className="text-lg text-stone-700 dark:text-purple-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectHeader;
