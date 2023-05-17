import { ProductsItem } from "@/modules/home";
import { AllProductsType } from "@/services";
import { FC } from "react";

type ProductsListProps = {
  products: AllProductsType;
};

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <ul className="flex flex-wrap gap-3 pt-4">
      {products.map((item) => (
        <ProductsItem key={item.id} product={item} />
      ))}
    </ul>
  );
};
