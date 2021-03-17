import React, { Component } from 'react';
import '../../css/LoginSignin.css';
export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-container sign-in-container">
                        <form>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp">Sign up   </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
