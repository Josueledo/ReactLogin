import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Validation from "./SignupValidation"
import axios from "axios"
import { Alert, Button } from "@mui/material"




function Signup() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(values))
        if (errors.name === "" && errors.email === "" && errors.password === "") {

            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    <Alert severity="success">This is a success alert — check it out!</Alert>
                    navigate('/')
                })
                .catch(err => console.log(err))
        }

    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100  ">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter username  " className="form-control rounded-0" name='name' onChange={handleInput} />
                        {errors.name && <span className="text-danger">{errors.name}</span>}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email" className="form-control rounded-0" name='email' onChange={handleInput} />
                        {errors.email && <span className="text-danger">{errors.email}</span>}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">password</label>
                        <input type="password" placeholder="Enter you password" className="form-control rounded-0" name='password' onChange={handleInput} />
                        {errors.password && <span className="text-danger">{errors.password}</span>}

                    </div>
                    <Button style={{width:"100%"}} type="submit" variant="contained" disableElevation>Sign U</Button>
                    <p>You are agre to aour terms and polities</p>
                    <Link to="/" className="btn btn-default border w-100 text-decoration-none">Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
