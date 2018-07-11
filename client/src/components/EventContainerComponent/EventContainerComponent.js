import React from "react";
import API from "../../utils/API.js";
import EventCard from "../EventComponent";

class EventContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			filter: "",
			events: []
		};

		this.eventsArr = [];

	}

	componentDidMount() {
		API.getAllEvents(this.eventsArr).then(({data}) => {
				this.setState({
					events: data
				})
			});
	}

	handleInputChange = event => {
		const {name, value} = event.target;

		if(value === "All Events"){
			API.getAllEvents(this.eventsArr).then(({data}) => {
				this.setState({
					[name]: value,
					events: data
				})
			});
		} else {
			API.getFilteredEvents(this.eventsArr, value).then(({data}) => {
				this.setState({
					[name]: value,
					events: data
				})
			});
		}							
	};

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
										<select className="form-control" name="filter" value={this.state.filter}  onChange={this.handleInputChange}>
											
											<option> All Events </option>
											<option> Recreation </option>
											<option> Study </option>
											<option> Meal </option>
											<option> Club Event </option>
											<option> Misc </option>
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


								
								<h1 className="card-title"> Current Events </h1>
								<hr/>


								{this.state.events.map(thingy => (

									<EventCard 
										key={thingy.id}
										title={thingy.title}
										description={thingy.description}
										location={thingy.location}
										date={thingy.date}
									/>

								))}
								
								
								
								

									
								
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