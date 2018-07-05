import React, { Component } from 'react';
import { Bootstrap, Button, Grid, Row, Col } from 'react-bootstrap';
import './css/index.css';
import { Scrollbars } from 'react-custom-scrollbars';
import Navigation from './Navigation';
import Home from './Home';
import AboutUs from './AboutUs';
import Who from './Who';
import Aim from './Aim';
import Events from './Events';
import MediaSpace from './MediaSpace';

class Ngo extends Component{

	render(){
		
		return (
			<Scrollbars style={{height: "100vh"}}>
				<div id="ngo" style={{ height: "auto" }}>
					<Grid>
						<Row>
							<Col md={12}>
								<p></p>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<Navigation />
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<Home />
								<hr />
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<AboutUs />
								<hr />
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<Who />
								<hr />
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<Aim />
								<hr />
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<Events />
								<hr />
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<MediaSpace />
								<hr />
							</Col>
						</Row>
					</Grid>
				</div>
			</Scrollbars>

		)
	}
}

export default Ngo