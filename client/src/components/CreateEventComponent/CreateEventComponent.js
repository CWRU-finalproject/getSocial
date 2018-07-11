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
											<label> Title </label>
											<input name="title" type="text" className="form-control" value={this.state.title} onChange={this.handleInputChange} />
										</div>
										<div className="form-group">
											<label> Description </label>
											<textarea name="description" className="form-control" rows="10" value={this.state.description} onChange={this.handleInputChange}> Event description goes here... </textarea>
										</div>
										<div className="form-group">
											<label> Date </label>
											<input name="date" type="date" className="form-control" value={this.state.date} onChange={this.handleInputChange} />
										</div>
										<div className="form-group">
											<label> Location </label>
											<input name="location" type="text" className="form-control" value={this.state.location} onChange={this.handleInputChange}/>
										</div>
										<div className="form-group">
											<label> Event Filter </label>
											<select className="form-control" name="filter" value={this.state.filter} onChange={this.handleInputChange}>
												<option> All Events </option>
												<option> Recreation </option>
												<option> Study </option>
												<option> Meal </option>
												<option> Club Event </option>
												<option> Misc </option>
											</select>
										</div>
										
										<button type="button" onClick={this.handleFormSubmit}> submit </button>
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