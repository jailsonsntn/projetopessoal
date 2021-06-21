import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merienda+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

* {
margin: 0;
padding: 0;
outline: 0;
box-sizing: border-box;
}


*:focus {
outline: 0;
}

html, body, #root{
  height: 100%;
  background-color: #000;
  background-size: cover;
}

body, input, button {
  -webkit-font-smoothing: antialiased;
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  background: #f18000;
}

body::-webkit-scrollbar-thumb {
  background-color: #000;
  border: 1px solid #f18800;
}

a {
text-decoration: none;
}

ul {
list-style:none;
}

button {
cursor: pointer;
}

footer {
  color: #000;
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
  font-style: normal;
  &:hover{
    color: #f18000;
  }
}
`
