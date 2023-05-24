import { FC } from 'react';

import Star from '/public/images/icons/star.svg';

type ProductRatingTypeProps = {
	rating: number;
};

export const ProductRating: FC<ProductRatingTypeProps> = ({ rating }) => {
	return (
		<div className="mb-3 flex text-base  ">
			<p className="mr-3">Rating</p>
			<p className="mr-1 ">{rating}</p>
			<Star className="h-5 w-5" />
		</div>
	);
};
