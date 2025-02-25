import React from "react";
import { Button } from "react-bootstrap";

const ChangePassword = () => {
  return (
    <div className="container mt-5">
     
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Current Password</label>
                  <input type="password" className="form-control" placeholder="Enter your current password" />
                </div>
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <input type="password" className="form-control" placeholder="Enter your new password" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" placeholder="Confirm your new password" />
                </div>
                <Button variant="primary" type="submit">
                  Change Password
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;