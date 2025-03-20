"use client";

import React from "react";

import Image from "next/image";

export default function UserCard() {
  return (
    <>
      {/* Sidebar */}
      <div className="bg-white p-5 w-[100%] md:w-auto rounded-2xl shadow-md col-span-1">
        <div className="flex flex-col   ">
          <Image
            src="/avat.jpg"
            alt="User"
            width={100}
            height={100}
            className="rounded-2xl w-[100] h-[100] object-cover mb-4 "
          />
          <h2 className="text-xl font-semibold">Hala Ahmed</h2>
          <p className="text-gray-500 text-sm max-w-[359px]">
            I am Hala Ahmed, I am the owner of the local brand called Beauty
            which is for Mackeup and Skin Care.
          </p>
          <div className="flex justify-center mt-4 space-x-2 md:space-x-4 text-sm">
            <div className="px-3 flex py-1 bg-[#FFF5E9] rounded-2xl">
              <Image src="/user-tick.svg" alt="search" width={24} height={24} />

              <div className="flex flex-col ms-1">
                <span className="text-[#363333] text-[14px] font-semibold">
                  5
                </span>
                <span className="text-[#FF951D] text-[12px] font-medium">
                  Following
                </span>
              </div>
            </div>
            <div className="px-3 flex py-1 bg-[#FFF5E9] rounded-2xl">
              <Image
                src="/profile-2user.svg"
                alt="search"
                width={24}
                height={24}
              />

              <div className="flex flex-col ms-1">
                <span className="text-[#363333] text-[14px] font-semibold">
                  20
                </span>
                <span className="text-[#FF951D] text-[12px] font-medium">
                  Followers
                </span>
              </div>
            </div>
            <div className="px-3 flex py-1 bg-[#FFF5E9] rounded-2xl">
              <Image
                src="/magic-star.svg"
                alt="search"
                width={24}
                height={24}
              />

              <div className="flex flex-col ms-1">
                <span className="text-[#363333] text-[14px] font-semibold">
                  4.2 <small className="font-sm text-gray-500">(15)</small>{" "}
                </span>
                <span className="text-[#FF951D] text-[12px] font-medium">
                  {" "}
                  Rate
                </span>
              </div>
            </div>
          </div>
          <button className="mt-4  transition duration-700 bg-linear-to-r from-[#D20653] to-[#FF951D] hover:from-[#FF951D] hover:to-[#D20653]  text-white px-6 py-2 rounded-xl">
            Follow
          </button>
        </div>
        {/* QR Code Section */}
      </div>
    </>
  );
}
