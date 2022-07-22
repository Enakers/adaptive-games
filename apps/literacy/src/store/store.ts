import create from "zustand";
import createWordListSlice from "./wordListSlice";

const useStore = create<Store>()((...a) => ({
  ...createWordListSlice(...a)
}));

export default useStore;
