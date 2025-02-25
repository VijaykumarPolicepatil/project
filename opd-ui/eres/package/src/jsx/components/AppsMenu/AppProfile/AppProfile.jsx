import React from "react";
import { Button } from "react-bootstrap";

const AppProfile = () => {
  return (
    
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input type="tel" className="form-control" placeholder="Enter your mobile number" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" placeholder="Enter your username" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select className="form-select">
                    <option value="user">User </option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" />
                </div>
                <Button variant="primary" type="submit">
                  Save 
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default AppProfile;