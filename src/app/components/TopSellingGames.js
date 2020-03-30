import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TopSellingGamesHeader } from './TopSellingGamesHeader';
import { FetchTopGamesData } from "./FetchTopGamesData";
import { SearchTopGamesData } from "./SearchTopGamesData";


export class TopSellingGames extends React.Component {

    render() {
        let topGames = [];
        fetch('http://starlord.hackerearth.com/TopSellingGames', {
            method: 'GET',
            //mode: 'no-cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'credentials': 'same-origin'
            }

        })
            .then(data => data.json())
            .then((data) => {
                console.log("all data", data);
                topGames = data;
            }).catch(error => alert("Server is not sending response", error));
        return <React.Fragment>
            <Router>
                <div className="container">
                    <TopSellingGamesHeader />
                    <div>
                        <Route path="/fetchData" render={(props) => <FetchTopGamesData {...props} topGames={topGames} />} />
                        <Route path="/searchData" render={(props) => <SearchTopGamesData {...props} topGames={topGames} />} />
                    </div>
                </div>
            </Router>
        </React.Fragment>
    }
}