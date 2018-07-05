import React, { Component } from 'react';
import { Bootstrap } from 'react-bootstrap';
import ListEvents from './ListEvents';

class Events extends Component {

	getEventList() {

		let eventList = [

			{
				eventID: 1,
				eventName: 'Children\'s Cricket Match',
				eventDate: '5th June 2018',
				eventTime: '10:00 AM' 
			},
			{
				eventID: 2,
				eventName: 'Annual Dance Competition',
				eventDate: '8th August 2018',
				eventTime: '12:00 PM'
			},
			{
				eventID: 3,
				eventName: 'Beach Cleaning',
				eventDate: '12th September 2018',
				eventTime: '07:30 AM'
			},
			{
				eventID: 4,
				eventName: 'Food Distribution',
				eventDate: '25th December 2018',
				eventTime: '11:00 AM'
			}
		]

		return eventList;
	}

	render() {

		let listOfEvents = this.getEventList();

		return (

			<ListEvents eventList={listOfEvents} />

		);
	}
}

export default Events