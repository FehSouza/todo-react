import styled from 'styled-components'
import { Color } from '../../styles/theme'

export const Container = styled.li`
  width: calc(100% - 4px);
  height: 3.125rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  transition-duration: 350ms;

  & + li {
    margin-top: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.focus};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.focus};
  }
`

export const Dot = styled.div<{ color: Color }>`
  width: 0.625rem;
  height: 0.625rem;
  border: none;
  border-radius: 100%;
  background-color: ${({ theme, color }) => theme.colors[color]};
  margin-right: 0.625rem;
`

export const Task = styled.span`
  color: ${({ theme }) => theme.colors.text};
`

export const NameList = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  margin-left: auto;
`
