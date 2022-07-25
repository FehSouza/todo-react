import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1rem;
  margin-top: 1.5rem;
`

export const Image = styled.img`
  margin-top: 3rem;
  width: 75%;
  max-width: 24rem;
`
