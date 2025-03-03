import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import nurse from "../../../../../src/assets/images/Nurse.jpg";

const Questionnaire = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-6">
                  <div className="profile">
                    <div className="staff">
                      <img
                        src={nurse}
                        alt="Nurse Profile"
                        className="img-fluid"
                        style={{ width: "185px", height: "auto" }}
                      />
                    </div>
                    <div className="staff-info">
                      <div>
                        <div className="d-flex align-items-center mb-2">
                          <h4 className="mb-0">Patient Name:</h4>
                          <p className="ms-2 mb-0">Kate Velasquez</p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <h4 className="mb-0">Husband Name / Wife:</h4>
                          <p className="ms-2 mb-0">John Clive</p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <h4 className="mb-0">Age:</h4>
                          <p className="ms-2 mb-0">25</p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <h4 className="mb-0">Weight:</h4>
                          <p className="ms-2 mb-0">75kg</p>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <h4 className="mb-0">Occupation:</h4>
                          <p className="ms-2 mb-0">Nurse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">Current Disease :</h4>
                    <p className="ms-2 mb-0">Hypertension </p>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">Status :</h4>
                    <p className="ms-2 mb-0">Ongoing </p>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">Marriage History:</h4>
                    <p className="ms-2 mb-0">1st Marriage (Age 30)</p>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">Gender:</h4>
                    <p className="ms-2 mb-0">Male</p>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">Marriage Date:</h4>
                    <p className="ms-2 mb-0">June 15, 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
            {/* Question 1 */}
            <div className="col-xl-12 mb-3">
              <div className="timeline-panel bgl-dark flex-wrap border-0 p-3 rounded d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="font-weight-bold">
                    How are you going to do consulting?
                  </h6>
                  <p className="fs-15 mb-0 font-weight-bold" >Nashik Center</p>

                  <textarea
                    className="form-control mt-2"
                    placeholder="Enter Notes here.."
                    id="notesConsulting"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="consulting"
                  />
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="col-xl-12 mb-4">
              <div className="timeline-panel bgl-dark flex-wrap border-0 p-3 rounded d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="font-weight-bold">How do you feel hungry?</h6>
                  <p className="fs-15 mb-0 font-weight-bold">More</p>

                  <textarea
                    className="form-control mt-2"
                    placeholder="Enter Notes here.."
                    id="notesHungry"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="hungry"
                  />
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="col-xl-12 mb-4">
              <div className="timeline-panel bgl-dark flex-wrap border-0 p-3 rounded d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="font-weight-bold">
                    When do you have breakfast?
                  </h6>
                  <p className="fs-15 mb-0 font-weight-bold">Afternoon</p>

                  <textarea
                    className="form-control mt-2"
                    placeholder="Enter Notes here.."
                    id="notesBreakfast"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="breakfast"
                  />
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="col-xl-12 mb-4">
              <div className="timeline-panel bgl-dark flex-wrap border-0 p-3 rounded d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="font-weight-bold">When do you eat?</h6>
                  <p className="fs-15 mb-0 font-weight-bold">Morning</p>

                  <textarea
                    className="form-control mt-2"
                    placeholder="Enter Notes here.."
                    id="notesEat"
                 
                  />
                </div>
                <div className="d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="eat"
                    
                  />
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="col-xl-12 mb-4">
              <div className="timeline-panel bgl-dark flex-wrap border-0 p-3 rounded d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="font-weight-bold">
                    Are meal and snack times regular?
                  </h6>
                  <p className="fs-15 mb-0 font-weight-bold">No</p>

                  <textarea
                    className="form-control mt-2"
                    placeholder="Enter Notes here.."
                    id="notesRegular"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="regular"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Save Button as Link */}
          <div className="d-flex justify-content-end">
            <Link to="/app-patient-details" className="btn btn-primary">
              Save
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questionnaire;
