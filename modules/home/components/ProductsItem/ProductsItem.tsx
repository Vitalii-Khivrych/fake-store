import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

import { SingleProductType } from '@/services';
import Star from '/public/images/icons/star.svg';

type ProductsItemProps = {
	product: SingleProductType;
};

export const ProductsItem: FC<ProductsItemProps> = ({ product }) => {
	const { id, description, price, rating, image, title, category } = product;

	return (
		<li
			key={id}
			className="mx-auto flex max-w-[320px] flex-col justify-between rounded-lg border border-gray-400 bg-white p-4  transition delay-150 ease-linear hover:scale-105 hover:shadow-lg tab:mx-0 tab:max-w-none"
		>
			<Link className="grow cursor-pointer" href={`/product/${id}`}>
				<div className="mx-auto mb-4 h-[260px] w-[180px] tab:h-[300px]">
					<Image
						className=" h-full w-full object-contain "
						src={image}
						alt={description}
						width={100}
						height={100}
					/>
				</div>
				<div>
					<h3 className="mb-2 truncate text-lg font-bold ">{title}</h3>
					<div className="flex justify-between">
						<p className=" rounded-md bg-red-600 p-1 text-slate-100">${price}</p>
						<div className="flex justify-center ">
							<p className="mr-1 text-base">{rating.rate}</p>
							<Star className="h-5 w-5" />
						</div>
					</div>
				</div>
			</Link>
			<p className="mt-2 text-sm">Category: {category}</p>
		</li>
	);
};
