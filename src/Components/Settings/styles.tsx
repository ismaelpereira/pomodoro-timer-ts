import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  z-index: 10;
  border-radius: 0.4em;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em;
`;

export const Form = styled.form`
  width: 90%;
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const Input = styled.input`
  -moz-appearance: textfield;
  height: 20px;
  width: 30px;
  font-size: large;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  height: 40px;
  width: 60px;
  border-radius: 0.4em;
  font-weight: bold;
`;
