import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form className="formLogin" > 
            <div className="row">
              <div className="col-5">
                <div className="form-group">
                  <label htmlFor="">
                  Email
                  </label>
                  <input
                    type="text"
                    name
                    id
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                  />
                  <small>* required field</small>
                  <small style={{display : "block"}} >Forgot Your Password?</small>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                    <label htmlFor="">
                    Password*
                    </label>
                  <input
                    type="text"
                    name
                    id
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                  />
                  
                </div>
              </div>
              <div className="col-3">
                <button className="btnLogin">LOGIN</button>
              </div>
            </div>
          </form>
        )
    }
}
