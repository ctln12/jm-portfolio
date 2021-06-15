import * as React from 'react';
import Container from '../components/container';
import Navbar from '../components/navbar';

const IndexPage = () => {
  return (
    <main className="Index">
      <Navbar />
      <Container>
        <h1>Welcome</h1>
      </Container>
    </main>
  )
}

export default IndexPage;
