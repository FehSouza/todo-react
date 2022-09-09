import { lighten } from 'polished'
import styled from 'styled-components'

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.white}8D;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

export const Container = styled.div<{ hasThreeButtons: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.shadow};
  position: fixed;
  width: calc((100% - 50%) / 2);
  height: ${({ hasThreeButtons }) => (hasThreeButtons ? '12rem' : '8rem')};
  top: ${({ hasThreeButtons }) => (hasThreeButtons ? 'calc((100% - 12rem) / 2)' : 'calc((100% - 8rem) / 2)')};
  left: calc((100% - ((100% - 50%) / 2) - 50% + 2rem) / 2);
  padding: 1rem;
  box-sizing: border-box;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1024px) and (min-width: 769px) {
    width: calc((100% - 40%) / 2);
    left: calc((100% - ((100% - 40%) / 2) - 50% + 2rem) / 2);
  }

  @media (max-width: 768px) {
    width: calc((100% - 30%) / 2);
    left: calc((100% - ((100% - 30%) / 2) - 50% + 2rem) / 2);
  }
`

export const OptionButton = styled.button`
  width: 100%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.themeBlue};
  border: 0.09375rem solid ${({ theme }) => theme.colors.themeBlue};
  border-radius: 0.5rem;
  transition-duration: 350ms;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => lighten(0.06, theme.colors.themeBlue)};
  }
`
