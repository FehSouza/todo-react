import styled from 'styled-components'

export const Container = styled.div<{ showList: boolean }>`
  width: ${({ showList }) => (showList ? '25%' : '2.625rem')};
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
`

export const Title = styled.h2`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    cursor: pointer;
  }
`

export const ButtonToggle = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 1.125rem;
    margin-right: 0px;
    transition-duration: 350ms;
  }

  &:hover {
    cursor: pointer;

    & svg {
      margin-right: 0.25rem;
    }
  }
`

export const ListsContent = styled.ul`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
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
