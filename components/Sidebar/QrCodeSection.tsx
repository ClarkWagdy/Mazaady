
'use client';
 
import React, { useState }  from 'react'
  import { motion } from "motion/react";

import Image from "next/image";

import { useChangeLanguage } from '@/i18n/ChangeLan';
 
export default   function QrCodeSection( ) {
      const [isOpen, setIsOpen] = useState(true);
    
   return (
     <>
       {/* Sidebar */}
       <div
         className={
           "bg-white p-5 w-[100%] md:w-auto rounded-2xl shadow-md col-span-1 overflow-hidden"
         }
       >
         {/* QR Code Section */}

         <div className="flex justify-between items-center w-[100%]  ">
           <h1 className="text-xl font-semibold">QR Code</h1>

           <div className="flex gap-3">
             <button>
               <Image
                 src="/eye.svg"
                 alt="View"
                 width={24}
                 height={24}
                 className="ms-1"
               />
             </button>
             <button>
               <Image
                 src="/send-square.svg"
                 alt="share"
                 width={24}
                 height={24}
                 className="ms-1"
               />
             </button>
             <button>
               <Image
                 src="/document-downloadb.svg"
                 alt="share"
                 width={24}
                 height={24}
                 className="ms-1"
               />
             </button>
             <button
               className="block md:hidden bg-gray-100  w-[24px] h-[24px] rounded-full"
               onClick={() => setIsOpen(!isOpen)}
             >
               <motion.div
                 initial={{ rotate: 0 }}
                 animate={{
                   rotate: isOpen ? 0 : 180,
                 }}
                 exit={{ rotate: 0  }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
               >
                 <Image
                   src="/arrow-up.svg"
                   alt="share"
                   width={15}
                   height={15}
                   className="ms-1"
                 />
               </motion.div>
             </button>
           </div>
         </div>

         <motion.div
           initial={{ height: "auto", opacity: 0, marginBottom: 0 }}
           animate={{
             height: isOpen ? "auto" : 0,
             opacity: isOpen ? 1 : 0,
             marginBottom: isOpen ? 0 : -15,
           }}
           exit={{ height: 0, opacity: 0, marginBottom: -15 }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
         >
           <span className="flex items-center justify-center bg-orange-100 text-gray-600 gap-3 text-sm p-3 mt-2 rounded-2xl">
             <Image
               src="/document-download.svg"
               alt="document"
               width={24}
               height={24}
               className="ms-1"
             />
             <p>Download the QR code or share it with your friends.</p>
           </span>

           <div className="mt-4 p-4 bg-gradient-to-r transition duration-700 bg-linear-to-r from-[#D20653] to-[#FF951D]  rounded-2xl">
             <div className="bg-white flex flex-col items-center gap-2 p-4 rounded-2xl">
               <Image
                 src="/logo.svg"
                 alt="Mazzaady"
                 width={152}
                 height={20}
                 className="ms-1"
               />
               <h3 className="text-xl font-semibold mt-2">Hala Ahmed</h3>
               <Image src="/qr.jpg" alt="QR Code" width={135} height={135} />

               <p className="text-gray-500 text-sm mt-1">
                 Follow Us On Mazaady
               </p>
             </div>
           </div>
         </motion.div>
       </div>
     </>
   );
}
