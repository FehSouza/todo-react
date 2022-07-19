import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.li`
  width: 100%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  transition-duration: 350ms;

  & + li {
    margin-top: 0.5rem;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => lighten(0.5, theme.colors.themeBlue)};
  }

  &:focus {
    background-color: ${({ theme }) => lighten(0.5, theme.colors.themeBlue)};
  }
`

export const Dot = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  border: none;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.themeBlue};
  margin-left: 1rem;
  margin-right: 0.625rem;
`

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
`
