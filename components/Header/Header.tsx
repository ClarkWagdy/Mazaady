'use client';
import Link from 'next/link';
import React, { useState } from 'react'
 import { motion } from "motion/react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Links } from './NavLink';
// import { useTranslations } from 'next-intl';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const t = useTranslations();
  return (
    <header className="bg-white shadow-md p-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex content-center items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden  rounded-md flex items-center justify-center"
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
          <nav className="hidden md:flex space-x-6">
            {Links.map((link, index) => (
              <Link
                key={index}
                href={link.Path}
                className="text-gray-700 hover:text-red-500"
              >
                {link.Title}
              </Link>
            ))}
          </nav>

          {/* Icons & Buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-black">
              <Image
                src="/search-normal.svg"
                alt="search"
                width={24}
                height={24}
              />
            </button>
            <button className="p-2 text-gray-600 hover:text-black">
              <Image
                src="/notification.svg"
                alt="search"
                width={24}
                height={24}
              />
            </button>
            <button className="rounded-full border p-1">
              <Image
                src="/avatar.png"
                alt="User"
                width={30}
                height={30}
                className="rounded-full"
              />
            </button>
            <button className="hidden md:block  bg-gradient-to-r from-red-500 to-orange-400 text-white px-4 py-2 rounded-lg">
              + Add New Product
            </button>
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
              <Link key={index} href={link.Path} className="text-gray-700">
                {link.Title}
              </Link>
            ))}
            <button className="p-2 text-gray-600 hover:text-black">
              <Image src="/globe.svg" alt="search" width={24} height={24} />
            </button>

            {/* <h1>{t("Home")}</h1> */}
          </ul>
        </motion.div>
      </div>
    </header>
  );
}
