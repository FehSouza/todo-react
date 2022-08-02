import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div<{ showList: boolean }>`
  width: ${({ showList }) => (showList ? '25%' : '3.625rem')};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition-duration: 500ms;
`

export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;

    & svg {
      margin-right: 0.5rem;
    }
  }
`

export const Title = styled.h2`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const ButtonToggle = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 1.125rem;
    margin-right: 0.25rem;
    transition-duration: 350ms;
  }
`

export const ListsContent = styled.ul`
  width: 100%;
  height: calc(100% - 5.0625rem);
  overflow-y: auto;
  margin-top: 1rem;

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

export const WithoutItemListsContainer = styled.span`
  width: 100%;
  text-align: center;
  color: #111725;
  line-height: 1rem;
`

export const ButtonAddList = styled.button`
  margin-top: 1rem;
  width: fit-content;
  height: 2.5rem;
  min-height: 2.5rem;
  padding: 0 0.9375rem;
  box-sizing: border-box;
  gap: 0.625rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1rem;
  outline: none;

  & svg {
    transform: rotate(0deg);
    transition-duration: 350ms;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    & svg {
      transform: rotate(180deg);
      transition-duration: 350ms;
    }
  }
`
