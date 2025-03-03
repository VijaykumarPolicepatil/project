import React, { useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const AddForm = () => {
  const [formData, setFormData] = useState({
    formType: "feedback",
    title: "",
    description: "",
    image: null,
    diseaseType: "",
    selectedQuestions: [],
  });

  const [showAddButton, setShowAddButton] = useState(false);
  const [showQuestionDropdown, setShowQuestionDropdown] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const handleTypeChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      formType: selectedOption.value,
      diseaseType: "",
      selectedQuestions: [],
    }));
    setShowAddButton(false);
    setShowQuestionDropdown(true);
  };

  const handleDiseaseChange = (selectedOption) => {
    setFormData((prev) => ({ ...prev, diseaseType: selectedOption.value }));
  };

  const questionsData = [
    { value: "how_are_you", label: "How are you going to do consulting?" },
    { value: "how_do_you", label: "How do you feel hungry?" },
    { value: "when_do_you", label: "When do you have breakfast?" },
    { value: "when_do_you_eat", label: "When do you eat?" },
    { value: "are_meal_and_snack", label: "Are meal and snack times regular?" },
    {
      value: "do_you_have",
      label: "Do you have the habit of sleeping during the day?",
    },
    {
      value: "does_you_body_feel",
      label: "Does your body feel heavy? (Do you feel less energetic?)",
    },
    { value: "do_you_feel_heat", label: "Do you feel heat in your body?" },
    {
      value: "what_illnesses",
      label: "What illnesses have you had since childhood?",
    },
    {
      value: "is_there_swelling",
      label: "Is there swelling anywhere on the body?",
    },
  ];

  const differentQuestions = [
    "When do you have breakfast?",
    "What is your favorite food?",
    "What time do you usually eat lunch?",
    "How often do you snack?",
    "Do you eat breakfast regularly?",
    "How many hours do you sleep?",
    "How often do you exercise?",
    "What activities make you feel hot?",
    "Have you had any surgeries?",
    "Where is the swelling located?",
  ];

  const handleQuestionChange = (selectedOption) => {
    if (selectedOption) {
      const index = questionsData.findIndex(
        (q) => q.label === selectedOption.label
      );
      if (index !== -1) {
        const differentQuestion = differentQuestions[index];

        if (!formData.selectedQuestions.includes(differentQuestion)) {
          setFormData((prev) => ({
            ...prev,
            selectedQuestions: [...prev.selectedQuestions, differentQuestion],
          }));
          setShowAddButton(true);
          setShowQuestionDropdown(false);
        }
      }
    }
  };

  const handleDeleteQuestion = (question) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData((prev) => ({
          ...prev,
          selectedQuestions: prev.selectedQuestions.filter(
            (q) => q !== question
          ),
        }));
        setShowQuestionDropdown(true);
        Swal.fire("Deleted!", "Your question has been deleted.", "success");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleAddQuestion = () => {
    setShowQuestionDropdown(true);
    setShowAddButton(false);
  };

  const options = [
    { value: "feedback", label: "Feedback Form" },
    { value: "disease", label: "Disease Form" },
    { value: "campaign", label: "Campaign Form" },
    { value: "interest", label: "Interested In" },
  ];

  const diseases = [
    { value: "diabetes", label: "Diabetes" },
    { value: "sleep_problem", label: "Sleep Problem" },
    { value: "dental_care", label: "Dental Care" },
    { value: "hypertension", label: "Hypertension" },
  ];

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedQuestions = Array.from(formData.selectedQuestions);
    const [removed] = reorderedQuestions.splice(result.source.index, 1);
    reorderedQuestions.splice(result.destination.index, 0, removed);

    setFormData((prev) => ({
      ...prev,
      selectedQuestions: reorderedQuestions,
    }));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "20px",
              }}
            >
              <Link to="/forms" className="btn btn-link">
                <Button variant="primary">Back</Button>
              </Link>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row mb-2">
                <div className="col-xl-4">
                  <div className="form-group mb-3">
                    <label className="form-label">Form Title:</label>
                    <input
                      name="title"
                      className="form-control"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Image:</label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                  {formData.image && (
                    <div>
                      <img
                        src={formData.image}
                        alt="Preview"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  )}
                </div>
                <div className="col-xl-8">
                  <div className="form-group">
                    <label className="form-label">Description:</label>
                    <textarea
                      name="description"
                      className="form-control"
                      value={formData.description}
                      onChange={handleChange}
                      style={{ minHeight: "160px" }}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-xl-12">
                  <label className="form-label">Select Form Type:</label>
                  <Select
                    value={options.find(
                      (option) => option.value === formData.formType
                    )}
                    onChange={handleTypeChange}
                    options={options}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        minHeight: "50px",
                        height: "50px",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        lineHeight: "50px",
                      }),
                      dropdownIndicator: (provided) => ({
                        ...provided,
                        padding: "4px",
                      }),
                      indicatorSeparator: (provided) => ({
                        ...provided,
                        display: "none",
                      }),
                    }}
                  />
                </div>
              </div>
              {formData.formType === "disease" && (
                <div className="row mb-3">
                  <div className="col-xl-12">
                    <label className="form-label">Select Disease:</label>
                    <Select
                      value={diseases.find(
                        (disease) => disease.value === formData.diseaseType
                      )}
                      onChange={handleDiseaseChange}
                      options={diseases}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          minHeight: "50px",
                          height: "50px",
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          lineHeight: "50px",
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          padding: "4px",
                        }),
                        indicatorSeparator: (provided) => ({
                          ...provided,
                          display: "none",
                        }),
                      }}
                    />
                  </div>
                </div>
              )}
              {showQuestionDropdown && (
                <div className="row mb-3">
                  <div className="col-xl-12">
                    <label className="form-label">Select Question:</label>
                    <Select
                      onChange={handleQuestionChange}
                      options={questionsData}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          minHeight: "50px",
                          height: "50px",
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          lineHeight: "50px",
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          padding: "4px",
                        }),
                        indicatorSeparator: (provided) => ({
                          ...provided,
                          display: "none",
                        }),
                      }}
                    />
                  </div>
                </div>
              )}
              {formData.selectedQuestions.length > 0 && showAddButton && (
                <div className="row mb-3">
                  <div className="col-xl-12">
                    <button
                      type="button"
                      className="btn btn-info mt-2"
                      onClick={handleAddQuestion}
                    >
                      Add More Questions
                    </button>
                  </div>
                </div>
              )}
              <DragDropContext onDragEnd={onDragEnd}>
                {formData.selectedQuestions.length > 0 && (
                  <Droppable droppableId="questions">
                    {(provided) => (
                      <div
                        className="table-responsive"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        <div
                          id="question"
                          className="dataTables_wrapper no-footer"
                        >
                          <table className="table table-striped lead-list mb-4 dataTablesCard fs-14 dataTable no-footer">
                            <thead>
                              <tr role="row">
                                <th></th>
                                <th>Selected Questions</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {formData.selectedQuestions.map(
                                (question, index) => (
                                  <Draggable
                                    key={question}
                                    draggableId={question}
                                    index={index}
                                  >
                                    {(provided) => (
                                      <tr
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <td
                                          style={{
                                            width: "50px",
                                            textAlign: "center",
                                          }}
                                        >
                                          <i
                                            className="fa fa-bars"
                                            style={{ cursor: "move" }}
                                          ></i>
                                        </td>

                                        <td>{question}</td>

                                        <td
                                          style={{
                                            textAlign: "center",
                                            width: "100px",
                                            padding: "0",
                                          }}
                                        >
                                          <div
                                            className="d-flex justify-content-center align-items-center"
                                            style={{
                                              height: "100%",
                                              display: "flex",
                                              justifyContent: "center",
                                              alignItems: "center",
                                            }}
                                          >
                                            <Link
                                              to="#"
                                              className="delete"
                                              onClick={() =>
                                                handleDeleteQuestion(question)
                                              }
                                              style={{ cursor: "pointer" }}
                                            >
                                              <i
                                                className="fa fa-trash fs-18 text-danger"
                                                aria-hidden="true"
                                                style={{
                                                  fontSize: "18px",
                                                  display: "inline-block",
                                                }}
                                              ></i>
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  </Draggable>
                                )
                              )}
                              {provided.placeholder}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </Droppable>
                )}
              </DragDropContext>

              <div className="col-xl-12 d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn"
                    style={{ backgroundColor: "orange", color: "white" }}
                  >
                    Save as Draft
                  </button>
                  <button
                    type="button"
                    className="btn"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      marginLeft: "10px",
                    }}
                  >
                    Publish
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
