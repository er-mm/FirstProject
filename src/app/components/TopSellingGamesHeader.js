import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function TopSellingGamesHeader() {
    return (
        <div className="container" align="center">
            <table>
                <tbody>
                    <tr>
                        <td><Link to="/fetchData" className="btn btn-primary">Fetch Data</Link></td>
                        <td><Link to="/searchData" className="btn btn-primary">Search Data</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}