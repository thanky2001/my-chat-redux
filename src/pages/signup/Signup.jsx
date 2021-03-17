import React, { Component } from 'react';
import '../../css/LoginSignin.css';
import {signInWithGoogle} from '../../helpers/auth';
import{connect} from 'react-redux';





class Signup extends Component {

    async googleSignIn() {
        try{
            await signInWithGoogle();
        }catch{
            this.props.SigninGoogle(this.props.signUp.error.message)
        }
        
    }
    
    render() {
        return (
            <div className="container">
                <div className="form-container sign-up-container">
                    <form >
                        <h1>Create Account</h1>
                        <span>or use your email for registration</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                        <div className="text-center mt-2">Or</div>
                        <div className="social-container">
                            {/* <a href="#" className="social"><i className="fab fa-facebook-f" /></a> */}
                            <a  onClick={this.googleSignIn}  className="social"><i className="fab fa-google-plus-g" /></a>
                            {/* <a href="#" className="social"><i className="fab fa-linkedin-in" /></a> */}
                        </div>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        signUp:state.chatReducer.signUp,
    }
}
const mapDispacthToProps=(dispacth)=>{
    return{
        SigninGoogle:(error)=>{
            console.log(error)
        }
    }
}
export default connect(mapStateToProps,mapDispacthToProps)(Signup)