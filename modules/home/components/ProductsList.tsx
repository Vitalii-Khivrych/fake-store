import { ProductsItem } from "@/modules/home";
import { allProductsType } from "@/services";
import { FC } from "react";

type productsListProps = {
  products: allProductsType;
};

export const ProductsList: FC<productsListProps> = ({ products }) => {
  return (
    <ul>
      {products.map((item) => (
        <ProductsItem key={item.id} product={item} />
      ))}
    </ul>
  );
};
