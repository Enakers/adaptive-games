type Store = WordListSlice & ConfigSlice & GameSlice;

interface WordListSlice {
  wordList: import("@prisma/client").WordList;
  wordLists: import("@prisma/client").WordList[];

  addWord: (word: string) => void;
  setWords: (words: import("@prisma/client").WordListItem[]) => void;

  setWordLists: (wordLists: import("@prisma/client").WordList[]) => void;
  saveWordList: (name: string) => Promise<void>;
  updateWordList: (name: string) => Promise<void>;
  deleteWordList: (name: string) => Promise<void>;
  loadWordList: (wordList: import("@prisma/client").WordList) => void;
}

interface ConfigSlice {
  touchscreen: boolean;
  peakTime: number;
  voice: SpeechSynthesisVoice | null;

  toggleTouchscreen: () => void;
  setPeakTime: (time: number) => void;
  setVoice: (voice: SpeechSynthesisVoice) => void;
}

interface Result {
  index: number;
  tries: number;
  word: string;
}

interface GameSlice {
  gameFinished: boolean;
  index: number;
  tries: number;
  results: Result[];
  word: string;

  speak: (word: string) => void;
  initGame: () => void;
  handleCorrect: () => void;
  handleIncorrect: () => void;
}
