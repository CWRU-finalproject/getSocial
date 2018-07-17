import React from "react";
import "./DeleteEventComponent.css";

const DeleteBtn = props => {

	if(props.loggedIn === true && props.active === true) {
		return <span> <button type="button" className="btn btn-danger delBtn" userid={props.userId} id={props.id} onClick={props.click}> Remove </button>
				<button type="button" className="btn btn-danger delBtn" userid={props.userId} id={props.id} > Edit </button> </span>
	}
	else {
		 return <span>  </span>
	}

}

export default DeleteBtn;