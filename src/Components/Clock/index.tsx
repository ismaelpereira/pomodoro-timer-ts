import { useEffect, useState } from "react";
import { ClockProps } from "./clock";

export const Clock = ({
  workTime,
  restTime,
  state,
  setState,
  setSeconds,
}: ClockProps) => {
  const totalSeconds = state === 0 ? workTime : restTime;

  const [secondsAmount, setSecondsAmount] = useState(totalSeconds);
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultSecondsValue = totalSeconds;

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  useEffect(() => {
    if (secondsAmount > 0 && isPlaying) {
      setTimeout(() => {
        setSecondsAmount((state) => state - 1);
      }, 1000);
    }
    if (secondsAmount === 0 && state === 0) {
      setState(1);
      setSecondsAmount(restTime);
      setIsPlaying(false);
    }
    if (secondsAmount === 0 && state === 1) {
      setState(0);
      setSecondsAmount(workTime);
      setIsPlaying(false);
    }
  }, [isPlaying, secondsAmount]);

  return (
    <div>
      <div>
        <span>{minutes.toString().padStart(2, "0")}</span>
        <span>:</span>
        <span>{seconds.toString().padStart(2, "0")}</span>
      </div>

      <div>
        <div>
          <button onClick={() => setIsPlaying(true)}>Play</button>
          <button onClick={() => setIsPlaying(false)}>Pause</button>
        </div>
      </div>

      <div>
        <button
          onClick={(e) => {
            setSecondsAmount(defaultSecondsValue);
            e.stopPropagation();
            setIsPlaying(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
