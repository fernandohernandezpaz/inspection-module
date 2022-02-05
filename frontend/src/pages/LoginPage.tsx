import React from "react";
import '../assets/scss/login.scss';

const LoginPage = () => {
    return (
        <>
            <div className="container" id="login-page">
                <div className="card">
                    <form action="">
                        <div className="row">
                            <div className="col s12 center-align">
                                <h4>
                                    <strong>Welcome to inspect module</strong>
                                </h4>
                                <h5>Login</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">person</i>
                                <input className="validate" id="username" type="text" autoComplete={"off"}/>
                                <label htmlFor="username" data-error="wrong" data-success="right">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock_outline</i>
                                <input id="password" type="password"/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <a href="#" className="btn waves-effect waves-light col s12">Login</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6 m6 l6">
                                <p className="margin medium-small"><a href="#">Register Now!</a></p>
                            </div>
                            <div className="input-field col s6 m6 l6">
                                <p className="margin right-align medium-small"><a href="#">Forgot password?</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;