import Image from "next/image";

import { ButtonRedirect, Container } from "@/modules/common";
import { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <section className="pt-24 pb-4" id="home">
      <Container>
        <div className=" tab:flex   ">
          <div className="mb-3 tab:flex tab:flex-col tab:justify-center tab:mb-0  ">
            <h1 className="text-3xl font-bold leading-tight text-center mb-3 tab:mb-5 desk:text-6xl desk:mb-10">
              The best online shop
            </h1>
            <p className="text-sm text-center mb-2 tab:mb-4 desk:text-2xl desk:mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat optio ab!
              Vero saepe totam tempora! Laborum, cum harum est quis officia odit voluptates
              doloribus provident, dolorem porro labore dolores!
            </p>
            <ButtonRedirect
              to="/contacts"
              text="Contact us"
              style="mx-auto desk:w-[250px] desk:h-[70px] desk:text-[20px]"
            />
          </div>
          <div className="mx-auto w-full h-[250px]  tab:h-[350px] tab:ml-4 desk:h-[600px] ">
            <Image
              className="object-cover w-full h-full"
              src="/images/hero-img.jpg"
              alt="online shopping"
              width={150}
              height={150}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
