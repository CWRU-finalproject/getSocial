import React from "react";
import API from "../../utils/API.js";
import "./CreateUserComponent.css";
import Auth from "../../Auth/Auth";
class CreateUser extends React.Component {
	state = {
		firstName: "",
		lastName: "",
		password: "",
		email: "",
		major: "",
		year: ""
	};

	handleInputChange = event => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
    event.preventDefault();
	    if (this.state.firstName && this.state.lastName && this.state.email && this.state.major && this.state.year) {
	    	API.postUser({
		        firstName: this.state.firstName,
		        lastName: this.state.lastName,
		        password: this.state.password,
		        email: this.state.email,
		        major: this.state.major,
		        year:this.state.year
			})
			.catch(err => console.log(err));
		}
		
    };

	redirectToLogin = () => {

	};


	render(){

		return(

			
			<div>
			<br />
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="card" id="newUser-card">
							<div className="card-body">
								<h3 className="card-title"> New User </h3>
									<form className="createEventForm">

										<div className="form-group">
											<label id="form"> First Name </label>
											<input id="input" type="text" className="form-control" name="firstName" placeholder="First Name" value={this.state.firstName}  onChange={this.handleInputChange} />
										</div>

										<div className="form-group">
											<label id="form"> Last Name </label>
											<input id="input" type="text" className="form-control" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange} />
										</div>

										<div className="form-group">
											<label id="form"> Email </label>
											<input id="input" type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
										</div>

										<div className="form-group">
											<label id="form"> Password </label>
											<input id="input" type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
										</div>

										<div className="form-group">
											<label id="form"> Major </label>
											<input id="input" type="text" className="form-control" name="major" placeholder="Major" value={this.state.major} onChange={this.handleInputChange} />
										</div>

										<div className="form-group">
											<label id="form"> Year </label>
											<input id="input" type="text" className="form-control" name="year" placeholder="Year" value={this.state.year} onChange={this.handleInputChange} />
										</div>
										
										<button id="signinBtn" type="button">Sign In</button><button type="button" id="signupBtn" onClick={this.handleFormSubmit}>Submit</button>
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

export default CreateUser;