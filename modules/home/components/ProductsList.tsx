import { ProductsItem } from "@/modules/home";
import { AllProductsType } from "@/services";
import { FC } from "react";

type ProductsListProps = {
  products: AllProductsType;
};

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <ul className="space-y-4 tab:space-y-0 tab:grid tab:grid-cols-2  tab:gap-4 desk:grid-cols-4 ">
      {products.map((item) => (
        <ProductsItem key={item.id} product={item} />
      ))}
    </ul>
  );
};
