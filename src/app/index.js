import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import { Description } from "./components/Description";
import { AddUser } from "./components/AddUser";
import { AllData } from "./components/AllData";
import { DeleteUser } from "./components/DeleteUser";
import { EditUser } from "./components/EditUser";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Game } from "./components/Game";
import { LifeCycle } from "./components/LifeCycle";
import { Pagination } from "./components/Pagination";

import store from "./store";

class FirstComponent extends React.Component{

	/*onGreet(){
		alert("Hello!");
	}*/
	render() {
		var user = {
			name : "Pulkit",
			hobbies : ["cricket", "mobile"]
		};
		let randomNum = Math.floor(Math.random() * 101);
		
		/** <div className="container">
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<Header/>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<Home name={"Mayank"} age={22} user={user} greet={this.onGreet}>
								<p>This is a para in Home component</p>
							</Home>
						</div>
					</div>
				</div>
				{Game} randomNum={randomNum}
				component={() => <Game randomNum={randomNum} />}
				*/
				
		return(
			<Router>
			<div className="container">
			<br/>
			<Header/>
			<br/>
			<div className="progress" style={{height: "1px"}} >
				<div className="progress-bar " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
				</div>
			</div>
			<div align="center"><h6>Created By : MM</h6></div>
			<div className="progress">
				<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
				</div>
			</div>
				<br/>
				<div>
				<Route path="/home" component={Home} />
				<Route path="/description" component={Description} />
				<Route path="/addUser" component={AddUser} />
				<Route path="/getAll" component={AllData} />
				<Route path="/delUser" component={DeleteUser} />
				<Route path="/editUser" component={EditUser} />
				<Route path="/lifecycle" component={LifeCycle} />
				<Route path="/play" render={(props) => <Game {...props} randomNum={randomNum} />}/>
				<Route path="/pagination" component={Pagination} />
				
				</div>
				</div>
			</Router>
		);
	} 
}

render(<FirstComponent/>, window.document.getElementById("app"));

//************************REDUX************* */
// import { createStore,combineReducers,applyMiddleware } from "redux";
// import {createLogger} from "redux-logger";

// //creating reducer with taking actions
// const mathReducer = (state = {
// 	result : 1,
// 	lastValues : []
// }, action) => {
// 	switch (action.type){
// 		case "ADD":
// 		//state.result = state.result + action.payload;
// 		state = {
// 			...state,
// 			result : state.result + action.payload,
// 			lastValues:[...state.lastValues,action.payload]
// 		};
// 		//its also immmutablestate.lastValues.push(action.payload);
// 		break;
// 		case "SUBTRACT":
// 		//state = state - action.payload;
// 		//immutable way or using state
// 		state = {
// 			...state,
// 			result : state.result - action.payload,
// 			lastValues:[...state.lastValues,action.payload]
// 		};
// 		break;
// 	}
// 	return state;
// };
// const userReducer = (state = {
// 	name : "MM",
// 	age : 22
// }, action) => {
// 	switch (action.type){
// 		case "NAME":
// 		//state.result = state.result + action.payload;
// 		state = {
// 			...state,
// 			name : action.payload
// 		};
// 		//its also immmutablestate.lastValues.push(action.payload);
// 		break;
// 		case "AGE":
// 		//state = state - action.payload;
// 		//immutable way or using state
// 		state = {
// 			...state,
// 			age : action.payload
// 		};
// 		break;
// 	}
// 	return state;
// };
//creating simple store
//const store = createStore(reducer,1);

//middleware
// const myLogger = (store) => (next) => (action) => {
// 	console.log("Logged Action : ", action);
// 	next(action);
// }
//creating store with state object
// const store = createStore(
// 	combineReducers({mathReducer,userReducer}),
// 	{},
// 	applyMiddleware(myLogger,createLogger())
// 	);


// //this will handle by reactjs lateron
// store.subscribe(() => {
// 	console.log("updated store : ", store.getState());
// }); 

//dispatching actions
store.dispatch({
	type:"ADD",
	payload:10
});
store.dispatch({
	type:"ADD",
	payload:20
});
store.dispatch({
	type:"SUBTRACT",
	payload:10
});
store.dispatch({
	type:"NAME",
	payload:"MAYANK"
});


