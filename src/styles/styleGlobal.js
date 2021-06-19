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

}
*:focus {
outline: 0;
}
html, body, #root{
  height: 100%;
  background: rgb(0,0,0);

body, input, button {
  -webkit-font-smoothing: antialiased;
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

//style header

#icon {
  font-size: 100px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  color: #f18800;
}


`;
