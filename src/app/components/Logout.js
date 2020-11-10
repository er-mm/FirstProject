import React from "react";
import PropTypes from "prop-types";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Logout extends React.Component {

    constructor(props) {
        super();
        //this.age = props.age;
        this.state = {
            flag: true,

        }
    }


    myFunc(e) {
        // e.preventDefault();
        
        var date = new Date();
        document.cookie = 'loginName=';
			document.cookie = 'pwd=';
			console.table(document.cookie);
    }
    render() {

        return (
            <div className="container d-flex flex-row-reverse">
                <Link to='/login' type="button" className="btn btn-primary" onClick={this.myFunc.bind(this)}>Logout</Link>
            </div>
        );
    }
}
