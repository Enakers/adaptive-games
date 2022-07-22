/* eslint-disable no-param-reassign */
import {StateCreator} from "zustand";

type CreateGameSlice = StateCreator<GameSlice & WordListSlice & ConfigSlice, [], [], GameSlice>;

const createGameSlice: CreateGameSlice = (set, get) => ({
  word: "",
  index: 0,
  tries: 0,
  gameFinished: false,
  results: [],

  speak: word => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.voice = get().voice ?? null;

    speechSynthesis.speak(utterance);
  },
  initGame: () =>
    set(state => ({
      gameFinished: false,
      index: 0,
      tries: 0,
      word: state.wordList.words[0]!.data,
      results: []
    })),
  handleCorrect: () =>
    set(state => {
      state.results.push({
        index: state.index,
        tries: state.tries,
        word: state.word
      });

      state.index += 1;
      state.tries = 0;

      if (state.index === state.wordList.words.length) {
        state.gameFinished = true;
      } else {
        state.word = state.wordList.words.find(item => item.index === state.index)!.data;
      }

      return state;
    }),
  handleIncorrect: () => set(state => ({tries: state.tries + 1}))
});

export default createGameSlice;
