import React, {useState,useEffect} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import '../../src/App.css'

const Sidebar = () => {
	
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);
  
 return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav defaultActiveKey="home" className={"" + (url === "/home" ?" active" : "")} >
          <Nav.Link  href="Dashboard" className={"" + (url === "/Dashboard" ?" active" : "")} >Dashboard</Nav.Link>
         </Nav>
      </Navbar.Collapse>
    </Navbar>
 );
};

export default Sidebar;