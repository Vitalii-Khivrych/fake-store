import { FC } from "react";
import { containerProps } from "@/modules/common";

export const Container: FC<containerProps> = ({ children }) => {
  return (
    <div className="my-0 mx-auto py-0 px-4 mob:max-w-screen-mob tab:max-w-screen-tab desk:max-w-screen-desk">
      {children}
    </div>
  );
};
