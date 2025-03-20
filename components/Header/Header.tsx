"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Links } from "./NavLink";
import {  useTranslations } from "next-intl";
import { useChangeLanguage } from "@/i18n/ChangeLan";
import Lanbutton from "../LanguageChange/Lanbutton";
// import { useTranslations } from 'next-intl';
export default function Header() {
  const {  currentLocale } = useChangeLanguage();
  const [isOpen, setIsOpen] = useState(false);
  // const t = useTranslations();

  const t = useTranslations("common");
 const pathname = usePathname();
  return (
    <header className="overflow-hidden bg-white shadow-md p-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between   items-center py-1">
          <div className="flex content-center items-center me-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden  rounded-md flex items-center justify-center me-4"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  closed: { rotate: 0 },
                  open: { rotate: 180 },
                }}
                transition={{ duration: 0.3 }}
                className="w-4 h-4 flex flex-col justify-between"
              >
                <motion.div
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 7 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-gray-700 rounded-md"
                />
                <motion.div
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5  bg-gray-400 rounded-md"
                />
                <motion.div
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -7 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-gray-700 rounded-md"
                />
              </motion.div>
            </button>

            <div className="flex items-center">
              <Image src="/logo.svg" alt="Mazady" width={101} height={32} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex md:w-[100%]  items-center md:justify-between space-x-4">
            <nav className="hidden md:flex   space-x-6">
              {Links.map((link, index) => (
                <Link
                  key={index}
                  href={link.Path}
                  className={` font-bold hover:text-red-500 Navigationlink  ${
                    pathname.replace(currentLocale, "") === link.Path
                      ? " text-[#D20653] relative inline-block after:absolute after:-bottom-7 after:left-0 after:w-full after:h-3 after:rounded-lg after:bg-[#D20653]"
                      : "text-gray-700"
                  }`}
                >
                  {t(link.Title)}
                </Link>
              ))}
            </nav>
            {/* Icons & Buttons */}
            <div className="flex items-center space-x-1 md:space-x-4">
              <button className="p-2 text-gray-600 hover:text-black">
                <Image
                  src="/search-normal.svg"
                  alt="search"
                  width={24}
                  height={24}
                />
              </button>
              <span className="hidden md:block border-l-1 border-[#FFEAD2] h-[25px]"></span>
              <button className="p-2 text-gray-600 hover:text-black">
                <Image
                  src="/notification.svg"
                  alt="search"
                  width={24}
                  height={24}
                />
              </button>
              <span className="hidden md:block border-l-1 border-[#FFEAD2] h-[25px]"></span>
              <button className="rounded-full  ">
                <Image
                  src="/avat.jpg"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-[40px] h-[40px]"
                />
              </button>
              <button className="hidden md:block  transition duration-700 bg-linear-to-r from-[#D20653] to-[#FF951D] hover:from-[#FF951D] hover:to-[#D20653] text-white px-4 py-2 rounded-lg">
                + Add New Product
              </button>

              <Lanbutton className="hidden md:flex " />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute w-full left-0 mt-2 w-48 bg-white shadow-lg overflow-hidden rounded-md"
        >
          <ul className="flex flex-col p-4 space-y-2">
            {Links.map((link, index) => (
              <Link key={index} href={link.Path} className={`text-gray-700 `}>
                {t(link.Title)}
              </Link>
            ))}
            <div className="flex justify-between mt-1 items-center">
              <button className="    bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 py-2 rounded-lg">
                + Add New Product
              </button>
              <Lanbutton  className=""/>
            </div>

            {/* <h1>{t("Home")}</h1> */}
          </ul>
        </motion.div>
      </div>
    </header>
  );
}
