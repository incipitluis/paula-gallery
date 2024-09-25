import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NavBar = () => {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-row bg-slate-500 text-white py-8 px-12 font-semibold justify-end">
      <ul className="flex flex-row gap-10 items-center">
        <li className="hover:text-purple-900">
          <Link href={""}>Projects</Link>
        </li>
        <li className="hover:text-purple-900">
          <Link href={""}>About me</Link>
        </li>
        <li className="hover:text-purple-900">
          <Link href={""}>Contact</Link>
        </li>
        <li className="flex-shrink-0">
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
