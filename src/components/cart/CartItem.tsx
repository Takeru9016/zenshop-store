"use client";

import Image from "next/image";
import { X } from "lucide-react";

import { Product } from "@/types";
import { Currency, IconButton } from "@/components";
import { useCart } from "@/hooks";

interface CartItemProps {
  data: Product;
}

export default function CartItem({ data }: CartItemProps) {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex border-b py-6">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md sm:h-32 sm:w-32">
        <Image
          src={data.images?.[0]?.url || "/placeholder.png"}
          alt={data.name}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute top-0 right-0 z-10">
          <IconButton
            className="bg-secondary"
            icon={<X className="h-4 w-4" />}
            onClick={onRemove}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
}
