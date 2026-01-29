import {
  MapPinCheckInside,
  Heart,
  Star,
  Plus,
  Navigation2,
} from "lucide-react";

interface ButtonIconCircle {
  options: "map" | "heart" | "star" | "plus" | "nav";
  icons?: "map" | "heart" | "star" | "plus" | "nav";
  text?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const ButtonIconC = ({
  options = "map",
  icons = "map",
  text,
  size = "md",
}: ButtonIconCircle) => {
  const opc = {
    map: "z-100 px-2 py-2 w-[45px] h-[45px] rounded-full bg-green-300 transition-all duration-300 active:bg-green-400 shadow-lg shadow-black/30 hover:scale-105",
    heart:
      "z-100 px-2 py-2 w-[45px] h-[45px] rounded-full bg-red-300   transition-all duration-300 active:bg-red-400 shadow-lg shadow-black/30 hover:scale-105",
    star: "z-100 px-2 py-2 w-[45px] h-[45px] rounded-full bg-yellow-300 transition-all duration-300 active:bg-yellow-400 shadow-lg shadow-black/30 hover:scale-105 ",
    plus: "z-100 px-2 py-2 w-[45px] h-[45px] rounded-full bg-blue-300 transition-all duration-300 active:bg-blue-400 shadow-lg shadow-black/30  hover:scale-105",
    nav: "z-100 px-2 py-2 w-[45px] h-[45px] rounded-full bg-slate-300 transition-all duration-300 active:bg-slate-400 shadow-lg shadow-black/30  hover:scale-105",
  };
  const icon = {
    map: MapPinCheckInside,
    heart: Heart,
    star: Star,
    plus: Plus,
    nav: Navigation2,
  };

  const IconComponent = icon[icons];

  const optionSize = {
    sm: "text-sm !w-[40px] !h-[40px] ",
    md: "text-md  ",
    lg: "text-lg !w-[50px] !h-[50px]",
    xl: "text-xl !w-[55px] !h-[55px]",
  };
  return (
    <>
      <button
        className={`
        ${opc[options]} 
        ${icon[icons]}
        ${optionSize[size]}
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
