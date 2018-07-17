import React from "react";
import API from "../../utils/API.js";
import EventCard from "../EventComponent";
import "./EventContainerComponent.css";

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

					<div className="col-md-9">
						<div className="card" id="eventContainer-card">
							<div className="card-body">
								<h1 className="card-title" id="currentEvents"> Current Events </h1>
									<hr/>
									{this.state.events.sort(function(a, b){
    									var dateA=new Date(a.date), dateB=new Date(b.date)
    										return dateA-dateB
										}).map(thingy => (
											
											<EventCard 
												key={thingy.id}
												title={thingy.title}
												description={thingy.description}
												location={thingy.location}
												date={thingy.date}
												id={thingy.id}
												click={this.click}
												userid={thingy.userId}
											/>
									))}		
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className="card">
							<div className="card-body" id="eventFilter-card">
								<h3 className="card-title"> Filter Events </h3>
								<form className="eventFilterForm">
									<div className="form-group">
										<select className="form-control" id="signinBtn" name="filter" value={this.state.filter}  onChange={this.handleInputChange}>
											
											<option> All Events </option>
											<option> Recreation </option>
											<option> Study </option>
											<option> Meal </option>
											<option> Club Event </option>
											<option> Misc </option>
										</select>
									</div>


								</form>

								<span>	
									<a href="/dashboard/createevent"><button id="signinBtn">Create New Event</button></a>	
								</span>

							</div>
						</div>
					</div>

					

				</div>
			</div>

		);

	}

}


export default EventContainer;