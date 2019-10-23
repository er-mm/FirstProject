import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class DeleteUser extends React.Component {

    delData() {
        var userInfo = document.getElementById("delUser").value;
        var url = 'http://localhost:1212/api/' + userInfo + '';
        fetch(url, {
            method: 'DELETE',
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
                    console.log("deleted");
                    alert("deleted " + userInfo);
                    document.getElementById("delUser").value = '';
                    return data.json()
                };
                alert('Data Cannot be deleted with status = ' + data.status + ' that is ' + data.statusText);
            });
    }
    render() {
        return (

            <div className="container" align="center">
                <h1>Delete User </h1>
                <form>
                    <div className="form-group">
                        <input type="text" id="delUser" placeholder="Enter User id" required />
                    </div>
                    <button to="/editUser" type="button" className="btn btn-primary" onClick={this.delData}>Delete User</button>
                </form></div>
        );
    }
}