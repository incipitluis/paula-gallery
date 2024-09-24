"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";
import { useTheme } from "next-themes";

const Header = () => {
  const t = useTranslations();
  const { theme } = useTheme();

  const heroImageSrc = theme === "dark" ? "/heroimage2.jpg" : "/heroimage.jpg";

  return (
    <header className="flex flex-col space-y-2 relative p-12 items-center w-screen mt-3 overflow-hidden h-80">
      <div className="flex flex-col rounded-lg mx-auto py-2 px-4 md:px-8 md:py-4 text-center text-black bg-white dark:bg-neutral-900 space-y-1 hover:scale-105 transition-all duration-300 z-20">
        <h1 className="md:text-4xl text-2xl font-bold text-purple-950 dark:text-purple-200">
          {t("welcome")}
        </h1>
        <h4 className="md:text-2xl text-lg font-semibold text-purple-950 dark:text-purple-200">
          collages
        </h4>
      </div>
      <div className="absolute top-0 md:-top-24 lg:-top-32 left-0 w-full h-64 z-10">
        <Image
          src={heroImageSrc}
          alt="Collage 32"
          height={1920}
          width={1080}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>
    </header>
  );
};

export default Header;
