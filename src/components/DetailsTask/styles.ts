import { lighten } from 'polished'
import styled, { css } from 'styled-components'
import { Color } from '../../styles/theme'

export const Container = styled.div<{ closing: boolean }>`
  flex: 1;
  height: calc(100% - 2rem);
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0.25rem 0 0.375rem ${({ theme }) => theme.colors.shadow};
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 1rem;

  @keyframes grow {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  animation: grow 350ms forwards;

  ${({ closing }) =>
    closing &&
    css`
      @keyframes shrink {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }
      animation: shrink 350ms forwards;
    `}
`

export const TaskInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 6rem);
`

export const Title = styled.h2`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-transform: lowercase;
  display: inline-block;

  &::first-letter {
    text-transform: uppercase;
  }
`

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  & > svg {
    fill: ${({ theme }) => theme.colors.textLight};
    font-size: 1.125rem;
    padding-bottom: 0.125rem;
  }
`

export const Date = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textLight};
  margin-left: 0.75rem;
  display: inline-block;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`

export const DescriptionTitle = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1.5rem;
`

export const Description = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textLight};
  margin: 1rem 0;
  overflow-y: auto;
  text-align: justify;
  padding-right: 12px;

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

export const ButtonsWrapper = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ButtonList = styled.button<{ color?: Color }>`
  width: calc(100% - 2.5rem - 1rem);
  max-width: 18.75rem;
  height: 2.5rem;
  background-color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.themeBlue)};
  border-radius: 0.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  transition-duration: 350ms;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 1rem;
  text-transform: lowercase;
  display: inline-block;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${({ theme, color }) =>
      color ? lighten(0.125, theme.colors[color]) : lighten(0.125, theme.colors.themeBlue)};
  }
`

export const ButtonsWrapperInfo = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
`

export const ButtonState = styled.button<{ completed?: boolean }>`
  width: calc(100% - 2.5rem - 1rem);
  max-width: 18.75rem;
  height: 2.5rem;
  background-color: ${({ theme, completed }) => (completed ? theme.colors.textLight : theme.colors.success)};
  border-radius: 0.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme, completed }) =>
      completed ? lighten(0.125, theme.colors.textLight) : lighten(0.125, theme.colors.success)};
  }
`

export const Delete = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.delete};
  transition-duration: 350ms;

  &:hover {
    color: ${({ theme }) => lighten(0.125, theme.colors.delete)};
  }
`
