import React from 'react';

import { FaHeart } from 'react-icons/fa';
import { Container } from './styled';

export default function Footer() {
  return (
    <Container className="footer">
      <p>
        Feito com &nbsp;
        <span>
          <FaHeart />
        </span>
        &nbsp; por Arthur
      </p>
    </Container>
  );
}
