import React from "react";

import { connect } from 'react-redux'; // it connects component to redux store that is provided by the provider component
// we have to call the action alsowhich is fetchTodo
import { fetchBooksList, deleteBook, editBookDetails } from '../actions/todoActions';
import { log } from "../../utils/myLogger";

class FetchBooksList extends React.Component {

	// constructor(props){
	//     super(props);
	//     this.state = {
	//         toDoData: []
	//     };
	// }
	//without redux - now that code will go in action
	// componentDidMount() {
	//     fetch('https://my-json-server.typicode.com/er-mm/dbJSON/books')
	//     .then(res => res.json())
	//     .then(data => this.setState({toDoData: data}))
	// }

	componentDidMount() {
		this.props.fetchBooksList();
	}

	// how to use new post. 
	componentWillReceiveProps(nextProps) {
		// when it will receive a new property from state it will run
		log('next props in Fetch post---->');
		log(nextProps);
		if (nextProps.book) this.props.books.push(nextProps.book);
	}

	deleteBook = (e, book) => {
		log('id of deleted book-->');
		log(book.id);
		this.props.deleteBook(book.id);
	}

	editBook = (e, book) => {
		log('id of edit book-->');
		log(book.id);
		this.props.editBookDetails(book)
	}

	render() {
		const booksList = this.props.books instanceof Array && this.props.books.length ? this.props.books.map(item => {
			return (
				<div className="form-group shadow p-3 mb-5 bg-white rounded">
					<div key={item.id}>
						<h3>{`Book Name : ${item.name}`}</h3>
						<h4>{`Author: ${item.author}`}</h4>
						<h5>{`Category : ${item.category}`}</h5>
						<h6>{`Price: ${item.price}`}</h6>
						<button id={item.id} type="button" className="btn btn-outline-primary" onClick={(e) => this.deleteBook(e, item)}>Delete Book {item.id}</button>
						<button id={item.id} type="button" className="btn btn-outline-primary" onClick={(e) => this.editBook(e, item)}>Edit Book {item.id}</button>
					</div>
				</div>
			)
		}) : (
		<div className="form-group shadow p-3 mb-5 bg-white rounded">
			Book are not the instance of Array or Array length seems to be zero
			 Please check dbJSON connection.
		</div>
		);
		return (
			<div className="container" >
				Fetch Post Component
               {booksList}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	books: state.bookStore.books,
	book: state.bookStore.book
})

export default connect(mapStateToProps, { fetchBooksList, deleteBook, editBookDetails })(FetchBooksList);
