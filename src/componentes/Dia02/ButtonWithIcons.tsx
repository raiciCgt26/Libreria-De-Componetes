import {
  Home,
  User,
  Settings,
  ChevronRight,
  Eraser,
  Search,
} from "lucide-react";

interface ButtonIconProp {
  text: string;
  options?: "hover" | "transparent" | "outline" | "pulso";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: "search" | "delet" | "home" | "user" | "sett" | "chev" | "none";
}

export const ButtonWithIcons = ({
  text,
  options = "transparent",
  size = "sm",
  icon = "delet",
}: ButtonIconProp) => {
  const colors = {
    hover: "bg-sky-900 text-white",
    transparent: " bg-sky-600/30 text-sky-200",
    outline:
      "bg-sky-900 focus:outline-2 focus:outline-offset-2 focus:outline-sky-500  text-white",
    pulso: "bg-sky-900 transition duration-300 hover:animate-pulse",
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

  const IconComponent = icons[icon];

  return (
    <div>
      <>
        <button
          className={`
            flex items-center gap-2
            px-6 py-2 w-2xs

            rounded-md
            font-medium 
            // 
            transition-colors 
            duration-300 
            
         
            ${colors[options]}    
            ${optionSize[size]}
            
            ${options === "hover" && "hover:bg-sky-600"}
            ${options === "transparent" && "hover:bg-sky-600/60"}
            ${options === "outline" && "hover:bg-sky-600"}
             ${options === "pulso" && "hover:bg-sky-600"}
            
          `}
        >
          {IconComponent && <IconComponent size={18} strokeWidth={2} />}
          {text}
        </button>
      </>
    </div>
  );
};
