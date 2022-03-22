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
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Settings = ({
  showSettings,
  setShowSettings,
  setDarkMode,
}: ModalProps) => {
  const [checked, setChecked] = useState(false);

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

  const handleSettings = () => {};

  return (
    <>
      {showSettings ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <ModalHeader>
              <h3>Configurações</h3>
              <span onClick={() => setShowSettings(false)}>X</span>
            </ModalHeader>

            <Form action="submit">
              <InputContainer className="workTime">
                <label>Tempo de trabalho:</label>
                <Input type="number" />
                <span>mins</span>
              </InputContainer>
              <InputContainer>
                <label>Tempo de descanso:</label>
                <Input type="number" />
                <span>mins</span>
              </InputContainer>
              <InputContainer>
                <label>Dark Mode: </label>
                <ReactSwitch
                  onChange={handleSwitch}
                  checked={checked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#FF5252"
                />
              </InputContainer>

              <ButtonContainer>
                <Button onSubmit={handleSettings}>Aplicar</Button>
              </ButtonContainer>
            </Form>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
