import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

const Layout = ({ children }) => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col col-lg-6">
                <Navbar color="primary" dark>
                    <NavbarBrand href="/">Beer Goggles</NavbarBrand>
                </Navbar>
                {children}
            </div>
        </div>
    </div>
)

export default Layout