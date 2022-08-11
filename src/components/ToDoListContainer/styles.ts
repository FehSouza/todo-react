import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const ToDoListContainer = styled.section<{ showDetails: boolean }>`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ showDetails }) => (showDetails ? '0.5rem 0 0 0.5rem' : '0.5rem')};
  box-shadow: ${({ theme, showDetails }) =>
    showDetails ? `-0.25rem 0 0.375rem ${theme.colors.shadow}` : `0 0 0.375rem ${theme.colors.shadow}`};
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  z-index: 2;
`

export const DetailsTask = styled.div<{ closing: boolean }>`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0.25rem 0 0.375rem ${({ theme }) => theme.colors.shadow};
  border-radius: 0 0.5rem 0.5rem 0;
  @keyframes grow {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
  animation: grow 350ms forwards;

  ${({ closing }) =>
    closing &&
    css`
      @keyframes shrink {
        from {
          transform: translateX(0px);
        }
        to {
          transform: translateX(-100%);
        }
      }
      animation: shrink 350ms forwards;
    `}
`
