import Image from "next/image";

import { Container } from "@/modules/common";
import { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <section className="pt-24">
      <Container>
        <div className=" tab:flex ">
          <div>
            <h1 className="text-6xl/[64px] font-bold leading-tight ">The best online shop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat optio ab!
              Vero saepe totam tempora! Laborum, cum harum est quis officia odit voluptates
              doloribus provident, dolorem porro labore dolores!
            </p>
          </div>
          <div className="mx-auto w-full h-[250px]  ">
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
