import { Container, Billboard, ProductList } from "@/components";
import { getBillboards, getProducts } from "@/actions";

export const revalidate = 0;

export default async function HomePage() {
  const billboards = await getBillboards();
  const billboard = billboards?.[0]; // Get the first billboard

  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
