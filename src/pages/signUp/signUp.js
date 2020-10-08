import React, { Component } from 'react';
import { setItemsLocalStorage, getItemsLocalStorage } from '../../utility/localStorage';
import { Redirect } from 'react-router-dom';
import Input from '../../components/input/input';

const nameRGEX = /^[a-zA-Z .]+$/;
const emailRGEX = /^(([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-.]+)@{[a-zA-Z0-9_\-.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
const passwordRGEX = /^(?=.*[a-zA-Z]).{8,}$/;
const initialState = {
    signupData: {
        name: '',
        email: '',
        password: ''
    },
    errorName: '',
    errorEmail: '',
    errorPassword: '',
    signupSuccess: false
};

class Signup extends Component {
    usersData;
    constructor(props) {
        super(props);
        this.state = initialState
    }



    handleInputChange = (name, value) => {
        const signupData = this.state.signupData;
        signupData[name] = value;
        this.setState({ signupData });
    }

    validation = () => {
        const { name, email, password } = this.state.signupData;
        let errorName = '';
        let errorEmail = '';
        let errorPassword = '';

        if (!nameRGEX.test(name)) {
            errorName = 'Please Enter Correct Name';
        }

        if (!emailRGEX.test(email)) {
            errorEmail = 'Email Must Have @domain.xyz';
        }

        if (!passwordRGEX.test(password)) {
            errorPassword = "Password Must Have Alphabetic Character";
        }

        if (errorEmail || errorName || errorPassword) {
            this.setState({ errorEmail, errorName, errorPassword });
            return false;
        }
        return true;
    }

    handleSubmit = () => {
        const isValid = this.validation();
        if (isValid) {
            const users = getItemsLocalStorage('users') ? getItemsLocalStorage('users') : [];
            users.push(this.state.signupData);
            setItemsLocalStorage('users', users);
            alert('form submitted');
            this.setState({ signupSuccess: true })
        }
    }

    render() {
        const { errorName, errorEmail, errorPassword } = this.state;
        if (this.state.signupSuccess === true) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div className='form-group '>
                    <Input InputChange={(e) => this.handleInputChange('name', e.target.value)} label={'Name'} />
                    <span className='text-danger'>{errorName}</span>
                </div>
                <div className='form-group'>
                    <Input InputChange={(e) => this.handleInputChange('email', e.target.value)} label={'Email'} />
                    <span className='text-danger'>{errorEmail}</span>
                </div>
                <div className='form-group'>
                    <Input InputChange={(e) => this.handleInputChange('password', e.target.value)} label={'Password'} />
                    <span className='text-danger'>{errorPassword}</span>
                </div>
                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                    onClick={() => this.handleSubmit()}
                >Signup</button>
            </div>
        );
    }
}


export default Signup;