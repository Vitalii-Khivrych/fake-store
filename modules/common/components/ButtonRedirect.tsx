import Link from "next/link";
import { FC } from "react";

import { ButtonRedirectProps } from "@/modules/common";

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
