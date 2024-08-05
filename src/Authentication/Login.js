import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import toast from 'react-hot-toast';
import { base_url } from '../config/config';
import '../assets/Css/css.css'

const Login = () => {
    const [user_id, setUser_id] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!user_id || !password) {
            toast.error('Please Enter Email and Password');
            return;
        }
        try {
            const requestData = {
                user_id,
                password,
            };

            let response = await fetch(`${base_url}/api/login`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            })

            const data = await response.json();
            // console.log("data", data);

            if (data.status === true) {
                localStorage.setItem("token", data.access_token);
                toast.success(data.message);

                navigate('/');
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            console.error('Error with email login:', error);
        }
    };


    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="in col-md-8 col-lg-6 col-xl-4 py-5">
                        <form className='login-form'>
                            <div className="card-body py-3">
                                <h2 className=" text-center mb-1">Log In</h2>
                            </div>

                            <div className="form-outline mb-2">
                                <label className="form-label" htmlFor="user_id">User ID</label>
                                <input
                                    type="email"
                                    id="user_id"
                                    className="form-control form-control-lg"
                                    placeholder="Enter the User ID "
                                    value={user_id}
                                    onChange={(e) => setUser_id(e.target.value)}
                                    autoComplete='off'
                                />
                            </div>

                            <div className="form-outline mb-2">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter the Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <p className="forget fw-bold mt-2 pt-1 mb-0">
                                    <NavLink to="/forget" className="link-danger">Forgot Password?</NavLink>
                                </p>
                            </div>

                            <div className="text-center text-start-center mt-1">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                    onClick={handleLogin}>
                                    Log In
                                </button>
                            </div>

                            <div>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account? <NavLink to="/signup" className="link-danger">Sign Up</NavLink>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;