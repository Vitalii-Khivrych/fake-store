import { GetStaticProps } from "next";
import { FC } from "react";

import { HeroSection, ProductsSection } from "@/modules/home";
import { AllProductsType, fetchAllProducts } from "@/services";

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchAllProducts();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      products: data,
    },
  };
};

type HomeProps = {
  products: AllProductsType;
};

const Home: FC<HomeProps> = ({ products }) => {
  return (
    <>
      <HeroSection />
      <ProductsSection products={products} />

      {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >link       
        </a> */}
    </>
  );
};

export default Home;
