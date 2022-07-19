import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 75%;
  height: 100%;
  padding-left: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`

export const SearchWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.focus};
  border: 1px solid ${({ theme }) => theme.colors.focus};
  border-radius: 8px;
  display: flex;
  align-items: center;

  & svg {
    padding-left: 1rem;
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1.25rem;
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.themeBlue};
  }
`

export const SearchInput = styled.input`
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

export const ButtonAdd = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.themeBlue};
  border: none;
  border-radius: 0.5rem;
  transition-duration: 350ms;
  margin-left: 1rem;

  & svg {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.white};
    transform: rotate(0deg);
    transition-duration: 350ms;
  }

  &:hover {
    background-color: ${({ theme }) => lighten(0.06, theme.colors.themeBlue)};

    & svg {
      transform: rotate(180deg);
      transition-duration: 350ms;
    }
  }
`

export const ListOfTasks = styled.ul`
  margin-top: 1.5rem;
`

export const ItemOfListWrapper = styled.li`
  width: 100%;
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

export const Dots = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  border: none;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.themeBlue};
  margin-right: 0.625rem;
`

export const Task = styled.span`
  color: ${({ theme }) => theme.colors.text};
`

export const NameList = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  margin-left: auto;
`
