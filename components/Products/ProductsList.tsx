import React, { useState } from 'react'
import { category } from './category';
import Image from 'next/image';

export default function ProductsList() {
    const [current, setcurrent] = useState(category.Products);
  return (
    <div className=" flex-1 bg-white p-5 w-[100%] md:w-auto rounded-2xl shadow-md">
      {/* Tabs */}
      <div className="flex justify-center md:justify-start space-x-3 text-gray-600   pb-2">
        <span
          onClick={() => setcurrent(category.Products)}
          className={`${
            current === category.Products
              ? "text-[#FF951D] bg-[#FFF5E9] border-[#FF951D] "
              : "text-[#E0E0E0] bg-[white] border-[#E0E0E0] "
          } hover:scale-110 duration-500 cursor-pointer border-1 rounded-xl p-1 px-6`}
        >
          Products
        </span>
        <span
          onClick={() => setcurrent(category.Articles)}
          className={`${
            current === category.Articles
              ? "text-[#FF951D] bg-[#FFF5E9] border-[#FF951D] "
              : "text-[#E0E0E0] bg-[white] border-[#E0E0E0] "
          } hover:scale-110 duration-500 cursor-pointer border-1 rounded-xl p-1 px-6`}
        >
          Articles
        </span>
        <span
            onClick={() => setcurrent(category.Reviews)}
          className={`${
            current === category.Reviews
              ? "text-[#FF951D] bg-[#FFF5E9] border-[#FF951D] "
              : "text-[#E0E0E0] bg-[white] border-[#E0E0E0] "
          } hover:scale-110 duration-500 cursor-pointer border-1 rounded-xl p-1 px-6`}
        >
          Reviews
        </span>
      </div>

      {/* Product List */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-semibold">
            Products <small className="text-[#828282] font-normal">(12)</small>
          </h3>
          <button className="flex gap-2 transition duration-700 bg-linear-to-r from-[#D20653] to-[#FF951D] hover:from-[#FF951D] hover:to-[#D20653] text-white px-4 py-2 rounded-lg">
            <Image
              src="/add-circle.svg"
              alt=" Add Review"
              width={18}
              height={18}
            />
            Add Review
          </button>
        </div>
        <div className="mt-4 md:mt-0 space-y-4 md:max-h-[75vh] overflow-y-auto">
          {/* Product List  */}
          <div className="flex bg-gray-50 p-4 rounded-lg shadow-sm relative">
            <div className="flex">
              <div className="relative w-[6rem] h-[5rem] overflow-hidden rounded-xl ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfd3/b08e/a868f750e8af9c438d630e0ad2d5357d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CL1hXok2EOD2~YCwWo4Ex1FB760hQzM1LNYdB4HjLbyyURdHgbYbibji85TUEizmKV8kqEdMXyUOs0uHH3DoijmyvbatvAmq20~sLKfXfSP9v4CNbqctWFS9weAAco2mhMUpMjDrtdDsAX883uLh3qDzevP4hQqLMjt6esBlUII1AuspMfFKcOoj234WntDV4zwDW1o06koATWcQiCUkeobpho3gu5ClK1N2yuEX6dApCc4uNW4mEPabp2zaEN~fgn0TZk30rX9KNfsTsLf3z~DKUQMOY8Bh~mrEJLzzB2OxnTyahBXiZVAX720vz1Zt0THI4Q9M96PtJ9AptQpDMg__"
                  className=" w-[100%] h-[100%] object-cover"
                  alt="Product"
                />
                <span className="absolute bottom-[-15] right-[-5] bg-[#D20653] text-white px-3 pe-4 pb-4 py-1 text-[8px] rounded-xl">
                  Live Auction
                </span>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-normal text-[14px] text-[#333333]">
                  Six-Piece Clothing Set (Blouse - Pants - Hat ...)
                </h4>
                <div>
                  <p className="text-gray-500 text-[14px]">
                    Starting Price{" "}
                    <strong className="text-gray-800 ">1000 EGP</strong>
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-gray-500 text-sm">Lot Starts In</p>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        2 <small>Days</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        10 <small>Hours</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        50 <small>Minutes</small>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 absolute w-[90%] flex md:justify-end items-center">
              <button className=" p-1 bg-[#FFFFFF] md:-me-10 rounded-full">
                <Image
                  src="/vuesax.svg"
                  alt=" Add Review"
                  width={20}
                  height={20}
                  className="w-[1.2rem]"
                />
              </button>
            </div>
          </div>
          <div className="flex bg-gray-50 p-4 rounded-lg shadow-sm relative">
            <div className="flex">
              <div className="relative w-[6rem] h-[5rem] overflow-hidden rounded-xl ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfd3/b08e/a868f750e8af9c438d630e0ad2d5357d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CL1hXok2EOD2~YCwWo4Ex1FB760hQzM1LNYdB4HjLbyyURdHgbYbibji85TUEizmKV8kqEdMXyUOs0uHH3DoijmyvbatvAmq20~sLKfXfSP9v4CNbqctWFS9weAAco2mhMUpMjDrtdDsAX883uLh3qDzevP4hQqLMjt6esBlUII1AuspMfFKcOoj234WntDV4zwDW1o06koATWcQiCUkeobpho3gu5ClK1N2yuEX6dApCc4uNW4mEPabp2zaEN~fgn0TZk30rX9KNfsTsLf3z~DKUQMOY8Bh~mrEJLzzB2OxnTyahBXiZVAX720vz1Zt0THI4Q9M96PtJ9AptQpDMg__"
                  className=" w-[100%] h-[100%] object-cover"
                  alt="Product"
                />
                <span className="absolute bottom-[-15] right-[-5] bg-[#D20653] text-white px-3 pe-4 pb-4 py-1 text-[8px] rounded-xl">
                  Live Auction
                </span>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-normal text-[14px] text-[#333333]">
                  Six-Piece Clothing Set (Blouse - Pants - Hat ...)
                </h4>
                <div>
                  <p className="text-gray-500 text-[14px]">
                    Starting Price{" "}
                    <strong className="text-gray-800 ">1000 EGP</strong>
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-gray-500 text-sm">Lot Starts In</p>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        2 <small>Days</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        10 <small>Hours</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        50 <small>Minutes</small>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 absolute w-[90%] flex md:justify-end items-center">
              <button className=" p-1 bg-[#FFFFFF] md:-me-10 rounded-full">
                <Image
                  src="/vuesax.svg"
                  alt=" Add Review"
                  width={20}
                  height={20}
                  className="w-[1.2rem]"
                />
              </button>
            </div>
          </div>
          <div className="flex bg-gray-50 p-4 rounded-lg shadow-sm relative">
            <div className="flex">
              <div className="relative w-[6rem] h-[5rem] overflow-hidden rounded-xl ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfd3/b08e/a868f750e8af9c438d630e0ad2d5357d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CL1hXok2EOD2~YCwWo4Ex1FB760hQzM1LNYdB4HjLbyyURdHgbYbibji85TUEizmKV8kqEdMXyUOs0uHH3DoijmyvbatvAmq20~sLKfXfSP9v4CNbqctWFS9weAAco2mhMUpMjDrtdDsAX883uLh3qDzevP4hQqLMjt6esBlUII1AuspMfFKcOoj234WntDV4zwDW1o06koATWcQiCUkeobpho3gu5ClK1N2yuEX6dApCc4uNW4mEPabp2zaEN~fgn0TZk30rX9KNfsTsLf3z~DKUQMOY8Bh~mrEJLzzB2OxnTyahBXiZVAX720vz1Zt0THI4Q9M96PtJ9AptQpDMg__"
                  className=" w-[100%] h-[100%] object-cover"
                  alt="Product"
                />
                <span className="absolute bottom-[-15] right-[-5] bg-[#D20653] text-white px-3 pe-4 pb-4 py-1 text-[8px] rounded-xl">
                  Live Auction
                </span>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-normal text-[14px] text-[#333333]">
                  Six-Piece Clothing Set (Blouse - Pants - Hat ...)
                </h4>
                <div>
                  <p className="text-gray-500 text-[14px]">
                    Starting Price{" "}
                    <strong className="text-gray-800 ">1000 EGP</strong>
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-gray-500 text-sm">Lot Starts In</p>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        2 <small>Days</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        10 <small>Hours</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        50 <small>Minutes</small>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 absolute w-[90%] flex md:justify-end items-center">
              <button className=" p-1 bg-[#FFFFFF] md:-me-10 rounded-full">
                <Image
                  src="/vuesax.svg"
                  alt=" Add Review"
                  width={20}
                  height={20}
                  className="w-[1.2rem]"
                />
              </button>
            </div>
          </div>
          <div className="flex bg-gray-50 p-4 rounded-lg shadow-sm relative">
            <div className="flex">
              <div className="relative w-[6rem] h-[5rem] overflow-hidden rounded-xl ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfd3/b08e/a868f750e8af9c438d630e0ad2d5357d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CL1hXok2EOD2~YCwWo4Ex1FB760hQzM1LNYdB4HjLbyyURdHgbYbibji85TUEizmKV8kqEdMXyUOs0uHH3DoijmyvbatvAmq20~sLKfXfSP9v4CNbqctWFS9weAAco2mhMUpMjDrtdDsAX883uLh3qDzevP4hQqLMjt6esBlUII1AuspMfFKcOoj234WntDV4zwDW1o06koATWcQiCUkeobpho3gu5ClK1N2yuEX6dApCc4uNW4mEPabp2zaEN~fgn0TZk30rX9KNfsTsLf3z~DKUQMOY8Bh~mrEJLzzB2OxnTyahBXiZVAX720vz1Zt0THI4Q9M96PtJ9AptQpDMg__"
                  className=" w-[100%] h-[100%] object-cover"
                  alt="Product"
                />
                <span className="absolute bottom-[-15] right-[-5] bg-[#D20653] text-white px-3 pe-4 pb-4 py-1 text-[8px] rounded-xl">
                  Live Auction
                </span>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-normal text-[14px] text-[#333333]">
                  Six-Piece Clothing Set (Blouse - Pants - Hat ...)
                </h4>
                <div>
                  <p className="text-gray-500 text-[14px]">
                    Starting Price{" "}
                    <strong className="text-gray-800 ">1000 EGP</strong>
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-gray-500 text-sm">Lot Starts In</p>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        2 <small>Days</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        10 <small>Hours</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        50 <small>Minutes</small>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 absolute w-[90%] flex md:justify-end items-center">
              <button className=" p-1 bg-[#FFFFFF] md:-me-10 rounded-full">
                <Image
                  src="/vuesax.svg"
                  alt=" Add Review"
                  width={20}
                  height={20}
                  className="w-[1.2rem]"
                />
              </button>
            </div>
          </div>
          <div className="flex bg-gray-50 p-4 rounded-lg shadow-sm relative">
            <div className="flex">
              <div className="relative w-[6rem] h-[5rem] overflow-hidden rounded-xl ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfd3/b08e/a868f750e8af9c438d630e0ad2d5357d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CL1hXok2EOD2~YCwWo4Ex1FB760hQzM1LNYdB4HjLbyyURdHgbYbibji85TUEizmKV8kqEdMXyUOs0uHH3DoijmyvbatvAmq20~sLKfXfSP9v4CNbqctWFS9weAAco2mhMUpMjDrtdDsAX883uLh3qDzevP4hQqLMjt6esBlUII1AuspMfFKcOoj234WntDV4zwDW1o06koATWcQiCUkeobpho3gu5ClK1N2yuEX6dApCc4uNW4mEPabp2zaEN~fgn0TZk30rX9KNfsTsLf3z~DKUQMOY8Bh~mrEJLzzB2OxnTyahBXiZVAX720vz1Zt0THI4Q9M96PtJ9AptQpDMg__"
                  className=" w-[100%] h-[100%] object-cover"
                  alt="Product"
                />
                <span className="absolute bottom-[-15] right-[-5] bg-[#D20653] text-white px-3 pe-4 pb-4 py-1 text-[8px] rounded-xl">
                  Live Auction
                </span>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-normal text-[14px] text-[#333333]">
                  Six-Piece Clothing Set (Blouse - Pants - Hat ...)
                </h4>
                <div>
                  <p className="text-gray-500 text-[14px]">
                    Starting Price{" "}
                    <strong className="text-gray-800 ">1000 EGP</strong>
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-gray-500 text-sm">Lot Starts In</p>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        2 <small>Days</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        10 <small>Hours</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        50 <small>Minutes</small>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 absolute w-[90%] flex md:justify-end items-center">
              <button className=" p-1 bg-[#FFFFFF] md:-me-10 rounded-full">
                <Image
                  src="/vuesax.svg"
                  alt=" Add Review"
                  width={20}
                  height={20}
                  className="w-[1.2rem]"
                />
              </button>
            </div>
          </div>
          <div className="flex bg-gray-50 p-4 rounded-lg shadow-sm relative">
            <div className="flex">
              <div className="relative w-[6rem] h-[5rem] overflow-hidden rounded-xl ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfd3/b08e/a868f750e8af9c438d630e0ad2d5357d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CL1hXok2EOD2~YCwWo4Ex1FB760hQzM1LNYdB4HjLbyyURdHgbYbibji85TUEizmKV8kqEdMXyUOs0uHH3DoijmyvbatvAmq20~sLKfXfSP9v4CNbqctWFS9weAAco2mhMUpMjDrtdDsAX883uLh3qDzevP4hQqLMjt6esBlUII1AuspMfFKcOoj234WntDV4zwDW1o06koATWcQiCUkeobpho3gu5ClK1N2yuEX6dApCc4uNW4mEPabp2zaEN~fgn0TZk30rX9KNfsTsLf3z~DKUQMOY8Bh~mrEJLzzB2OxnTyahBXiZVAX720vz1Zt0THI4Q9M96PtJ9AptQpDMg__"
                  className=" w-[100%] h-[100%] object-cover"
                  alt="Product"
                />
                <span className="absolute bottom-[-15] right-[-5] bg-[#D20653] text-white px-3 pe-4 pb-4 py-1 text-[8px] rounded-xl">
                  Live Auction
                </span>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-normal text-[14px] text-[#333333]">
                  Six-Piece Clothing Set (Blouse - Pants - Hat ...)
                </h4>
                <div>
                  <p className="text-gray-500 text-[14px]">
                    Starting Price{" "}
                    <strong className="text-gray-800 ">1000 EGP</strong>
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-gray-500 text-sm">Lot Starts In</p>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        2 <small>Days</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        10 <small>Hours</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        50 <small>Minutes</small>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 absolute w-[90%] flex md:justify-end items-center">
              <button className=" p-1 bg-[#FFFFFF] md:-me-10 rounded-full">
                <Image
                  src="/vuesax.svg"
                  alt=" Add Review"
                  width={20}
                  height={20}
                  className="w-[1.2rem]"
                />
              </button>
            </div>
          </div>
          <div className="flex bg-gray-50 p-4 rounded-lg shadow-sm relative">
            <div className="flex">
              <div className="relative w-[6rem] h-[5rem] overflow-hidden rounded-xl ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfd3/b08e/a868f750e8af9c438d630e0ad2d5357d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CL1hXok2EOD2~YCwWo4Ex1FB760hQzM1LNYdB4HjLbyyURdHgbYbibji85TUEizmKV8kqEdMXyUOs0uHH3DoijmyvbatvAmq20~sLKfXfSP9v4CNbqctWFS9weAAco2mhMUpMjDrtdDsAX883uLh3qDzevP4hQqLMjt6esBlUII1AuspMfFKcOoj234WntDV4zwDW1o06koATWcQiCUkeobpho3gu5ClK1N2yuEX6dApCc4uNW4mEPabp2zaEN~fgn0TZk30rX9KNfsTsLf3z~DKUQMOY8Bh~mrEJLzzB2OxnTyahBXiZVAX720vz1Zt0THI4Q9M96PtJ9AptQpDMg__"
                  className=" w-[100%] h-[100%] object-cover"
                  alt="Product"
                />
                <span className="absolute bottom-[-15] right-[-5] bg-[#D20653] text-white px-3 pe-4 pb-4 py-1 text-[8px] rounded-xl">
                  Live Auction
                </span>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-normal text-[14px] text-[#333333]">
                  Six-Piece Clothing Set (Blouse - Pants - Hat ...)
                </h4>
                <div>
                  <p className="text-gray-500 text-[14px]">
                    Starting Price{" "}
                    <strong className="text-gray-800 ">1000 EGP</strong>
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-gray-500 text-sm">Lot Starts In</p>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        2 <small>Days</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        10 <small>Hours</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        50 <small>Minutes</small>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 absolute w-[90%] flex md:justify-end items-center">
              <button className=" p-1 bg-[#FFFFFF] md:-me-10 rounded-full">
                <Image
                  src="/vuesax.svg"
                  alt=" Add Review"
                  width={20}
                  height={20}
                  className="w-[1.2rem]"
                />
              </button>
            </div>
          </div>
          <div className="flex bg-gray-50 p-4 rounded-lg shadow-sm relative">
            <div className="flex">
              <div className="relative w-[6rem] h-[5rem] overflow-hidden rounded-xl ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cfd3/b08e/a868f750e8af9c438d630e0ad2d5357d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CL1hXok2EOD2~YCwWo4Ex1FB760hQzM1LNYdB4HjLbyyURdHgbYbibji85TUEizmKV8kqEdMXyUOs0uHH3DoijmyvbatvAmq20~sLKfXfSP9v4CNbqctWFS9weAAco2mhMUpMjDrtdDsAX883uLh3qDzevP4hQqLMjt6esBlUII1AuspMfFKcOoj234WntDV4zwDW1o06koATWcQiCUkeobpho3gu5ClK1N2yuEX6dApCc4uNW4mEPabp2zaEN~fgn0TZk30rX9KNfsTsLf3z~DKUQMOY8Bh~mrEJLzzB2OxnTyahBXiZVAX720vz1Zt0THI4Q9M96PtJ9AptQpDMg__"
                  className=" w-[100%] h-[100%] object-cover"
                  alt="Product"
                />
                <span className="absolute bottom-[-15] right-[-5] bg-[#D20653] text-white px-3 pe-4 pb-4 py-1 text-[8px] rounded-xl">
                  Live Auction
                </span>
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-normal text-[14px] text-[#333333]">
                  Six-Piece Clothing Set (Blouse - Pants - Hat ...)
                </h4>
                <div>
                  <p className="text-gray-500 text-[14px]">
                    Starting Price{" "}
                    <strong className="text-gray-800 ">1000 EGP</strong>
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-gray-500 text-sm">Lot Starts In</p>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        2 <small>Days</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        10 <small>Hours</small>{" "}
                      </span>
                      <span className="font-bold text-sm text-[#FF951D] bg-[#FFF5E9] p-1 px-3 rounded-xl">
                        50 <small>Minutes</small>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 absolute w-[90%] flex md:justify-end items-center">
              <button className=" p-1 bg-[#FFFFFF] md:-me-10 rounded-full">
                <Image
                  src="/vuesax.svg"
                  alt=" Add Review"
                  width={20}
                  height={20}
                  className="w-[1.2rem]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
