import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin } from '../redux/slices/adminSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { admin, loading, error } = useSelector((state) => state.admin);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAdmin({ email, password }));
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="col-md-6 col-lg-4">
            <form className="p-4 border rounded shadow" onSubmit={handleSubmit}>
              <h2 className="text-center mb-4">Login</h2>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      );
    };
    

export default Login;
