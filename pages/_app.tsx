import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import { Layout } from "@/modules/common";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster position="top-right" reverseOrder={false} gutter={8} />
    </Layout>
  );
}
