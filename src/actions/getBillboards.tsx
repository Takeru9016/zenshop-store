import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (): Promise<Billboard[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`Failed to fetch billboards: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching billboards:", error);
    return [];
  }
};

export default getBillboards;
