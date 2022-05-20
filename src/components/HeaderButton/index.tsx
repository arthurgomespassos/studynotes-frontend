import React from 'react';
import { Link } from 'react-router-dom';
import { Btn } from './styled';

interface Props {
  to: string;
  text: string;
}

export default function HeaderButton({ to, text }: Props) {
  return (
    <Link to={to} className="button">
      <Btn type="button">{text}</Btn>
    </Link>
  );
}
