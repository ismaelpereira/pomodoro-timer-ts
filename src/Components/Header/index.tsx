import { ReactComponent as SettingsIcon } from "../../public/icons/settings-icon.svg";
import { SettingsButton } from "./styles";

export const Header = () => {
  return (
    <div>
      <h2>Pomodoro</h2>
      <div>
        <SettingsButton>
          <SettingsIcon />
        </SettingsButton>
      </div>
    </div>
  );
};
