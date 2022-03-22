import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Clock } from "./Components/Clock";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/global";
import { mainTheme, darkTheme } from "./styles/theme";

const POMODORO_WORK_TIME_IN_SECONDS = 5;
const POMODORO_REST_TIME_IN_SECONDS = 6;
function App() {
  const [workTime, setWorkTime] = useState(POMODORO_WORK_TIME_IN_SECONDS);
  const [restTime, setRestTime] = useState(POMODORO_REST_TIME_IN_SECONDS);
  const [state, setState] = useState(0); //0 === work && 1 === rest
  const [seconds, setSeconds] = useState(() =>
    state === 0 ? workTime : restTime
  );
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : mainTheme;

  console.log(darkMode);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header setDarkMode={setDarkMode} />
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
