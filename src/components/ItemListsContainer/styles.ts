import { lighten } from 'polished'
import styled from 'styled-components'
import { Color } from '../../styles/theme'

export const Dot = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  border: none;
  border-radius: 100%;
  margin-left: 1rem;
  margin-right: 0.625rem;
`

export const Container = styled.li<{ color: Color; state?: boolean; showList?: boolean }>`
  width: ${({ showList }) => (showList ? 'calc(100% - 0.25rem)' : '2.625rem')};
  height: 2.5rem;
  background-color: ${({ theme, state, color }) => (state ? lighten(0.5, theme.colors[color]) : theme.colors.white)};
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  transition-duration: 350ms;
  color: ${({ theme, state, color }) => (state ? theme.colors[color] : theme.colors.text)};

  & + li {
    margin-top: 0.5rem;
  }

  & ${Dot} {
    background-color: ${({ theme, color }) => theme.colors[color]};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme, color }) => lighten(0.45, theme.colors[color])};
    color: ${({ theme, color }) => theme.colors[color]};
  }

  &:focus {
    background-color: ${({ theme, color }) => lighten(0.5, theme.colors[color])};
    color: ${({ theme, color }) => theme.colors[color]};
  }
`

export const NameList = styled.span`
  color: inherit;
`
