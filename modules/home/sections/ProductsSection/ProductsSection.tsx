import { FC, useState } from 'react';
import { useRouter } from 'next/router';

import { AllProductsType, CategoriesType, SingleProductType } from '@/services';
import { Container } from '@/modules/common';
import { Filter, ProductsList } from '@/modules/home';

type ProductsSectionProps = {
	products: AllProductsType;
	categories: CategoriesType;
};

export const ProductsSection: FC<ProductsSectionProps> = ({ products, categories }) => {
	const [filter, setFilter] = useState<AllProductsType>(products);

	const router = useRouter();

	const addAllButton = ['all', ...categories];

	const changeFilter = (value: string) => {
		if (value === 'all') {
			setFilter(products);
			router.query = { value };
			return;
		}

		const updateProduct = products.filter(({ category }) => category === value);
		setFilter(updateProduct);
		router.query = { value };
	};

	return (
		<section id="products" className="py-5">
			<Container>
				<h2 className="hidden">Products</h2>
				<Filter categories={addAllButton} onChange={changeFilter} />
				<ProductsList products={filter} />
			</Container>
		</section>
	);
};
