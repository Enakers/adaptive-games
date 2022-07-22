import {useEffect, useState} from "react";
import {FaAssistiveListeningSystems, FaEye} from "react-icons/fa";
import {useStore} from "~/store";

const HintButtons = () => {
  const {word, speak, peakTime} = useStore();
  const [showWord, setShowWord] = useState(true);

  const peak = () => {
    setShowWord(true);

    setTimeout(() => setShowWord(false), peakTime * 1000);
  };

  useEffect(() => {
    if (peakTime === 0) setShowWord(true);
    else peak();

    speak(word);
  }, [word, peakTime]);

  return (
    <>
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
    </>
  );
};

export default HintButtons;
