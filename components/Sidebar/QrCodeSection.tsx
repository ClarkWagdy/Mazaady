
'use client';
 
import React  from 'react'
 
import Image from "next/image";

import { useChangeLanguage } from '@/i18n/ChangeLan';
 
export default   function QrCodeSection( ) {
   return (
    
      <>
           {/* Sidebar */}
           <div className="bg-white p-6 w-[100%] md:w-auto rounded-lg shadow-md col-span-1">
     
      {/* QR Code Section */}
      <div className=" bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-sm">Download the QR code or share it with your friends.</p>
          <div className="mt-2 bg-white p-4 rounded-lg">
              <img src="https://via.placeholder.com/120" alt="QR Code"/>
              <p className="text-sm mt-2">Follow Us on Mazady</p>
          </div>
      </div>
  </div></>
 
  );
}
