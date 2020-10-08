import React, { Component } from 'react';
import Login from '../login/login';
import Signup from '../signUp/signUp';
import './auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true,
        }
    }
    toggleLoginSingup = () => {
        this.setState({
            showLogin: !this.state.showLogin,
        })
    }
    render() {
        const { showLogin } = this.state;
        return (
            <div>
                <div className='d-flex justify-content-center landing-container-main'>
                    <div className='card landing-container'>
                        <div className='card-header'>
                            <ul className='nav nav-pills nav-fill'>
                                <li className='nav-item' onClick={this.toggleLoginSingup}>
                                    <div className={"nav-link " + (showLogin ? 'active' : '')}>Login</div>
                                </li>
                                <li className='nav-item' onClick={this.toggleLoginSingup}>
                                    <div className={"nav-link " + (!showLogin ? 'active' : '')}>Signup</div>
                                </li>
                            </ul>
                        </div>
                        <div className='card-body'>
                            {showLogin ? <Login /> : <Signup />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Auth;