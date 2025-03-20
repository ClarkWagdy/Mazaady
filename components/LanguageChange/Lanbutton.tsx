'use client';
 
import React  from 'react'
 
import Image from "next/image";

import { useChangeLanguage } from '@/i18n/ChangeLan';
 
export default   function Lanbutton({ className }: { className?: string }) {
  const { changeLanguage, currentLocale } = useChangeLanguage();
  return (
    <button
      onClick={() => {
        changeLanguage(currentLocale === "en" ? "ar" : "en");
      }}
      className={"flex space-x-2  text-gray-600 hover:text-black " + className}
    >
      <Image src="/globe.svg" alt="search" width={24} height={24} />
      <span className="border-l-2 border-gray-500"></span>
      <p> {currentLocale.toUpperCase()}</p>
    </button>
  );
}
