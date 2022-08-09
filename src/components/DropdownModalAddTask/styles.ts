import styled from 'styled-components'

export const Content = styled.div`
  min-width: 7rem;
  width: auto;
  max-width: calc(100% - 2rem);
  height: auto;
  max-height: calc(100% - 2rem - 2.5rem - 0.5rem);
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.shadow};
  border: none;
  border-radius: 0.5rem;
  position: absolute;
  top: 4rem;
  right: 1rem;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.focus};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.textLight};
    border: 3.5px solid ${({ theme }) => theme.colors.focus};
  }
`

export const ItemList = styled.div`
  height: 1.34375rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  transition-duration: 350ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.focus};
    cursor: pointer;
  }
`

export const NameList = styled.span`
  width: 100%;
  display: inline-block;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: lowercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:first-letter {
    text-transform: capitalize;
  }
`
