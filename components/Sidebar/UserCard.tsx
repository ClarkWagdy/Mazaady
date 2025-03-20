
'use client';
 
import React  from 'react'
 
import Image from "next/image";

import { useChangeLanguage } from '@/i18n/ChangeLan';
import QrCodeSection from './QrCodeSection';
 
export default   function UserCard( ) {
   return (
    
      <>
           {/* Sidebar */}
           <div className="bg-white p-6 w-[100%] md:w-auto rounded-lg shadow-md col-span-1">
      <div className="flex flex-col   ">
          <img src="https://via.placeholder.com/80" className="rounded-full mb-4" alt="Profile"/>
          <h2 className="text-xl font-semibold">Hala Ahmed</h2>
          <p className="text-gray-500 text-sm">Owner of Beauty products for Makeup & Skin Care.</p>
          <div className="flex justify-center mt-4 space-x-4 text-sm">
              <div className="px-3 flex py-1 bg-[#FFF5E9] rounded-lg">

                <Image src="/user-tick.svg" alt="search" width={24} height={24} />

              <div className="flex flex-col ms-3">
            <span className="text-[#363333] text-[14px] font-semibold">5</span>
            <span className="text-[#FF951D] text-[12px] font-medium">Following</span>
        </div>
              </div>
              <div className="px-3 flex py-1 bg-[#FFF5E9] rounded-lg">

<Image src="/profile-2user.svg" alt="search" width={24} height={24} />

<div className="flex flex-col ms-3">
<span className="text-[#363333] text-[14px] font-semibold">20</span>
<span className="text-[#FF951D] text-[12px] font-medium">Followers</span>
</div>
</div>
<div className="px-3 flex py-1 bg-[#FFF5E9] rounded-lg">

<Image src="/magic-star.svg" alt="search" width={24} height={24} />

<div className="flex flex-col ms-3">
<span className="text-[#363333] text-[14px] font-semibold">4.2 <small className='text-gray-500'>(15)</small> </span>
<span className="text-[#FF951D] text-[12px] font-medium"> Rate</span>
</div>
</div>



          
            
          </div>
          <button className="mt-4  bg-linear-to-r from-[#D20653] to-[#FF951D] text-white px-6 py-2 rounded-lg">Follow</button>
      </div>
      {/* QR Code Section */}
  
  </div>
 
  </>
 
  );
}
