import { AllProductsType } from '@/services';
import { Container } from '@/modules/common';
import { ProductsList } from '@/modules/home';
import { FC } from 'react';

type ProductsSectionProps = {
	products: AllProductsType;
};

export const ProductsSection: FC<ProductsSectionProps> = ({ products }) => {
	return (
		<section id="products" className="py-5">
			<Container>
				<h2 className="hidden">Products</h2>
				<ProductsList products={products} />
			</Container>
		</section>
	);
};
