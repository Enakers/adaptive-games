import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useStore} from "~/store";
import GuessFeedback from "./GuessFeedback";
import GuessInput from "./GuessInput";
import HintButtons from "./HintButtons";

const GamePage = () => {
  const router = useRouter();
  const {handleCorrect, handleIncorrect, index, wordList, gameFinished} = useStore();
  const [correct, setCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    if (gameFinished) router.push("/results");
  }, [gameFinished, router]);

  const checkGuess = (isCorrect: boolean) => {
    setCorrect(isCorrect);

    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isCorrect ? handleCorrect() : handleIncorrect();
      setCorrect(null);
    }, 2000);
  };

  return (
    <div className="text-center">
      <h2 className="mb-2">
        {index} / {wordList.words.length}
      </h2>

      <HintButtons />

      <GuessInput checkGuess={checkGuess} />

      <GuessFeedback correct={correct} />
    </div>
  );
};

export default GamePage;
