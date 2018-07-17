import React from "react";
import API from "../../utils/API.js";
import EventCard from "../EventComponent";
//import DeleteBtn from "../DeleteEventComponent";
import "./UserProfileComponent.css";

class UserProfile extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			userEvents: [],
			firstName: "",
			lastName: "",
			active: "",
			userId: 1,
			loggedIn: true
		}

		this.userArr = [];

	}

	componentDidMount() {
		API.getCurrentEvents(this.userArr, this.state.userId).then(({data}) => {
				this.setState({
					userEvents: data
				})
			});

	}

	handleInputChange = event => {
		const {name, value} = event.target;

		if(value === "Current"){
			API.getCurrentEvents(this.userArr, this.state.userId).then(({data}) => {
				this.setState({
					[name]: value,
					userEvents: data
				})
			});
		} else {
			API.getPastEvents(this.userArr, this.state.userId).then(({data}) => {
				this.setState({
					[name]: value,
					userEvents: data
				})
			});
		}							
	};

	click = event => {
		event.preventDefault();
		const id = event.target.id;
		API.deleteEvent(id).then(API.getCurrentEvents(this.userArr, this.state.userId).then(({data}) => {
			this.setState({
				userEvents: data
			})
		}));
	};




	render() {

		return (

			<div>

				<div className="row  justify-content-end">

					<div className="col-md-9">
						<div className="card">
							<div className="card-body">
								<h1 className="card-title"> Your Events </h1>
									<hr/>

									{this.state.userEvents.sort(function(a, b){
    									var dateA=new Date(a.date), dateB=new Date(b.date)
    										return dateA-dateB
										}).map(thingy => (	
											<EventCard 
												key={thingy.id}
												title={thingy.title}
												description={thingy.description}
												location={thingy.location}
												date={thingy.date}
												userId={thingy.userId}
												id={thingy.id}
												click={this.click}
												loggedIn={this.state.loggedIn}
												active={thingy.active}
											/>

									))}		
										
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className="card">
							<div className="card-body">
								<h3 className="card-title"> Filter Events </h3>
								<form className="eventFilterForm">
									<div className="form-group">
										<select className="form-control" id="signinBtn" name="active" value={this.state.active}  onChange={this.handleInputChange}>
											<option> Current </option>
											<option> Past </option>
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

export default UserProfile;