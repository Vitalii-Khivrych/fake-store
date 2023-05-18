import { FC } from "react";

type ButtonProps = {
  type: "submit" | "button" | "reset";
  text: string;
  style?: string;
};

export const Button: FC<ButtonProps> = ({ type, text, style }) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center h-[50px] 
   w-[150px] text-inherit font-bold text-[16px] text-white bg-blue-700 border-none  rounded shadow-md hover:bg-sky-700 focus:bg-sky-700 ${style}`}
    >
      {text}
    </button>
  );
};
