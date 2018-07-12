import React from "react";
import API from "../../utils/API.js";
import "./CreateEventComponent.css";

class CreateEvent extends React.Component {

	state = {
		title: "",
		description: "",
		date: "",
		location: "",
		filter: ""
	};

	handleInputChange = event => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		if(this.state.title && this.state.description && this.state.date && this.state.location) {
		
		 	API.postEvent({
				title: this.state.title,
				description: this.state.description,
				date: this.state.date,
				location: this.state.location,
				filter: this.state.filter
			}).then(

				function redirect()
					{
					    window.location.href="/dashboard";
					}

			).catch(err => console.log(err)); 
		
		} 
	};




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
											<label id="form"> Title </label>
											<input id="input" name="title" type="text" className="form-control" value={this.state.title} onChange={this.handleInputChange} />
										</div>
										<div className="form-group">
											<label id="form"> Description </label>
											<textarea id="input" name="description" className="form-control" rows="10" value={this.state.description} onChange={this.handleInputChange}> Event description goes here... </textarea>
										</div>
										<div className="form-group">
											<label id="form"> Date </label>
											<input id="input" name="date" type="date" className="form-control" value={this.state.date} onChange={this.handleInputChange} />
										</div>
										<div className="form-group">
											<label id="form"> Location </label>
											<input id="input" name="location" type="text" className="form-control" value={this.state.location} onChange={this.handleInputChange}/>
										</div>
										<div className="form-group">
											<label id="form"> Event Filter </label>
											<select className="form-control" id="input" name="filter" value={this.state.filter} onChange={this.handleInputChange}>
												<option> All Events </option>
												<option> Recreation </option>
												<option> Study </option>
												<option> Meal </option>
												<option> Club Event </option>
												<option> Misc </option>
											</select>
										</div>
										
										<button id="signinBtn" type="button" onClick={this.handleFormSubmit}> Submit </button>
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