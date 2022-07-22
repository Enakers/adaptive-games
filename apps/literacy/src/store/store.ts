import create from "zustand";
import createConfigSlice from "./configSlice";
import createGameSlice from "./gameSlice";
import createWordListSlice from "./wordListSlice";

const useStore = create<Store>()((...a) => ({
  ...createWordListSlice(...a),
  ...createConfigSlice(...a),
  ...createGameSlice(...a)
}));

export default useStore;
