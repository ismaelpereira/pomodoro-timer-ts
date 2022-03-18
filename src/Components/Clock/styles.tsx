import styled from "styled-components";

export const ClockContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  border-radius: 0.4em;
`;

export const ClockTimer = styled.div`
  font-size: 200px;
`;

export const ClockButtonsContainer = styled.div`
  border: none;
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;
export const ClockButton = styled.button`
  border: none;
  border-radius: 100%;
  width: 75px;
  height: 75px;
  text-align: center;
  cursor: pointer;
`;
