import React from "react";
import PropTypes from "prop-types";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class AddUser extends React.Component{

    constructor(props){
        super();
        //this.age = props.age;
        this.state={
            age:props.age,
            fields: {},
           errors: {}
        }
    }

   /*********************************FORM VALIDATION********************************************* */
   
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }
//lname
         if(!fields["lname"]){
           formIsValid = false;
           errors["lname"] = "Cannot be empty";
        }

        if(typeof fields["lname"] !== "undefined"){
           if(!fields["lname"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["lname"] = "Only letters";
           }        
        }

        //Email
      if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  
//pwd
if(!fields["pwd"]){
           formIsValid = false;
           errors["pwd"] = "Cannot be empty";
        }
       this.setState({errors: errors});
       return formIsValid;
   }


    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

   
   
  /********************************************************************************************************************** */ 
   
    
     myFunc(e){
         e.preventDefault();
        if(this.handleValidation()){
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var pwd = document.getElementById("pwd").value;
    
        var data = {
            "first" : fname,
            "last" : lname,
            "mail" : email,
            "pass" : pwd
        };
       
        fetch('http://localhost:1212/api/submitDetails', {
            method: 'POST',
            //mode: 'no-cors',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                //'Content-Type': 'application/json'
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            //credentials: 'same-origin'
        });
        alert("DETAILS SUBMITTED SUCCESSFULLY");
        document.getElementById("fname").value = '';
        document.getElementById("lname").value = '';
        document.getElementById("email").value = '';
        document.getElementById("pwd").value = '';
        }
    }   
    /*myFunc(){
        this.setState(
            {
                age:this.state.age+5
            }
        );
        //this.age+=3;
        //console.log("*****this.age*****",this.age);
    }*/
    render(){
        var content = "";
        if(true){
                content = "Hie!"
        }
        //console.log("*****props*****",this.props);
        /*
        for practise
        <div>
                     User Hobbies :
                    <ul>
                            {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
                <p> Your name is {this.props.name} and your age is : {this.state.age} </p>
                */ 
        return(
            <div className="container">
            
                <h1 align="center">Add your Details</h1>
                <form className="table p-3 mb-2 bg-light text-dark">
                <div className="form-group">
                        <label id="firstName" className="text-primary">First Name</label>
                        <input type="text" className="form-control" id="fname" onChange={this.handleChange.bind(this, "name")} autoFocus placeholder="Enter First Name" required/>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                    </div>
                    <div className="form-group">
                        <label id="lastName" className="text-primary">Last Name</label>
                        <input type="text" className="form-control" id="lname" onChange={this.handleChange.bind(this, "lname")} placeholder="Enter Last Name" required/>
                   <span style={{color: "red"}}>{this.state.errors["lname"]}</span>
                    </div>

                    <div className="form-group">
                        <label id="emaildata" className="text-primary">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange.bind(this, "email")} placeholder="Enter email" required/>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                    </div>
                    <div className="form-group">
                        <label id="password" className="text-primary">Password</label>
                        <input type="password" className="form-control" id="pwd" onChange={this.handleChange.bind(this, "pwd")} placeholder="Enter Password" required/>
                    <span style={{color: "red"}}>{this.state.errors["pwd"]}</span>
                    </div>
                    
                    <button to="/addUser" type="button" className="btn btn-primary" onClick={this.myFunc.bind(this)}>Submit Details</button>
                </form>
                
            </div>
        );
    }
}
// yet to study about proptypes (validation)
// we have to install package for this npm install prop-types 
//and import this pacckage and then define here
/*Home.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    user : PropTypes.object,
    children : PropTypes.element.isRequired
};
*/
//<button type="button" className="btn btn-primary" onClick={(event) => myFunc()}>Submit</button>