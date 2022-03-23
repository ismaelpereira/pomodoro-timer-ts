import { useEffect, useState } from "react";
import { ClockProps } from "./clock";
import { ReactComponent as PlayIcon } from "../../public/icons/play.svg";
import { ReactComponent as PauseIcon } from "../../public/icons/pause.svg";
import { ReactComponent as ResetIcon } from "../../public/icons/reset.svg";
import {
  ClockContainer,
  ClockTimer,
  ClockButtonsContainer,
  ClockButton,
  DescriptionContent,
} from "./styles";

const ONE_SECOND_IN_MILLISECONDS = 1000;

export const Clock = ({ workTime, restTime, state, setState }: ClockProps) => {
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
      }, ONE_SECOND_IN_MILLISECONDS);
    }
    if (secondsAmount === 0 && state === 0) {
      setState(1);
      localStorage.setItem("state", "1");
      setSecondsAmount(restTime);
      setIsPlaying(false);
    }
    if (secondsAmount === 0 && state === 1) {
      setState(0);
      localStorage.setItem("state", "0");
      setSecondsAmount(workTime);
      setIsPlaying(false);
    }
  }, [isPlaying, secondsAmount, restTime, workTime, setState, state]);

  return (
    <ClockContainer>
      <DescriptionContent>
        {state === 0 ? <h2>Trabalhando....</h2> : <h2>Descansando....</h2>}
      </DescriptionContent>

      <ClockTimer>
        <span>{minutes.toString().padStart(2, "0")}</span>
        <span>:</span>
        <span>{seconds.toString().padStart(2, "0")}</span>
      </ClockTimer>

      <ClockButtonsContainer>
        <ClockButton onClick={() => setIsPlaying(true)}>
          <span>
            <PlayIcon />
          </span>
        </ClockButton>
        <ClockButton onClick={() => setIsPlaying(false)}>
          <span>
            <PauseIcon />
          </span>
        </ClockButton>

        <div>
          <ClockButton
            onClick={(e) => {
              setSecondsAmount(defaultSecondsValue);
              e.stopPropagation();
              setIsPlaying(false);
            }}
          >
            <span>
              <ResetIcon />
            </span>
          </ClockButton>
        </div>
      </ClockButtonsContainer>
    </ClockContainer>
  );
};
