import { FC } from "react";
import { ContainerProps } from "@/modules/common";

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="my-0 mx-auto py-0 px-4 w-full mob:w-[420px] tab:w-[768px] desk:w-[1280px]">
      {children}
    </div>
  );
};
