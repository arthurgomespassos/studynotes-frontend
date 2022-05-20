import React from 'react';
import Switch from 'react-js-switch';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import { Nav } from './styled';
import HeaderButton from '../HeaderButton';

interface Props {
  toggleTheme(): void;
  theme: { title: string };
}
export default function Header({ toggleTheme, theme }: Props) {
  return (
    <header className="header">
      <Nav>
        <ul>
          <li>
            <Logo to="/" fontSize="2.4rem" />
          </li>
          <li>
            <Link to="/notes">Notas</Link>
          </li>
          <li className="last">
            <HeaderButton to="/login" text="login" />
            <HeaderButton to="/register" text="cadastro" />
            <Switch
              onChange={toggleTheme}
              initialValue={theme.title !== 'light'}
              size={40}
              backgroundColor={{ on: '#223943', off: '#F2F2F2' }}
              borderColor={{ on: '#223943', off: '#F2F2F2' }}
              color="#FFFFFF"
            />
          </li>
        </ul>
      </Nav>
    </header>
  );
}
