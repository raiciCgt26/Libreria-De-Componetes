/**
 * Botón en grupo estilizado con Tailwind CSS.
 * Permite crear un grupo de dos botones , cada uno con texto e iconos independientes, con variaciones de tamaño, direccion y efecto.
 * * @example
 * <ButtonsGroups text1="Regresar" text2="Home" icon1="chev" icon2="home" size="md" direction="x"></ButtonsGroups>
 * * @param {ButtonIconProp} props - Propiedades para personalizar el botón.
 * @returns {JSX.Element} Un elemento grupo de botones interactivo.
 */
interface ButtonIconProp {
  /** Texto para el primer botón del grupo */
  text1?: string;
  /** Texto para el segundo botón del grupo */
  text2?: string;

  /** Icono del primer botón.
   * @default "none" */
  icon1?: "search" | "delet" | "home" | "user" | "sett" | "chev" | "none";
  /** Icono del segundo botón.
   * @default "none" */
  icon2?: "search" | "delet" | "home" | "user" | "sett" | "chev" | "none";

  /** * Define el efecto visual del comoponente al hacer hover.
   * @default "transparent"*/
  options?: "hover" | "transparent" | "outline" | "pulso";
  /** * Escala de tamaño del componente (padding y fuente).
   * @default "sm"
   */
  size?: "sm" | "md" | "lg" | "xl";
  /** * Eje de alineación de los botones.
   * @default "x" (Horizontal)
   */
  direction?: "x" | "y";
}

//

import {
  Home,
  User,
  Settings,
  ChevronRight,
  Eraser,
  Search,
} from "lucide-react";

interface ButtonIconProp {
  text1?: string;
  text2?: string;

  icon1?: "search" | "delet" | "home" | "user" | "sett" | "chev" | "none";
  icon2?: "search" | "delet" | "home" | "user" | "sett" | "chev" | "none";

  //
  options?: "hover" | "transparent" | "outline" | "pulso";
  size?: "sm" | "md" | "lg" | "xl";
  direction?: "x" | "y";
}

export const ButtonsGroups = ({
  text1,
  text2,
  icon1 = "none",
  icon2 = "none",
  options = "transparent",
  size = "sm",
  direction = "x",
}: ButtonIconProp) => {
  const colors = {
    hover: "bg-sky-500 text-white",
    transparent: " bg-sky-500/30 text-sky-200",
    outline:
      "bg-sky-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-500  text-white",
    pulso: "bg-sky-500 transition duration-300 hover:animate-pulse",
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

  return (
    <div>
      <>
        <div className={`${directions[direction]}`}>
          <button
            className={`
            ${direction === "x" ? "rounded-l-md" : "rounded-t-md"}
            outline-1
            flex items-center gap-2
            px-6
            py-2 
            transition-colors 
            duration-800 

            ${colors[options]}    
            ${optionSize[size]}
            
            ${options === "hover" && "hover:bg-sky-400"}
            ${options === "transparent" && "hover:bg-sky-400/60"}
            ${options === "outline" && "hover:bg-sky-400"}
             ${options === "pulso" && "hover:bg-sky-400"}
            
          `}
          >
            {IconComponent1 && <IconComponent1 size={18} strokeWidth={2} />}
            {text1}
          </button>
          {/*  */}
          <button
            className={`
            ${direction === "x" ? "rounded-r-md" : "rounded-b-md"}
            outline-1
            flex items-center gap-2
            px-6 
            py-2
            transition-colors 
            duration-800 
         
            ${colors[options]}    
            ${optionSize[size]}
            
              
            ${options === "hover" && "hover:bg-sky-400"}
            ${options === "transparent" && "hover:bg-sky-400/60"}
            ${options === "outline" && "hover:bg-sky-400"}
             ${options === "pulso" && "hover:bg-sky-400"}
            
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
