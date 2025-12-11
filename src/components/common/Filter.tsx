"use client";

import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

import { Color, Size } from "@/types";
import { Button } from "@/components/ui/button";

interface FilterProps {
  name: string;
  valueKey: string;
  data: (Size | Color)[];
}

export default function Filter({ name, valueKey, data }: FilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = queryString.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: selectedValue === id ? null : id,
    };

    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipNull: true,
      },
    );

    router.push(url);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {data.map((item) => (
          <Button
            variant="outline"
            size={"lg"}
            key={item.id}
            onClick={() => onClick(item.id)}
            className={`text-sm text-gray-600 transition hover:text-gray-900 ${
              selectedValue === item.id ? "bg-secondary text-white" : ""
            }`}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
