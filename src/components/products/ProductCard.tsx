"use client";

import Image from "next/image";
import { Expand, ShoppingBag } from "lucide-react";

import { Product } from "@/types";
import { IconButton, Currency } from "@/components";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };
  return (
    <div
      className="bg-accent group cursor-pointer space-y-4 rounded-xl border p-3"
      onClick={handleClick}
    >
      <div className="relative aspect-square rounded-xl">
        <Image
          fill
          src={product.images?.[0]?.url || "/placeholder.png"}
          alt={product.name}
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-10">
          <div className="flex justify-center gap-x-6">
            <IconButton
              icon={<Expand size={20} className="text-white" />}
              onClick={() => {}}
            />
            <IconButton
              icon={<ShoppingBag size={20} className="text-white" />}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p>{product.category.name}</p>
        <h3 className="font-bold">{product.name}</h3>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  );
}
