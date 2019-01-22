import { createStore,combineReducers,applyMiddleware } from "redux";
import {createLogger} from "redux-logger";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

//creating store with state object
const store = createStore(
	combineReducers({math,user}),
	{},
	applyMiddleware(createLogger())
	);

	export default store;