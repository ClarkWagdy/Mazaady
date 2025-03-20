'use client'
  import { useTranslations } from "next-intl";

import Image from "next/image";
import Sidebar from "../../../components/Sidebar/Sidebar";

export default function Home() {

  const t = useTranslations("common");
  return (
    <main className="md:max-w-6xl max-w-[90%]  mx-auto flex flex-wrap mt-8 gap-4">
    
      <Sidebar/>
      {/* Main Content */}
      <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          {/* Tabs */}
          <div className="flex space-x-6 text-gray-600 border-b pb-2">
              <span className="text-orange-500 border-b-2 border-orange-500 pb-1">Products</span>
              <span className="cursor-pointer">Articles</span>
              <span className="cursor-pointer">Reviews</span>
          </div>
          
          {/* Product List */}
          <div className="mt-4">
              <h3 className="text-lg font-semibold">Products (12)</h3>
              <div className="mt-4 space-y-4">
                  {/* Product Item */}
                  <div className="flex bg-gray-50 p-4 rounded-lg shadow-sm">
                      <img src="https://via.placeholder.com/80" className="rounded-lg" alt="Product"/>
                      <div className="ml-4 flex-1">
                          <h4 className="font-semibold">Six-Piece Clothing Set (Blouse - Pants - Hat ...)</h4>
                          <p className="text-red-500 font-bold">Starting Price 1000 EGP</p>
                          <p className="text-gray-500 text-sm">Lot Starts In <span className="font-bold">2 Days 10 Hours 50 Minutes</span></p>
                      </div>
                      <span className="bg-red-500 text-white px-3 py-1 text-sm rounded-lg">Live Auction</span>
                  </div>
                  
                  {/* Duplicate Product Item for layout */}
                  <div className="flex bg-gray-50 p-4 rounded-lg shadow-sm">
                      <img src="https://via.placeholder.com/80" className="rounded-lg" alt="Product"/>
                      <div className="ml-4 flex-1">
                          <h4 className="font-semibold">Jeep Car, New, Used For Only One Time</h4>
                          <p className="text-red-500 font-bold">Starting Price 1000 EGP</p>
                          <p className="text-gray-500 text-sm">Lot Starts In <span className="font-bold">2 Days 10 Hours 50 Minutes</span></p>
                      </div>
                      <span className="bg-yellow-500 text-white px-3 py-1 text-sm rounded-lg">Hot Sale</span>
                  </div>
              </div>
          </div>
      </div>
    </main>
  );
}
