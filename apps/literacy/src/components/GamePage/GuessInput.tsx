/* eslint-disable consistent-return */
import {ChangeEvent, KeyboardEvent, useRef, useState} from "react";
import {useStore} from "~/store";
import Keyboard from "./Keyboard";

interface Props {
  checkGuess: (isCorrect: boolean) => void;
}

const GuessInput = ({checkGuess}: Props) => {
  const {word, touchscreen} = useStore(state => ({
    word: state.word,
    touchscreen: state.touchscreen
  }));
  const [guess, setGuess] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheck = () => {
    setGuess("");
    checkGuess(word === guess);
  };

  const handleChange = () => {
    if (touchscreen) return;

    return (e: ChangeEvent<HTMLInputElement>) => setGuess(e.target.value);
  };
  const handleKeyUp = () => {
    if (touchscreen) return;

    return (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code === "Enter") handleCheck();
    };
  };

  return (
    <>
      <div className="flex justify-center mb-2">
        <input
          aria-label="Guess"
          ref={inputRef}
          value={guess}
          onChange={handleChange()}
          className={
            touchscreen
              ? "input input-sm md:input-md lg:input-lg"
              : "input input-sm md:input-md lg:input-lg input-bordered"
          }
          onKeyUp={handleKeyUp()}
        />
        <button
          type="button"
          className="btn btn-md lg:btn-lg xl:btn-xl btn-primary"
          onClick={handleCheck}
        >
          Check
        </button>
      </div>

      {touchscreen && (
        <div className="lg:mt-10 mt-20 lg:mx-10">
          <Keyboard value={guess} setValue={setGuess} inputRef={inputRef} />
        </div>
      )}
    </>
  );
};

export default GuessInput;
