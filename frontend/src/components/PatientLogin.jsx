import { Link } from "react-router-dom";
import React, { useState } from 'react'
import './PatientLogin.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

export const PatientLogin = ({ setLoginUser }) => {
    const onLoginSuccess = (res) => {
        // console.log('Login Success:', res);
        var userObject = jwt_decode(res.credential);
        console.log(userObject)
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };


    const navigate = useNavigate()

    function getCurrentURL() {
        return window.location.href
    }

    const currLink = getCurrentURL()

    const [data, setData] = useState({
        email: '',
        pass: ''
    })

    const feed = document.querySelector('#feed')

    const url = 'http://localhost:3001/api/patientsLogin/login'

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            "email": data.email,
            "password": data.pass
        })
            .then(res => {
                console.log(res.data)
                setLoginUser(res.data.user)
                navigate("/PatientLanding")
            })
            .catch(err => {
                console.log(err)
                feed.textContent = err.response.data.error
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    return (
        <div>
            <div className="auth-form-container">
                <header id="login-header">
                    <Link to="/PatientLogin" className='link-btn' style={currLink === "http://localhost:3000/PatientLogin" ? { borderBottom: '3px solid #456188' } : null}>Login</Link>
                    <Link to="/register" className="link-btn" id='register'>Register</Link>
                </header>

                <h1 id='Welcome-msg' >Welcome to Polaris</h1>
                <p className="small-msg-login">Login to your account</p>

                <div className="login-container">
                    <img id="sideImg" src={require('../static/images/login-register.png')} alt="login-register" />

                    <form className="login-form" onSubmit={(e) => submit(e)}>
                        <label htmlFor="email">Email</label>
                        <input value={data.email} type="text" placeholder="yourEmail@gmail.com" id="email" name="email" onChange={(e) => handle(e)} />
                        <label htmlFor="password">Password</label>
                        <input value={data.pass} type="password" placeholder="********" id="pass" name="pass" onChange={(e) => handle(e)} />
                        <button id="logIn" type="submit">Log In</button>
                        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFailure} />
                        <p></p>
                        <p></p>
                        <span id='feed'></span>
                    </form>

                </div>
            </div>
        </div>
    );
}