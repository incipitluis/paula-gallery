"use client";

import React, { useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-stone-500 text-white py-4 px-6 md:py-8 md:px-12">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0">
          <ModeToggle />
        </div>
        <ul className="hidden md:flex flex-row gap-10 items-center text-lg">
          <li className="hover:text-purple-300 hover:scale-110 transition-all duration-300">
            <Link href="">Projects</Link>
          </li>
          <li className="hover:text-purple-300 hover:scale-110 transition-all duration-300">
            <Link href="">About me</Link>
          </li>
          <li className="hover:text-purple-300 hover:scale-110 transition-all duration-300">
            <Link href="">Contact</Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-stone-900 z-50 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-6 text-stone-900 dark:text-white focus:outline-none"
          >
            <X size={24} />
          </button>
          <ul className="flex flex-col gap-8 items-center text-2xl text-stone-900 dark:text-white">
            <li className="hover:text-purple-300 hover:scale-110 transition-all duration-300">
              <Link href="" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li className="hover:text-purple-300 hover:scale-110 transition-all duration-300">
              <Link href="" onClick={toggleMenu}>
                About me
              </Link>
            </li>
            <li className="hover:text-purple-300 hover:scale-110 transition-all duration-300">
              <Link href="" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
