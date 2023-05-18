import { ReactNode } from "react";

export type LayoutProps = { children: ReactNode };

export type ContainerProps = { children: ReactNode };

export type HeaderProps = { children: ReactNode };

export type ButtonProps = {
  type: "submit" | "button" | "reset";
  text: string;
  style?: string;
};

export type ButtonRedirectProps = {
  text: string;
  to: string;
  style?: string;
};
