import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div<{ showList: boolean }>`
  width: ${({ showList }) => (showList ? '25%' : '3.625rem')};
  height: 100%;
  display: flex;
  flex-direction: column;
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

export const WithoutItemListsContainer = styled.span`
  width: 100%;
  text-align: center;
  color: #111725;
  line-height: 1rem;
`

export const ButtonAddList = styled.button`
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

export const OrdinationWrapper = styled.div`
  width: calc(100% - 0.75rem);
  margin-top: 1.25rem;
  margin-bottom: 0.25rem;
  padding-bottom: 0.75rem;
  border-bottom: ${({ theme }) => `1px solid ${lighten(-0.04, theme.colors.focus)}`};
`

export const OrdinationTitle = styled.span`
  text-align: start;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1rem;
`

export const OrdinationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;

  & button:nth-child(3) {
    text-align: end;
    padding-left: 0.5rem;
    padding-right: 0rem;
  }
`

export const Option = styled.button`
  width: calc((100% - 2rem) / 2);
  padding-right: 0.5rem;
  text-align: start;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1rem;
  cursor: pointer;
`

export const SwitchWrapper = styled.div`
  width: 2rem;
  height: 1rem;
  border: ${({ theme }) => `0.0625rem solid ${theme.colors.themeBlue}`};
  border-radius: 1rem;
  cursor: pointer;
`

export const SwitchBox = styled.div<{ typeOrdination: string }>`
  width: calc(1rem - 0.25rem);
  height: calc(1rem - 0.25rem);
  margin: 0.125rem;
  transition-duration: 350ms;
  margin-left: ${({ typeOrdination }) => (typeOrdination === 'ASC' ? '0.125rem' : 'calc(0.125rem + 1rem)')};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.themeBlue};
`
