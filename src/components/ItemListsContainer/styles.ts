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

export const Container = styled.li<{ color: Color; state?: boolean; showList?: boolean; fixed?: boolean }>`
  width: ${({ showList }) => (showList ? 'calc(100% - 0.25rem)' : '2.625rem')};
  height: 2.5rem;
  background-color: ${({ theme, state, fixed, color }) =>
    fixed || state ? lighten(0.45, theme.colors[color]) : theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  transition-duration: 350ms;
  color: ${({ theme, state, color }) => (state ? theme.colors[color] : theme.colors.text)};
  user-select: none;

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

    & button {
      display: flex;

      opacity: 1;
    }

    span {
      width: ${({ fixed }) => (fixed ? ' calc(100% - 4.5rem)' : ' calc(100% - 6.25rem)')};
    }
  }
`

export const NameList = styled.span<{ fixed?: boolean }>`
  color: inherit;
  display: inline-block;
  width: ${({ fixed }) => (fixed ? ' calc(100% - 4.5rem)' : ' calc(100% - 3rem)')};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-transform: lowercase;

  &:first-letter {
    text-transform: capitalize;
  }
`

export const FixedButton = styled.button<{ state: boolean; fixed?: boolean; color: Color }>`
  display: ${({ fixed }) => (fixed ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: auto;
  opacity: ${({ state, fixed }) => (fixed || state ? 1 : 0)};
  transition-duration: 350ms;

  & svg {
    color: ${({ color, theme }) => theme.colors[color]};
  }
`

export const Delete = styled.button<{ state?: boolean; color: Color }>`
  display: none;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: auto;
  opacity: ${({ state }) => (state ? 1 : 0)};
  transition-duration: 350ms;

  & svg {
    color: ${({ color, theme }) => theme.colors[color]};
  }
`
