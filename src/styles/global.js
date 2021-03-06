import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizzing: border-box;
}

html, body, #root {
  mini-height: 100%
}

body {
  background: #262626;
  font-size: 14px;
  webkit-font-smoothing: antialiased "!important;
}

body, input, button {
  color: #222;
  font-size: 14px;
  font-family: Arial, Helvetica, san-serif;
}

button {
  cursor: pointer;
}
`;
