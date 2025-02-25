
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'; // Import SweetAlert2

const Patients = () => {
    const [searchQueries, setSearchQueries] = useState({
        patientId: "",
        Name: "",
        email: "",
        dob: "",
        phone: ""
    });
    const [sortField, setSortField] = useState("patientId");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 7;

    // Static data for patients
    const [staticData, setStaticData] = useState([
        {
            patientId: "461M0",
            Name: "John",
            email: "john.doe@example.com",
            dob: "1990-01-01",
            phone: "1234567890",
        },
        {
            patientId: "46M20",
            Name: "Jane",
            email: "jane.smith@example.com",
            dob: "1985-05-15",
            phone: "0987654321",
        },
        // Add more static patients as needed
    ]);

    // Function to handle search
    const handleSearch = (event, field) => {
        setSearchQueries({
            ...searchQueries,
            [field]: event.target.value
        });
    };

    // Function to handle sorting
    const handleSort = (field) => {
        const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
        setSortField(field);
        setSortOrder(order);
    };

    // Filter and sort data based on search query and sort options
    const filteredData = staticData
        .filter(patient => 
            Object.keys(searchQueries).every(key => 
                patient[key]?.toString().toLowerCase().includes(searchQueries[key].toLowerCase())
            )
        )
        .sort((a, b) => {
            const modifier = sortOrder === "asc" ? 1 : -1;
            if (a[sortField] < b[sortField]) return -1 * modifier;
            if (a[sortField] > b[sortField]) return 1 * modifier;
            return 0;
        });

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const onClick = (page) => {
        setCurrentPage(page);
    };

    // Function to handle delete action
    const handleDelete = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this patient!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
            customClass: {
                confirmButton: 'btn btn-white', // White button for confirmation
                cancelButton: 'btn btn-danger'   // Danger button for cancellation
            },
            buttonsStyling: false // Disable default styling
        }).then((result) => {
            if (result.isConfirmed) {
                // Remove the patient from staticData
                const newData = [...staticData]; // Create a copy of the staticData
                newData.splice(index, 1); // Remove the patient at the specified index
                setStaticData(newData); // Update the state with the new data
                Swal.fire("Deleted!", "Your patient has been deleted.", "success");
            } else {
                Swal.fire("Cancelled", "Your patient is safe :)", "info");
            }
        });
    };

    return (
        <>
            <div className="row mb-3">
                <div className="col-xl-12 text-end">
                    <Link to="/app-add-patient" className="btn btn-primary btn-rounded add-lead">+ Add Patient</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <div id="patient" className="dataTables_wrapper no-footer">
                                    <table className="table table-striped lead-list mb-4 dataTablesCard fs-14 dataTable no-footer">
                                        <thead>
                                            <tr role="row">
                                                <th onClick={() => handleSort("patientId")} style={{ cursor: 'pointer' }}>
                                                    Patient ID
                                                    {sortField === "patientId" && (sortOrder === "asc" ? "↑" : "↓")}
                                                    <div>
                                                        <input
                                                            className="form-control input-search"
                                                            value={searchQueries.patientId}
                                                            onChange={(e) => handleSearch(e, "patientId")}
                                                            placeholder="Search Patient ID"
                                                        />
                                                    </div>
                                                </th>
                                                <th onClick={() => handleSort("Name")} style={{ cursor: 'pointer' }}>
                                                    Name
                                                    {sortField === "Name" && (sortOrder === "asc" ? "↑" : "↓")}
                                                    <div>
                                                        <input
                                                            className="form-control input-search"
                                                            value={searchQueries.Name}
                                                            onChange={(e) => handleSearch(e, "Name")}
                                                            placeholder="Search Name"
                                                        />
                                                    </div>
                                                </th>
                                                <th onClick={() => handleSort("email")} style={{ cursor: 'pointer' }}>
                                                    Email
                                                    {sortField === "email" && (sortOrder === "asc" ? "↑" : "↓")}
                                                    <div>
                                                        <input
                                                            className="form-control input-search"
                                                            value={searchQueries.email}
                                                            onChange={(e) => handleSearch(e, "email")}
                                                            placeholder="Search Email"
                                                        />
                                                    </div>
                                                </th>
                                                <th onClick={() => handleSort("dob")} style={{ cursor: 'pointer' }}>
                                                    Date of Birth
                                                    {sortField === "dob" && (sortOrder === "asc" ? "↑" : "↓")}
                                                    <div>
                                                        <input
                                                            className="form-control input-search"
                                                            value={searchQueries.dob}
                                                            onChange={(e) => handleSearch(e, "dob")}
                                                            placeholder="Search DOB"
                                                        />
                                                    </div>
                                                </th>
                                                <th onClick={() => handleSort("phone")} style={{ cursor: 'pointer' }}>
                                                    Phone Number
                                                    {sortField === "phone" && (sortOrder === "asc" ? "↑" : "↓")}
                                                    <div>
                                                        <input
                                                            className="form-control input-search"
                                                            value={searchQueries.phone}
                                                            onChange={(e) => handleSearch(e, "phone")}
                                                            placeholder="Search Phone"
                                                        />
                                                    </div>
                                                </th>
                                                <th style={{ textAlign: 'center' }}>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((patient, index) => (
                                                <tr key={patient.patientId}>
                                                    <td>{patient.patientId}</td>
                                                    <td>{patient.Name}</td>
                                                    <td>{patient.email}</td>
                                                    <td>{patient.dob}</td>
                                                    <td>{patient.phone}</td>
                                                    <td>
                                                        <div className="d-flex justify-content-around">
                                                            <Link to="/app-patient-details" className="view detail me-3">
                                                                <i className="fa fa-eye fs-18" aria-hidden="true"></i>
                                                            </Link>
                                                            <Link to={{ pathname: "/app-add-lead", state: { patient } }} className="edit detail me-3">
                                                                <i className="fa fa-pencil fs-18 text-success" aria-hidden="true"></i>
                                                            </Link>
                                                            <Link to="#" className="delete" onClick={() => handleDelete(index)}>
                                                                <i className="fa fa-trash fs-18 text-danger" aria-hidden="true"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="d-sm-flex text-center justify-content-between align-items-center">
                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Showing {currentPage * itemsPerPage + 1} to {filteredData.length > (currentPage + 1) * itemsPerPage ? (currentPage + 1) * itemsPerPage : filteredData.length} of {filteredData.length} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers d-flex justify-content-center align-items-center pb-3">
                                            <Link to="#" className={`paginate_button previous ${currentPage === 0 ? "disabled" : ""}`} onClick={() => currentPage > 0 && onClick(currentPage - 1)}>Previous</Link>
                                            <span className="d-flex">
                                                {Array.from({ length: totalPages }, (_, i) => (
                                                    <Link key={i} to="#" className={`paginate_button d-flex align-items-center justify-content-center ${currentPage === i ? "current" : ""} ${i > 0 ? "ms-1" : ""}`} onClick={() => onClick(i)}>
                                                        {i + 1}
                                                    </Link>
                                                ))}
                                            </span>
                                            <Link to="#" className={`paginate_button next ${currentPage + 1 >= totalPages ? "disabled" : ""}`} onClick={() => currentPage + 1 < totalPages && onClick(currentPage + 1)}>Next</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Patients;