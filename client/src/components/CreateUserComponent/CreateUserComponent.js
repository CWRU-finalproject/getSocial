import React from "react";
import "./CreateUserComponent.css";

class CreateUser extends React.Component {

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
											<label for="userFirstName"> First Name </label>
											<input type="text" className="form-control"/>
										</div>

										<div className="form-group">
											<label for="userLastNae"> Last Name </label>
											<input type="text" className="form-control"/>
										</div>

										<div className="form-group">
											<label for="userEmail"> Email </label>
											<input type="email" className="form-control"/>
										</div>

										<div className="form-group">
											<label for="userMajor"> Major </label>
											<input type="text" className="form-control"/>
										</div>

										<div className="form-group">
											<label for="userYear"> Year </label>
											<select class="form-control">
  												<option>Default select</option>
  												<option>Freshman</option>
  												<option>Sophomore</option>
  												<option>Junior</option>
  												<option>Senior</option>
											</select>
										</div>
										
										<button type="button"> <a href="/login"> submit </a> </button>
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