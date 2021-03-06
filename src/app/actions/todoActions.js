import { FETCH_BOOKS, CREATE_BOOK, DELETE_BOOK, EDIT_BOOK, UPDATE_BOOK } from './types';
import { log } from "../../utils/myLogger";

// each action is a function that is to be exported
//ES6
export const fetchBooksList = () => dispatch => {
	log(' Action -> fetching book list-->');
	fetch(' http://localhost:3000/books')
		.then(res => res.json())
		.then(data => dispatch({
			type: FETCH_BOOKS,
			payload: data
		}));
}

export const addBook = bookDetails => dispatch => {
	log('Action -> Adding Book -- bookDetails');
	log(bookDetails);
	fetch(' http://localhost:3000/books', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(bookDetails)
	})
		.then(res => res.json())
		.then(data => dispatch({
			type: CREATE_BOOK,
			payload: data
		}));

}

export const deleteBook = deleteBookID => dispatch => {
	log('Action -> deleting Book');
	fetch(' http://localhost:3000/books/' + deleteBookID, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json'
		},
	})
		.then(res => res.json())
		.then(data => dispatch({
			type: DELETE_BOOK,
			payload: deleteBookID
		}));

}


export const editBookDetails = book => dispatch => {
	log('Action -> edit Book');
	dispatch({
		type: EDIT_BOOK,
		payload: book
	});

}

export const updateBook = (bookDetails, bookID) => dispatch => {
	log('Action -> updating -- bookDetails');
	log(bookDetails);
	fetch(' http://localhost:3000/books/' + bookID, {
		method: 'PUT',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(bookDetails)
	})
		.then(res => res.json())
		.then(bookData => dispatch({
			type: UPDATE_BOOK,
			payload: { bookData, bookID }
		}));
}


// export function fetchTodo() {
//     return function(dispatch){
//         fetch('https://my-json-server.typicode.com/er-mm/dbJSON/books')
//         .then(res => res.json())
//         .then(data => dispatch({
//             type: FETCH_TODOS,
//             payload: data
//         }));
//     }
// } // now this will reduced inside default function which is in reducer
// https://my-json-server.typicode.com/er-mm/dbJSON/books
