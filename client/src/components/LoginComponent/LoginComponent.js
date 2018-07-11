import React from "react";
import styles from "./LoginComponent.css";

class Login extends React.Component {

	render() {

		return(

			<div>
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card">
							<div className="card-body">
								<h3 className="card-title">Sign In</h3>
									<form className="createEventForm">
										<div className="form-group">
											<label for="eventTitle" id="form"> Email </label>
												<input id="input" type="text" placeholder="Email" className="form-control"/>
												<br />
												<label for="eventTitle" id="form"> Password </label>
											<input id="input" type="textarea" placeholder="Password" className="form-control"/>
										</div>
									</form>
								<a href="/dashboard"><button id="signinBtn" type="button">Sign In</button></a> <a href="/newuser "><button id="signupBtn" type="button">Sign Up</button></a>
							</div>
						</div>
					</div>
				</div>
			</div>

		);

	}

}


export default Login;