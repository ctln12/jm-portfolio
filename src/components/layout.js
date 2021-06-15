import React from 'react';
import Navbar from '../components/navbar';
import Container from '../components/container';

const Layout = ({ children }) => {
  return (
    <main className="Main">
      <Navbar />
      <Container>
        {children}
      </Container>
    </main>
  );
}

export default Layout;
