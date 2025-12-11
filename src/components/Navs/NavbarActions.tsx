"use client";

import { useEffect, useState } from "react";
import { ShoppingBagIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NavbarActions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        variant="secondary"
        className="flex items-center rounded-full px-4 py-2"
      >
        <ShoppingBagIcon className="dark:text-primary size-5 text-white" />
        <span className="dark:text-primary text-md ml-2 font-sans font-medium text-white">
          0
        </span>
      </Button>
    </div>
  );
}
