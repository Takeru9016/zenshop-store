import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category | null> => {
  try {
    const res = await fetch(`${URL}/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch category: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching category ${id}:`, error);
    return null;
  }
};

export default getCategory;
