import React from "react";
import "./LoginComponent.css";
// App.js
import Auth from '../../Auth/Auth.js';



class Login extends React.Component {
	state = {
		email: "",
		password: ""
	};
	handleInputChange = event => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		});
	};
	handleLoginSubmit = event => {
		event.preventDefault()
		const auth = new Auth();
		auth.login(this.state.email,this.state.password);
	}
	render() {
		
		return(

			<div>
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card">
							<div className="card-body">
								<h3 className="card-title">Sign-In</h3>
									<form className="LoginForm">
										<div className="form-group">
											<label id="form">Email</label>
											<input id="input" type="text" className="form-control" placeholder="Email" name="email" value={this.state.email}  onChange={this.handleInputChange} />
										</div>
										<div className="form-group">
											<label id="form">Password</label>
											<input id="input" type="textarea" className="form-control" placeholder="Password" name="password" value={this.state.password}  onChange={this.handleInputChange} />
										</div>
										</form>
										<a><button type="button" id="signinBtn" onClick={this.handleLoginSubmit}>Sign In</button></a>
									<a href="/signup"><button type="button" id="signupBtn">Sign Up</button></a>
							</div>
						</div>
					</div>
				</div>
			</div>

		);

	}

}


export default Login;