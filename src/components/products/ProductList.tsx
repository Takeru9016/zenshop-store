import { Product } from "@/types";
import { NoResult, ProductCard } from "@/components";

interface ProductListProps {
  title: string;
  items: Product[];
}

export default function ProductList({ title, items }: ProductListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-3xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {items.length === 0 ? (
          <NoResult />
        ) : (
          items.map((item) => <ProductCard key={item.id} product={item} />)
        )}
      </div>
    </div>
  );
}
