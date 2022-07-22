import {StateCreator} from "zustand";

type CreateGameSlice = StateCreator<GameSlice & ConfigSlice, [], [], GameSlice>;

const createGameSlice: CreateGameSlice = (set, get) => ({
  speak: word => {
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.voice = get().voice;

    speechSynthesis.speak(utterance);
  }
});

export default createGameSlice;
