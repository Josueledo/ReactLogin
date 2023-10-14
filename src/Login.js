import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Validation from "./loginValidation"
import axios from 'axios'





const Login = () => {
    const [values, setValues] = useState({
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

        axios.post('http://localhost:8081/login', values)
            .then((res) => {

                if (res.data === "Success") {
                    navigate('/home')
                }
            })
            .catch(err => console.log(err))

        axios.post('http://localhost:8081/login', values)
            .then((res) => {

                if (res.data === "Success") {
                    let x = true
                    return x
                }
            })
            .catch(err => console.log(err))

            
            
    }



    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sing In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">email</label>
                        <input type="email" placeholder="Enter email" className="form-control rounded-0" onChange={handleInput} name="email" />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">password</label>
                        <input type="password" placeholder="Enter you password" className="form-control rounded-0" onChange={handleInput} name="password" />
                        {errors.password && <span className="text-danger">{errors.password}</span>}

                    </div>
                    <button className="btn btn-success w-100">Login</button>
                    <p>You are agre to aour terms and polities</p>
                    <Link to="/signup" className="btn btn-default border w-100 text-decoration-none">Create Acount</Link>
                </form>
            </div>
        </div>
    )
}

export default Login
