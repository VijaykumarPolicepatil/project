import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'; 

const Questions = () => {
    const [searchQueries, setSearchQueries] = useState({
        Question: "",
        SelectiveType:"",
        required: ""
    });
    const [sortField, setSortField] = useState("Question");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 7;

    const [staticData, setStaticData] = useState([
        {
            Question: "How are you going to do consulting?",
            SelectiveType:"Short Answer",
            required: "Yes"
        },
      
        {
            Question: "How do you feel hungry?",
            SelectiveType: "Paragraph",
            required: "Yes"
           
        },
        // Add more static questions as needed
    ]);

  
    const handleSearch = (event, field) => {
        setSearchQueries({
            ...searchQueries,
            [field]: event.target.value
        });
    };

  
    const handleSort = (field) => {
        const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
        setSortField(field);
        setSortOrder(order);
    };

    const filteredData = staticData
        .filter(question => 
            Object.keys(searchQueries).every(key => 
                question[key]?.toString().toLowerCase().includes(searchQueries[key].toLowerCase())
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

    const handleDelete = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this question!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
            customClass: {
                confirmButton: 'btn btn-white',
                cancelButton: 'btn btn-danger'   
            },
            buttonsStyling: false 
        }).then((result) => {
            if (result.isConfirmed) {
              
                const newData = [...staticData]; 
                newData.splice(index, 1);
                setStaticData(newData); 
                Swal.fire("Deleted!", "Your question has been deleted.", "success");
            } else {
                Swal.fire("Cancelled", "Your question is safe :)", "info");
            }
        });
    };

    return (
        <>
            <div className="row mb-3">
                <div className="col-xl-12 text-end">
                    <Link to="/add-question" className="btn btn-primary btn-rounded add-lead">+ Add Question</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <div id="question" className="dataTables_wrapper no-footer">
                                    <table className="table table-striped lead-list mb-4 dataTablesCard fs-14 dataTable no-footer">
                                        <thead>
                                            <tr role="row">
                                                <th onClick={() => handleSort("Question")} style={{ cursor: 'pointer' }}>
                                                    Question
                                                    {sortField === "Question" && (sortOrder === "asc" ? "↑" : "↓")}
                                                    <div>
                                                        <input
                                                            className="form-control input-search"
                                                            value={searchQueries.Question}
                                                            onChange={(e) => handleSearch(e, "Question")}
                                                            placeholder="Search Question"
                                                        />
                                                    </div>
                                                </th>
                                                <th onClick={() => handleSort("SelectiveType")} style={{ cursor: 'pointer' }}>
                                                    Selective Type
                                                    {sortField === "SelectiveType" && (sortOrder === "asc" ? "↑" : "↓")}
                                                    <div>
                                                        <input
                                                            className="form-control input-search"
                                                            value={searchQueries.SelectiveType}
                                                            onChange={(e) => handleSearch(e, "SelectiveType")}
                                                            placeholder="Search SelectiveType"
                                                        />
                                                    </div>
                                                </th>
                                                <th onClick={() => handleSort("required")} style={{ cursor: 'pointer' }}>
                                                    Required
                                                    {sortField === "required" && (sortOrder === "asc" ? "↑" : "↓")}
                                                    <div>
                                                        <input
                                                            className="form-control input-search"
                                                            value={searchQueries.required}
                                                            onChange={(e) => handleSearch(e, "required")}
                                                            placeholder="Search Required"
                                                        />
                                                    </div>
                                                </th>
                                                <th style={{ textAlign: 'center' }}>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((question, index) => (
                                                <tr key={index}>
                                                    <td>{question.Question}</td>
                                                    <td>{question.SelectiveType}</td>
                                                    <td>{question.required}</td>
                                                    
                                                    <td>
                                                        <div className="d-flex justify-content-around">
                                                        
                                                            <Link to="/add-question" className="edit detail me-1">
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

export default Questions;