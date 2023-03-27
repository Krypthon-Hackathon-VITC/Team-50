import { Link } from "react-router-dom";
import './DoctorLogin.css';
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const url = 'http://localhost:3001/api/doctorsLogin/login'

export const DoctorLogin = ({ setLoginUser }) => {

    const navigate = useNavigate()

    const feed=document.querySelector('#feed');

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
                navigate("/DoctorLanding")
            })
            .catch(err => {
                console.log(err)
                feed.textContent=err.response.data.error
            })
    }

    return (
        <div>
            <div className="auth-form-container">
                <header id="login-header">
                    <Link  className='link-btn'>Login</Link>
                </header>

                <h1>Welcome to Polaris</h1>
                <p className="small-msg-login">Login to your account</p>

                <div className="login-container">

                    <img id="DocsideImg" src={require('../static/images/doctor-login.png')} alt="login-register" />

                    <form className="Doc-login-form" onSubmit={submit}>
                        <label htmlFor="employee">Empoloyee ID</label>
                        <input value={data.employee} type="text" placeholder="Employee ID" id="employee" name="employee" onChange={(e) => handle(e)}/>
                        <label htmlFor="password">Password</label>
                        <input value={data.pass} type="password" placeholder="********" id="pass" name="pass" onChange={(e) => handle(e)}/>
                        <button id="DoclogIn" type="submit">Log In</button>
                        <p></p>
                        <p></p>
                        <h3 id='feed'></h3>

                </form>
                </div>
            </div>
        </div>
    );
}







