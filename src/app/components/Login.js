import React from "react";
import PropTypes from "prop-types";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Logout } from "./Logout";

export class Login extends React.Component {

	constructor(props) {
		super();
		//this.age = props.age;
		this.state = {
			age: props.age,
			fields: {},
			errors: {}
		}
	}

	/*********************************FORM VALIDATION********************************************* */

	handleValidation() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		//Email
		if (!fields["email"]) {
			formIsValid = false;
			errors["email"] = "Cannot be empty";
		}

		if (typeof fields["email"] !== "undefined") {
			let lastAtPos = fields["email"].lastIndexOf('@');
			let lastDotPos = fields["email"].lastIndexOf('.');

			if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
				formIsValid = false;
				errors["email"] = "Email is not valid";
			}
		}
		//pwd
		if (!fields["pwd"]) {
			formIsValid = false;
			errors["pwd"] = "Cannot be empty";
		}
		this.setState({ errors: errors });
		return formIsValid;
	}


	handleChange(field, e) {
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({ fields });
	}

	myFunc(e) {
		e.preventDefault();
		if (this.handleValidation()) {
			var email = document.getElementById("email").value;
            var pwd = document.getElementById("pwd").value;
			
            var data = {
				"email": email,
                "pwd": pwd
			};
			document.cookie = 'loginName='+data['email'];
			document.cookie = 'pwd='+data['pwd'];
			console.table(document.cookie);
			
        }
    }

	render() {
		const abc = document.cookie.split(';')[2].split('=')[1];
		console.log('abc-->',abc);
		return (
			<div className="container">
				{!abc ?<div>
			<h1 align="center">Login</h1>
			<form className="table p-3 mb-2 bg-light text-dark">
				<div className="form-group">
					<label id="emaildata" className="text-primary">Email address</label>
					<input type="email" className="form-control" id="email" onChange={this.handleChange.bind(this, "email")} placeholder="Enter email" required />
					<span style={{ color: "red" }}>{this.state.errors["email"]}</span>
				</div>
				<div className="form-group">
					<label id="password" className="text-primary">Password</label>
					<input type="password" className="form-control" id="pwd" onChange={this.handleChange.bind(this, "pwd")} placeholder="Enter Password" required />
					<span style={{ color: "red" }}>{this.state.errors["pwd"]}</span>
				</div>
				<Link to="/home" type="button" className="btn btn-primary" onClick={this.myFunc.bind(this)}>Login</Link>
			</form></div>
			: <div>Hi {abc}<Logout/></div>
	}

			</div>
		);
	}
}
