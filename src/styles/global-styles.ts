import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 89%;  
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
    
  }
  body {
    background-color: #fff;
    font-family: var(--font-family);
    overflow-x: hidden;
  }
  
  button{
    &:hover{
      cursor: pointer;
    }
  }
  ::-webkit-scrollbar {
    width: 8px;
    transition: 0.3s ease;
  }
  ::-webkit-scrollbar-track {
    background: var(--shadow-color);
  }
  ::-webkit-scrollbar-thumb {
    background: #1c1733;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
