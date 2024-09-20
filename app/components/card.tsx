import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  return (
    <Link href={link}>
      <div className="relative flex flex-col items-center justify-center bg-white dark:text-white dark:bg-neutral-800 shadow-md rounded-md overflow-hidden cursor-pointer group">
        <div className="relative w-full h-64">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500 ease-in-out group-hover:opacity-50"
          />
        </div>

        <div className="p-4 text-center">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>

        <div className="md:absolute md:inset-0 flex items-center justify-center p-4 bg-white bg-opacity-75 dark:bg-neutral-800 dark:bg-opacity-75 text-center transition-opacity duration-500 ease-in-out opacity-100 md:opacity-0 group-hover:opacity-100">
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
