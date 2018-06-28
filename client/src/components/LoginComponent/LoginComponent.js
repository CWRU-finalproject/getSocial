import React from "react";

class Login extends React.Component {

	render() {

		return(

			<div>
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card">
							<div className="card-body">
								<h3 className="card-title"> Login </h3>
									<form className="createEventForm">
										<div className="form-group">
											<label for="eventTitle"> Email </label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label for="eventTitle"> Password </label>
											<input type="textarea" className="form-control"/>
										</div>
										<button type="button"> <a href="/dashboard" >Sign In</a> </button>
									</form>

									<br />
									<a href="/newuser "> Sign Up </a>
							</div>
						</div>
					</div>
				</div>
			</div>

		);

	}

}


export default Login;