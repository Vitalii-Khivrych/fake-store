import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

import { SingleProductType } from "@/services";
import Star from "/public/images/icons/star.svg";

type ProductsItemProps = {
  product: SingleProductType;
};

export const ProductsItem: FC<ProductsItemProps> = ({ product }) => {
  const { id, description, price, rating, image, title, category } = product;

  return (
    <li
      key={id}
      className="flex flex-col justify-between p-4 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg"
    >
      <Link className="cursor-pointer grow" href={`/details/${id}`}>
        <div className="w-auto h-[250px] mb-4 mx-auto">
          <Image
            className=" w-full h-full object-contain "
            src={image}
            alt={description}
            width={100}
            height={100}
          />
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 truncate ">{title}</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className=" p-1 bg-red-600 text-slate-100 rounded-md">${price}</p>
            <div className="flex justify-center ">
              <p className="text-base mr-1">{rating.rate}</p>
              <Star className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Link>
      <p className="text-sm mt-2">Category: {category}</p>
    </li>
  );
};
