import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Home extends React.Component{
 
    render(){
       
        return(
              <div className="container" align="center">
                 <h1>Basic 
                     <b><span className="badge badge-light">Reactjs</span></b> 
                    Application with 
                    <b><span className="badge badge-light">Restful</span></b>
                     Api.
                </h1>
              </div>
        );
    }
}