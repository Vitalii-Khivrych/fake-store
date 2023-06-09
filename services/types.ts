export type AllProductsType = SingleProductType[];

export type SingleProductType = {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

export type CategoriesType = string[];
