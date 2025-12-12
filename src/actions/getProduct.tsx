import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product | null> => {
  try {
    const res = await fetch(`${URL}/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
};

export default getProduct;
