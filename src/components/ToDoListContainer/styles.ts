import styled from 'styled-components'

export const Container = styled.section`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.375rem ${({ theme }) => theme.colors.shadow};
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
`
