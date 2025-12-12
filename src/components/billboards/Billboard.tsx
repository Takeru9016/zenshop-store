import Image from "next/image";

import type { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data?: BillboardType;
  loading?: boolean;
}

export default function Billboard({ data, loading = false }: BillboardProps) {
  // Show loading state
  if (loading) {
    return (
      <section className="overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
        <div className="relative aspect-square animate-pulse overflow-hidden rounded-xl bg-gray-200 md:aspect-[2.4/1]" />
      </section>
    );
  }

  // Return null if no data provided
  if (!data) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
      <figure className="relative aspect-square overflow-hidden rounded-xl md:aspect-[2.4/1]">
        <Image
          src={data.imageUrl}
          alt={data.label}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 z-10 bg-black/20" aria-hidden="true" />

        <header className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
          <h1 className="max-w-xs font-sans text-3xl font-bold text-white drop-shadow-lg sm:max-w-xl sm:text-5xl lg:text-6xl">
            {data.label}
          </h1>
        </header>
      </figure>
    </section>
  );
}
