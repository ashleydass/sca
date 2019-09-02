import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Register from './component/register';

import './App.css';

function App() {
  return (
    <div data-test="AppComponent">
      <Navbar expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#">Subsribe</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Register />
      </Container>
    </div>
  )
}

export default App
