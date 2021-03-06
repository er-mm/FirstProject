import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class EditUser extends React.Component {
    constructor(props) {
        super();
        this.response = [];
    }
    editData() {
        //alert("hello");

        var userInfo = document.getElementById("editUser").value;
        var url = 'http://localhost:1212/api/' + userInfo + '';
        fetch(url, {
            method: 'GET',
            //mode: 'no-cors',

            headers: {
                Accept: 'application/json',
                //'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            //credentials: 'same-origin'
        })
            .then(data => {
                if (data.status == 200) {
                    this.response = editData;
                    console.log("all data", editData);
                    return data.json()
                };
                alert('Data Cannot be deleted with status = ' + data.status + ' that is ' + data.statusText);
            });
        // console.log("*******",this.state.editData);
        //alert(this.state.editData)
    }
    componentDidUpdate() {

        //  const show = this.state.editData.map((data,i) => <li key={i}>{data}</li>);
        // return {isVisible : true} 
    }

    render() {
        //var editData ={};
        //var isVisible = false;

        return (

            <div className="container" align="center">
                <h1>Edit User </h1>
                <form>
                    <div className="form-group">
                        <input type="text" id="editUser" placeholder="Enter User id" required />
                    </div>
                    <button to="/editUser" type="button" className="btn btn-primary" onClick={this.editData.bind(this)}>Edit Details</button>
                </form>
                <div>{}</div>
            </div>
        );
    }
}