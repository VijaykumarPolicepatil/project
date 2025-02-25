
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

import swal from 'sweetalert';

const Lead = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [book, setBook] = useState(false);
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      dob: "1990-01-01",
      contactNumber: "1234567890",
      diseases: "Diabetes",
      status: "New",
      priority: "High",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      dob: "1985-05-15",
      contactNumber: "0987654321",
      diseases: "Hypertension",
      status: "In Progress",
      priority: "Medium",
    },
  ]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [searchQueries, setSearchQueries] = useState({
    id: "",
    name: "",
    email: "",
    dob: "",
    contactNumber: "",
    diseases: "",
  });
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const sort = 7;
  const activePag = useRef(0);
  const [test, setTest] = useState(0);

  // Function to handle search
  const handleSearch = (event, field) => {
    setSearchQueries({
      ...searchQueries,
      [field]: event.target.value,
    });
  };


  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };


  const filteredData = leads
    .filter((lead) =>
      Object.keys(searchQueries).every((key) =>
        lead[key]
          .toString()
          .toLowerCase()
          .includes(searchQueries[key].toLowerCase())
      )
    )
    .sort((a, b) => {
      const modifier = sortOrder === "asc" ? 1 : -1;
      if (a[sortField] < b[sortField]) return -1 * modifier;
      if (a[sortField] > b[sortField]) return 1 * modifier;
      return 0;
    });

  const changeData = (first, second) => {
    const rows = document.querySelectorAll("#lead tbody tr");
    for (var i = 0; i < rows.length; ++i) {
      if (i >= first && i < second) {
        rows[i].classList.remove("d-none");
      } else {
        rows[i].classList.add("d-none");
      }
    }
  };

 
  useEffect(() => {
    changeData(activePag.current * sort, (activePag.current + 1) * sort);
  }, [leads, test]);

  let pagination = Array(Math.ceil(filteredData.length / sort ))
    .fill()
    .map((_, i) => i + 1);

  const onClick = (i) => {
    activePag.current = i;
    changeData(activePag.current * sort, (activePag.current + 1) * sort);
    setTest(i);
  };


  const handleEdit = (lead) => {
  
    navigate("/app-add-leads", { state: { lead } });
  };

  
  const handleDelete = (id) => {
   
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this lead!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
      
        setLeads(leads.filter((lead) => lead.id !== id));
        swal("Poof! Your lead has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your lead is safe!");
      }
    });
  };

 
  const handleSave = () => {
    if (selectedLead) {
      setLeads(
        leads.map((lead) => (lead.id === selectedLead.id ? selectedLead : lead))
      );
    } else {
      const newLead = {
        id: leads.length + 1,
        name: "",
        email: "",
        dob: "",
        contactNumber: "",
        diseases: "",
      };
      setLeads([...leads, newLead]);
    }
    setBook(false);
    setSelectedLead(null);
  };

  return (
    <>
      <div className="row mb-3">
        <div className="col-xl-12 text-end">
          <Link
            to="/app-add-lead"
            className="btn btn-primary btn-rounded add-lead"
            onClick={() => setBook(true)}
          >
            + Add Lead
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <div id="lead" className="dataTables_wrapper no-footer">
                  <table
                    id="example5"
                    className="table table-striped lead-list mb-4 dataTablesCard fs-14 dataTable no-footer"
                  >
                    <thead>
                      <tr role="row">
                        <th onClick={() => handleSort("id")}>
                          ID{" "}
                          {sortField === "id" &&
                            (sortOrder === "asc" ? "↑" : "↓")}
                          <div>
                            <input
                              className="form-control input-search"
                              value={searchQueries.id}
                              onChange={(e) => handleSearch(e, "id")}
                              placeholder="Search ID"
                            />
                          </div>
                        </th>
                        <th onClick={() => handleSort("name")}>
                          Name{" "}
                          {sortField === "name" &&
                            (sortOrder === "asc" ? "↑" : "↓")}
                          <div>
                            <input
                              className="form-control input-search"
                              value={searchQueries.name}
                              onChange={(e) => handleSearch(e, "name")}
                              placeholder="Search Name"
                            />
                          </div>
                        </th>
                        <th onClick={() => handleSort("email")}>
                          Email{" "}
                          {sortField === "email" &&
                            (sortOrder === "asc" ? "↑" : "↓")}
                          <div>
                            <input
                              className="form-control input-search"
                              value={searchQueries.email}
                              onChange={(e) => handleSearch(e, "email")}
                              placeholder="Search Email"
                            />
                          </div>
                        </th>
                        <th
                          onClick={() => handleSort("dob")}
                          style={{ cursor: "pointer" }}
                        >
                          Date of Birth{" "}
                          {sortField === "dob" &&
                            (sortOrder === "asc" ? "↑" : "↓")}
                          <div>
                            <input
                              className="form-control input-search"
                              value={searchQueries.dob}
                              onChange={(e) => handleSearch(e, "dob")}
                              placeholder="Search DOB"
                            />
                          </div>
                        </th>
                        <th onClick={() => handleSort("contactNumber")}>
                          Contact Number{" "}
                          {sortField === "contactNumber" &&
                            (sortOrder === "asc" ? "↑" : "↓")}
                          <div>
                             <input
                              className="form-control input-search"
                              value={searchQueries.contactNumber}
                              onChange={(e) => handleSearch(e, "contactNumber")}
                              placeholder="Search Contact Number"
                            />
                          </div>
                        </th>
                        <th onClick={() => handleSort("diseases")}>
                          Diseases{" "}
                          {sortField === "diseases" &&
                            (sortOrder === "asc" ? "↑" : "↓")}
                          <div>
                            <input
                              className="form-control input-search"
                              value={searchQueries.diseases}
                              onChange={(e) => handleSearch(e, "diseases")}
                              placeholder="Search Diseases"
                            />
                          </div>
                        </th>

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData
                        .slice(
                          activePag.current * sort,
                          (activePag.current + 1) * sort
                        )
                        .map((lead) => (
                          <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.dob}</td>
                            <td>{lead.contactNumber}</td>
                            <td>{lead.diseases}</td>

                            <td>
  <div className="d-flex justify-content-around">
  <Link to="/app-lead-details" className="view detail me-3">
    <i className="fa fa-eye fs-18" aria-hidden="true"></i>
    </Link>
    <Link
      className="edit me-3"
      onClick={() => handleEdit(lead)}
      aria-label="Edit"
    >
      <i className="fa fa-pencil-alt fs-18 text-success"></i>
    </Link>
    <Link
      className="delete me-2"
      onClick={() => handleDelete(lead.id)}
      aria-label="Delete"
    >
      <i className="fa fa-trash fs-18 text-danger"></i>
    </Link>
  </div>
</td>

                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <div className="d-sm-flex text-center justify-content-between align-items-center">
                    <div
                      className="dataTables_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing {activePag.current * sort + 1} to{" "}
                      {filteredData.length > (activePag.current + 1) * sort
                        ? (activePag.current + 1) * sort
                        : filteredData.length}{" "}
                      of {filteredData.length} entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers d-flex justify-content-center align-items-center pb-3">
                      <Link
                        to="#"
                        className="paginate_button previous disabled"
                        onClick={() =>
                          activePag.current > 0 &&
                          onClick(activePag.current - 1)
                        }
                      >
                        Previous
                      </Link>
                      <span className="d-flex">
                        {pagination.map((number, i) => (
                          <Link
                            key={i}
                            to="#"
                            className={`paginate_button d-flex align-items-center justify-content-center ${
                              activePag.current === i ? "current" : ""
                            } ${i > 0 ? "ms-1" : ""}`}
                            onClick={() => onClick(i)}
                          >
                            {number}
                          </Link>
                        ))}
                      </span>
                      <Link
                        to="#"
                        className="paginate_button next disabled"
                        onClick={() =>
                          activePag.current + 1 < pagination.length &&
                          onClick(activePag.current + 1)
                        }
                      >
                        Next
                      </Link>
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

export default Lead;
