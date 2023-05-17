import { FC } from "react";

type ButtonProps = {
  type: "submit" | "button" | "reset";
  text: string;
  style?: {
    height?: string;
    weight?: string;
    fontSize?: string;
    color?: string;
    bgColor?: string;
  };
};

export const Button: FC<ButtonProps> = ({ type, text, style }) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center  h-[${style?.height || "50px"}] w-[${
        style?.weight || "200px"
      }] text-inherit font-bold text-[${style?.fontSize || "16px"}] text-${
        style?.color || "white"
      } bg-${
        style?.bgColor || "blue-700"
      } border-none rounded shadow-md hover:bg-sky-700 focus:bg-sky-700`}
    >
      {text}
    </button>
  );
};
