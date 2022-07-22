type Store = WordListSlice;

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
