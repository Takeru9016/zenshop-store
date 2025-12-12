"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

import { CartItem, Container, Currency } from "@/components";
import { useCart } from "@/hooks";
import { Button } from "@/components/ui/button";

function CartContent() {
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  const cart = useCart();

  useEffect(() => {
    setMounted(true);

    if (searchParams.get("success")) {
      toast("Payment successful");
      cart.removeAll();
    }

    if (searchParams.get("canceled")) {
      toast("Payment canceled");
    }
  }, [searchParams, cart.removeAll]);

  if (!mounted) {
    return null;
  }

  const totalPrice = cart.items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: cart.items.map((item) => item.id),
      },
    );

    window.location.href = response.data.url;
    console.log(response.data);
  };

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Shopping Cart
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 ? (
                <p className="text-neutral-500">No items added to cart.</p>
              ) : (
                <ul>
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
              <h2 className="text-lg font-medium text-gray-900">
                Order summary
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="text-base font-medium text-gray-900">
                    Order total
                  </div>
                  <Currency value={totalPrice} />
                </div>
              </div>
              <Button
                variant="secondary"
                onClick={onCheckout}
                className="mt-6 w-full"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartContent />
    </Suspense>
  );
}
