import React from "react";
import { connect } from 'react-redux';
import { addBook, editBookDetails, updateBook } from '../actions/todoActions';
import { log } from "../../utils/myLogger";

class AddUpdateBook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			author: '',
			category: '',
			pages: '',
			price: '',
			isUpdateButtonEnable: false
		}
	}


	componentWillReceiveProps(nextProps) {
		// when it will receive a new property from state it will run
		log('next props-> in createpost--->');
		log(nextProps);
		if (nextProps.editableBook) {
			this.setState({
				name: nextProps.editableBook.name,
				author: nextProps.editableBook.author,
				category: nextProps.editableBook.category,
				pages: nextProps.editableBook.pages,
				price: nextProps.editableBook.price,
				isUpdateButtonEnable: true
			});
		}
	}

	change = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	onSubmitOrUpdate = (event) => {
		event.preventDefault();
		const bookDetails = {
			name: this.state.name,
			author: this.state.author,
			category: this.state.category,
			pages: this.state.pages,
			price: this.state.price,
		}

		log('more data---> onSubmitOrUpdate------> ');
		log(bookDetails);
		log('this.state.isUpdateButtonEnable ');
		log(this.state.isUpdateButtonEnable);
		this.state.isUpdateButtonEnable
			? this.props.updateBook(bookDetails, this.props.editableBook.id)
			: this.props.addBook(bookDetails);
		this.setState({
			name: '',
			author: '',
			category: '',
			pages: '',
			price: '',
			isUpdateButtonEnable: false
		});
		// fetch('https://my-json-server.typicode.com/er-mm/dbJSON/books', {
		//     method: 'POST',
		//     headers: {
		//         'content-type': 'application/json'
		//     },
		//     body: JSON.stringify(bookDetails)
		// })
		// .then(res => res.json())
		// .then(data => console.log(data))
		// call action
	}

	render() {
		return (
			<div className="container">
               <h1 align="center">{this.state.isUpdateButtonEnable ? `${'Update Book'}` : `${'Add Book'}`}</h1>
				<form className="table p-3 mb-2 bg-light text-dark" onSubmit={this.onSubmitOrUpdate}>
					<div>
						<div className="form-group">
							<label id="name" className="text-primary">Book Name</label>
							<input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.change} autoFocus placeholder="Enter Book Name" />
						</div>
						<div className="form-group">
							<label id="author" className="text-primary">Author</label>
							<input type="text" className="form-control" id="author" name="author" value={this.state.author} onChange={this.change} placeholder="Enter Author Name" required />
						</div>

						<div className="form-group">
							<label id="category" className="text-primary">Category</label>
							<input type="text" className="form-control" id="category" name="category" value={this.state.category} onChange={this.change} placeholder="Enter Category" required />
						</div>
						<div className="form-group">
							<label id="pages" className="text-primary">Pages</label>
							<input type="number" className="form-control" id="pages" name="pages" value={this.state.pages} onChange={this.change} placeholder="Enter Number of Pages" required />
						</div>
						<div className="form-group">
							<label id="price" className="text-primary">Price</label>
							<input type="number" className="form-control" id="price" name="price" value={this.state.price} onChange={this.change} placeholder="Enter Price" required />
						</div>
						<button type="submit" className="btn btn-primary">{this.state.isUpdateButtonEnable ? `${'Update Details'}` : `${'Submit Details'}`}</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	editableBook: state.bookStore.editableBook,
})

export default connect(mapStateToProps, { addBook, editBookDetails, updateBook })(AddUpdateBook);