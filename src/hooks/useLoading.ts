import { create } from "zustand";

type Loading = {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
};

export const useLoading = create<Loading>((set) => ({
  isLoading: true,
  setLoading: (isLoading: boolean) =>
    set(() => ({
      isLoading,
    })),
}));
