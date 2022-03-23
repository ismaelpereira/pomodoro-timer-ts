import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Clock } from "./Components/Clock";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/global";
import { mainTheme, darkTheme } from "./styles/theme";

function App() {
  const localWorkTime = localStorage.getItem("workTime");
  const POMODORO_WORK_TIME_IN_SECONDS = localWorkTime
    ? parseInt(localWorkTime, 10)
    : 20;

  const localRestTime = localStorage.getItem("restTime");
  const POMODORO_REST_TIME_IN_SECONDS = localRestTime
    ? parseInt(localRestTime, 10)
    : 5;

  const localState = localStorage.getItem("state");
  const REAL_STATE = localState ? parseInt(localState, 10) : 0;

  const [workTime, setWorkTime] = useState(POMODORO_WORK_TIME_IN_SECONDS * 60);
  const [restTime, setRestTime] = useState(POMODORO_REST_TIME_IN_SECONDS * 60);
  const [state, setState] = useState(REAL_STATE); //0 === work && 1 === rest
  const [seconds, setSeconds] = useState(() =>
    state === 0 ? workTime : restTime
  );
  const isNavigatorDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme : dark)").matches;

  const [darkMode, setDarkMode] = useState(isNavigatorDarkMode);
  const theme = darkMode ? darkTheme : mainTheme;
  useEffect(() => {
    let wTime = localStorage.getItem("workTime");
    let rTime = localStorage.getItem("restTime");

    if (wTime && rTime) {
      setWorkTime(parseInt(wTime, 10));
      setRestTime(parseInt(rTime, 10));
    }
  }, [workTime, setWorkTime, restTime, setRestTime]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          workTime={workTime}
          setWorkTime={setWorkTime}
          restTime={restTime}
          setRestTime={setRestTime}
        />
        <Clock
          workTime={workTime}
          restTime={restTime}
          state={state}
          setState={setState}
          setSeconds={setSeconds}
        />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
