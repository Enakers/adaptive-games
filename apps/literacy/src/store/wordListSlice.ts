import {toast} from "react-toastify";
import {StateCreator} from "zustand";

const createWordListSlice: StateCreator<WordListSlice> = (set, get) => ({
  wordList: {
    name: "default",
    words: []
  },
  wordLists: [],

  addWord: word => {
    set(state => {
      const listLength = state.wordList.words.length;

      return {
        wordList: {
          name: state.wordList.name,
          words: [...state.wordList.words, {id: listLength + 1, index: listLength, data: word}]
        }
      };
    });
  },

  setWords: words => {
    set(state => ({wordList: {name: state.wordList.name, words}}));
  },

  setWordLists: wordLists => {
    if (get().wordLists.length) return;

    set(() => ({wordLists}));
  },
  saveWordList: async name => {
    if (get().wordLists.some(wl => wl.name === name)) {
      throw new Error(`Word list ${name} already exists`);
    }

    const req = await fetch("/api/user/word-list", {
      method: "POST",
      body: JSON.stringify({name, words: get().wordList.words})
    });
    const res = await req.json();

    set(() => ({wordLists: res}));
  },
  updateWordList: async name => {
    const req = await fetch("/api/user/word-list", {
      method: "PUT",
      body: JSON.stringify({name, words: get().wordList.words})
    });
    const res = await req.json();

    set(() => ({wordLists: res}));

    toast.success(`Word list ${name} updated`);
  },
  deleteWordList: async name => {
    const req = await fetch("/api/user/word-list", {
      method: "DELETE",
      body: JSON.stringify({name})
    });
    const res = await req.json();

    set(() => ({wordLists: res}));
  },
  loadWordList: wordList => set(() => ({wordList}))
});

export default createWordListSlice;
