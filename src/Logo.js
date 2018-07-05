import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import logo from './images/logo.png';

class Logo extends Component {
	render(){
		return (
				<Image src={logo} alt={logo} rounded />
		);
	}
}

export default Logo;