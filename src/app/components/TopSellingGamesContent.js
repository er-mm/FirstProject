import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Logout } from "./Logout";

export class TopSellingGamesContent extends React.Component {
  constructor() {
    super();

  }



  render() {
    let props = this.props;
    let indexOfFirstTodo = props.indexOfFirstTodo;
    let indexOfLastTodo = props.indexOfLastTodo;
    let todos = props.topGames;
    let sortData = props.sortData;

    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    console.log('currentTodos arr : ', currentTodos);
    const renderTodos = currentTodos.map((data, index) => {
      console.log('data : ', data);
      return (
        <tr key={index}>
          {/*<td>{allData._id}</td>*/}
          <td><label id={data.Rank} className="text-primary">{data.Rank}</label></td>
          <td><label id={data.Name} className="text-primary">{data.Name}</label></td>
          <td><label id={data.Platform} className="text-primary">{data.Platform}</label></td>
          <td><label id={data.Year} className="text-primary">{data.Year}</label></td>
          <td><label id={data.Genre} className="text-primary">{data.Genre}</label></td>
          <td><label id={data.Publisher} className="text-primary">{data.Publisher}</label></td>
          <td><label id={data.Global_Sales} className="text-primary">{data.Global_Sales}</label></td>
        </tr>
      );
    });

    return (
      <div className="container">

        <br />
        <table className="table p-3 mb-2 bg-light text-dark">
          <thead>
            <tr>
              {/*<th>ID</th>*/}
              <th className="text-primary">Rank</th>
              <th className="text-primary">Name</th>
              <th className="text-primary">Platform</th>
              <th className="text-primary" onClick={() => sortData(todos)}>Year</th>
              <th className="text-primary">Genre</th>
              <th className="text-primary">Publisher</th>
              <th className="text-primary">Global Sales</th>
            </tr>
          </thead>
          <tbody>
            {renderTodos}
          </tbody>
        </table>
      </div>
    );
  }
}