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
import { LearningRedux } from "./components/LearningRedux";
import { Hooks } from "./components/Hooks";
import { TopSellingGames } from "./components/TopSellingGames";

class FirstComponent extends React.Component {
	render() {
		const randomNum = Math.floor(Math.random() * 101);
		return (
			<Router>
				<div className="container">
					<br />
					<Header />
					<br />
					<div className="progress" style={{ height: "1px" }} >
						<div className="progress-bar " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
						</div>
					</div>
					<div align="center"><h6>Created By : MM</h6></div>
					<div className="progress">
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
						</div>
					</div>
					<br />
					<div>
						<Route path="/home" component={Home} />
						<Route path="/description" component={Description} />
						<Route path="/addUser" component={AddUser} />
						<Route path="/getAll" component={AllData} />
						<Route path="/delUser" component={DeleteUser} />
						<Route path="/editUser" component={EditUser} />
						<Route path="/lifecycle" component={LifeCycle} />
						<Route path="/play" render={(props) => <Game {...props} randomNum={randomNum} />} />
						<Route path="/pagination" component={Pagination} />
						<Route path="/learningRedux" component={LearningRedux} />
						<Route path="/hooks" component={Hooks} />
						<Route path="/topSellingGames" component={TopSellingGames} />
					</div>
				</div>
			</Router>
		);
	}
}

render(<FirstComponent />, window.document.getElementById("app"));