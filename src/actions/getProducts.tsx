import queryString from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  try {
    const url = queryString.stringifyUrl({
      url: URL,
      query: {
        colorId: query.colorId,
        sizeId: query.sizeId,
        isFeatured: query.isFeatured,
        categoryId: query.categoryId,
      },
    });

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default getProducts;
