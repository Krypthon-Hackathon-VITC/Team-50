import { Link } from "react-router-dom";
import React, { useState } from 'react'
import './PatientLogin.css';
import axios from 'axios'

export const PatientRegister = () => {

    function getCurrentURL() {
        return window.location.href
    }

    const currLink = getCurrentURL()

    const [data, setData] = useState({
        email: '',
        pass: '',
        name: ''
    })

    const url = 'http://localhost:3001/api/patientsLogin/signup'
    const successMsg = 'succesfully registered. Login with your credentials!'

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            "email": data.email,
            "password": data.pass,
            "name": data.name
        })
            .then(res => {
                console.log(res.data.error ? res.data.error : res.data)
                feed.textContent = successMsg
            })
            .catch(err => {
                console.log(err)
                feed.textContent = "*" + err.response.data.error
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }

    const feed = document.querySelector('#feed')


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
                    <span id='ltya'>Register yourself</span>
                    <form className="login-credentials" onSubmit={submit}>
                        <label className='EP' htmlFor="employee">Name</label>
                        <input className='booxes' value={data.name} type="text" placeholder="name" id="name" name="name" onChange={(e) => handle(e)} />
                        <label className='EP' htmlFor="employee">Email</label>
                        <input className='booxes' value={data.email} type="text" placeholder="Email" id="email" name="email" onChange={(e) => handle(e)} />
                        <label className='EP' htmlFor="password">Password</label>
                        <input className='booxes' value={data.pass} type="password" placeholder="********" id="pass" name="pass" onChange={(e) => handle(e)} />
                        <div className="lower-box">
                            <button id="DoclogIn" type="submit">Sign Up</button>
                            <span id='feed'></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}