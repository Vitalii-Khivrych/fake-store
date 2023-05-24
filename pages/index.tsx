import { GetStaticProps } from 'next';
import { FC } from 'react';

import { HeroSection, ProductsSection, SliderSection } from '@/modules/home';
import { AllProductsType, CategoriesType, fetchAllProducts, fetchCategories } from '@/services';

export const getStaticProps: GetStaticProps = async () => {
	const data = await fetchAllProducts();
	const dataCategories = await fetchCategories();

	if (!data && !dataCategories) {
		return { notFound: true };
	}

	return {
		props: {
			products: data,
			categories: dataCategories,
		},
	};
};

type HomeProps = {
	products: AllProductsType;
	categories: CategoriesType;
};

const Home: FC<HomeProps> = ({ products, categories }) => {
	return (
		<>
			<SliderSection />
			<HeroSection />
			<ProductsSection products={products} categories={categories} />
		</>
	);
};

export default Home;
