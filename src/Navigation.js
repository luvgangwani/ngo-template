import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Logo from './Logo';

class Navigation extends Component {

	render(){
		return(

			<Navbar fluid inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Logo />
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem href="#home">
							Home
						</NavItem>
						<NavItem href="#aboutus">
							About Us
						</NavItem>
						<NavItem href="#who">
							WHO
						</NavItem>
						<NavItem href="#aim">
							Aim
						</NavItem>
						<NavItem href="#events">
							Events
						</NavItem>
						<NavItem href="#">
							Gallery
						</NavItem>
						<NavItem href="#">
							Visitors
						</NavItem>
						<NavItem href="#mediaspace">
							Media Space
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigation