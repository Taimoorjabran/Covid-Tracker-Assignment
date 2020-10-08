import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/input/input';
import { getItemsLocalStorage, setItemsLocalStorage } from '../../utility/localStorage';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                email: '',
                password: ''
            }
        };
    }

    handleInputChange = (name, value) => {
        const loginData = this.state.loginData;
        loginData[name] = value;
        this.setState({ loginData });
    }

    handleSubmit = () => {
        const { email, password } = this.state.loginData;
        const users = getItemsLocalStorage("users")
            ? getItemsLocalStorage("users")
            : [];
        // checking if user Exits
        users && users.some(user => user.email === email && user.password === password)
        ? setItemsLocalStorage('isAuthenticated', true) : setItemsLocalStorage('isAuthenticated', false);
    };


    render() {
        return (
            <div>
                <div className='form-group'>
                    <Input InputChange={(e) => this.handleInputChange('email', e.target.value)} label={'Email'} />
                </div>
                <div className='form-group'>
                    <Input InputChange={(e) => this.handleInputChange('password', e.target.value)} label={'Password'} />
                </div>
                <Link exact='true' to='/dashboard'>
                    <button
                        type='submit'
                        className='btn btn-primary btn-block'
                        onClick={() => this.handleSubmit()}
                    >Login</button>
                </Link>
            </div>
        );
    }
}

export default Login;