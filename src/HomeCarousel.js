import React, { Component } from 'react';
import { Bootstrap, Carousel } from 'react-bootstrap';
import homeCarousel from './images/home-carousel.jpg';

class HomeCarousel extends Component {

	render(){
		return (
			<Carousel>
				<Carousel.Item>
					<img src={homeCarousel} alt=""/>
					<Carousel.Caption>
						<h3>First Slide Label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img src={homeCarousel} alt=""/>
					<Carousel.Caption>
						<h3>Second Slide Label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img src={homeCarousel} alt=""/>
					<Carousel.Caption>
						<h3>Third Slide Label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img src={homeCarousel} alt=""/>
					<Carousel.Caption>
						<h3>Fourth Slide Label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default HomeCarousel