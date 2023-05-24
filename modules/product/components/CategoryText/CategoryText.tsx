import { FC } from 'react';

type CategoryTypeProps = {
	text: string;
};

export const CategoryText: FC<CategoryTypeProps> = ({ text }) => {
	return <p className="mb-4 ml-auto text-right text-xs">Category: {text}</p>;
};
