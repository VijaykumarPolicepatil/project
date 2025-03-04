import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Select from "react-select"; // Import react-select

// Options for Diseases and Lead Source
const diseaseOptions = [
  { value: "Diabetes", label: "Diabetes" },
  { value: "Hypertension", label: "Hypertension" },
  { value: "Asthma", label: "Asthma" },
  { value: "Heart Disease", label: "Heart Disease" },
  // Add more options as needed
];

const AddLead = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    contactNumber: "",
    additionalContactNumber: "",
    email: "",
    weight: "",
    height: "",
    diseases: [],
    leadSource: "Facebook",
    status: "New", // Default value
    priority: "Low", // Default value
    comments: "",
    occupation: "",
    gender: "Male", // Default value
    maritalStatus: "No", // Default value
    dateOfMarriage: "",
    spouseName: "",
    idProof: "",
    idNumber: "",
    addressLine1: "",
    addressLine2: "",
    area: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    country:"",
    tempAddressLine1: "",
    tempAddressLine: "",
    tempArea: "",
    tempPincode: "",
    tempCountry: "",
    tempCity: "",
    tempState: "",

    adName: "", // New field for Ad Name
    adSet: "", // New field for Ad Set
    campaignName: "", // New field for Campaign Name
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (name) => (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setFormData((prevState) => ({
      ...prevState,
      [name]: selectedValues,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      photo: e.target.files[0], // Store the file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
  };

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Personal Information Subheading */}
              <h5 className="mt-4" style={{ fontSize: "24px" }}>
                Personal Information
              </h5>
              <div className="row">
                {/* First Name */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Middle Name */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Middle Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter middle name"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                  />
                </div>

                {/* Last Name */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">
                    Last Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                {/* Email */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter patient email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {/* Contact Number */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Whatsapp Contact Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Whatsapp contact number"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </div>
                {/* Additional Contact Number */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">
                    Additional Contact Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter additional contact number"
                    name="additionalContactNumber"
                    value={formData.additionalContactNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                {/* Photo */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Photo</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                {/* Gender */}
                <div className="col-xl-4 mb-3">
                  <div className="form-group position-relative">
                    <label className="form-label">Gender</label>
                    <div style={{ position: "relative" }}>
                      <select
                        className="form-control"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        style={{
                          paddingRight: "30px",
                          appearance: "none",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                        }}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <i
                        className="fa fa-caret-down"
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                        }}
                      ></i>
                    </div>
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Date of Birth</label>
                  <div className="form-group position-relative">
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                    <i
                      className="fa fa-calendar position-absolute"
                      style={{
                        right: "15px", // Adjust the spacing from the right
                        top: "50%", // Center the icon vertically
                        transform: "translateY(-50%)", // Adjust for perfect centering
                        pointerEvents: "none", // Prevent icon from blocking input interactions
                        fontSize: "18px", // Adjust the icon size
                        zIndex: 1, // Ensure icon appears on top
                      }}
                    ></i>
                  </div>
                </div>

                {/* Height in cm */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Height (cm)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                  />
                </div>

                {/* Weight in kg */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Weight (kg)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </div>
                {/* Occupation */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Occupation</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                {/* Married Checkbox */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Married</label>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="maritalStatus"
                      checked={formData.maritalStatus === "Yes"}
                      onChange={(e) => {
                        setFormData((prevState) => ({
                          ...prevState,
                          maritalStatus: e.target.checked ? "Yes" : "No",
                        }));
                      }}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                </div>
                {/* {/* Date of Marriage */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Date of Marriage</label>
                  <div className="form-group position-relative">
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfMarriage"
                      value={formData.dateOfMarriage}
                      onChange={handleChange}
                    />
                    <i
                      className="fa fa-calendar position-absolute"
                      style={{
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        fontSize: "18px",
                        zIndex: 1,
                      }}
                    ></i>
                  </div>
                </div>
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Husband / Spouse Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Husband / spouse name"
                    name="spouseName"
                    value={formData.spouseName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-4 mb-m">
                  <div className="form-group position-relative">
                    <label className="form-label">ID Proof</label>
                    <div style={{ position: "relative" }}>
                      <select
                        className="form-control"
                        name="idProof"
                        value={formData.idProof}
                        onChange={handleChange}
                        style={{
                          paddingRight: "30px",
                          appearance: "none",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                        }}
                      >
                        <option value="pan">PAN</option>
                        <option value="adhar">Aadhar</option>
                        <option value="drivingLicense">Driving License</option>
                      </select>
                      <i
                        className="fa fa-caret-down"
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                        }}
                      ></i>
                    </div>
                  </div>
                </div>

                {/* ID Number */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">ID Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ID number"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                  />
                </div>
                {/* Diseases */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Diseases</label>
                  <Select
                    isMulti
                    options={diseaseOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleMultiSelectChange("diseases")}
                  />
                </div>
              </div>
              <h6 className="mt-4" style={{ fontSize: "24px" }}>
                Temporary Address
              </h6>
              <div className="row">
                {/* Temporary Address Line 1 */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label"> Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address Line 1"
                    name="tempAddressLine1"
                    value={formData.tempAddressLine1}
                    onChange={handleChange}
                  />
                </div>

                {/* Temporary Address Line 2 */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label"> Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter  Address Line 2"
                    name="tempAddressLine2"
                    value={formData.tempAddressLine2}
                    onChange={handleChange}
                  />
                </div>

                {/* Temporary Area */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label"> Area</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter  Area"
                    name="tempArea"
                    value={formData.tempArea}
                    onChange={handleChange}
                  />
                </div>

                {/* Temporary Country */}
                <div className="col-xl-4 mb-3">
                  {/* Temporary Country */}
                  <div className="form-group position-relative">
                    <label className="form-label">Country</label>
                    <div style={{ position: "relative" }}>
                      <select
                        className="form-control"
                        name="tempCountry"
                        value={formData.tempCountry}
                        onChange={handleChange}
                        style={{
                          paddingRight: "30px", // Padding to make space for the icon
                          appearance: "none", // Remove default dropdown arrow
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                        }}
                      >
                        <option value="">Select a Country</option>
                        <option value="USA">United States</option>
                        <option value="CAN">Canada</option>
                        <option value="IND">India</option>
                        <option value="GBR">United Kingdom</option>
                        {/* Add more countries as needed */}
                      </select>
                      <i
                        className="fa fa-caret-down"
                        style={{
                          position: "absolute",
                          right: "10px", // Position the icon to the right
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none", // Ensures the icon doesn't block the dropdown
                        }}
                      ></i>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 mb-3">
                  {/* Temporary State */}
                  <div className="from-group position-relative">
                    <label className="form-label">State</label>
                    <div style={{ position: "relative" }}>
                      <select
                        className="form-control"
                        name="tempState"
                        value={formData.tempState}
                        onChange={handleChange}
                        style={{
                          paddingRight: "30px", // Padding to make space for the icon
                          appearance: "none", // Remove default dropdown arrow
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                        }}
                      >
                        <option value="">Select a State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>

                        <option value="Karnataka">Karnataka</option>

                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>

                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>

                        <option value="Delhi">Delhi</option>
                      </select>
                      <i
                        className="fa fa-caret-down"
                        style={{
                          position: "absolute",
                          right: "10px", // Position the icon to the right
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none", // Ensures the icon doesn't block the dropdown
                        }}
                      ></i>
                    </div>
                  </div>
                </div>

                {/* Temporary City */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label"> City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter  City"
                    name="tempCity"
                    value={formData.tempCity}
                    onChange={handleChange}
                  />
                </div>

                {/* Temporary Pincode */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label"> Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Pincode"
                    name="tempPincode"
                    value={formData.tempPincode}
                    onChange={handleChange}
                    pattern="[0-9]{6}"
                    maxLength="6"
                    inputMode="numeric"
                  />
                </div>
              </div>

              {/* Checkbox for Temporary Address */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="useTempAddress"
                  checked={formData.useTempAddress}
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      useTempAddress: e.target.checked,
                    }));
                  }}
                />
                <label className="form-check-label" htmlFor="useTempAddress">
                  Use Temporary Address as Permanent Address
                </label>
              </div>

              {/* Temporary Address Note */}
              {formData.useTempAddress && (
                <p className="text-muted">
                  Temporary address will be saved as the permanent address.
                </p>
              )}
              <h6 className="mt-4" style={{ fontSize: "24px" }}>
                Permanent Address
              </h6>
              <div className="row">
                {/* Address Line 1 */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address Line 1"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                  />
                </div>

                {/* Address Line 2 */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address Line 2"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                  />
                </div>

                {/* Area */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Area"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                  />
                </div>

                {/* Country */}
                <div className="col-xl-4 mb-3">
                  
                  <div className="form-group position-relative">
                    <label className="form-label">Country</label>
                    <div style={{ position: "relative" }}>
                      <select
                        className="form-control"
                        name="tempCountry"
                        value={formData.Country}
                        onChange={handleChange}
                        style={{
                          paddingRight: "30px", // Padding to make space for the icon
                          appearance: "none", // Remove default dropdown arrow
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                        }}
                      >
                        <option value="">Select a Country</option>
                        <option value="USA">United States</option>
                        <option value="CAN">Canada</option>
                        <option value="IND">India</option>
                        <option value="GBR">United Kingdom</option>
                        {/* Add more countries as needed */}
                      </select>
                      <i
                        className="fa fa-caret-down"
                        style={{
                          position: "absolute",
                          right: "10px", // Position the icon to the right
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none", // Ensures the icon doesn't block the dropdown
                        }}
                      ></i>
                    </div>
                  </div>
                </div>

                {/* City */}
              <div className="col-xl-4 mb-3">
                 
                  <div className="from-group position-relative">
                    <label className="form-label">State</label>
                    <div style={{ position: "relative" }}>
                      <select
                        className="form-control"
                        name="tempState"
                        value={formData.State}
                        onChange={handleChange}
                        style={{
                          paddingRight: "30px", // Padding to make space for the icon
                          appearance: "none", // Remove default dropdown arrow
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                        }}
                      >
                        <option value="">Select a State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>

                        <option value="Karnataka">Karnataka</option>

                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>

                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>

                        <option value="Delhi">Delhi</option>
                      </select>
                      <i
                        className="fa fa-caret-down"
                        style={{
                          position: "absolute",
                          right: "10px", // Position the icon to the right
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none", // Ensures the icon doesn't block the dropdown
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
                  {/* City */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                {/* Pincode */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    pattern="[0-9]{6}"
                    maxLength="6"
                    inputMode="numeric" // Opens numeric keypad on mobile devices
                  />
                </div>
              </div>
              <h6 className="mt-4" style={{ fontSize: "24px" }}>
                Other Information
              </h6>
              <div className="row">
                {/* Ad Name */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Ad Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Ad Name"
                    name="adName"
                    value={formData.adName}
                    onChange={handleChange}
                  />
                </div>

                {/* Ad Set */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Ad Set</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Ad Set"
                    name="adSet"
                    value={formData.adSet}
                    onChange={handleChange}
                  />
                </div>

                {/* Campaign Name */}
                <div className="col-xl-4 mb-3">
                  <label className="form-label">Campaign Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Campaign Name"
                    name="campaignName"
                    value={formData.campaignName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                {/* Lead Source Dropdown */}
                <div className="col-xl-4 mb-3" style={{ position: "relative" }}>
                  <label className="form-label">Lead Source</label>
                  <select
                    className="form-control"
                    name="leadSource"
                    value={formData.leadSource}
                    onChange={handleChange}
                    style={{
                      paddingRight: "30px",
                      appearance: "none",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                    }}
                  >
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Twitter">Twitter</option>
                  </select>
                  <i
                    className="fa fa-caret-down"
                    style={{
                      position: "absolute",
                      right: "45px",
                      top: "65%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  ></i>
                </div>

                {/* Status Dropdown */}
                <div className="col-xl-4 mb-3" style={{ position: "relative" }}>
                  <label className="form-label">Status</label>
                  <select
                    className="form-control"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    style={{
                      paddingRight: "30px",
                      appearance: "none",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                    }}
                  >
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                    <option value="Follow-Up">Follow-Up</option>
                  </select>
                  <i
                    className="fa fa-caret-down"
                    style={{
                      position: "absolute",
                      right: "45px",
                      top: "65%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  ></i>
                </div>

                {/* Priority Dropdown */}
                <div className="col-xl-4 mb-3" style={{ position: "relative" }}>
                  <label className="form-label">Priority</label>
                  <select
                    className="form-control"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    style={{
                      paddingRight: "30px",
                      appearance: "none",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                    }}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                  <i
                    className="fa fa-caret-down"
                    style={{
                      position: "absolute",
                      right: "45px",
                      top: "65%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  ></i>
                </div>
              </div>

              <div className="row">
                {/* Comments */}
                <div className="col-xl-12 mb-3">
                  <label className="form-label">Comments</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Save Button */}
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

export default AddLead;
