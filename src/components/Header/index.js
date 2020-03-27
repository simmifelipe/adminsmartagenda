import React from 'react';

import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Smart Agenda" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Demo Prestador</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Demo Prestador"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
