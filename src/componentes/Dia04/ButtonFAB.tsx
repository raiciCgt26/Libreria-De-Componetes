import { Pencil, Plus, Navigation2 } from "lucide-react";

interface ButtonFabProp {
  options: "primary" | "secondary" | "extend";
  icon?: "pencil" | "plus" | "nav" | "none";
  text?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const ButtonFAB = ({
  options = "primary",
  icon = "none",
  text,
  size = "md",
}: ButtonFabProp) => {
  const styles = {
    primary:
      "z-100 px-2 py-2 w-[50px] h-[50px] rounded-full bg-blue-300 transition-all duration-300 active:bg-blue-400 shadow-lg shadow-black/30  ",
    secondary:
      "z-100 px-2 py-2 w-[50px] h-[50px] rounded-full bg-red-300   transition-all duration-300 active:bg-red-400 shadow-lg shadow-black/30 ",
    extend:
      "z-100 font-medium px-2 py-2 w-[160px] h-[45px] rounded-full  bg-white text-black flex flex-row justify-center items-center shadow-lg shadow-black/30  transition-all duration-300  active:bg-slate-200",
  };
  const icons = {
    pencil: Pencil,
    plus: Plus,
    nav: Navigation2,
    none: null,
  };

  const IconComponent = icons[icon];

  const optionSize = {
    sm: "text-sm",
    md: "text-md ",
    lg: "text-lg ",
    xl: "text-xl ",
  };
  return (
    <>
      <button
        className={`

          
        ${styles[options]} 
        ${icons[icon]}
        ${optionSize[size]}
  =
       
        `}
      >
        <div className="flex justify-center ">
          {IconComponent && (
            <IconComponent size={18} strokeWidth={2} color="black" />
          )}
        </div>

        {text}
      </button>
    </>
  );
};
