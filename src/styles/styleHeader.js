import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  padding: 0 20px;
  text-align: center;
  font: 24px 'Bebas Neue', sans-serif;

  box-shadow: 1px 1px 10px #f18800;
  background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(241,136,0,1) 40%, rgba(241,136,0,1) 60%, rgba(0,0,0,1) 100%);

  a {
    color: #000;
  }
`
export const Home = styled.div`
margin-right: 15px;
display: inline-block;
transition: color 0.2s;
    &:hover {
    font-weight: bold;
    }
`
export const Services = styled.div`
margin-right: 15px;
display: inline-block;
transition: color 0.2s;
    &:hover {
       font-weight: bold;
    }
`

export const Contact = styled.div`
display: inline-block;
transition: color 0.2s;
    &:hover {
    font-weight: bold;
    }
`
