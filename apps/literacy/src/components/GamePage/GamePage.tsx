import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {FaAssistiveListeningSystems, FaEye} from "react-icons/fa";
import {useStore} from "~/store";
import GuessFeedback from "./GuessFeedback";
import GuessInput from "./GuessInput";

const GamePage = () => {
  const router = useRouter();
  const {handleCorrect, handleIncorrect, index, wordList, gameFinished, word, speak, peakTime} =
    useStore();
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [showWord, setShowWord] = useState(false);

  const peak = () => {
    setShowWord(true);

    setTimeout(() => setShowWord(false), peakTime * 1000);
  };

  useEffect(() => {
    if (gameFinished) router.push("/results");
  }, [gameFinished, router]);

  useEffect(() => {
    if (peakTime === 0) setShowWord(true);
    else peak();

    speak(word);
  }, [word, peakTime]);

  const checkGuess = (isCorrect: boolean) => {
    setCorrect(isCorrect);

    setTimeout(() => {
      if (isCorrect) {
        handleCorrect();
      } else {
        handleIncorrect();
        peak();
        speak(word);
      }

      setCorrect(null);
    }, 2000);
  };

  return (
    <div className="text-center">
      <h2 className="mb-2">
        {index} / {wordList.words.length}
      </h2>

      <div className="text-2xl font-bold min-h-8">
        {showWord && <h1 className="text-2xl font-bold">{word}</h1>}
      </div>

      <div className="mb-4">
        <button
          type="button"
          className="btn btn-md lg:btn-lg xl:btn-xl mr-8"
          onClick={() => speak(word)}
        >
          <FaAssistiveListeningSystems />
          <span className="text-lg ml-4">Listen</span>
        </button>
        {peakTime !== 0 && (
          <button type="button" className="btn btn-md lg:btn-lg xl:btn-xl" onClick={peak}>
            <FaEye />
            <span className="text-lg ml-4">Peak</span>
          </button>
        )}
      </div>

      <GuessInput checkGuess={checkGuess} />

      <GuessFeedback correct={correct} />
    </div>
  );
};

export default GamePage;
