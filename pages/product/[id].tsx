import type { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { FC } from 'react';
import toast from 'react-hot-toast';

import { SingleProductType, fetchSingleProduct, fetchAllProducts } from '@/services';
import { Button, Container } from '@/modules/common';
import {
	BackLink,
	CategoryText,
	ProductDescription,
	ProductPrice,
	ProductRating,
	ProductTitle,
} from '@/modules/product';
import Image from 'next/image';

export const getStaticPaths = async () => {
	const data = await fetchAllProducts();

	if (!Array.isArray(data)) {
		return;
	}
	const paths = data.map(({ id }) => ({
		params: { id: id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
};

interface IParams extends ParsedUrlQuery {
	id: string;
}

export const getStaticProps: GetStaticProps = async context => {
	const { id } = context.params as IParams;

	const data = await fetchSingleProduct(id);

	if (!data) {
		return { notFound: true };
	}

	return {
		props: {
			product: data,
		},
	};
};

type ProductTypeProps = {
	product: SingleProductType;
};

const Product: FC<ProductTypeProps> = ({ product }) => {
	const handleClick = () => {
		toast.success('Thank you for your purchase');
	};

	return (
		<section>
			<Container>
				<h2 className="hidden">{product.title}</h2>
				<div className="pb-4 pt-24">
					<BackLink to="/" text="Back to home" />

					<div className="tab:grid tab:grid-cols-2  ">
						<div className="flex h-full w-full items-center justify-center ">
							<Image
								className=" object-cover"
								alt={product.title}
								src={product.image}
								width={250}
								height={400}
							/>
						</div>

						<div className="border p-4">
							<CategoryText text={product.category} />
							<ProductTitle text={product.title} />
							<ProductRating rating={product.rating.rate} />
							<ProductPrice price={product.price} />
							<ProductDescription description={product.description} />
							<Button type="button" text="Buy" onClick={handleClick} />
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Product;
