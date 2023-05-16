import axios from "axios";
import { allProductsType, singleProductType } from "@/services";

const BASE_URL = "https://fakestoreapi.com/products";

export async function fetchAllProducts(): Promise<allProductsType> {
  const url = `${BASE_URL}`;
  const { data } = await axios.get(url);
  return data;
}

export async function fetchSingleProduct(productId: string): Promise<singleProductType> {
  const url = `${BASE_URL}/${productId}?`;
  const { data } = await axios.get(url);
  return data;
}
