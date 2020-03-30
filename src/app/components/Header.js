import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function Header() {

    // render() {

        return (
            <div className="container" align="center">
                <table>
                    <tbody>
                        <tr>
                            <td><Link to="/home" className="btn btn-primary">Home</Link></td>
                            <td> <Link to="/description" className="btn btn-primary">Description</Link></td>
                            <td><Link to="/addUser" className="btn btn-primary">Add User</Link></td>
                            <td><Link to="/getAll" className="btn btn-primary">Get All Details</Link></td>
                            <td><Link to="/delUser" className="btn btn-primary">Delete User Detail</Link></td>
                            <td><Link to="/editUser" className="btn btn-primary">Edit Details</Link></td>
                            <td><Link to="/play" className="btn btn-primary">Play Game</Link></td>
                            <td><Link to="/lifecycle" className="btn btn-primary">Life Cycle</Link></td>
                            <td><Link to="/pagination" className="btn btn-primary">Pagination</Link></td>
                            <td><Link to="/learningRedux" className="btn btn-primary">Library</Link></td>
                            <td><Link to="/hooks" className="btn btn-primary">Hooks</Link></td>
                            <td><Link to="/topSellingGames" className="btn btn-primary">Top Selling Games</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    // }
}