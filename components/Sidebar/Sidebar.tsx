
'use client';
 
import React  from 'react'
 
import QrCodeSection from './QrCodeSection';
import UserCard from './UserCard';
 
export default   function Sidebar( ) {
   return (
     <>
       {/* Sidebar */}
       <div className='w-[100%] md:w-auto flex flex-col gap-3'>
         <UserCard />
         <QrCodeSection />
       </div>
     </>
   );
}
