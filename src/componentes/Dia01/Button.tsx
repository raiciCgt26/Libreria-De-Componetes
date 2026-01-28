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
