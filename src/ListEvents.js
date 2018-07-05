import React, { Component } from 'react';
import { Bootstrap, Table } from 'react-bootstrap';

class ListEvents extends Component {

	render(){

		let listOfEvents = this.props.eventList;
		
		return(

			<div id="events">
				<h1>Events</h1>

				<Table responsive hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Event Name</th>
							<th>Event Date</th>
							<th>Event Time</th>
							<th>Registration Link</th>
						</tr>
					</thead>
					<tbody>
						{
							listOfEvents.map( (eachEvent, i) => 
								<tr key={i}>
									<td>{i+1}</td>
									<td>{eachEvent.eventName}</td>
									<td>{eachEvent.eventDate}</td>
									<td>{eachEvent.eventTime}</td>
									<td><a href="#">Register</a></td>
								</tr>
							
							)
						}
					</tbody>
				</Table>

			</div>
		);
	}
}

export default ListEvents