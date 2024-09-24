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
    </div>
  );
};

export default Footer;
