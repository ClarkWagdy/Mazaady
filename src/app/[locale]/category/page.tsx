"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useState } from "react";

import {
  optionsT,
  OptionT,
  
  resultT,
} from "../../../../Types/categorie";
import Result from "../../../../components/Category tree/Result";
import Form from "../../../../components/Category tree/Form";

const schema = z.object({
  MainCategory: z.any(),
  Subcategory: z.any(),
  subcategorypropertiesChild: z.any(),
  subcategoryproperties: z.any(),
});

type FormData = z.infer<typeof schema>;

export default function Category() {
  const [ViewResult, setViewResult] = useState<boolean>(false);
  const [ResultData, setResultData] = useState<resultT>();
  const [propertiesidx, setpropertiesidx] = useState<number>();
  const [subcategories, setsubcategories] = useState<OptionT[] | undefined>(
    undefined,
  );
  const [subcategoryproperties, setsubcategoryproperties] = useState<
    optionsT[] | undefined
  >(undefined);

  const {
    control, 
    reset,
    clearErrors,
    setError,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

 
  return (
    <main className="min-h-[calc(100vh-110px)]  p-5 flex items-center justify-center">
      <div className="bg-white max-w-5xl min-h-[600px] items-center w-full grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Form */}
        <div className="p-8">
          {ViewResult ? (
            <Result
              setViewResult={setViewResult}
              reset={reset}
              setResultData={setResultData}
              setsubcategories={setsubcategories}
              setsubcategoryproperties={setsubcategoryproperties}
              setpropertiesidx={setpropertiesidx}
              ResultData={ResultData}
            />
          ) : (
            <Form
              setError={setError}
              setViewResult={setViewResult}
              setResultData={setResultData}
              reset={reset}
              setValue={setValue}
              clearErrors={clearErrors}
              getValues={getValues}
              handleSubmit={handleSubmit}
              setsubcategories={setsubcategories}
              setsubcategoryproperties={setsubcategoryproperties}
              subcategoryproperties={subcategoryproperties}
              control={control}
              errors={errors}
              subcategories={subcategories}
              propertiesidx={propertiesidx}
              setpropertiesidx={setpropertiesidx}
            />
          )}
        </div>

        {/* Right Side - Image and Text */}
        <div className="p-5 relative h-[100%] hidden md:block bg-linear-to-tr  from-[#d206548e] to-[#ff961d8e]">
          <Image
            src="/logo.svg"
            alt="Furniture"
            layout="fill"
            objectFit="contain"
            className="p-5"
          />
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-xl font-semibold">Mazaady </h2>
            <p className="text-sm">Category tree</p>
          </div>
        </div>
      </div>
    </main>
  );
}
