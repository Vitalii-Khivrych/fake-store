import { FC } from 'react';

type ProductTitleTypeProps = {
	text: string;
};

export const ProductTitle: FC<ProductTitleTypeProps> = ({ text }) => {
	return <h3 className="mb-3 text-base font-bold uppercase">{text}</h3>;
};
