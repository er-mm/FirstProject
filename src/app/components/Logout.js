import React from "react";
import PropTypes from "prop-types";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Logout extends React.Component{

    constructor(props){
        super();
        //this.age = props.age;
        this.state={
            flag: true,
           
        }
    }


     myFunc(e){
        // e.preventDefault();
       // this.setState({flag : !this.state.flag});
	  var date = new Date;
         document.cookie = "TATS-SS-TokenID= ; expires = "+date;
		 console.log('done');
    }   
    render(){
    	  
        return(
            <div className="container d-flex flex-row-reverse">
			<Link to='/home' type="button" className="btn btn-primary" onClick={this.myFunc.bind(this)}>Logout</Link>
            </div>
        );
    }
}
