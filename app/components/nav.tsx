import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NavBar = () => {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-row text-black py-3 px-6 font-semibold justify-end">
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
              height={32}
              width={32}
              alt="Instagram Icon"
              layout="fixed"
              className="icon"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
