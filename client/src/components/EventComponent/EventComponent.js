import React from "react";
import "./EventComponent.css";

class Event extends React.Component {

	render(){

		return(

			
			<div>
			<hr />
				<div className="row justify-content-center">
					<div className="col-md-4">
						<div className="card">
							<div className="card-body">
								<h3 className="eventTitle">  </h3>
								<h3 className="eventDate">  </h3>
								<h3 className="eventDescription">  </h3>
								<h3 className="op"> </h3>
							</div>
						</div>
					</div>
				</div>
			<hr />
			</div>
			

		);
	}
}

export default Event;