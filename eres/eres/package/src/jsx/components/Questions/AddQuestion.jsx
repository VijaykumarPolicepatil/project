import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const AddQuestion = () => {
  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState("short_answer");
  const [details, setDetails] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isToggleOn, setIsToggleOn] = useState(false);

  const [multipleChoiceOptions, setMultipleChoiceOptions] = useState([
    "Option 1",
    "Option 2",
  ]);
  const [checkboxOptions, setCheckboxOptions] = useState([
    "Option 1",
    "Option 2",
  ]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showValidationOptions, setShowValidationOptions] = useState(false);
  const [validationType, setValidationType] = useState("");
  const [criteria, setCriteria] = useState("");
  const [isFirstSwitchOn, setIsFirstSwitchOn] = useState(false); // State for the first switch

  const [fields, setFields] = useState([
    { validationType: "", criteria: "", field1: "", field2: "" },
  ]);
  const [sentiments, setSentiments] = useState(
    multipleChoiceOptions.map(() => "neutral") // Initialize all to 'neutral'
  );
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
    validateForm(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
    validateForm(e.target.value);
  };

  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  const handleTypeChange = (e) => {
    setQuestionType(e.target.value);
    validateForm(question);
    setShowValidationOptions(false);
    setValidationType("");
  };

  const validateForm = (value) => {
    if (value.trim() === "") {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Question Submitted: ${question}\nDetails: ${details}\nParagraph: ${paragraph}\nMultiple Choice Options: ${multipleChoiceOptions.join(
        ", "
      )}\nCheckbox Options: ${checkboxOptions.join(
        ", "
      )}\nDate: ${selectedDate}\nTime: ${selectedTime}`
    );
  };

  const handleToggleChange = () => {
    setIsToggleOn(!isToggleOn);
  };

  const handleOptionChange = (index, value, type) => {
    if (type === "multiple_choice") {
      const updatedOptions = [...multipleChoiceOptions];
      updatedOptions[index] = value;
      setMultipleChoiceOptions(updatedOptions);
    } else {
      const updatedOptions = [...checkboxOptions];
      updatedOptions[index] = value;
      setCheckboxOptions(updatedOptions);
    }
  };
  const addhandleopn = () => {
    setCheckboxOptions([...checkboxOptions, ""]);
  };
  const handleMultipleChoiceChange = (index, value) => {
    const updatedOptions = [...multipleChoiceOptions];
    updatedOptions[index] = value;
    setMultipleChoiceOptions(updatedOptions);
  };

  const addMultipleChoiceOption = () => {
    setMultipleChoiceOptions([...multipleChoiceOptions, ""]);
  };

  const deleteMultipleChoiceOption = () => {
    if (multipleChoiceOptions.length > 0) {
      const updatedOptions = multipleChoiceOptions.slice(0, -1); // Remove the last option
      setMultipleChoiceOptions(updatedOptions);
    }
  };
  const deleteChoiceOption = (index) => {
    const updatedOptions = checkboxOptions.filter((_, i) => i !== index);
    setCheckboxOptions(updatedOptions);
    // Also update sentiments to match the new options
    const updatedSentiments = sentiments.filter((_, i) => i !== index);
    setSentiments(updatedSentiments);
  };

  const handleFirstSwitchChange = () => {
    setIsFirstSwitchOn((prevState) => {
      const newState = !prevState; // Toggle the state
      console.log(
        newState ? "Switching to Important" : "Switching to Not Important"
      );
      return newState; // Return the new state
    });
  };

  const handleSentimentChange = (index, value) => {
    const updatedSentiments = [...sentiments];
    updatedSentiments[index] = value; // Update the sentiment for the specific option
    setSentiments(updatedSentiments);
  };

  const handleValidationTypeChange = (index, e) => {
    const newFields = [...fields];
    newFields[index].validationType = e.target.value;
    newFields[index].criteria = ""; // Reset criteria when validation type changes
    setFields(newFields);
  };

  const handleCriteriaChange = (index, e) => {
    const newFields = [...fields];
    newFields[index].criteria = e.target.value;
    setFields(newFields);
  };

  const handleFieldChange = (index, e) => {
    const newFields = [...fields];
    newFields[index][e.target.name] = e.target.value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([
      ...fields,
      { validationType: "", criteria: "", field1: "", field2: "" },
    ]);
  };

  const handleDelete = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };
  const getPlaceholderText = (validationType) => {
    switch (validationType) {
      case "number":
        return "Enter a number ";
      case "text":
        return "Enter text  here";
      case "length":
        return "Enter length ";
      case "regex":
        return "Enter pattern ";
      default:
        return "Enter value";
    }
  };
  const getDisplayName = (validationType) => {
    switch (validationType) {
      case "length":
        return "Enter length ";
      case "regex":
        return "Enter pattern ";
      default:
        return "Enter value";
    }
  };
  return (
    <div className="row">
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
              <Link to="/questions" className="btn btn-link">
                <Button variant="primary">Back</Button>
              </Link>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-xl-8">
                  <div className="form-group">
                    <label className="form-label">Question:</label>
                    <input
                      type="text"
                      className="form-control "
                      value={question}
                      onChange={handleQuestionChange}
                      placeholder="Enter your question here"
                      required
                    />
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="form-group position-relative">
                    <label className="form-label">Select Type:</label>
                    <select
                      className="form-control"
                      value={questionType}
                      onChange={handleTypeChange}
                      style={{
                        paddingRight: "30px",
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    >
                      <option value="short_answer">Short Answer</option>
                      <option value="paragraph">Paragraph</option>
                      <option value="multiple_choice">Multiple Choice</option>
                      <option value="checkbox">Checkbox</option>
                      <option value="date">Date</option>
                      <option value="time">Time</option>
                    </select>
                    <i
                      className="fa fa-caret-down"
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "65%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                      }}
                    ></i>
                  </div>
                </div>
              </div>

              {questionType === "short_answer" && (
                <>
                  {fields.map((field, index) => (
                    <div key={index} className="row mb-3">
                      <div className="col-xl-4">
                        <label className="form-label">
                          Response Validation:
                        </label>
                        <div className="form-group position-relative">
                          <select
                            className="form-control"
                            value={field.validationType}
                            onChange={(e) => {
                              const selectedValue = e.target.value;
                              handleValidationTypeChange(index, e);
                              // Set Field 1 to the display name of the selected validation type
                              const displayName =
                                getPlaceholderText(selectedValue);
                              handleFieldChange(index, {
                                target: { name: "field1", value: displayName },
                              });
                            }}
                            style={{
                              paddingRight: "30px",
                              appearance: "none",
                              WebkitAppearance: "none",
                              MozAppearance: "none",
                            }}
                          >
                            <option value="">Select Validation Type</option>
                            <option value="number">Number</option>
                            <option value="text">Text</option>
                            <option value="length">Length</option>
                            <option value="regex">Regular Expression</option>
                          </select>
                          <i
                            className="fa fa-caret-down"
                            style={{
                              position: "absolute",
                              right: "15px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              pointerEvents: "none",
                            }}
                          ></i>
                        </div>
                      </div>
                      {field.validationType && (
                        <div className="col-xl-4">
                          <label className="form-label">
                            Validation Criteria:
                          </label>
                          <div className="form-group position-relative">
                            {field.validationType === "number" && (
                              <select
                                className="form-control"
                                value={field.criteria}
                                onChange={(e) => handleCriteriaChange(index, e)}
                              >
                                <option value="greater_than">
                                  Greater Than
                                </option>
                                <option value="greater_than_equal">
                                  Greater Than or Equal To
                                </option>
                                <option value="less_than">Less Than</option>
                                <option value="less_than_equal">
                                  Less Than or Equal To
                                </option>
                                <option value="between">Between</option>
                                <option value="not_between">Not Between</option>
                                <option value="is_number">Is Number</option>
                                <option value="whole_number">
                                  Whole Number
                                </option>
                              </select>
                            )}
                            {field.validationType === "text" && (
                              <select
                                className="form-control"
                                value={field.criteria}
                                onChange={(e) => handleCriteriaChange(index, e)}
                              >
                                <option value="contains">Contains</option>
                                <option value="does_not_contain">
                                  Does Not Contain
                                </option>
                                <option value="email">Email</option>
                                <option value="url">URL</option>
                              </select>
                            )}
                            {field.validationType === "length" && (
                              <select
                                className="form-control"
                                value={field.criteria}
                                onChange={(e) => handleCriteriaChange(index, e)}
                              >
                                <option value="min">Minimum Length</option>
                                <option value="max">Maximum Length</option>
                              </select>
                            )}
                            {field.validationType === "regex" && (
                              <select
                                className="form-control"
                                value={field.criteria}
                                onChange={(e) => handleCriteriaChange(index, e)}
                              >
                                <option value="contains">Contains</option>
                                <option value="does_not_contain">
                                  Does Not Contain
                                </option>
                                <option value="matches">Matches</option>
                                <option value="does_not_match">
                                  Does Not Match
                                </option>
                              </select>
                            )}
                          </div>
                        </div>
                      )}
                      {field.validationType && (
                        <>
                          <div className="col-xl-2">
                            <label className="form-label">
                              Enter Response:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="field1"
                              value={field.field1}
                              onChange={(e) => handleFieldChange(index, e)}
                              placeholder={getPlaceholderText(
                                field.validationType
                              )} // Set dynamic placeholder
                            />
                          </div>
                          <div className="col-xl-2">
                            <button
                              className="btn btn-link text-danger"
                              onClick={() => handleDelete(index)}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center", // Center the button content horizontally
                                height: "100%", // Make button height match input field
                                padding: "0", // Remove padding for better alignment
                              }}
                            >
                              <i
                                className="fa fa-times"
                                style={{ fontSize: "18px", marginRight: "5px" }}
                              ></i>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                  <div className="row mb-3">
                    <div className="col-12 text-right">
                      <button className="btn btn-info" onClick={handleAddField}>
                        Add Validation
                      </button>
                    </div>
                  </div>
                </>
              )}
              {questionType === "paragraph" && (
                <>
                  {fields.map((field, index) => (
                    <div key={index} className="row mb-3">
                      <div className="col-xl-4">
                        <label className="form-label">
                          Response Validation:
                        </label>
                        <div className="form-group position-relative">
                          <select
                            className="form-control"
                            value={field.validationType}
                            onChange={(e) =>
                              handleValidationTypeChange(index, e)
                            }
                            style={{
                              paddingRight: "30px",
                              appearance: "none",
                              WebkitAppearance: "none",
                              MozAppearance: "none",
                            }}
                          >
                            <option value="">Select Validation Type</option>
                            <option value="length">Length</option>
                            <option value="regex">Regular Expression</option>
                          </select>
                          <i
                            className="fa fa-caret-down"
                            style={{
                              position: "absolute",
                              right: "15px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              pointerEvents: "none",
                            }}
                          ></i>
                        </div>
                      </div>

                      {field.validationType && (
                        <div className="col-xl-4">
                          <label className="form-label">
                            Validation Criteria:
                          </label>
                          <div className="form-group position-relative">
                            {field.validationType === "length" && (
                              <select
                                className="form-control"
                                value={field.criteria}
                                onChange={(e) => handleCriteriaChange(index, e)}
                              >
                                <option value="min">Minimum Length</option>
                                <option value="max">Maximum Length</option>
                              </select>
                            )}
                            {field.validationType === "regex" && (
                              <select
                                className="form-control"
                                value={field.criteria}
                                onChange={(e) => handleCriteriaChange(index, e)}
                              >
                                <option value="contains">Contains</option>
                                <option value="does_not_contain">
                                  Does Not Contain
                                </option>
                                <option value="matches">Matches</option>
                                <option value="does_not_match">
                                  Does Not Match
                                </option>
                              </select>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Show input fields based on validation type */}
                      {field.validationType && (
                        <>
                          <div className="col-xl-2">
                            <label className="form-label">
                              Enter Response:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="inputField1"
                              value={field.inputField1}
                              onChange={(e) => handleFieldChange(index, e)}
                              placeholder={getDisplayName(field.validationType)} // Dynamic placeholder
                            />
                          </div>
                        </>
                      )}

                      <div className="col-xl-2">
                        <button
                          className="btn btn-link text-danger"
                          onClick={() => handleDelete(index)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", // Center the button content
                            padding: "0", // Remove padding for better alignment
                            height: "100%", // Make button height match input field
                          }}
                        >
                          <i
                            className="fa fa-times"
                            style={{ fontSize: "18px", marginRight: "5px" }}
                          ></i>
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="row mb-3">
                    <div className="col-12 text-right">
                      <button className="btn btn-info" onClick={handleAddField}>
                        Add New Field
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Multiple Choice Section */}
              {questionType === "multiple_choice" && (
                <div className="form-group col-xl-4">
                  <label className="form-label">Select Options:</label>
                  {multipleChoiceOptions.map((option, index) => (
                    <div
                      className="form-check"
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexGrow: 1,
                        }}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="multipleChoiceOptions"
                          id={`option${index}`}
                          value={option}
                          style={{ marginRight: "20px" }}
                        />
                        <input
                          className="form-control mt-1"
                          type="text"
                          value={option}
                          onChange={(e) =>
                            handleMultipleChoiceChange(index, e.target.value)
                          }
                          style={{ width: "300px" }}
                        />
                      </div>

                      {/* Sentiment Radio Buttons and Delete Button on the right side */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "30px",
                          gap: "30px",
                        }}
                      >
                        <label
                          className="form-check-label"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <input
                            type="radio"
                            name={`sentiment${index}`}
                            value="positive"
                            className="form-check-input"
                            style={{ marginRight: "5px" }}
                          />
                          Positive
                        </label>
                        <label
                          className="form-check-label"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <input
                            type="radio"
                            name={`sentiment${index}`}
                            value="negative"
                            className="form-check-input"
                            style={{ marginRight: "5px" }}
                          />
                          Negative
                        </label>
                        <label
                          className="form-check-label"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <input
                            type="radio"
                            name={`sentiment${index}`}
                            value="neutral"
                            className="form-check-input"
                            style={{ marginRight: "5px" }}
                            checked={sentiments[index] === "neutral"} // Check if this is the selected sentiment
                            onChange={() =>
                              handleSentimentChange(index, "neutral")
                            }
                          />
                          Neutral
                        </label>

                        {/* Delete Option Button positioned with the radio buttons */}
                        <button
                          type="button"
                          className="btn btn-link"
                          onClick={() => deleteMultipleChoiceOption(index)} // Pass index to delete function
                          style={{
                            marginLeft: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fa fa-times"
                            style={{ fontSize: "18px", marginRight: "5px" }}
                          ></i>{" "}
                          {/* Font Awesome X Icon */}
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Add Option Button */}
                  <button
                    type="button"
                    className="btn btn-link mt-2"
                    onClick={addMultipleChoiceOption}
                  >
                    Add Option
                  </button>
                </div>
              )}

              {questionType === "checkbox" && (
                <div className="form-group col-xl-4">
                  <label className="form-label">Select Options:</label>
                  {checkboxOptions.map((option, index) => (
                    <div
                      className="form-check"
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexGrow: 1,
                        }}
                      >
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`checkbox${index}`}
                          value={option}
                          style={{ marginRight: "20px" }}
                        />
                        <input
                          className="form-control mt-1"
                          type="text"
                          value={option}
                          onChange={(e) =>
                            handleOptionChange(
                              index,
                              e.target.value,
                              "checkbox"
                            )
                          }
                          style={{ width: "300px" }}
                        />
                      </div>

                      {/* Sentiment Radio Buttons and Delete Button on the right side */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "30px",
                          gap: "30px",
                        }}
                      >
                        <label
                          className="form-check-label"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <input
                            type="radio"
                            name={`sentiment${index}`}
                            value="positive"
                            className="form-check-input"
                            style={{ marginRight: "5px" }}
                            onChange={() =>
                              handleSentimentChange(index, "positive")
                            }
                          />
                          Positive
                        </label>
                        <label
                          className="form-check-label"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <input
                            type="radio"
                            name={`sentiment${index}`}
                            value="negative"
                            className="form-check-input"
                            style={{ marginRight: "5px" }}
                            onChange={() =>
                              handleSentimentChange(index, "negative")
                            }
                          />
                          Negative
                        </label>
                        <label
                          className="form-check-label"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <input
                            type="radio"
                            name={`sentiment${index}`}
                            value="neutral"
                            className="form-check-input"
                            style={{ marginRight: "5px" }}
                            checked={sentiments[index] === "neutral"}
                            onChange={() =>
                              handleSentimentChange(index, "neutral")
                            }
                          />
                          Neutral
                        </label>

                        <button
                          type="button"
                          className="btn btn-link"
                          onClick={() => deleteChoiceOption(index)} // Pass index to delete function
                          style={{
                            marginLeft: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fa fa-times"
                            style={{ fontSize: "18px", marginRight: "5px" }}
                          ></i>
                          {/* Font Awesome X Icon */}
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Add Option Button */}
                  <button
                    type="button"
                    className="btn btn-link mt-2"
                    onClick={addhandleopn} // Function to add a new checkbox option
                  >
                    Add Option
                  </button>
                </div>
              )}

              <div className="mb-3">
                {/* Toggle Switch for Important/Not Important */}
                <div className="form-check form-switch mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="firstSwitch"
                    checked={isFirstSwitchOn}
                    onChange={handleFirstSwitchChange}
                  />
                  <label className="form-check-label" htmlFor="firstSwitch">
                    {isFirstSwitchOn ? " Important" : "Not Important"}
                  </label>
                </div>

                {/* Required Switch */}
                <div className="d-flex align-items-center mt-3">
                  <span className="text-gray-700 me-3">Required:</span>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={isToggleOn}
                      onChange={handleToggleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      {isToggleOn ? "On" : "Off"}
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
