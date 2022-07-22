import {KeyboardEvent, useState} from "react";
import {SortableList} from "ui";
import {useStore} from "~/store";

const WordList = () => {
  const {wordList, setWords, addWord} = useStore(state => ({
    wordList: state.wordList,
    setWords: state.setWords,
    addWord: state.addWord
  }));
  const [word, setWord] = useState("");

  const handleSubmit = (e?: KeyboardEvent<HTMLInputElement>) => {
    if ((e && e.code !== "Enter") || !word) return;

    addWord(word);
    setWord("");
  };

  return (
    <div>
      <label className="label flex flex-col items-start" htmlFor="word-input">
        <span className="label-text">Add word</span>
        <div>
          <input
            className="input input-bordered"
            id="word-input"
            value={word}
            onChange={e => setWord(e.target.value)}
            onKeyUp={handleSubmit}
            placeholder="add word to start..."
          />
          <button
            className="btn btn-primary my-auto"
            type="button"
            disabled={!word}
            onClick={() => handleSubmit()}
          >
            Add
          </button>
        </div>
      </label>

      <p className="text-sm">
        Currently loaded: <span className="font-semibold">{wordList.name}</span>
      </p>
      <SortableList list={wordList.words} setList={setWords} />
    </div>
  );
};

export default WordList;
