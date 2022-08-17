import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100%;
  width: calc(100% - 25%);
  max-width: calc(100% - 3.625rem);
  padding-left: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-transform: lowercase;

  &:first-letter {
    text-transform: capitalize;
  }
`

export const TasksContent = styled.ul`
  margin-top: 1.5rem;
  max-height: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.75rem;
  }

  ::-webkit-scrollbar-track {
    border-radius: 1.25rem;
    background-color: ${({ theme }) => lighten(-0.04, theme.colors.focus)};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1.25rem;
    background-color: ${({ theme }) => theme.colors.textLight};
    border: 0.21875rem solid ${({ theme }) => lighten(-0.04, theme.colors.focus)};
  }
`
