import Head from "next/head";
import { FC } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

// import { Footer } from "@/components";
import { layoutProps } from "@/modules/common";

export const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Fake Store</title>
      </Head>

      <main className={` ${montserrat.className}`}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
