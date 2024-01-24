import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown , Button} from 'react-bootstrap';
import '../../src/App.css';
import Logo from '../Img/logo.png'


function Header() {
  return (
    
    <Navbar bg="light" data-bs-theme="light">
    <Container fluid>
      
    <Navbar.Brand href="#home">
    <img
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />


          </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end">   
        <Button variant="primary" href='Dashboard'>Login</Button>
        <Button variant="primary" href='Login'>Logout</Button>
          
       

    
              </Nav>
         </Navbar.Collapse>
            
    </Container>
  </Navbar>


  );
}

export default Header;