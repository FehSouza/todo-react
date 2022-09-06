import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
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
