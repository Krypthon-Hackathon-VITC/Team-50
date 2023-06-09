import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import {createContext} from "react";
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { PatientLanding } from "./PatientLanding";


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
                console.log(res.data);
                setLoginUser(res.data.user);
                const data=res.data.name;
                navigate("/PatientLanding", {state:{id:data}})
            })
            .catch(err => {
                console.log(err)
                feed.textContent = "*" + err.response.data.error
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
            <div className="artemis">
                <img id='artemis-logo' src={require('../static/images/logo.png')} alt="Artemis Logo" />
            </div>
            <div className="container">
                <div className="doc-img">
                    <img id="doc-img" src={require('../static/images/login-register.png')} alt="login-register" />
                </div>
                <div className="login-content">
                    <div className="login-head">
                        <Link to="/PatientLogin" className="a-btn" style={currLink === "http://localhost:3000/PatientLogin" ? { borderBottom: '3px solid #456188' } : null}>Login</Link>
                        <Link to="/PatientRegister" className="a-btn" style={currLink === "http://localhost:3000/PatientRegister" ? { borderBottom: '3px solid #456188' } : null}>Register</Link>

                    </div>

                    <h1 id='welc'>Welcome to Artemis</h1>
                    <span id='ltya'>Login to your account</span>
                    <form className="login-credentials" onSubmit={submit}>
                        <label className='EP' htmlFor="employee">Email</label>
                        <input className='booxes' value={data.email} type="text" placeholder="Email" id="email" name="email" onChange={(e) => handle(e)} />
                        <label className='EP' htmlFor="password">Password</label>
                        <input className='booxes' value={data.pass} type="password" placeholder="********" id="pass" name="pass" onChange={(e) => handle(e)} />
                        <div className="lower-box">
                            <button id="DoclogIn" type="submit">Log In</button>
                            <span id='feed'></span>
                        </div>
                    </form>
                    <div className="other-login-ways">
                        <p>Login using</p>
                        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFailure} />
                    </div>
                </div>
            </div>
        </div>
    );
}
