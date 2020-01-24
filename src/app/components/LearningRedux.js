import React from "react";
import { Provider } from 'react-redux';
import FetchBooksList from './FetchBooksList';
import AddUpdateBook from './AddUpdateBook';
import { log } from "../../utils/myLogger";

import store from '../store';

export class LearningRedux extends React.Component {

	render() {
		log('store---');
		log(store);
		return (
			<Provider store={store}>
				<div className="row">
					<div className="col-sm-6">
						<div className="container">
							<AddUpdateBook />
						</div>
					</div>
					<div className="col-sm-6">
						<div className="container">
							<FetchBooksList />
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}