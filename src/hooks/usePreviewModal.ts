import { create } from "zustand";

import { Product } from "@/types";

interface PreviewModalStore {
    isOpen: boolean;
    data: Product | null;
    onOpen: (data: Product) => void;
    onClose: () => void;
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: null,
    onOpen: (data: Product) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false }),
})); 