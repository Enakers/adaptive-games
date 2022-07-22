import {StateCreator} from "zustand";

const createConfigSlice: StateCreator<ConfigSlice> = set => ({
  touchscreen: true,
  peakTime: 1,
  voice: null,

  toggleTouchscreen: () => set(state => ({touchscreen: !state.touchscreen})),
  setPeakTime: time => set(() => ({peakTime: time})),
  setVoice: voice => set(() => ({voice}))
});

export default createConfigSlice;
