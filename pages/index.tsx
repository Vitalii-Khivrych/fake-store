import { GetStaticProps } from 'next';
import { FC } from 'react';

import { HeroSection, ProductsSection, SliderSection } from '@/modules/home';
import { AllProductsType, fetchAllProducts } from '@/services';

export const getStaticProps: GetStaticProps = async () => {
	const data = await fetchAllProducts();

	if (!data) {
		return { notFound: true };
	}

	return {
		props: {
			products: data,
		},
	};
};

type HomeProps = {
	products: AllProductsType;
};

const Home: FC<HomeProps> = ({ products }) => {
	return (
		<>
			<SliderSection />
			<HeroSection />
			<ProductsSection products={products} />
		</>
	);
};

export default Home;
