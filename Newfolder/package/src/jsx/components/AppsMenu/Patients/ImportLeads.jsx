import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import swal from "sweetalert";

const ImportLeads = () => {
  const [book, addBook] = useState(false);
  const [data, setData] = useState([]);
  const [test, setTest] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [campaignType, setCampaignType] = useState("Health");
  const [socialMediaType, setSocialMediaType] = useState("Facebook");
  const [isFileInputDisabled, setFileInputDisabled] = useState(true);
  const [selectedLeadIndex, setSelectedLeadIndex] = useState(null); // Track the index of the selected lead

  // Static data for import leads
  const staticData = [
    {
      uploadDate: "2023-10-01",
      filename: "leads.csv",
      campaignType: "Health",
      socialMediaType: "Facebook",
    },
    {
      uploadDate: "2023-10-05",
      filename: "campaign.csv",
      campaignType: "Wellness",
      socialMediaType: "Instagram",
    },
    // Add more static import leads as needed
  ];

  // Active data
  const changeData = (first, sec) => {
    for (let i = 0; i < data.length; ++i) {
      if (i >= first && i < sec) {
        data[i].classList.remove("d-none");
      } else {
        data[i].classList.add("d-none");
      }
    }
  };

  // useEffect hook to set the data once component is mounted
  useEffect(() => {
    setData(document.querySelectorAll("#leads tbody tr"));
  }, [test]);

  // Initialize pagination
  const sort = 7; // Number of records per page
  const activePag = useRef(0);

  activePag.current === 0 && changeData(0, sort);

  let pagination = Array(Math.ceil(staticData.length / sort))
    .fill()
    .map((_, i) => i + 1);

  const onClick = (i) => {
    activePag.current = i;
    changeData(activePag.current * sort, (activePag.current + 1) * sort);
    setTest(i);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleEditClick = (index) => {
    const lead = staticData[index];
    setCampaignType(lead.campaignType);
    setSocialMediaType(lead.socialMediaType);
    setSelectedLeadIndex(index);
    setFileInputDisabled(false);
    addBook(true); // Open the modal
  };

  const handleDeleteClick = (index) => {
    // Show SweetAlert confirmation dialog
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this lead!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // If confirmed, remove the lead from staticData
        staticData.splice(index, 1);
        setTest((prev) => prev + 1); // Trigger re-render
        swal("Poof! Your lead has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your lead is safe!");
      }
    });
  };

  const handleSave = () => {
    if (selectedLeadIndex !== null) {
      // Update existing lead
      staticData[selectedLeadIndex] = {
        ...staticData[selectedLeadIndex],
        campaignType,
        socialMediaType,
      };
    } else {
      // Add new lead logic (if needed)
    }
    addBook(false);
    setSelectedLeadIndex(null);
    setFileInputDisabled(true);
  };

  return (
    <>
      <div className="row mb-3">
        <div className="col-xl-12 text-end">
          <Link
            to={"#"}
            className="btn btn-primary btn-rounded add-lead"
            onClick={() => addBook(true)}
          >
            + Import Leads
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <div id="leads" className="dataTables_wrapper no-footer">
                  <table className="table table-striped lead-list mb-4 dataTablesCard fs-14 dataTable no-footer">
                    <thead>
                      <tr role="row">
                        <th>Upload Date</th>
                        <th>Filename</th>
                        <th>Campaign Type</th>
                        <th>Social Media Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staticData
                        .slice(
                          activePag.current * sort,
                          (activePag.current + 1) * sort
                        )
                        .map((lead, index) => (
                          <tr key={index}>
                            <td>{lead.uploadDate}</td>
                            <td>{lead.filename}</td>
                            <td>{lead.campaignType}</td>
                            <td>{lead.socialMediaType}</td>
                            <td className="d-flex justify-content-around" >
                              <Link
                                to="#"
                               className="view detail me-2"
                                onClick={() => handleEditClick(index)}
                              >
                                <i
                                  className="fa fa-pencil-alt fs-18 text-success"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                              <Link
                                to="#"
                                className="download detail me-2"
                              >
                                <i
                                  className="fa fa-download fs-18"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                              <Link
                                to="#"
                                className="delete"
                                onClick={() => handleDeleteClick(index)}
                              >
                                <i
                                  className="fa fa-trash fs-18 text-danger"
                                  aria-hidden="true"
                                ></i>
                              </Link>
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
                      {staticData.length > (activePag.current + 1) * sort
                        ? (activePag.current + 1) * sort
                        : staticData.length}{" "}
                      of {staticData.length} entries
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
      <Modal centered show={book} onHide={() => addBook(false)} size={"lg"}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Import Leads
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => addBook(false)}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="col-xl-6">
                <div className="form-group position-relative">
                  <label className="col-form-label">Campaign Type:</label>
                  <div style={{ position: "relative" }}>
                    <select
                      className="form-control"
                      value={campaignType}
                      onChange={(e) => setCampaignType(e.target.value)}
                      style={{
                        paddingRight: "30px",
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    >
                      <option value="Health">Health</option>
                      <option value="Wellness">Wellness</option>
                      <option value="Fitness">Fitness</option>
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
              <div className="col-xl-6">
                <div className="form-group position-relative">
                  <label className="col-form-label">Social Media Type:</label>
                  <div style={{ position: "relative" }}>
                    <select
                      className="form-control"
                      value={socialMediaType}
                      onChange={(e) => setSocialMediaType(e.target.value)}
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
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                      }}
                    ></i>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="form-group">
                  <label className="col-form-label">File:</label>
                  <input
                    type="file"
                    className="form-control"
                    accept=".csv"
                    onChange={handleFileChange}
                    disabled={isFileInputDisabled}
                  />
                  {selectedFile && (
                    <small className="form-text text-muted">
                      Selected file: {selectedFile.name}
                    </small>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => addBook(false)}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ImportLeads;
