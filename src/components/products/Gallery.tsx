"use client";

import Image from "next/image";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import { GalleryTab } from "@/components";

interface GalleryProps {
  images: ImageType[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl lg:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-4 sm:grid-cols-5">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
              <Image
                src={image.url}
                alt="Product Image"
                fill
                className="object-contain object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
