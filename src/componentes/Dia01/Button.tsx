/**
 * Botón estilizado con Tailwind CSS.
 * Permite diferentes variantes visuales mediante la prop `options`.
 * * @example
 * <Button text="Guardar cambios" options="success" />
 * * @param {ButtonProp} props - Propiedades para personalizar el botón.
 * @returns {JSX.Element} Un elemento de botón interactivo.
 */
interface ButtonProp {
  /** El contenido textual que se mostrará dentro del botón. */
  text: string;
  /** * Define el esquema de color y comportamiento visual.
   * @default "info"
   */
  options?: "info" | "success" | "error";
}

//

interface ButtonProp {
  text: string;
  options?: "info" | "success" | "error";
}

export const Button = ({ text, options = "info" }: ButtonProp) => {
  const colors = {
    info: "bg-sky-600 text-slate ",
    success: "bg-slate-600 text-slate",
    error: "bg-slate-700 text-slate-300 ",
  };

  return (
    <>
      <button
        className={`
        px-4 py-2
        rounded-md
        font-medium 

        // 
        transition-colors 
        duration-300 

        ${options === "info" && "hover:bg-sky-400"}
        ${options === "success" && "hover:bg-slate-400"}
        ${options === "error" && "hover:bg-slate-600"}
        // 

        ${colors[options]}`}
      >
        {text}
      </button>
    </>
  );
};
