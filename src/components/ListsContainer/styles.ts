import styled from 'styled-components'

export const Container = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
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
  padding: 0 0.625rem;
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
