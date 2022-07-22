import {ChangeEvent, useEffect, useRef} from "react";
import {useStore} from "~/store";

const Voices = () => {
  const {voice, setVoice, speak} = useStore(state => ({
    voice: state.voice,
    setVoice: state.setVoice,
    speak: state.speak
  }));
  const voices = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    speechSynthesis.onvoiceschanged = () => {
      const voiceList: SpeechSynthesisVoice[] = [];

      speechSynthesis.getVoices().forEach(v => {
        if (v.lang.includes("en")) {
          if (v.default) setVoice(v);

          voiceList.push(v);
        }
      });

      voices.current = voiceList;
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVoice(voices.current.find(v => v.name === e.target.value)!);
  };

  return (
    <label className="label flex flex-col items-start" htmlFor="voice-select">
      <span className="label-text">Select voice</span>
      <select
        id="voice-select"
        className="select select-bordered w-full"
        value={voice?.name}
        onChange={handleChange}
      >
        {voices.current.map(v => (
          <option value={v.name} key={v.name}>
            {v.name}
          </option>
        ))}
      </select>
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={() => speak(`Testing voice ${voice?.name}`)}
      >
        Test
      </button>
    </label>
  );
};

export default Voices;
