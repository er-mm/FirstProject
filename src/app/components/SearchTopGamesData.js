import React from "react";
// import { SearchTopGamesData } from "./SearchTopGamesData";
import { FetchTopGamesData } from "./FetchTopGamesData";



export class SearchTopGamesData extends React.Component {
    constructor() {
        super();
        this.state = {
            searchedData: []
        };
    }
    delData = () => {
        let searchName = document.getElementById("searchUser").value;
        const todos = this.props.topGames;
        const searchedData = todos.filter((data) => data.Name.includes(searchName));
        console.log('searched data = ', searchedData);
        this.setState({ searchedData })
    }

    render() {
        return <React.Fragment>
            <div>
                <div className="container" align="center">
                    <h1>Search By Name </h1>
                    <form>
                        <div className="form-group">
                            <input type="text" id="searchUser" placeholder="Enter Name" required />
                        </div>
                        <button to="/search" type="button" className="btn btn-primary" onClick={this.delData}>Search Name</button>
                    </form></div>
                <FetchTopGamesData {...this.props} topGames={this.state.searchedData} />
            </div>
        </React.Fragment>
    }
}