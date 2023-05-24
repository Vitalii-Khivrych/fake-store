import axios from 'axios';
import toast from 'react-hot-toast';

import { AllProductsType, SingleProductType, CategoriesType } from '@/services';

const BASE_URL = 'https://fakestoreapi.com/products';

export async function fetchAllProducts() {
	try {
		const url = `${BASE_URL}`;
		const { data } = await axios.get<AllProductsType>(url);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error('Something wrong, try later');
			console.log('error message: ', error.message);
			return error.message;
		} else {
			toast.error('An unexpected error occurred');
			console.log('unexpected error: ', error);
			return 'An unexpected error occurred';
		}
	}
}

export async function fetchSingleProduct(id: string) {
	try {
		const url = `${BASE_URL}/${id}`;
		const { data } = await axios.get<SingleProductType>(url);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error('Something wrong, try later');
			console.log('error message: ', error.message);
			return error.message;
		} else {
			toast.error('An unexpected error occurred');
			console.log('unexpected error: ', error);
			return 'An unexpected error occurred';
		}
	}
}

export async function fetchCategories() {
	try {
		const url = `${BASE_URL}/categories`;
		const { data } = await axios.get<CategoriesType>(url);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error('Something wrong, try later');
			console.log('error message: ', error.message);
			return error.message;
		} else {
			toast.error('An unexpected error occurred');
			console.log('unexpected error: ', error);
			return 'An unexpected error occurred';
		}
	}
}
