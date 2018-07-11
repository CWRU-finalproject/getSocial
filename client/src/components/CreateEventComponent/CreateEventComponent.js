import React from "react";
import "./CreateEventComponent.css";

class CreateEvent extends React.Component {

	render(){

		return(

			
			<div>
			<br />
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="card">
							<div className="card-body">
								<h3 className="card-title">New Event</h3>
									<form className="createEventForm">
										<div className="form-group">
											<label id="form" for="eventTitle">Title</label>
											<input id="input" type="text" className="form-control" placeholder="Title"/>
										</div>
										<div className="form-group">
											<label id="form" for="eventDate">Date</label>
											<input id="input" type="date" className="form-control"/>
										</div>
										<div className="form-group">
											<label id="form" for="eventDescription">Discription</label>
											<textarea id="input"  name="Discription" className="form-control" rows="10" placeholder="Event description goes here... "></textarea>
										</div>
										<a href="/dashboard"><button type="button" id="signinBtn">Submit</button></a>
									</form>
							</div>
						</div>
					</div>
				</div>
			<br />
			</div>
			

		);
	}
}

export default CreateEvent;