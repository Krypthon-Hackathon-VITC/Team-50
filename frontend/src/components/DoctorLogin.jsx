import { Link } from "react-router-dom";
import './DoctorLogin.css';
import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";

const url = 'http://localhost:3001/api/doctorsLogin/login'

export const DoctorLogin = ({ setLoginUser }) => {

    function getCurrentURL() {
        return window.location.href
    }

    const currLink = getCurrentURL()

    const navigate = useNavigate()

    const feed = document.querySelector('#feed');

    const [data, setData] = useState({
        employee: '',
        pass: ''
    })

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function submit(e) {
        e.preventDefault();

        console.log(data.employee);
        console.log(data.pass);

        axios.post(url, {
            "employeeID": data.employee,
            "password": data.pass
        })
            .then(res => {
                console.log(res.data);
                setLoginUser(res.data.user)
                const data=res.data.employeeID;
                navigate("/DoctorLanding", {state:{id:data}})
            })
            .catch(err => {
                console.log(err)
                feed.textContent = "*" + err.response.data.error
            })
    }

    return (
        <div>
            <div className="artemis">
                <img id='artemis-logo' src={require('../static/images/logo.png')} alt="Artemis Logo" />
            </div>
            <div className="container">
                <div className="doc-img">
                    <img id="doc-img" src={require('../static/images/doctor-login.png')} alt="login-register" />
                </div>
                <div className="login-content">
                    <div className="login-head">
                        <Link to="/DoctorLogin" className="a-btn" style={currLink === "http://localhost:3000/DoctorLogin" ? { borderBottom: '3px solid #456188' } : null}>Login</Link>
                    </div>

                    <h1 id='welc'>Welcome to Artemis</h1>
                    <span id='ltya'>Login to your account</span>
                    <form className="login-credentials" onSubmit={submit}>
                        <label className='EP' htmlFor="employee">Empoloyee ID</label>
                        <input className='booxes' value={data.employee} type="text" placeholder="Employee ID" id="employee" name="employee" onChange={(e) => handle(e)} />
                        <label className='EP' htmlFor="password">Password</label>
                        <input className='booxes' value={data.pass} type="password" placeholder="********" id="pass" name="pass" onChange={(e) => handle(e)} />
                        <div className="lower-box">
                            <button id="DoclogIn" type="submit">Log In</button>
                            <span id='feed'></span>
                        </div>
                    </form>

                    
                </div>
            </div>
        </div>
    );
}







