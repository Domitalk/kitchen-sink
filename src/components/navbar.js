import React from 'react';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav'; 

const Navigation = () => {
    return (
        <>
            <Navbar fixed="top" bg="light" variant="light">
                <Navbar.Brand>D</Navbar.Brand>
                <Nav.Link href="#home">Home</Nav.Link>
            </Navbar>   
        </> 
    )
}; 

export default Navigation; 