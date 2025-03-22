import React from 'react'
 import { motion } from "framer-motion";
import Image from 'next/image';
import { resultT } from '../../Types/categorie';

interface Props {
  setViewResult: Function;
  reset: Function;
  setResultData: Function;

  setsubcategories: Function;
  setsubcategoryproperties: Function;

  setpropertiesidx: Function;
  ResultData: resultT|undefined;
}
export default function Result(props:Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-5xl mx-auto  "
    >
      <div className="flex justify-between my-4">
        <button
          className="transition  hover:scale-125"
          onClick={() => props.setViewResult(false)}
        >
          <Image
            src="/back.svg"
            alt="back"
            className="opacity-50"
            width={20}
            height={20}
          />
        </button>
        <button
          className="transition  hover:scale-125"
          onClick={() => {
            props.reset();
            props.setResultData(undefined);
            props.setViewResult(false);
            props.setsubcategories(undefined);
            props.setsubcategoryproperties(undefined);
            props.setpropertiesidx(undefined);
          }}
        >
          <Image src="/close.svg" alt="back" width={20} height={20} />
        </button>
      </div>
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-linear-to-r  from-[#d206548e] to-[#ff961d8e] text-white ">
          <tr>
            <th className="p-4 text-left">Key</th>
            <th className="p-4 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          {props.ResultData?.MainCategory?.image &&
            props.ResultData?.MainCategory?.label && (
              <tr className="border-b border-gray-300 hover:bg-gray-100">
                <td className="p-4">Main Category</td>
                <td className="p-4">
                  <div className="flex items-center">
                    <img
                      src={props.ResultData?.MainCategory.image}
                      alt={props.ResultData?.MainCategory.label}
                      width="24"
                      height="24"
                      style={{ marginRight: 8 }}
                    />
                    <p>{props.ResultData?.MainCategory.label}</p>
                  </div>
                </td>
              </tr>
            )}

          {props.ResultData?.Subcategory?.label && (
            <tr className="border-b border-gray-300 hover:bg-gray-100">
              <td className="p-4">Subcategory</td>
              <td className="p-4">
                <div className="flex items-center">
                  <p>{props.ResultData?.Subcategory.label}</p>
                </div>
              </td>
            </tr>
          )}

          {props.ResultData?.Subcategory?.Categoryoptions?.map((ele, index) => {
            if (ele.name && ele.dataValue?.label)
              return (
                <tr
                  key={ele.id}
                  className={`${
                    index + 1 ===
                    props.ResultData?.Subcategory.Categoryoptions?.length
                      ? ""
                      : "border-b border-gray-300"
                  } hover:bg-gray-100`}
                >
                  <td className="p-4">{ele.name}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <p>{ele.dataValue?.label}</p>
                    </div>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </motion.div>
  );
}
