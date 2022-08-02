import { lighten } from 'polished'
import styled from 'styled-components'
import { Color } from '../../styles/theme'

export const Container = styled.div<{ marginTop?: number }>`
  display: flex;
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}rem` : '1rem')};
`

export const InputWrapper = styled.div<{ color?: Color; size?: number; error?: boolean }>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.focus};
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.themeRed : theme.colors.focus)};
  border-radius: 8px;
  display: flex;
  align-items: center;

  & svg {
    padding-left: 1rem;
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ size }) => (size ? `${size}rem` : '1rem')};
    font-weight: 600;
  }

  &:focus-within {
    border: 1px solid ${({ theme, color, error }) => (error ? theme.colors.themeRed : theme.colors[color ?? 'text'])};
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  padding-left: 1rem;
  transition-duration: 350ms;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`

export const Button = styled.button<{ color?: Color; size?: number }>`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme, color }) => theme.colors[color ?? 'textLight']};
  border: none;
  border-radius: 0.5rem;
  transition-duration: 1000ms;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: ${({ size }) => (size ? `${size}rem` : '1rem')};
    color: ${({ theme }) => theme.colors.white};
    transform: rotate(0deg);
    transition-duration: 1000ms;
  }

  &:hover {
    background-color: ${({ theme, color }) => lighten(0.06, theme.colors[color ?? 'textLight'])};

    & svg {
      transform: rotate(360deg);
      transition-duration: 1000ms;
    }
  }
`
