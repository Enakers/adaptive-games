import {StateCreator} from "zustand";

const createConfigSlice: StateCreator<ConfigSlice> = set => ({
  touchscreen: true,
  peekTime: 1,
  voice: null,

  toggleTouchscreen: () => set(state => ({touchscreen: !state.touchscreen})),
  setPeekTime: time => set(() => ({peekTime: time})),
  setVoice: voice => set(() => ({voice}))
});

export default createConfigSlice;
