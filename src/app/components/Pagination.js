import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Content } from "./Content";

export class Pagination extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: {
        key: {
          name: 'mayank',
          lname: 'mittal'
        },
        key1: {
          name: 'mayank1',
          lname: 'mittal1'
        },
        key2: {
          name: 'mayank2',
          lname: 'mittal2'
        },
        key3: {
          name: 'mayank3',
          lname: 'mittal3'
        },
        key4: {
          name: 'mayank4',
          lname: 'mittal4'
        },
        key5: {
          name: 'mayank5',
          lname: 'mittal5'
        },
        key6: {
          name: 'mayank6',
          lname: 'mittal6'
        },
        key7: {
          name: 'mayank7',
          lname: 'mittal7'
        },
        key8: {
          name: 'mayank8',
          lname: 'mittal8'
        }
      }
      //['a','b','c','d','e','f','g','h','i','j','k']
      ,
      currentPage: 1,
      todosPerPage: 2,
      start: 0,
      limit: 2,
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

  render() {
    let { todos, currentPage, todosPerPage, start, limit } = this.state;

    console.log('this.state.currentPage : ' + this.state.currentPage);
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    todos = Object.values(todos);
    console.log('todos arr : ', todos);
    // const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    /* const renderTodos = currentTodos.map((todo, index) => {
       return <li key={index}>{todo.name}</li>;
     });*/

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
        <Content todos={todos} indexOfLastTodo={indexOfLastTodo} indexOfFirstTodo={indexOfFirstTodo} />
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