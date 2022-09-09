import { lighten } from 'polished'
import styled from 'styled-components'

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.white}8D;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

export const Content = styled.div<{ showList: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.shadow};
  position: fixed;
  bottom: 0;
  left: ${({ showList }) => (showList ? `calc(((100% - 50% - 2rem) * 0.25) + 1.5rem)` : `calc(3.625rem + 1.5rem)`)};
  width: ${({ showList }) =>
    showList
      ? `calc(50% - 2rem - 2rem - ((100% - 50% - 2rem) * 0.25) - 1.5rem + 0.25rem)`
      : `calc(50% - 2rem - 2rem - 3.625rem - 1.5rem + 0.25rem)`};
  height: 18.375rem;
  margin: 2.8rem;
  padding: 1rem;
  box-sizing: border-box;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  display: flex;
  flex-direction: column;
`

export const Description = styled.textarea<{ errorTextArea?: boolean }>`
  width: 100%;
  height: 10.375rem;
  background-color: ${({ theme }) => theme.colors.focus};
  border: 0.0625rem solid ${({ theme, errorTextArea }) => (errorTextArea ? theme.colors.themeRed : theme.colors.focus)};
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
  resize: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  transition-duration: 350ms;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  &:focus {
    border: 0.0625rem solid
      ${({ theme, errorTextArea }) => (errorTextArea ? theme.colors.themeRed : theme.colors.focus)};
  }

  ::-webkit-scrollbar {
    width: 0.75rem;
  }

  ::-webkit-scrollbar-track {
    border-radius: 1.25rem;
    background-color: ${({ theme }) => theme.colors.focus};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1.25rem;
    background-color: ${({ theme }) => theme.colors.textLight};
    border: 0.21875rem solid ${({ theme }) => theme.colors.focus};
  }
`

export const ButtonAdd = styled.button`
  height: 2.5rem;
  width: 7rem;
  background-color: ${({ theme }) => theme.colors.themeBlue};
  border: none;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & svg {
    transform: rotate(0deg);
    transition-duration: 750ms;
  }

  &:hover {
    background-color: ${({ theme }) => lighten(0.06, theme.colors.themeBlue)};

    & svg {
      transform: rotate(360deg);
      transition-duration: 750ms;
    }
  }
`
