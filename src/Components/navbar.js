import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'

const Navbars = ()=>{
    return(
        <div>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Kajanan</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/add">Add Book</Nav.Link>
                <Nav.Link href="/books">Books Lists</Nav.Link>
            </Nav>
        </Navbar>
        </div>
    )
}
export default Navbars