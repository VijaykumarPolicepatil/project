
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from '../../../../assets/images/logo.png';
const AppForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  // Inline styles for centering
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
  };

  return (
    <div style={containerStyle}>
      <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
        <div className="card">
          <div className="card-body">
            <div className="text-center mb-4">
              <img src={logo} alt="" className="logo ms-1" style={{ maxWidth: '150px' }} />
            </div>
            <h4 className="card-title text-center">Forgot Password?</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <Button variant="primary" type="submit" className="w-100">
                Reset Password
              </Button>
            </form>
            <div className="text-center mt-3">
              <Link to="/login" className="btn btn-link">Back to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppForgetPassword;