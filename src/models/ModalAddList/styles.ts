import styled from 'styled-components'
import { Color } from '../../styles/theme'

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
  height: 10rem;
  margin: 2.8rem;
  padding: 1rem;
  box-sizing: border-box;
  border: none;
  border-radius: 0.5rem;
  outline: none;

  @media (max-width: 1162px) {
    height: ${({ showList }) => (showList ? '13rem' : '10rem')};
  }

  @media (max-width: 941px) {
    height: 13rem;
  }
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  line-height: 1.125rem;
`

export const ThemesWrapper = styled.ul`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;

  @media (max-width: 1162px) {
    flex-wrap: wrap;
  }
`

export const Theme = styled.li<{ colorTheme: Color; colorThemeSelected: boolean }>`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 100%;
  border: 0.125rem solid
    ${({ theme, colorTheme, colorThemeSelected }) =>
      colorThemeSelected ? theme.colors[colorTheme] : theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
`

export const ThemeInternal = styled.div<{ colorTheme: Color }>`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 0.125rem solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, colorTheme }) => (colorTheme ? theme.colors[colorTheme] : theme.colors.themeBlue)};

  &:hover {
    cursor: pointer;
  }
`
