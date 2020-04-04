import React, { Component } from "react";
import * as bootstrap from "bootstrap"
import * as reactstrap from  "reactstrap"
import {loginUser} from "../../actions/authActions";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {message:'', messageType:'invisible'};
  }
  handleSubmit(event) {
    event.preventDefault();
    let email = event.target.querySelector("#email");
    let password = event.target.querySelector("#password");
    let rememberMe = event.target.querySelector("#rememberMe");
    if (email != null && password != null) {
        if (loginUser("?username="+email+"&password="+password, rememberMe)) {
            this.setState({ message:'You are logged in', messageType:'alert alert-primary' });
        }
    } else {
        this.setState({ message:'Please fill the fields', messageType:'alert alert-danger' });
    }
  }
  render() {
    return (
     <div class="container">
      <div class="row d-flex justify-content-center">
         <div class="col-8 text-center">
           <form onSubmit={(event)=>this.handleSubmit(event)}>
                <br />
                <br />
                <h3>Log In</h3>
                <br />
                <br />
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="email">Email address</label>
                    </div>
                    <input type="email" id="email" className="form-control" placeholder="Enter email here" />
                </div>
                <br />
                <div className="input-group">
                    <div className="input-group-prepend">
                       <label className="input-group-text" htmlFor="password">Password</label>
                    </div>
                    <input type="password" id="password" className="form-control" placeholder="Enter password here" />
                </div>
                <br />
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="rememberMe" />
                        <label className="custom-control-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-block yolonet-submit">Submit</button>
                <br />
                <p className="forgot-password text-right">
                    Forgot <a href="/passReset">password?</a>
                </p>
            </form>
            <br />
            <br />
            <div class={this.state.messageType} role="alert">{this.state.message}</div>
            <br />
            <br />
        </div>
      </div>
     </div>
    );
  }
}

export default Login;
