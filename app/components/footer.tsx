import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations();
  return (
    <div className="w-full p-16 flex flex-col bg-stone-400 text-white dark:text-purple-200">
      <div className="flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Paula&apos;s Art Gallery and Shop.{" "}
          {t("footer")}
        </div>
        <Link
          href="https://www.instagram.com/paulacollage?igsh=b3R0NzFkbWlhYjFh"
          className="flex-shrink-0"
        >
          <Image
            src="/instagram.svg"
            height={32}
            width={32}
            alt="Instagram Icon"
            className="icon invert"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
