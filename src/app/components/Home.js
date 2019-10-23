import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from "../store";

export class Home extends React.Component {

    render() {
        store.dispatch({
            type: "AGE",
            payload: 25
        });
        let len = store.getState().math.lastValues.length;
        let arr = [];
        var abc = store.getState().math.lastValues.map((value, key) => {

            return (
                <li key={key}>{value}</li>
            );
        });
        return (
            <div className="container" align="center">
                <h1>Basic
                     <b><span className="badge badge-light">Reactjs</span></b>
                    Application with
                    <b><span className="badge badge-light">Restful</span></b>
                    Api.
                </h1>
                <div>
                    <div>MATH </div>
                    <div>Result : {store.getState().math.result}</div>
                    <div>Last Values : <ul>{abc}</ul></div>
                    <div>Last Values length: {store.getState().math.lastValues.length}</div>
                </div>
                <div>
                    <div>User</div>
                    <div>Name : {store.getState().user.name}</div>
                    <div>Age : {store.getState().user.age}</div>
                </div>
            </div>
        );
    }
}
