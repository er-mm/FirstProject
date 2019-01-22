import React from "react";
import { log } from "../../utils/myLogger";

const styles = {
  childBorder: {
    borderStyle: "dotted",
    borderColor: "blue",
    margin: "0.4em"
  }
};

export class LifeCycleMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    log("Constructor from Child");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    log("getDerivedStateFromProps from Child");
    log("nextProps, prevState");
    log(nextProps);
    log(prevState);
    return null;
  }

  componentDidMount() {
    log("componentDidMount from Child");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    log("ComponentDidUpdate");
    log("prevProps, prevState, snapshot");
	log(prevProps);
    log(prevState);
	log(snapshot);
  }

  componentWillUnmount() {
    log("componentWillUnmount from Child");
  }

  shouldComponentUpdate(nextProps, nextState) {
    log("shouldComponentUpdate from Child");
    log("nextProps, nextState");
	log(nextProps);
    log(nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    log("getSnapshotBeforeUpdate from Child");
    log("prevProps, prevState");
	log(prevProps);
    log(prevState);
    return null;
  }
  render() {  
    log("render from Child");

    return (
      <div style={styles.childBorder}>
        <h4>Child Component</h4>
        <div>
          <button onClick={this.updateCount}>Update Child Component</button>
        </div>
      </div>
    );
  }

  updateCount = () => {
    log("----------- Update Child component------------------");
    this.setState(state => ({ count: state.count + 1 }));
  };
}
