
'use client';
 
import React  from 'react'
 
import QrCodeSection from './QrCodeSection';
import UserCard from './UserCard';
 
export default   function Sidebar( ) {
   return (
    
      <>
           {/* Sidebar */}
            <UserCard/>
            <QrCodeSection/>
  </>
 
  );
}
