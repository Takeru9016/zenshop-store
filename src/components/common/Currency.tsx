"use client";

import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

interface CurrencyProps {
  value?: string | number;
}

export default function Currency({ value }: CurrencyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="text-lg font-bold">
      {formatter.format(Number(value || 0))}
    </div>
  );
}
