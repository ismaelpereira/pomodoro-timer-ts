import { useEffect, useState } from "react";
import { Clock } from "./Components/Clock";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

const POMODORO_WORK_TIME_IN_SECONDS = 5;
const POMODORO_REST_TIME_IN_SECONDS = 6;
function App() {
  const [workTime, setWorkTime] = useState(POMODORO_WORK_TIME_IN_SECONDS);
  const [restTime, setRestTime] = useState(POMODORO_REST_TIME_IN_SECONDS);
  const [state, setState] = useState(0); //0 === work && 1 === rest
  const [seconds, setSeconds] = useState(() =>
    state === 0 ? workTime : restTime
  );

  return (
    <div>
      <Header />
      {/* <Clock
        workTime={workTime}
        restTime={restTime}
        state={state}
        setState={setState}
        setSeconds={setSeconds}
      /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
