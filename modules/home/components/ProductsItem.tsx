import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

import { singleProductType } from "@/services";

type productsItemProps = {
  product: singleProductType;
};

export const ProductsItem: FC<productsItemProps> = ({ product }) => {
  const { id, description, price, rating, image, title, category } = product;

  return (
    <li
      key={id}
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
        <div style={{ height: "150px", marginBottom: "15px" }}>
          <Image
            src={image}
            alt={description}
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
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
