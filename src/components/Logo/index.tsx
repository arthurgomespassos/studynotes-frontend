import React from 'react';
import { Link } from 'react-router-dom';
import { LogoText } from './styled';

interface Props {
  fontSize: string;
  to: string;
}

export default function Logo({ fontSize, to }: Props) {
  return (
    <Link to={to} className="logo">
      <LogoText style={{ fontSize }} className="logo">
        Study Notes
      </LogoText>
    </Link>
  );
}
