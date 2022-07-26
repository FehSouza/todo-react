import { createGlobalStyle as css } from 'styled-components'

export const GlobalStyles = css`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    font-weight: 400;
    width: 100vw;
    height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    font-weight: 400;
    display: inline-block;
  }

  button,
  input {
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
  }

  button:hover {
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  .container-modal {
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .content-modal {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.shadow};
    position: fixed;
    bottom: 0;
    left: 13.5%;
    width: calc(50% - 13.5% - 3.7rem);
    height: 10rem;
    margin: 2.8rem;
    padding: 1rem;
    box-sizing: border-box;
    border: none;
    border-radius: 0.5rem;
  }
`
