import styled from 'styled-components'
import { Color } from '../../styles/theme'

export const Container = styled.li<{ state: boolean; completed: boolean }>`
  width: calc(100% - 0.25rem);
  max-width: calc(100% - 0.25rem);
  height: 3.125rem;
  background-color: ${({ theme, state }) => (state ? `${theme.colors.focus}` : `${theme.colors.white}`)};
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  transition-duration: 350ms;
  position: relative;

  & + li {
    margin-top: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.focus};
    cursor: pointer;
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.focus};
  }

  &::before {
    content: '';
    display: inline-block;
    width: calc(100% - 1.5rem);
    height: 2px;
    background-color: ${({ theme, completed }) => (completed ? theme.colors.textLight : 'transparent')};
    position: absolute;
    top: calc(50% - 0.0625rem);
    left: 0.75rem;
  }
`

export const Dot = styled.div<{ color?: Color }>`
  width: 0.625rem;
  height: 0.625rem;
  border: none;
  border-radius: 100%;
  background-color: ${({ theme, color }) => theme.colors[color ?? 'textLight']};
  margin-right: 0.625rem;
`

export const Task = styled.span`
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const NameList = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  margin-left: auto;
  display: inline-block;
  text-transform: lowercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 25%;
  margin-left: 1rem;

  &::first-letter {
    text-transform: capitalize;
  }
`
