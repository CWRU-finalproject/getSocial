import React from "react";
import "./LoginComponent.css";
// App.js
import Auth from '../../Auth/Auth.js';



class Login extends React.Component {

	render() {
const auth = new Auth();
auth.login();
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
											<input id="input" type="text" className="form-control" placeholder="Email"/>
										</div>
										<div className="form-group">
											<label id="form">Password</label>
											<input id="input" type="textarea" className="form-control" placeholder="Password"/>
										</div>
										</form>
										<a href="/dashboard"><button type="button" id="signinBtn">Sign In</button></a>
									<a href="/newuser"><button type="button" id="signupBtn">Sign Up</button></a>
							</div>
						</div>
					</div>
				</div>
			</div>

		);

	}

}


export default Login;