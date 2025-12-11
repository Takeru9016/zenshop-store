"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: ImageType;
}
export default function GalleryTab({ image }: GalleryTabProps) {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-md bg-white">
      {({ selected }) => (
        <>
          <div className="absolute inset-0 h-full w-full">
            <Image
              src={image.url}
              alt="Product Images"
              fill
              className="object-cover object-center"
            />
          </div>
          <div
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent",
            )}
          />
        </>
      )}
    </Tab>
  );
}
