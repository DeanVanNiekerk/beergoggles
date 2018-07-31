import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import { Target } from 'react-feather';

const Layout = ({ children }) => (
    <div className="container">
         <Navbar className="mb-3" color="primary">
            <NavbarBrand className="text-dark" href="/">
                <Target size="22" />
                <Target size="22" className="mr-2"/>
                Beer Goggles
            </NavbarBrand>
        </Navbar>
        {children}
    </div>
)

export default Layout