import './components/base/global.css';
import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from './public/vite.svg';

document.querySelector('#app').innerHTML = `
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
  </a>
  <h1>Hello Vite!</h1>
  <p class="read-the-docs">
    Click on the Vite logo to learn more
  </p>
`;
