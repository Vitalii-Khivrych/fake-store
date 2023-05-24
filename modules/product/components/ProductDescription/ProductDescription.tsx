import { FC } from 'react';

type ProductDescriptionProps = {
	description: string;
};

export const ProductDescription: FC<ProductDescriptionProps> = ({ description }) => {
	return <p className="mb-5 text-sm">{description}</p>;
};
