export interface categorieT {
  id: number
  name: string
  slug: string
  parent_id: number
  properties_count: number
  image: ImageT
  is_other: boolean;
}



interface ImageT {
  medium: string;
  thumbnail: string;
  id: number;
  custom_properties: null;
  place_holder: place_holderT;
}

 interface  place_holderT  {
    small_no_bg: string
    medium_bg: string
    small_bg: string
  };

  export interface OptionT {
    value: number;
    label: string;
    image?: string;
    Categoryoptions?: optionsT[];
    properties?: OptionT[];
 
   
  }
  export interface subcategorieT {
    id: number;
    name: string;
    type: string;
    parent_id: number;
    options: optionsT[] 
  }
export interface optionsT {
  id: number;
  name: string;
  has_child?: boolean;
  properties?: OptionT[];
  type: string | "any";
  dataValue?: any;
}
    export interface propertiesValuesT {
      id: number;
      parent_id: number;
      parent_name: string;
      property_id: number;
      property_name: string;

      value: string;
      child_options?: optionsT[];
      child_name?: string;
      child_id?: number;
      child_value?: string;
    }

    export interface resultT {
      MainCategory: OptionT;
      Subcategory: OptionT;
    }