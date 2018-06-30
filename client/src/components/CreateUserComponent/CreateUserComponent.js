import React from "react";
import API from "../../utils/API.js";
import "./CreateUserComponent.css";

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


	render(){

		return(

			
			<div>
			<br />
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="card">
							<div className="card-body">
								<h3 className="card-title"> New User </h3>
									<form className="createEventForm">

										<div className="form-group">
											<label > First Name </label>
											<input type="text" className="form-control" name="firstName" value={this.state.firstName}  onChange={this.handleInputChange} />
										</div>

										<div className="form-group">
											<label > Last Name </label>
											<input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
										</div>

										<div className="form-group">
											<label > Email </label>
											<input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />
										</div>

										<div className="form-group">
											<label > Password </label>
											<input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} />
										</div>

										<div className="form-group">
											<label > Major </label>
											<input type="text" className="form-control" name="major" value={this.state.major} onChange={this.handleInputChange} />
										</div>

										<div className="form-group">
											<label > Year </label>
											<input type="text" className="form-control" name="year" value={this.state.year} onChange={this.handleInputChange} />
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

export default CreateUser;