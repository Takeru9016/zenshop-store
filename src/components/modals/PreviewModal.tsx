"use client";

import { usePreviewModal } from "@/hooks";
import { Gallery, Info, Modal } from "@/components";

export default function PreviewModal() {
  const previewmodal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  return (
    <Modal isOpen={previewmodal.isOpen} onClose={previewmodal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="col-span-5 sm:col-span-5 lg:col-span-4">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
}
