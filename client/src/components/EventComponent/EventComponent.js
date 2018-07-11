import React from "react";
import "./EventComponent.css";

class EventCard extends React.Component {


	render(){

		return(

			
			<div className="event">
			<br />
				<div className="row justify-content-center">
					<div className="col-md-12">
						<div className="card">
							<div className="card-body">
								<h3 className="eventTitle"> {this.props.title} </h3>
								<p className="eventDescription"> {this.props.description} </p>
								<p className="eventLocation"> {this.props.location} </p>
								<p className="eventDate"> {this.props.date} </p>

							</div>
						</div>
					</div>
				</div>
			<br />
			</div>
			

		);
	}
}

export default EventCard;