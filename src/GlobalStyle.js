import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    }

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
 
 body {
  margin: 0;
  font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
