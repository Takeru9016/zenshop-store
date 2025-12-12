import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import { Currency } from "@/components";
import { Button } from "@/components/ui/button";

interface InfoProps {
  data?: Product | null;
}

export default function Info({ data }: InfoProps) {
  if (!data) {
    return (
      <div className="space-y-4">
        <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="h-6 w-1/4 animate-pulse rounded bg-gray-200" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl font-bold">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="text-sm text-gray-500">Category:</h3>
          <p className="ml-2 text-sm font-medium text-gray-900">
            {data.category.name}
          </p>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="text-sm text-gray-500">Size:</h3>
          <p className="ml-2 text-sm font-medium text-gray-900">
            {data.size.name}
          </p>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="text-sm text-gray-500">Color:</h3>
          <div
            className="h-6 w-6 rounded-full"
            style={{ backgroundColor: data.color.value }}
          />
          <p className="text-sm font-medium text-gray-900">{data.color.name}</p>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button variant="secondary" className="flex items-center gap-x-2">
          Add to Cart
          <ShoppingCart className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
