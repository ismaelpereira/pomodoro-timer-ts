import styled from "styled-components";

export const SettingsButton = styled.button`
  width: 75px;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 0.4em;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  &:active:enabled {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
`;
