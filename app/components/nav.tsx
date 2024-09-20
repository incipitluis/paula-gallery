import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NavBar = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-row w-full py-3 px-6 justify-evenly items-center">
      <div className="hidden md:flex mx-auto dark:text-white text-sm text-start">
        &copy; {new Date().getFullYear()} Paula&apos;s Art Gallery and Shop.{" "}
        {t("footer")}
      </div>
      <div className="w-full flex text-black font-semibold justify-end">
        <ul className="flex flex-row gap-4">
          <li className="flex-shrink-0">
            <ModeToggle />
          </li>
          <li className="flex-shrink-0 dark:invert">
            <Link
              href={
                "https://www.instagram.com/paulacollage?igsh=b3R0NzFkbWlhYjFh"
              }
            >
              <Image
                src={"/instagram.svg"}
                height={39}
                width={39}
                alt="Instagram Icon"
                layout="fixed"
                className="icon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
