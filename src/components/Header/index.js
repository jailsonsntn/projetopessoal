import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Home, Services, Contact } from '../../styles/styleHeader';

export default function Header() {
  return (
    <Container>
      <Home>
        <nav>
          <Link to="/home">HOME</Link>
        </nav>
      </Home>
      <Services>
        <nav>
          <Link to="/services">SERVIÇOS</Link>
        </nav>
      </Services>
      <Contact>
        <nav>
          <Link to="/contact">CONTATO</Link>
        </nav>
      </Contact>
    </Container>
  )
}
