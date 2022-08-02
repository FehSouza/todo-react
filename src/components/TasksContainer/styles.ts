import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100%;
  padding-left: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  &:first-letter {
    text-transform: capitalize;
  }
`

export const TasksContent = styled.ul`
  margin-top: 1.5rem;
  max-height: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: ${({ theme }) => lighten(-0.04, theme.colors.focus)};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.textLight};
    border: 3.5px solid ${({ theme }) => lighten(-0.04, theme.colors.focus)};
  }
`
