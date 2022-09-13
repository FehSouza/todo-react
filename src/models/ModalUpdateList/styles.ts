import { lighten } from 'polished'
import styled from 'styled-components'

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.white}8D;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.shadow};
  position: fixed;
  width: calc((100% - 50%) / 2);
  max-height: 22.5rem;
  top: calc((100% - 22.5rem) / 2);
  right: calc((100% - ((100% - 50%) / 2) - 50% + 2rem) / 2);
  padding: 1rem;
  box-sizing: border-box;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: calc((100% - 30%) / 2);
    right: calc((100% - ((100% - 30%) / 2) - 50% + 2rem) / 2);
  }
`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.text};
  height: 1.5rem;
`

export const ListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100% - 2.5rem);
  overflow-y: auto;
  padding-right: 0.25rem;
  margin-top: 1rem;

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

export const ListButton = styled.button`
  width: 100%;
  height: 2.5rem;
  min-height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.themeBlue};
  border: 0.09375rem solid ${({ theme }) => theme.colors.themeBlue};
  border-radius: 0.5rem;
  transition-duration: 350ms;
  color: ${({ theme }) => theme.colors.white};
  margin: 0.25rem 0;
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
    background-color: ${({ theme }) => lighten(0.06, theme.colors.themeBlue)};
  }
`
