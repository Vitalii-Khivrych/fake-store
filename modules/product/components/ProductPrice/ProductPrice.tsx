import React from 'react';
import { FC } from 'react';

type ProductPriceTypeProps = {
	price: number;
};

export const ProductPrice: FC<ProductPriceTypeProps> = ({ price }) => {
	return <p className="mb-4 text-xl font-bold">${price}</p>;
};
