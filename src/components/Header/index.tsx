import React, { useState } from 'react';
import Switch from 'react-js-switch';

import Logo from '../Logo';
import logoLight from '../../images/logo-white.png';
import logoDark from '../../images/logo-dark.png';
import { Nav } from './styled';

interface Props {
  toggleTheme(): void;
  theme: { title: string };
}
export default function Header({ toggleTheme, theme }: Props) {
  const [logoImage, toggleLogoImage] = useState(
    theme.title === 'light' ? logoLight : logoDark
  );

  return (
    <header>
      <Nav>
        <Logo src={logoImage} height="30px" href="/" />
        <li>
          <a href="f">Notas</a>
        </li>
        <Switch
          onChange={() => {
            toggleTheme();
            toggleLogoImage(theme.title === 'light' ? logoDark : logoLight);
          }}
          initialValue={theme.title !== 'light'}
          size={40}
          backgroundColor={{ on: '#223943', off: '#F2F2F2' }}
          borderColor={{ on: '#223943', off: '#F2F2F2' }}
          color="#fff"
        />
      </Nav>
    </header>
  );
}
