import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactSwitch from "react-switch";
import {
  Background,
  ModalWrapper,
  Form,
  Input,
  InputContainer,
  ModalHeader,
  ButtonContainer,
  Button,
} from "./styles";

interface ModalProps {
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  workTime: number;
  setWorkTime: React.Dispatch<React.SetStateAction<number>>;
  restTime: number;
  setRestTime: React.Dispatch<React.SetStateAction<number>>;
}

export const Settings = ({
  showSettings,
  setShowSettings,
  darkMode,
  setDarkMode,
  workTime,
  setWorkTime,
  restTime,
  setRestTime,
}: ModalProps) => {
  const [checked, setChecked] = useState(false);
  const [workTimeInput, setWorkTimeInput] = useState(0);
  const [restTimeInput, setRestTimeInput] = useState(0);

  const handleSwitch = () => {
    setChecked((prev) => !prev);
    setDarkMode((prev) => !prev);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowSettings(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showSettings) {
        setShowSettings(false);
      }
    },
    [setShowSettings, showSettings]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const handleSettings = () => {
    if (workTimeInput === 0 || restTimeInput === 0) {
      throw new Error("Inputs cannot be empty");
    }

    localStorage.setItem("workTime", String(workTimeInput));
    localStorage.setItem("restTime", String(restTimeInput));
    setWorkTime(workTimeInput);
    setRestTime(restTimeInput);
  };

  return (
    <>
      {showSettings ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <ModalHeader>
              <h3>Configurações</h3>
              <span onClick={() => setShowSettings(false)}>X</span>
            </ModalHeader>

            <Form action="submit" onSubmit={handleSettings}>
              <InputContainer className="workTime">
                <label>Tempo de trabalho:</label>
                <Input
                  type="number"
                  onChange={(e) =>
                    setWorkTimeInput(parseInt(e.target.value, 10))
                  }
                />
                <span>mins</span>
              </InputContainer>
              <InputContainer>
                <label>Tempo de descanso:</label>
                <Input
                  type="number"
                  onChange={(e) =>
                    setRestTimeInput(parseInt(e.target.value, 10))
                  }
                />
                <span>mins</span>
              </InputContainer>
              <InputContainer>
                <label>Dark Mode: </label>
                <ReactSwitch
                  onChange={handleSwitch}
                  checked={darkMode}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#FF5252"
                />
              </InputContainer>

              <ButtonContainer>
                <Button onClick={handleSettings}>Aplicar</Button>
              </ButtonContainer>
            </Form>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
