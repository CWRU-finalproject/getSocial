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
								<h3 className="card-title"> New Event </h3>
									<form className="createEventForm">
										<div className="form-group">
											<label for="eventTitle"> Title </label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label for="eventDate"> Date </label>
											<input type="date" className="form-control"/>
										</div>
										<div className="form-group">
											<label for="eventDescription"> Discription </label>
											<textarea name="Discription" className="form-control" rows="10"> Event description goes here... </textarea>
										</div>
										<button type="button"> <a href="/dashboard" >Submit</a> </button>
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