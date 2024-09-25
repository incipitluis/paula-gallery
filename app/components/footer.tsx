import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return (
    <div className="h-12 w-screen p-16 flex flex-col bg-white dark:bg-neutral-900">
      <div className="flex mx-auto dark:text-white text-sm text-center items-center">
        &copy; {new Date().getFullYear()} Paula&apos;s Art Gallery and Shop.{" "}
        {t("footer")}
      </div>
      {/* <li className="flex-shrink-0 dark:invert">
          <Link
            href={
              "https://www.instagram.com/paulacollage?igsh=b3R0NzFkbWlhYjFh"
            }
          >
            <Image
              src={"/instagram.svg"}
              height={32}
              width={32}
              alt="Instagram Icon"
              layout="fixed"
              className="icon"
            />
          </Link>
        </li> */}
    </div>
  );
};

export default Footer;
