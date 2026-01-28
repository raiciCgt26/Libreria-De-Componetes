import { useState } from "react";

import {
  Home,
  User,
  Settings,
  ChevronRight,
  Search,
  Eraser,
} from "lucide-react";

interface ButtonIconProp {
  text1?: string;
  text2?: string;

  icon1?: "search" | "delet" | "home" | "user" | "sett" | "chev" | "none";
  icon2?: "search" | "delet" | "home" | "user" | "sett" | "chev" | "none";

  //
  options?: "hover";
  size?: "sm" | "md" | "lg" | "xl";
  direction?: "x" | "y";
}

export const ToggleButtons = ({
  text1,
  text2,
  icon1 = "none",
  icon2 = "none",
  options = "hover",
  size = "sm",
  direction = "x",
}: ButtonIconProp) => {
  const colors = {
    hover: "bg-sky-900 text-white",
  };

  const optionSize = {
    sm: "px-2 py-0.5 text-sm",
    md: "px-3 py-1 text-md ",
    lg: "px-4 py-1.5 text-lg ",
    xl: "px-5 py-2 text-xl ",
  };

  const icons = {
    search: Search,
    delet: Eraser,
    home: Home,
    user: User,
    sett: Settings,
    chev: ChevronRight,
    none: null,
  };

  const IconComponent1 = icons[icon1];
  const IconComponent2 = icons[icon2];

  const directions = {
    x: "flex  flex-row",
    y: "flex  flex-col",
  };

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <div>
      <>
        <div className={`${directions[direction]}`}>
          <button
            onClick={() => setActive1(!active1)}
            className={`
              ${direction === "x" ? "rounded-l-md" : "rounded-t-md"}
              
              outline-1
              flex items-center gap-2
              px-6
              py-2 
              transition-colors 
              duration-800 
              
              ${optionSize[size]}    
                
         
           ${
             active1
               ? "bg-sky-500 text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] ring-2 ring-sky-300"
               : `${colors[options]} hover:bg-sky-600`
           }
          `}
          >
            {IconComponent1 && <IconComponent1 size={18} strokeWidth={2} />}

            {text1}
          </button>
          {/*  */}
          <button
            onClick={() => setActive2(!active2)}
            className={`
            
            ${direction === "x" ? "rounded-r-md" : "rounded-b-md"}
            
            outline-1
            flex items-center gap-2
            px-6 
            py-2
            transition-colors 
            duration-800 
         
             
            ${optionSize[size]}
            
            
            ${
              active2
                ? "bg-sky-500 text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] ring-2 ring-sky-300"
                : `${colors[options]} hover:bg-sky-600`
            }  
     
            
          `}
          >
            {IconComponent2 && <IconComponent2 size={18} strokeWidth={2} />}
            {text2}
          </button>
        </div>
      </>
    </div>
  );
};
