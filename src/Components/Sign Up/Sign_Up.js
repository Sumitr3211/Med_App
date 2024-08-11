import React, { useState } from 'react';
import './Sign_Up.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        console.log('Form submitted');
    
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    role: role,
                }),
            });
    
            const json = await response.json();
            console.log('Response received:', json);
    
            if (response.ok) {
                if (json.authtoken) {
                    sessionStorage.setItem("auth-token", json.authtoken);
                    sessionStorage.setItem("name", name);
                    sessionStorage.setItem("phone", phone);
                    sessionStorage.setItem("email", email);
                    sessionStorage.setItem("role", role);
                    navigate("/");
                    window.location.reload();
                } else {
                    setShowerr('Unexpected error occurred.');
                }
            } else {
                setShowerr(`Error: ${json.error || 'An error occurred.'}`);
            }
        } catch (error) {
            setShowerr('Network error: Unable to reach the server.');
            console.error(error);
        }
    };
    

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
            <div className="signup-text1" style={{textAlign: 'left'}}>
                Already a member? <span><Link to="/login" style={{color: '#2190FF'}}> Login</Link></span>
                </div>
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Enter your name"
                                aria-describedby="helpId"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                name="phone"
                                id="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                                aria-describedby="helpId"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                name="role"
                                id="role"
                                className="form-control"
                                aria-describedby="helpId"
                            >
                                <option value="">Select a role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={() => { setName(''); setEmail(''); setPhone(''); setPassword(''); setRole(''); setShowerr(''); }}>Reset</button>
                        </div>
                    </form>
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                </div>
            </div>
        </div>
    );
};

export default SignUp;
