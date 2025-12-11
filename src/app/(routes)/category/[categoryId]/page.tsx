import { getCategory, getColors, getProducts, getSizes } from "@/actions";
import {
  Billboard,
  Container,
  Filter,
  MobileFilter,
  ProductCard,
} from "@/components";

export const revalidate = 0;

interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
  searchParams: Promise<{
    colorId: string;
    sizeId: string;
  }>;
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categoryId } = await params;
  const { colorId, sizeId } = await searchParams;

  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category?.billboard} />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" data={sizes} name="Sizes" />
              <Filter valueKey="colorId" data={colors} name="Colors" />
            </div>
            <div className="lg:col-span-4">
              {products.length > 0 ? (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">{category?.name}</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex h-96 items-center justify-center">
                  No products found.
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
