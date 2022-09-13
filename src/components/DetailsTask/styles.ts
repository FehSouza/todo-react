import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.div<{ closing: boolean }>`
  flex: 1;
  height: calc(100% - 2rem);
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0.25rem 0 0.375rem ${({ theme }) => theme.colors.shadow};
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 1rem;
  position: relative;

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
  height: calc(100% - 2.5rem);
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

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 2.5rem;
  width: 2.5rem;
  background-color: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 1.5rem;
    transition-duration: 350ms;
    fill: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    & svg {
      fill: ${({ theme }) => theme.colors.themeBlue};
    }
  }
`

export const ButtonTools = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 0;
  height: 2.5rem;
  width: 2.5rem;
  background-color: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;

  & svg {
    font-size: 1rem;
    transition-duration: 350ms;
    fill: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    & svg {
      fill: ${({ theme }) => theme.colors.themeBlue};
    }
  }
`

export const ContainerTools = styled.div<{ showDropdown: boolean }>`
  position: absolute;
  top: 4.25rem;
  right: 0.5rem;
  z-index: 2;
  background-color: transparent;
  border-radius: none;
  display: ${({ showDropdown }) => (showDropdown ? 'flex' : 'none')};
`
export const ContentTools = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => `-0 0 0.5rem ${theme.colors.shadow}`};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`

export const ButtonOption = styled.button`
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.focus};
  border: none;
  border-radius: 0.5rem;
  transition-duration: 350ms;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.5rem 0;
  padding: 0 1rem;

  &:hover {
    background-color: ${({ theme }) => lighten(-0.04, theme.colors.focus)};
  }
`
