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
    <div className="flex w-full p-12">
      <div className="flex flex-col mx-auto py-8 px-4 md:px-8 justify-center md:w-1/3 text-center md:text-right bg-white dark:bg-neutral-900 space-y-2">
        <h1 className="text-3xl md:text-7xl text-stone-900 dark:text-white">
          Paula{" "}
          <span className="text-purple-900 dark:text-purple-200">Sánchez</span>{" "}
          Mayor{" "}
        </h1>
        <h3 className="text-lg md:text-2xl">Collages</h3>
      </div>
      <div className="hidden md:flex w-[850px] h-[650px] rounded-xl overflow-hidden">
        <div>
          <Image
            src={heroImageSrc}
            height={650}
            width={850}
            alt="hero image"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
