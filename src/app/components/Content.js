import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Logout } from "./Logout";

export class Content extends React.Component {
  constructor() {
    super();

  }



  render() {
    let props = this.props;
    let indexOfFirstTodo = props.indexOfFirstTodo;
    let indexOfLastTodo = props.indexOfLastTodo;
    let todos = props.todos;

    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    console.log('currentTodos arr : ', currentTodos);
    const renderTodos = currentTodos.map((data, index) => {
      console.log('data : ', data);
      return (
        <tr key={index}>
          {/*<td>{allData._id}</td>*/}
          <td><label id={data.name} className="text-primary">{data.name}</label></td>
          <td><label id={data.name} className="text-primary">{data.lname}</label></td>
        </tr>
      );
    });

    return (
      <div className="container">

        <Logout />
        <br />
        <table className="table p-3 mb-2 bg-light text-dark">
          <thead>
            <tr>
              {/*<th>ID</th>*/}
              <th className="text-primary">User Name</th>
              <th className="text-primary">Last Name</th>

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