import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  categorieT,
  optionsT,
  OptionT,
  propertiesValuesT, 
  resultT, 
  subcategorieT,
} from "../../Types/categorie";
import { useChangeLanguage } from "@/i18n/ChangeLan";
import axios from "axios";
import { Control, Controller, FieldErrors, FieldValues, UseFormClearErrors, UseFormGetValues, UseFormSetError, UseFormSetValue } from "react-hook-form";
import Select, { SingleValue }  from "react-select";

interface Props {
  setError: UseFormSetError<FieldValues>;
  setViewResult: (value: boolean) => void;
  setResultData: (data: resultT) => void;
  reset: () => void;
  setValue: UseFormSetValue<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  handleSubmit: (
    callback: (data: FieldValues) => void,
  ) => (event?: React.BaseSyntheticEvent) => void;
  setsubcategories: (categories: OptionT[] | undefined) => void;
  setsubcategoryproperties: (properties: optionsT[] | undefined) => void;
  subcategoryproperties?: optionsT[];
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  subcategories?: OptionT[];
  propertiesidx?: number;
  setpropertiesidx: (index: number) => void;
}
export default function Form(props: Props) {
 const customStyles = {
   control: (
     provided: Record<string, unknown>,
     state: { isFocused: boolean },
   ) => ({
     ...provided,
     backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
     borderColor: state.isFocused ? "#FF951D" : "#ccc",
     boxShadow: state.isFocused ? "0 0 0 2px rgba(254,145,36,0.25)" : "none",
     "&:hover": {
       borderColor: "#FF951D",
     },
   }),
   option: (
     provided: Record<string, unknown>,
     state: { isSelected: boolean; isFocused: boolean },
   ) => ({
     ...provided,
     backgroundColor: state.isSelected
       ? "#FF951D"
       : state.isFocused
       ? "#f0f0f0"
       : "white",
     color: state.isSelected ? "white" : "black",
     padding: 10,
   }),
   menu: (provided: Record<string, unknown>) => ({
     ...provided,

     zIndex: 10,
   }),
   menuList: (provided : Record<string, unknown>) => ({
     ...provided,
     maxHeight: 200, // Set menu height
     overflowY: "auto" as const, // Enable scrolling if needed
   }),
 };
             const {  currentLocale } = useChangeLanguage();
            
            
             const [categories, setcategories] = useState<OptionT[]|undefined>(undefined);
             const [loadindex, setloadindex] = useState<number>();
         
const [propertiesValues, setpropertiesValues] = useState<
  propertiesValuesT[] | undefined
>(undefined);
           const onSubmit = (data: FieldValues): void => {
             if (!data.MainCategory) {
               props.setError("MainCategory", {
                 message: "Please Select Main Category",
               });

               return;
             }
             if (!data.Subcategory) {
               props.setError("Subcategory", {
                 message: "Please Select Subcategory",
               });
               return;
             }
             props.setResultData(data as unknown as resultT);
             props.setViewResult(true);
           };

           useEffect(() => {
             axios
               .get(
                 "https://stagingapi.mazaady.com/api/v1/all-categories/:platform",
                 {
                   headers: {
                     "content-language": currentLocale,
                     currency: "AED",
                     platform: "web",
                     Accept: "application/json",
                     "private-key": "Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ",
                   },
                 },
               )
               .then((res) => {
                 if (res.data.data.categories.length > 0) {
                   const formattedOptions = res.data.data.categories.map(
                     (item: categorieT) => ({
                       value: item.id,
                       label: item.name,
                       image: item.image.thumbnail, // Optional for custom styling
                     }),
                   );
                   setcategories(formattedOptions);
                 }
               });
           }, []);

           function HandleCategorySelected(e: OptionT | null):void {
             props.reset();
             props.setValue("MainCategory", e);
             props.setValue("Subcategory", null);
             props.clearErrors("MainCategory");
             setpropertiesValues(undefined);
             props.setsubcategories(undefined);
             props.setsubcategoryproperties(undefined);

             axios
               .get(
                 `https://stagingapi.mazaady.com/api/v1/properties/${e?.value}`,
                 {
                   headers: {
                     "content-language": currentLocale,
                     currency: "AED",
                     platform: "web",
                     Accept: "application/json",
                     "private-key": "Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ",
                   },
                 },
               )
               .then((res) => {
                 if (res.data.data) {
                   const formattedOptions = res.data.data.map(
                     (item: subcategorieT) => ({
                       value: item.id,
                       label: item.name,
                       Categoryoptions: item.options,
                     }),
                   );

                   props.setsubcategories(formattedOptions);
                 }
               });
           }

           function HandleSubCategorySelected(e: OptionT | null) {
             props.setsubcategoryproperties(undefined);
             setpropertiesValues([]);
             props.setValue("Subcategory", e);
             props.clearErrors("Subcategory");
             if (e?.Categoryoptions && e.Categoryoptions.length > 0) {
               props.clearErrors("Subcategory");
                props.setsubcategoryproperties(e.Categoryoptions);
             
             }
           }

           function getproperties(id: number, index: number, level: number) {
             setloadindex(id);
             axios
               .get(
                 `https://stagingapi.mazaady.com/api/v1/option-properties/${id}`,
                 {
                   headers: {
                     "content-language": currentLocale,
                     currency: "AED",
                     platform: "web",
                     Accept: "application/json",
                     "private-key": "Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ",
                   },
                 },
               )
               .then((res) => {
                 if (res.data.data && props.subcategoryproperties) {
                   let formattedOptions: OptionT[] = res.data.data.map(
                     (item: subcategorieT) => ({
                       value: item.id,
                       label: item.name,
                     }),
                   );
                   formattedOptions = [
                     ...formattedOptions,
                     {
                       value: 0,
                       label: "Other",
                     },
                   ];
                   const data = [...props.subcategoryproperties];
                   console.log(level, data[index].properties);
                   if (level === 1) {
                     data[index].properties = formattedOptions;
                   } else if (level === 2 && data[index].properties) {
                     const indx = data[index].properties.findIndex(
                       (ele) => ele.value === id,
                     );
                     data[index].properties[indx].properties = [
                       ...formattedOptions,
                     ];
                   }

                   props.setsubcategoryproperties(data);

                   return formattedOptions;
                 }
               });
           }

           function HandlepropertiesChange(
             e: SingleValue<OptionT>,
             index: number,
             ele: optionsT,
             level: number,
           ) {
             if (propertiesValues) {
               const data = [...propertiesValues];
               data[index] = {
                 id: index,
                 parent_id: ele.id,
                 parent_name: ele.name,
                 property_id: e?.value ?? 0,
                 property_name: e?.label ?? "",
                 child_options: e?.properties?.map((prop) => ({
                   ...prop,
                   id: prop.value,
                   name: prop.label,
                   type: "custom", // or any default type you want to assign
                 })),

                 child_name: level === 2 && e ? e.label : "",
                 child_id: level === 2 && e ? Number(e.value) : undefined,
                 child_value: "",
                 value: "",
               };
               setpropertiesValues(() => data);
             }
           }
           function HandlepropertiesValueChange(
             e: React.ChangeEvent<HTMLInputElement>,
             index: number,
             level: number,
           ) {
             const data = propertiesValues ? [...propertiesValues] : [];

             if (e) {
               if (level === 1) {
                 data[index] = { ...data[index], value: e.target.value };
               } else {
                 data[index] = { ...data[index], child_value: e.target.value };
               }

               if (props.getValues("Subcategory").Categoryoptions) {
                 const data = props.getValues("Subcategory");
                 data.Categoryoptions[index].dataValue = {
                   label: e.target.value,
                   value: 0,
                 };

                 props.setValue("Subcategory", data);
               }
             }

             setpropertiesValues(() => data);
           }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-5xl mx-auto  "
    >
      <h1 className="text-2xl font-semibold">Choose category</h1>
      <p className="text-gray-500 my-2">Let’s get started</p>

      <form onSubmit={props.handleSubmit(onSubmit)}>
        <div className="my-4">
          <label className="block text-gray-700">Main Category</label>
          <Controller
            name="MainCategory"
            control={props.control}
            render={() => (
              <Select
                className="shadow-sm "
                isClearable
                isLoading={!categories}
                placeholder="Select Main Category"
                styles={customStyles}
                value={props.getValues("MainCategory")}
                onChange={(e) => {
                  HandleCategorySelected(e);
                }}
                options={categories}
                formatOptionLabel={(e) => (
                  <div
                    className="flex items-center opacity-50 hover:opacity-100 hover:scale-102  transition-all"
                    style={{ lineHeight: "20px" }}
                  >
                    <img
                      src={e.image}
                      alt={e.label}
                      width="24"
                      height="24"
                      style={{ marginRight: 8 }}
                    />
                    {e.label}
                  </div>
                )}
              />
            )}
          />
          {props.errors.MainCategory && (
            <p className="text-red-500 text-sm mt-1">
              {props.errors.MainCategory?.message?.toString()}
            </p>
          )}
        </div>
        <div className="my-4">
          <label className="block text-gray-700">Subcategory</label>

          <Controller
            name="Subcategory"
            control={props.control}
            defaultValue={undefined}
            render={() => (
              <Select
                className="shadow-sm "
                isClearable
                styles={customStyles}
                value={props.getValues("Subcategory")}
                placeholder={
                  props.subcategories && props.subcategories.length === 0
                    ? "No Subcategories available"
                    : "Select Subcategory"
                }
                onChange={(e) => {
                  HandleSubCategorySelected(e);
                }}
                isDisabled={
                  !props.subcategories || props.subcategories.length === 0
                }
                options={props.subcategories}
                formatOptionLabel={(e) => {
                  return (
                    <div className="flex items-center opacity-50 hover:opacity-100 hover:scale-102  transition-all">
                      {e.label}
                    </div>
                  );
                }}
              />
            )}
          />
          {props.errors.Subcategory && (
            <p className="text-red-500 text-sm mt-1">
              {props.errors.Subcategory?.message?.toString()}
            </p>
          )}
        </div>

        {props.subcategoryproperties && props.subcategoryproperties.length > 0
          ? props.subcategoryproperties.map((ele: optionsT, index: number) => {
              return (
                <div key={ele.id} className="my-4">
                  <label className="block text-gray-700">{ele.name}</label>

                  <Controller
                    name={ele.name as string}
                    control={props.control}
                    render={() => (
                      <Select
                        className="shadow-sm "
                        onFocus={() => getproperties(ele.id, index, 1)}
                        isLoading={loadindex === ele.id && !ele.properties}
                        styles={customStyles}
                        options={ele.properties}
                        placeholder={
                          props.subcategories &&
                          props.subcategories.length === 0
                            ? "No properties available"
                            : "Select properties"
                        }
                        onChange={(e: SingleValue<OptionT>): void => {
                          if (e?.value) {
                            getproperties(e?.value, index, 2);

                            const indx: number | undefined = props
                              .getValues("Subcategory")
                              .Categoryoptions?.findIndex(
                                (item: optionsT) => item.id === ele.id,
                              );

                            if (
                              indx &&
                              props.getValues("Subcategory").Categoryoptions
                            ) {
                              const data = props.getValues("Subcategory");
                              data.Categoryoptions[indx].dataValue = e;

                              props.setValue("Subcategory", data);
                            }

                            props.setpropertiesidx(
                              ele.properties?.findIndex(
                                (item) => item.value === e?.value,
                              ) ?? -1,
                            );
                          }
                          HandlepropertiesChange(e, index, ele, 2);
                        }}
                      />
                    )}
                  />
                  {ele.properties &&
                  props.propertiesidx &&
                  ele.properties[props.propertiesidx]?.properties &&
                  [
                    ele.properties[props.propertiesidx].properties !== undefined
                      ? ele.properties[props.propertiesidx].properties
                      : [],
                  ].length > 1 ? (
                    <div className="my-4 ps-5">
                      <label className="block text-gray-700">{ele.name}</label>
                      <Controller
                        name="subcategorypropertiesChild"
                        control={props.control}
                        render={() => (
                          <Select
                            className="shadow-sm "
                            // onFocus={() =>
                            //   getproperties(ele.id, index, 1)
                            // }
                            isLoading={loadindex === ele.id && !ele.properties}
                            styles={customStyles}
                            options={ele.properties}
                            placeholder={
                              props.subcategories &&
                              props.subcategories.length === 0
                                ? "No properties available"
                                : "Select properties"
                            }
                            onChange={(e) => {
                              console.log(e);
                              // if (e?.value)
                              //   getproperties(e?.value, index, 2);
                              // HandlepropertiesChange(
                              //   e,
                              //   index,
                              //   ele,
                              //   1,
                              // );
                            }}
                          />
                        )}
                      />

                      {propertiesValues &&
                      propertiesValues[index]?.property_id === 0 ? (
                        <input
                          className="w-full mt-1 rounded-md border-1 border-gray-300 focus:ring-2 focus:ring-[#FF951D] focus:border-[#FF951D] shadow-sm p-[6px] px-2  text-gray-900 outline-none transition"
                          placeholder={`Enter ${propertiesValues[index].parent_name} value`}
                          onChange={(e) =>
                            HandlepropertiesValueChange(e, index, 1)
                          }
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                  {propertiesValues &&
                  propertiesValues[index]?.property_id === 0 ? (
                    <input
                      className="w-full mt-1 rounded-md border-1 border-gray-300 focus:ring-2 focus:ring-[#FF951D] focus:border-[#FF951D] shadow-sm p-[6px] px-2  text-gray-900 outline-none transition"
                      placeholder={`Enter ${propertiesValues[index].parent_name} value`}
                      onChange={(e) => HandlepropertiesValueChange(e, index, 2)}
                    />
                  ) : (
                    ""
                  )}
                  {props.errors[ele.name as keyof typeof props.errors]
                    ?.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {props.errors[ele.name as keyof typeof props.errors]
                        ?.message + ""}
                    </p>
                  )}
                </div>
              );
            })
          : ""}

        <button
          type="submit"
          className="w-full bg-linear-to-r from-[#D20653] to-[#FF951D] text-white py-2 rounded-lg mt-4"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
}
