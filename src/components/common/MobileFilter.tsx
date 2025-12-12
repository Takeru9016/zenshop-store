"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";

import { Button } from "@/components/ui/button";
import Filter from "@/components/common/Filter";
import { Size, Color } from "@/types";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

export default function MobileFilter({ sizes, colors }: MobileFilterProps) {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} variant={"secondary"}>
        Filters
        <Plus className="ml-2" size={20} />
      </Button>

      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden"
      >
        <div className="bg-opacity-25 fixed inset-0 z-40 w-full overflow-y-auto bg-transparent" />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium">Filters</h2>
              <Button variant="outline" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-4 px-4">
              <Filter valueKey="sizeId" data={sizes} name="Sizes" />
              <Filter valueKey="colorId" data={colors} name="Colors" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
