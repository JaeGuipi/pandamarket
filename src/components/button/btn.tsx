interface BoxButtonprops {
  children: string;
  size: "large" | "medium" | "small40" | "small48";
}

export default function BoxButton({ children, size }: BoxButtonprops) {
  const sizeClass =
    size === "large"
      ? "py-4 px-[124px] rounded-[40px] text-xl h-[56px] "
      : size === "medium"
      ? "text-lg w-[240px] h-[48px] rounded-[40px] px-[71px] py-[12px] leading-[26px]"
      : size === "small40"
      ? "text-base h-[42px] rounded-lg px-[23px] py-[12px] leading-[26px]"
      : "text-base h-[48px] rounded-lg px-[23px] py-[12px] leading-[26px]";
  return (
    <button
      className={`text-white  bg-primary-100 font-semibold ${sizeClass} hover:bg-primary-200 active:bg-primary-300 disabled:bg-gray-400 text-center`}
    >
      {children}
    </button>
  );
}
