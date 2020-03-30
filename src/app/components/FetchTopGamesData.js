import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TopSellingGamesContent } from "./TopSellingGamesContent";

export class FetchTopGamesData extends React.Component {

    constructor() {
        super();
        this.state = {
            allDataArr: [],
            currentPage: 1,
            todosPerPage: 10,
            start: 0,
            limit: 10,
            sort: 'asc'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    handleClickNextPrev(event) {

        this.setState({
            start: Number(event.target.id),
            currentPage: Number(event.target.id) + 1
        });
    }

    sortData(allDataArrr) {
        var sortedData = [];
        console.log('this.state.sort->', this.state.sort)
        if (this.state.sort == 'asc') {
            let sort = 'dec';
            this.setState({ sort });
            console.log('in if this.state.sort :::::::', this.state.sort);
            sortedData = allDataArrr.sort(function (a, b) {
                var nameA = a.Year
                var nameB = b.Year
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
        } else {
            let sort = 'asc';                        //updating value
            this.setState({ sort });
            console.log('in else this.state.sort :::::::', this.state.sort);
            sortedData = allDataArrr.sort(function (a, b) {
                var nameA = a.Year
                var nameB = b.Year
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }

                return 0;
            });
        }

        this.setState({ allDataArr: sortedData });

    }

    render() {
        let { allDataArr, currentPage, todosPerPage, start, limit } = this.state;
        let { topGames } = this.props;
        let todos = [];

        console.log('this.state.currentPage : ' + this.state.currentPage);
        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        console.log('allDataArr arr : ', allDataArr);
        console.log('topGames arr : ', topGames);

        if (allDataArr.length !== 0) todos = allDataArr;
        todos = topGames;
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.slice(start, start + limit).map(number => {
            return (
                <li
                    className="btn btn-link"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div className="container">
                <TopSellingGamesContent topGames={todos} indexOfLastTodo={indexOfLastTodo} indexOfFirstTodo={indexOfFirstTodo} sortData={this.sortData.bind(this)} />
                <nav aria-label="Page navigation example">

                    <ul id="pagee" className="pagination justify-content-center">
                        {start <= 0 ? '' :
                            <li className="btn btn-link"
                                id={start - limit}
                                onClick={this.handleClickNextPrev.bind(this)}
                            >Prev</li>
                        }
                        {renderPageNumbers}
                        {start >= pageNumbers.length - limit ? '' :
                            <li className="btn btn-link"
                                id={start + limit}
                                onClick={this.handleClickNextPrev.bind(this)}
                            >Next</li>
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}