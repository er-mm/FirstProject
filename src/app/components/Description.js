import React from "react";

export class Description extends React.Component {
    render() {
        return (
            <div className="container" align="center">
                <h1>Using</h1>
                <ul className="list-group">
                    <li className="list-group-item">Ecma Script 6</li>
                    <li className="list-group-item">JSX</li>
                    <li className="list-group-item">RestFul Api (with Spring and node)</li>
                    <li className="list-group-item">CRUD Operations</li>
                    <li className="list-group-item">MondoDB (local + ATLAS)</li>
                    <li className="list-group-item">SpringBoot with local Mongo (local)</li>
                    <li className="list-group-item">Game</li>
                    <li className="list-group-item">LifeCycle</li>
                    <li className="list-group-item">Pagination</li>
                    <li className="list-group-item">Redux Flow</li>
                </ul>
            </div>
        );
    }
}