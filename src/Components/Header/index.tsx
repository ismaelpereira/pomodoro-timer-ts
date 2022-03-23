import { useState } from "react";
import { ReactComponent as SettingsIcon } from "../../public/icons/settings-icon.svg";
import { Settings } from "../Settings";
import { SettingsButton, HeaderContainer } from "./styles";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  workTime: number;
  setWorkTime: React.Dispatch<React.SetStateAction<number>>;
  restTime: number;
  setRestTime: React.Dispatch<React.SetStateAction<number>>;
}

export const Header = ({
  darkMode,
  setDarkMode,
  workTime,
  setWorkTime,
  restTime,
  setRestTime,
}: HeaderProps) => {
  const [showSettings, setShowSettings] = useState(false);

  const openSettings = () => {
    setShowSettings((prev) => !prev);
  };

  return (
    <>
      <HeaderContainer>
        <h2>Pomodoro</h2>
        <div>
          <SettingsButton>
            <span>
              <SettingsIcon onClick={openSettings} />
            </span>
          </SettingsButton>
        </div>
      </HeaderContainer>

      <Settings
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        workTime={workTime}
        setWorkTime={setWorkTime}
        restTime={restTime}
        setRestTime={setRestTime}
      />
    </>
  );
};
