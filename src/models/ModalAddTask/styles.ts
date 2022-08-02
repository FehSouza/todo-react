import styled from 'styled-components'

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.white}4D;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Content = styled.div<{ showList: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.shadow};
  position: fixed;
  bottom: 0;
  left: ${({ showList }) => (showList ? `calc(((100% - 50% - 2rem) * 0.25) + 1.5rem)` : `calc(3.625rem + 1.5rem)`)};
  width: ${({ showList }) =>
    showList
      ? `calc(50% - 2rem - 2rem - ((100% - 50% - 2rem) * 0.25) - 1.5rem + 0.25rem)`
      : `calc(50% - 2rem - 2rem - 3.625rem - 1.5rem + 0.25rem)`};
  height: 18.375rem;
  margin: 2.8rem;
  padding: 1rem;
  box-sizing: border-box;
  border: none;
  border-radius: 0.5rem;
  outline: none;
`
