"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBagIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks";

export default function NavbarActions() {
  const [mounted, setMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    router.push("/cart");
  };

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={handleClick}
        variant="secondary"
        className="flex items-center rounded-full px-4 py-2"
      >
        <ShoppingBagIcon className="dark:text-primary size-5 text-white" />
        <span className="dark:text-primary text-md ml-2 font-sans font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
