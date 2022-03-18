import { useState } from "react";
import { ReactComponent as SettingsIcon } from "../../public/icons/settings-icon.svg";
import { Settings } from "../Settings";
import { SettingsButton, HeaderContainer } from "./styles";

interface HeaderProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ setDarkMode }: HeaderProps) => {
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
        setDarkMode={setDarkMode}
      />
    </>
  );
};
