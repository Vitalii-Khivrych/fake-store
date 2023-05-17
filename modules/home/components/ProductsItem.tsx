import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

import { SingleProductType } from "@/services";

type ProductsItemProps = {
  product: SingleProductType;
};

export const ProductsItem: FC<ProductsItemProps> = ({ product }) => {
  const { id, description, price, rating, image, title, category } = product;

  return (
    <li
      key={id}
      className="tab:w-[calc(100%/2-0.375rem)] desc:w-[calc(100%/3-0.5rem)] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      // style={{
      //   display: "flex",
      //   display: "-webkit-flex",
      //   flexDirection: "column",
      //   WebkitFlexDirection: "column",
      //   justifyContent: "center",
      //   backgroundColor: "#fff",
      //   boxShadow: 5,
      //   borderRadius: 1,
      //   maxWidth: {
      //     xs: "250px",
      //     sm: "250px",
      //     md: "280px",
      //     lg: "300px",
      //     xl: "300px",
      //   },
      //   // height: "400px",
      //   width: "300px",
      //   px: 2,
      //   py: 2,
      //   mx: 2,
      //   mt: 5,
      //   mb: 5,
      // }}
    >
      <Link
        // style={{
        //   textDecoration: "none",
        //   color: "#000",
        // }}
        href={`/details/${id}`}
      >
        <div className="w-[200px] h-[350px] mb-4 mx-auto">
          <Image
            className="rounded-t-lg w-full h-full object-contain "
            src={image}
            alt={description}
            width={100}
            height={100}
          />
        </div>
        <div>
          <h3
          // style={{
          //   "&:hover": {
          //     color: "secondary.main",
          //   },
          // }}
          >
            {title}
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>R${price}</p>
            <p>{rating.rate}</p>
            <p>({rating.rate})</p>
          </div>
        </div>
      </Link>
      <p>Category: {category}</p>
    </li>
  );
};
