export interface ClockProps {
  workTime: number;
  restTime: number;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
}
