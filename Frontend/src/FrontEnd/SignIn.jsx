import React, { useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './signin.css';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password })
            if (response.status === 201) {
                alert(response.data.message);

                localStorage.setItem('token',response.data.token);
                localStorage.setItem('user',response.data.user);
                
                navigate('/table');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    alert(error.response.data.message)
                } 
            } else {
                console.error(error)
                alert('Something wend wrong...!')
            }
        }
    };

    return (
        <div className="signin-container d-flex justify-content-center align-items-center vh-100">
            <div className="signin-card p-4 rounded">
                <h2 className="text-center mb-4 mx-auto w-75 px-4 py-3">Sign In</h2>
                <div class="wave-container">
                    <div class="wave wave1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="500 0 1440 320">
                            <path fill="#7f85998c" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,64C480,75,600,117,720,149.3C840,181,960,203,1080,197.3C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        </svg>
                    </div>
                    <div class="wave wave2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="600 -10 1500 320">
                            <path fill="#7f85998c" fill-opacity="1" d="M0,160L60,181.3C120,203,240,245,360,261.3C480,277,600,267,720,224C840,181,960,107,1080,74.7C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        </svg>
                    </div>
                    <div class="wave wave3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="200 -100 1440 250">
                            <path fill="#7f85998c" fill-opacity="1" d="M0,320L60,304C120,288,240,256,360,208C480,160,600,96,720,80C840,64,960,96,1080,138.7C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        </svg>
                    </div>
                </div>
                <div className="avatar my-3 text-center">
                    <i className="bi bi-person-circle text-white "></i>
                </div>
                <form className='signin-form' onSubmit={handleSubmit}>
                    <div className="form-group mb-3 mx-3 ">
                        <div className='email-container d-flex justify-content-between'>
                            <i className="bi bi-person-fill"></i>
                            <hr />
                            <input
                                type="email"
                                id="email"
                                placeholder="email"
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group mb-2 mx-3">
                        <div className='password-container d-flex justify-content-between'>
                            <i className="bi bi-lock-fill"></i>
                            <hr />
                            <input
                                type="password"
                                id="password"
                                placeholder="password"
                                onChange={(e)=>setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between form-group mb-2 mx-4">
                        <div className='remember'>
                            <input type="checkbox" className='mx-2' id='remember' />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <div className='forgot'>
                            <Link to="#">Forgot Your Password?</Link>
                        </div>
                    </div>
                    <div className="form-group my-4 mx-3">
                        <button type="submit" className="submit-btn">
                            login
                        </button>
                    </div>
                    <div className="d-flex justify-content-center form-group mb-2 mx-4">
                        <div className='forgot'>
                            <Link to="/register">Don't have account, Please Sign Up?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
