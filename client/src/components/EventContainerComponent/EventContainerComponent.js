import React from "react";

class EventContainer extends React.Component {

	render() {

		return(

			<div>

				<div className="row  justify-content-end">
					<div className="col-md-3">
						<div className="card">
							<div className="card-body">
								<h3 className="card-title"> Filter Events </h3>
								<form className="eventFilterForm">
									<div className="form-group">
										<select className="form-control">
											<option> No Filter </option>
											<option> Filter #1 </option>
											<option> Filter #2 </option>
											<option> Filter #3 </option>
											<option> Filter #4 </option>
											<option> Filter #5 </option>
										</select>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-9">
						<div className="card">
							<div className="card-body">
								
								<h1 className="card-title"> EVENTS GO HERE! </h1>
								<hr/>

								

							</div>
						</div>
					</div>
				</div>


				<div className="row justify-content-end">
					<div className="col-md-2">
						<span>
							
							<button> <a href="/dashboard/createevent" > Create New </a>  </button>
							
						</span>
					</div>
				</div>

			</div>

		);

	}

}


export default EventContainer;