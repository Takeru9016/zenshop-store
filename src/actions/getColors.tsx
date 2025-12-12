import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`Failed to fetch colors: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching colors:", error);
    return [];
  }
};

export default getColors;
