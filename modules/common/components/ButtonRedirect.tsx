import Link from "next/link";
import { FC } from "react";

type ButtonRedirectProps = {
  text: string;
  to: string;
  style?: string;
};

export const ButtonRedirect: FC<ButtonRedirectProps> = ({ text, to, style }) => {
  return (
    <Link
      className={`flex justify-center items-center h-[50px] 
   w-[150px] text-inherit font-bold text-[16px] text-white bg-blue-700 border-none  rounded shadow-md hover:bg-sky-700 focus:bg-sky-700 ${style}`}
      href={to}
    >
      {text}
    </Link>
  );
};
