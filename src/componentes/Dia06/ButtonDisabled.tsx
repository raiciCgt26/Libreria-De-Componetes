interface BtnDisProp {
  options: "disabled" | "enabled";
  text: string;
  size: "sm" | "md" | "lg" | "xl";
}

export const ButtonDisabled = ({
  options = "disabled",
  text,
  size = "md",
}: BtnDisProp) => {
  const types = {
    disabled:
      "z-100 px-2 py-2 rounded-2xl opacity-50 cursor-not-allowe cursor-none bg-slate-400 transition-all duration-300 active:bg-slate-300 shadow-lg shadow-black/30 ",
    enabled:
      "z-100 px-2 py-2 rounded-2xl bg-slate-300/50 transition-all duration-300 active:bg-slate-400/30 shadow-lg shadow-black/30 hover:scale-105",
  };

  const optionSize = {
    sm: "text-sm w-[80px] h-[40px]",
    md: "text-md w-[85px] h-[45px]",
    lg: "text-lg w-[90px] h-[50px]",
    xl: "text-xl w-[95px] h-[55px]",
  };

  return (
    <div>
      <button
        className={`

 
       ${optionSize[size]}
       ${types[options]}
        `}
      >
        {text}
      </button>
    </div>
  );
};
