import React, { Component } from 'react';
import { Bootstrap, Grid, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import Emojify from 'react-emojione';

class MediaSpace extends Component {

	render() {

		return (

			<div id="mediaspace">
				<h1>Media Space</h1>
				<p>We have an active social media presence. Do feel free to get in touch <Emojify> :) </Emojify></p>
				<Grid>
					<Row>
						<Col>
							<p></p>
						</Col>
					</Row>
					<Row>
						<Col md={2}><SocialIcon network="facebook" url="#" /></Col>
						<Col md={2}><SocialIcon network="twitter" url="#" /></Col>
						<Col md={2}><SocialIcon network="instagram" url="#" /></Col>
						<Col md={2}><SocialIcon network="linkedin" url="#" /></Col>
						<Col md={2}><SocialIcon network="youtube" url="#" /></Col>
						<Col md={2}><SocialIcon network="google" url="#" /></Col>
					</Row>
				</Grid>
			</div>

		);
	}
}

export default MediaSpace