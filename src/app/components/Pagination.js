import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Content } from "./Content";

export class Pagination extends React.Component {
      constructor() {
        super();
        this.state = {
          todos: {
  key:{
  name:'mayank',
  lname:'mittal'
  
  },
  key1:{
  name:'mayank1',
  lname:'mittal1'
    
  },
   key2:{
  name:'mayank2',
  lname:'mittal2'
    
  },
  key3:{
  name:'mayank3',
  lname:'mittal3'
    
  },
  key4:{
  name:'mayank4',
  lname:'mittal4'
    
  }
}
//['a','b','c','d','e','f','g','h','i','j','k']
,
          currentPage: 1,
          todosPerPage: 2
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

      render() {
        let { todos, currentPage, todosPerPage } = this.state;
console.log('this.state.currentPage : '+this.state.currentPage);
        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
		todos = Object.values(todos);
		console.log('todos arr : ',todos);
       // const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

       /* const renderTodos = currentTodos.map((todo, index) => {
          return <li key={index}>{todo.name}</li>;
        });*/

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
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
		  <Content todos={todos} indexOfLastTodo={indexOfLastTodo} indexOfFirstTodo={indexOfFirstTodo}/>
		  <nav aria-label="Page navigation example">
		 
            <ul className="pagination justify-content-center">
              {renderPageNumbers}
            </ul>
			</nav>
          </div>
        );
      }
    }