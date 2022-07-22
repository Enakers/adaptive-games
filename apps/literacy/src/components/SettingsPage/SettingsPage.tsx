import dynamic from "next/dynamic";
import {useStore} from "~/store";

const Voices = dynamic(import("./Voices"), {ssr: false});

const SettingsPage = () => {
  const {peakTime, setPeakTime, touchscreen, toggleTouchscreen} = useStore(state => ({
    peakTime: state.peakTime,
    setPeakTime: state.setPeakTime,
    touchscreen: state.touchscreen,
    toggleTouchscreen: state.toggleTouchscreen
  }));

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl text-center mb-4">Settings</h1>

      <label className="label flex flex-col items-start" htmlFor="peak-time-select">
        <span className="label-text">Select peak time</span>
        <select
          className="select select-bordered w-full"
          id="peak-time-select"
          value={peakTime}
          onChange={e => setPeakTime(parseInt(e.target.value, 10))}
        >
          <option value="1">1 second</option>
          <option value="2">2 seconds</option>
          <option value="3">3 seconds</option>
          <option value="4">4 seconds</option>
          <option value="5">5 seconds</option>
          <option value="0">Always</option>
        </select>
      </label>

      <label className="label cursor-pointer justify-start" htmlFor="touchscreen-toggle">
        <input
          type="checkbox"
          className="toggle"
          checked={touchscreen}
          onChange={toggleTouchscreen}
          id="touchscreen-toggle"
        />
        <span className="label-text ml-4">Touchscreen</span>
      </label>

      <Voices />
    </div>
  );
};

export default SettingsPage;
