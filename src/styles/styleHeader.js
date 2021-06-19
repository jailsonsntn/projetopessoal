import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  padding: 0 30px;
  text-align: center;
  font: 25px 'Bebas Neue', sans-serif;

  box-shadow: 1px 1px 1px #f18800;
  background-color: #f18800;

  a {
    color: #000;
  }

`

export const Home = styled.div`
margin-right: 15px;
display: inline-block;

transition: color 0.2s;
    &:hover {
      text-shadow: #000 1px 6px 6px;
    }
}

`

export const Services = styled.div`
margin-right: 15px;
display: inline-block;

transition: color 0.2s;
    &:hover {
      text-shadow: #000 1px 6px 6px;
    }
`

export const Contact = styled.div`

display: inline-block;

transition: color 0.2s;
    &:hover {
      text-shadow: #000 1px 6px 6px;
    }
`
