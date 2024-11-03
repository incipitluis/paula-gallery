"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useTheme } from "next-themes";

const Hero = () => {
  const t = useTranslations();
  const { theme } = useTheme();

  const heroImageSrc =
    theme === "dark" ? "/squarehero2.jpg" : "/squarehero1.jpg";

  return (
    <div className="flex flex-col md:flex-row w-full p-4 md:p-12 items-center">
      <div className="flex flex-col w-full md:w-1/3 py-8 px-4 md:px-8 justify-center text-center md:text-right space-y-4 md:space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-stone-900 dark:text-white">
          Paula{" "}
          <span className="text-purple-900 dark:text-purple-200">Sánchez</span>{" "}
          Mayor
        </h1>
        <h3 className="text-xl md:text-2xl dark:text-purple-200">Collages</h3>
      </div>
      <div className="w-full md:w-2/3 mt-8 md:mt-0">
        <div className="relative w-full hidden md:block aspect-[4/3] lg:aspect-[16/9] max-w-[850px] mx-auto">
          <Image
            src={heroImageSrc}
            alt="hero image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
