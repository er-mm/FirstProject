import React from "react";
import { render } from "react-dom";
import { LifeCycleMethods } from "./LifeCycleMethods";
import { log } from "../../utils/myLogger";

const styles = {
  parentDiv: {
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  parentBorder: {
    borderStyle: "outset",
    borderColor: "green"
  },
  parentMargin: {
    margin: "0.4em"
  }
};



export class LifeCycle extends React.Component{

       
        state = {
            show: false,
            count: 0
          };
          
    
    
      toggleComponent = () => {
        log(`------>${this.state.show ? "Unmounting" : "Mounting"}`);
        this.setState(state => ({
          show: !state.show
        }));
      };
    
      updateCount = () => {
        log("----------- Update Parent component------------------");
        this.setState(state => ({ count: state.count + 1 }));
      };
    
      render() {
        const { show } = this.state;
        return (
          <div style={styles.parentDiv}>
            <h3>Playing with Component Lifecycle methods of React 16.3</h3>
            <div style={styles.parentBorder}>
              <div style={styles.parentMargin}>
                <h4>Parent Component</h4>
                <button onClick={this.toggleComponent}>
                  {show ? "Remove" : "Add"} Child Component
                </button>
                <button onClick={this.updateCount}>Update Parent Component</button>
                {show && <LifeCycleMethods />}
              </div>
            </div>
          </div>
        );
      }
}