import { AllProductsType, fetchAllProducts } from "@/services";
import { Container } from "@/modules/common";
import { ProductsList } from "@/modules/home";
import { FC } from "react";

type ProductsSectionProps = {
  products: AllProductsType;
};

export const ProductsSection: FC<ProductsSectionProps> = ({ products }) => {
  return (
    <section id="products" className="py-5">
      <Container>
        <ProductsList products={products} />
      </Container>
    </section>
  );
};
