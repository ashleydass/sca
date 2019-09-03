import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Register from './component/register/RegisterForm';

import './App.css';

function App() {
  return (
    <div data-test="AppComponent">
      <Navbar expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#">Subscribe</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Register />
      </Container>
    </div>
  )
}

export default App
