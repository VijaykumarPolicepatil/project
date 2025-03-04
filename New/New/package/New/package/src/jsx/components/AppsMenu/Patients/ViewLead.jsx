// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
// 
import Swal from 'sweetalert2';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
//Images
import defaultAvatar from "../../../../../src/assets/images/avatar/patient_profile.png";

// Appoinments
const initialEvents = [
  {
    title: "Booked",
    start: new Date("2025-02-15 10:00:00"), 
    end: new Date("2025-02-15 11:30:00"),
    classNames: ["bg-red"],
  },
  {
    title: "Booked",
    start: new Date("2025-02-18 11:45:00"),
    end: new Date("2025-02-18 12:30:00"),
    classNames: ["bg-red"],
  },
  {
    title: "Booked",
    start: new Date("2025-01-20 12:45:00"),
    end: new Date("2025-01-20 13:30:00"),
    classNames: ["bg-red"],
  },
];
const ViewLead = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isPersonalModalOpen, setIsPersonalModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isPlatformModalOpen, setIsPlatformModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isFileInputDisabled, setIsFileInputDisabled] = useState(false);
  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState("short_answer");
  const [details, setDetails] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [noteDescription, setNoteDescription] = useState("");
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const [isFollowUpModalVisible, setIsFollowUpModalVisible] = useState(false);
  const [followUpReason, setFollowUpReason] = useState("");
  const [nextAction, setNextAction] = useState("");
  const [nextFollowUpDate, setNextFollowUpDate] = useState("");
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
  const [isFirstSwitchOn, setIsFirstSwitchOn] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState(initialEvents);

  const [formData, setFormData] = useState({
    platforms: ["instagram", "facebook", "campaignName1", "campaignName2"],
    name: "Cive Slauw",
    Contact: "+1234567890",
    email: "info@example.com",
    profileImage: defaultAvatar,
    branch: "Nashik",
    additionalContact: "+1234567890",
    dob: "January 1, 1995",
    height: "175 cm",
    weight: "70 kg",
    occupation: "Software Engineer",
    married: false,
    marriageDate: "June 15, 2020",
    spouseName: "John Doe",
    idProof: "Passport",
    idNumber: "AB1234567",

    //Address details
    tempAddressLine1: "Akshya Nagar 1st Block 1st Cross",
    tempAddressLine2: "",
    tempArea: "Rammurthy Nagar",
    tempCity: "Bangalore",
    tempState: "Karnataka",
    tempPincode: "560016",
    addressLine1: "Akshya Nagar 1st Block 1st Cross",
    addressLine2: "",
    area: "Rammurthy Nagar",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560016",
    country: "",

    //Question feilds
    surname: "",
    firstName: "",
    husbandOrFatherName: "",
    dob1: "",
    age: "",
    whatsappNumber1: "",
    weighting: "",
    city1: "",
    district: "",
    profession: "",
    stomachCleaned: "",
    stomachClearedFeeling: "",
    hungerLevel: "",
    breakfastTime: [],
    mealRegularity: "",
    occasionalEating: "",
    foodPreference: [],
    thirstLevel: "",
    waterHabit: "",
    sleepHabit: "",
  });

  const handleEditProfileClick = () => {
    setIsProfileModalOpen(true);
  };

  const handleEditPersonalClick = () => {
    setIsPersonalModalOpen(true);
  };

  const handleEditAddressClick = () => {
    setIsAddressModalOpen(true);
  };
  const handleEditPlatformClick = () => {
    setIsPlatformModalOpen(true);
  };
  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const platformOptions = [
    { value: "instagram", label: "Instagram" },
    { value: "facebook", label: "Facebook" },
    { value: "campaignName1", label: "Campaign Name 1" },
    { value: "campaignName2", label: "Campaign Name 2" },
  ];

  const handleMultiSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setFormData((prevState) => ({
      ...prevState,
      platforms: selectedValues, // Updated from diseases to platforms
    }));
  };
  const handleSubmitProfile = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", formData);
    setIsProfileModalOpen(false); // Close the modal after submission
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the image
    } else {
      setSelectedImage(null);
      setImagePreview(null);
    }
  };

  const handleSubmitPersonal = (e) => {
    e.preventDefault();
    console.log("Personal Data:", formData);
    setIsPersonalModalOpen(false); // Close the modal after submission
  };

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    console.log("Address Data:", formData);
    setIsAddressModalOpen(false); // Close the modal after submission
  };

  const handleSubmitPlatforms = (e) => {
    e.preventDefault();
    console.log("Platforms Data:", formData.platforms); // Updated to platforms
    setIsPlatformModalOpen(false); // Close the modal after submission
  };
  // question forms

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
  const deleteChoiceOption = () => {
    if (multipleChoiceOptions.length > 0) {
      const updatedOptions = multipleChoiceOptions.slice(0, -1); // Remove the last option
      setMultipleChoiceOptions(updatedOptions);
    }
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

  // Notes
  const handleAddNote = () => {
    // Handle the note submission logic here
    console.log("Note Added:", noteDescription);
    setNoteDescription(""); // Clear the text area
    handleClose(); // Close the modal
  };
  // folllow up
  const openFollowUpModal = () => setIsFollowUpModalVisible(true);
  const closeFollowUpModal = () => {
    setIsFollowUpModalVisible(false);
    // Reset form fields when closing the modal
    setFollowUpReason("");
    setNextAction("");
    setNextFollowUpDate("");
  };
  const handleAddFollowUp = () => {
    // Logic to add the follow-up
    console.log(followUpReason, nextAction, nextFollowUpDate);
    closeFollowUpModal(); // Close the modal after adding the follow-up
  };
  // question fileds
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name) => (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: [...prevState[name], value],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: prevState[name].filter((item) => item !== value),
      }));
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Data:', formData);
  // };

  const renderEventContent = (eventInfo) => {
    return (
      <div
        style={{
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "transparent", 
        }}
      >
        <strong>{eventInfo.event.title}</strong> {/* Title in red */}
      </div>
    );
  };

  const handleEventClick = (eventClickInfo) => {
    const event = eventClickInfo.event;
    if (event.title === "Booked") { // Check if the title is "Booked"
      Swal.fire({
        title: event.title,
        text: "TimeSlot Already Booked.",
        icon: "info",
      });
    }
  };


  const formatTime = (dateStr, addHours = 0) => {
    const date = new Date(dateStr);
    date.setHours(date.getHours() + addHours); // Add hours
  
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  const handleDateClick = (info) => {
    const calendarApi = info.view.calendar; // Get calendar instance
    const viewMode = calendarApi.view.type; // Get current calendar view type
  
    const formattedDate = formatDate(info.dateStr);
    const startTime = formatTime(info.dateStr);       // Original time
    const endTime = formatTime(info.dateStr, 1);      // 1 hour later
    const timeSlot = startTime + " - " + endTime; // Fixed time slot for week mode
  
    // Define available time slots
    const timeSlots = [
      "09:00 AM - 10:00 AM",
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "12:00 PM - 01:00 PM",
      "01:00 PM - 02:00 PM",
      "02:00 PM - 03:00 PM",
      "03:00 PM - 04:00 PM",
      "04:00 PM - 05:00 PM",
      "05:00 PM - 06:00 PM",
      "06:00 PM - 07:00 PM",
      "07:00 PM - 08:00 PM",
      "08:00 PM - 09:00 PM"
    ];
  
    let timeSlotHTML = "";
    
    if (viewMode === "dayGridMonth" ) {
      // Show list with radio buttons
      timeSlotHTML = `
    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
      ${timeSlots
        .map(
          (slot, index) => `
          <div style="display: flex; align-items: center; width: 48%; margin-bottom: 5px;">
            <input type="radio" name="timeSlot" id="slot${index}" value="${slot}" 
              ${slot === "11:00 AM - 12:00 PM" || slot === "06:00 PM - 07:00 PM" ? "disabled" : ""}> 
            <label for="slot${index}" style="margin-left: 5px; ${slot === "11:00 AM - 12:00 PM" || slot === "06:00 PM - 07:00 PM" ? "color: lightgray" : ""}">
              ${slot}
            </label>
          </div>
        `
        )
        .join("")}
    </div>
  `;
    } else if (viewMode === "timeGridWeek" || viewMode === "timeGridDay") {
      // Show only the selected time slot
      timeSlotHTML = `
      <div style="display: flex; flex-direction: column; gap: 10px; text-align: left;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <input type="radio" name="timeSlot" id="timeslot" value="${timeSlot}" checked />
          <label for="timeslot" style="flex-grow: 1;">${timeSlot}</label>
        </div>
      </div>
    `;
    
    }
  
    Swal.fire({
      title: (viewMode === "timeGridWeek" || viewMode === "timeGridDay") ? `Book TimeSlot for ${formattedDate}` : `Select TimeSlot for ${formattedDate}`,
      html: timeSlotHTML,
      showCancelButton: true,
      confirmButtonText: "Book Appointment",
      confirmButtonColor: "#d33",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const selected = document.querySelector("input[name='timeSlot']:checked");
        
        if (!selected) {
          Swal.showValidationMessage("Please select a time slot!");
          return false;
        }
  
        return selected.value;
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        Swal.fire("Appointment Booked!", `Your appointment is scheduled at ${result.value}.`, "success");
      }
    }); 
  };

  return (
    <>
      <div className="row">
        <div className="col-xl-6 ">
          <div className="card">
            <div className="card-body">
              <div className="media d-sm-flex d-block text-center text-sm-start pb-4 mb-4 border-bottom">
                <img
                  alt=""
                  className="rounded me-sm-4 me-0"
                  width={130}
                  // src={avater}
                  src={formData.profileImage}
                />
                <div className="media-body align-items-center ">
                  <div className="d-sm-flex d-block justify-content-between my-3 my-sm-0">
                    <div>
                      <h3 className="fs-22 text-black font-w600 mb-3">
                        {formData.name}
                      </h3>
                    </div>
                    <span className="me-3">
                      <Link
                        to="#"
                        onClick={handleEditProfileClick}
                        className="edit-staff"
                      >
                        <i className="fa fa-pencil fs-18 text-success"></i>
                      </Link>
                    </span>
                  </div>
                  <Link
                    to="#"
                    className="btn bgl-primary btn-rounded text-black mb-2 me-2"
                  >
                    {" "}
                    <svg
                      className="me-2 scale5"
                      width={14}
                      height={14}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 0.500061V3.00006H21.25L16.625 7.62506C15 6.25006 12.875 5.50006 10.5 5.50006C5 5.50006 0.5 10.0001 0.5 15.5001C0.5 21.0001 5 25.5001 10.5 25.5001C16 25.5001 20.5 21.0001 20.5 15.5001C20.5 13.1251 19.75 11.0001 18.375 9.37506L23 4.75006V8.00006H25.5V0.500061H18ZM10.5 23.0001C6.375 23.0001 3 19.6251 3 15.5001C3 11.3751 6.375 8.00006 10.5 8.00006C14.625 8.00006 18 11.3751 18 15.5001C18 19.6251 14.625 23.0001 10.5 23.0001Z"
                        fill="#2BC155"
                      />
                    </svg>{" "}
                    Male
                  </Link>
                  
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <div className="media">
                    <span className="p-3 border border-primary-light rounded-circle me-3">
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M27.5716 13.4285C27.5716 22.4285 16.0001 30.1428 16.0001 30.1428C16.0001 30.1428 4.42871 22.4285 4.42871 13.4285C4.42871 10.3596 5.64784 7.41637 7.8179 5.24631C9.98797 3.07625 12.9312 1.85712 16.0001 1.85712C19.0691 1.85712 22.0123 3.07625 24.1824 5.24631C26.3524 7.41637 27.5716 10.3596 27.5716 13.4285Z"
                            stroke="#2BC155"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.0002 17.2857C18.1305 17.2857 19.8574 15.5588 19.8574 13.4286C19.8574 11.2983 18.1305 9.57141 16.0002 9.57141C13.87 9.57141 12.1431 11.2983 12.1431 13.4286C12.1431 15.5588 13.87 17.2857 16.0002 17.2857Z"
                            stroke="#2BC155"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="30.8571"
                              height="30.8571"
                              fill="white"
                              transform="translate(0.571533 0.571411)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="media-body">
                      <span className="d-block text-light mb-2">Address</span>
                      <p className="fs-18 text-dark font-w600 mb-0">Nashik</p>
                      {/* <p className="fs-18 text-dark">{formData.address}</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="media">
                    <span className="p-3 border border-primary-light rounded-circle me-3">
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M27.5716 13.4285C27.5716 22.4285 16.0001 30.1428 16.0001 30.1428C16.0001 30.1428 4.42871 22.4285 4.42871 13.4285C4.42871 10.3596 5.64784 7.41637 7.8179 5.24631C9.98797 3.07625 12.9312 1.85712 16.0001 1.85712C19.0691 1.85712 22.0123 3.07625 24.1824 5.24631C26.3524 7.41637 27.5716 10.3596 27.5716 13.4285Z"
                            stroke="#2BC155"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.0002 17.2857C18.1305 17.2857 19.8574 15.5588 19.8574 13.4286C19.8574 11.2983 18.1305 9.57141 16.0002 9.57141C13.87 9.57141 12.1431 11.2983 12.1431 13.4286C12.1431 15.5588 13.87 17.2857 16.0002 17.2857Z"
                            stroke="#2BC155"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="30.8571"
                              height="30.8571"
                              fill="white"
                              transform="translate(0.571533 0.571411)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="media-body">
                      <span className="d-block text-light mb-2">Branch</span>
                      <p className="fs-18 text-dark font-w600 mb-0">Nashik</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-md-0 mb-3">
                  <div className="media">
                    <span className="p-3 border border-primary-light rounded-circle me-3">
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.2884 21.7563V25.6138C28.2898 25.9719 28.2165 26.3264 28.073 26.6545C27.9296 26.9826 27.7191 27.2771 27.4553 27.5192C27.1914 27.7613 26.8798 27.9456 26.5406 28.0604C26.2014 28.1751 25.8419 28.2177 25.4853 28.1855C21.5285 27.7555 17.7278 26.4035 14.3885 24.238C11.2817  22.2638 8.64771 19.6297 6.67352 16.523C4.50043 13.1685 3.14808 9.34928 2.72601 5.37477C2.69388 5.0192 2.73614 4.66083 2.8501 4.32248C2.96405 3.98413 3.14721 3.67322 3.38792 3.40953C3.62862 3.14585 3.92159 2.93517 4.24817 2.79092C4.57475 2.64667 4.9278 2.57199 5.28482 2.57166H9.14232C9.76634 2.56552 10.3713 2.78649 10.8445 3.1934C11.3176 3.60031 11.6267 4.16538 11.714 4.78329C11.8768 6.01778 12.1788 7.22988 12.6141 8.39648C12.7871 8.85671 12.8245 9.35689 12.722 9.83775C12.6194 10.3186 12.3812 10.76 12.0354 11.1096L10.4024 12.7426C12.2329 15.9617 14.8983 18.6271 18.1174 20.4576L19.7504 18.8246C20.1001 18.4789 20.5414 18.2406 21.0223 18.1381C21.5031 18.0355 22.0033 18.073 22.4636 18.246C23.6302 18.6813 24.8423 18.9832 26.0767 19.1461C26.7014 19.2342 27.2718 19.5488 27.6796 20.0301C28.0874 20.5113 28.304 21.1257 28.2884 21.7563Z"
                          stroke="#2BC155"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="media-body">
                      <span className="d-block text-light mb-2">
                        WhatsApp Phone Number
                      </span>
                      <p className="fs-18 text-dark font-w600 mb-0">
                        {formData.additionalContact}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="media">
                    <span className="p-3 border border-primary-light rounded-circle me-3">
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.14344 5.14331H25.7168C27.1312 5.14331 28.2884 6.30056 28.2884 7.71498V23.145C28.2884 24.5594 27.1312 25.7166 25.7168 25.7166H5.14344C3.72903 25.7166 2.57178 24.5594 2.57178 23.145V7.71498C2.57178 6.30056 3.72903 5.14331 5.14344 5.14331Z"
                          stroke="#2BC155"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M28.2884 7.71503L15.4301 16.7159L2.57178 7.71503"
                          stroke="#2BC155"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="media-body">
                      <span className="d-block text-light mb-2">Email</span>
                      <p className="fs-18 text-dark font-w600 mb-0">
                        {formData.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Editing Profile */}

        <div
          className={`modal ${isProfileModalOpen ? "show" : ""}`}
          style={{
            display: isProfileModalOpen ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Profile</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsProfileModalOpen(false)}
                ></button>
              </div>
              <form onSubmit={handleSubmitProfile}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="col-form-label">Profile Image:</label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      onChange={handleImageChange}
                      disabled={isFileInputDisabled}
                    />
                    {selectedImage && (
                      <small className="form-text text-muted">
                        Selected file: {selectedImage.name}
                      </small>
                    )}
                    {imagePreview && (
                      <div className="mt-2">
                        <img
                          src={imagePreview}
                          alt="Profile Preview"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3 " style={{ position: "relative" }}>
                    <select
                      className="form-control"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      required
                      style={{
                        paddingRight: "30px",
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    >
                      <option value="">Select Branch</option>
                      <option value="Nashik">Nashik</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
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
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      WhatsApp Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="additionalContact"
                      value={formData.Contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    {" "}
                    Update{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="fs-22 text-black font-w600 mb-0">Platform</h4>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-center mb-3">
                <div className="media me-3">
                  <div className="media-body">
                    <h5 className="mt-0 vertical-text bg-primary rounded-pill px-3 py-2 text-white">
                      Instagram
                    </h5>
                  </div>
                </div>
                <div className="media me-3">
                  <div className="media-body">
                    <h5 className="mt-0 vertical-text bg-primary rounded-pill px-3 py-2 text-white">
                      Facebook
                    </h5>
                  </div>
                </div>
                <div className="media me-3" style={{ width: "190px" }}>
                  <div className="media-body">
                    <h5 className="mt-0 vertical-text bg-primary rounded-pill px-3 py-2 text-white">
                      Campaign Name 1
                    </h5>
                  </div>
                </div>
                <div className="media" style={{ width: "200px" }}>
                  <div className="media-body">
                    <h5 className="mt-0 vertical-text bg-primary rounded-pill px-3 py-2 text-white">
                      Campaign Name 2
                    </h5>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="fs-18 font-w600">Upcoming Follow Ups :</h5>
                <div className="subheading">
                  <p className="mb-1"> Rescheduling confirmation</p>
                  <p className="mb-1">Next action - Call again on 10-Feb</p>
                  <p className="mb-1">Next Follow-Up: 10-Feb-2025</p>
                </div>
              </div>

              <div>
                <h5 className="fs-18 font-w600">Latest Notes:</h5>
                <div className="subheading">
                  <p className="mb-1">
                    Rescheduling confirmation Next action - Call again on 10-Feb
                  </p>
                  <p className="fs-15 mb-0">Date: 11 Jan 2025, 11 AM - 12 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diseases Modal */}
          <div
            className={`modal fade ${isPlatformModalOpen ? "show" : ""}`}
            style={{
              display: isPlatformModalOpen ? "block" : "none",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="editPlatformModalLabel"
            aria-hidden={!isPlatformModalOpen}
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="editPlatformModalLabel">
                    Edit Platform Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-sm"
                    onClick={() => setIsPlatformModalOpen(false)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmitPlatforms}>
                    <Select
                      isMulti
                      name="platforms"
                      options={platformOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={handleMultiSelectChange}
                      value={platformOptions.filter((option) =>
                        formData.platforms.includes(option.value)
                      )}
                      styles={{ marginBottom: "20px" }} // Add margin for spacing
                    />
                    <button type="submit" className="btn btn-primary mt-3">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* personal information */}
        <div className="container-fluid" style={{ padding: "20px" }}>
          <div className="row">
            <div className="col-xl-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="fs-18 text-black font-w600 mb-0">
                          Personal Information
                        </h4>
                        <span>
                          <Link
                            to="#"
                            onClick={handleEditPersonalClick}
                            className="edit-staff"
                          >
                            <i className="fa fa-pencil fs-18 text-success"></i>
                          </Link>
                        </span>
                      </div>
                      <div className="row mb-2">
                        <div className="col-6">
                          <h5 className="f-w-500"> Contact Number:</h5>
                          <span>{formData.additionalContact}</span>
                        </div>
                        <div className="col-6">
                          <h5 className="f-w-500">Date of Birth:</h5>
                          <span>{formData.dob}</span>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-6">
                          <h5 className="f-w-500">Height (cm):</h5>
                          <span>{formData.height}</span>
                        </div>
                        <div className="col-6">
                          <h5 className="f-w-500">Weight (kg):</h5>
                          <span>{formData.weight}</span>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-6">
                          <h5 className="f-w-500">Occupation:</h5>
                          <span>{formData.occupation}</span>
                        </div>
                        <div className="col-6">
                          <h5 className="f-w-500">Married:</h5>
                          <span>{formData.married}</span>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-6">
                          <h5 className="f-w-500">Married:</h5>
                          <span>{formData.married ? "Yes" : "No"}</span>
                        </div>
                        <div className="col-6">
                          <h5 className="f-w-500">Husband/Spouse Name:</h5>
                          <span>{formData.spouseName}</span>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-6">
                          <h5 className="f-w-500">ID Proof:</h5>
                          <span>{formData.idProof}</span>
                        </div>
                        <div className="col-6">
                          <h5 className="f-w-500">ID Number:</h5>
                          <span>{formData.idNumber}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`modal fade ${
                      isPersonalModalOpen ? "show" : ""
                    }`}
                    style={{
                      display: isPersonalModalOpen ? "block" : "none",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="editPersonalModalLabel"
                    aria-hidden={!isPersonalModalOpen}
                  >
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="editPersonalModalLabel"
                          >
                            Edit Personal Information
                          </h5>
                          <button
                            type="button"
                            className="btn-close btn-sm"
                            onClick={() => setIsPersonalModalOpen(false)}
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={handleSubmitPersonal}>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label> Contact Number</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="additionalContact"
                                    value={formData.additionalContact}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group position-relative">
                                  <label>Date of Birth</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    required
                                  />
                                  <i
                                    className="fa fa-calendar position-absolute"
                                    style={{
                                      right: "15px",
                                      top: "65%",
                                      transform: "translateY(-50%)",
                                      pointerEvents: "none",
                                      fontSize: "18px",
                                    }}
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Height (cm)</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Weight (kg)</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Occupation</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="occupation"
                                    value={formData.occupation}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <h5 className="f-w-500">Married</h5>
                                <div className="form-check form-check-inline">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="married"
                                    checked={formData.married}
                                    onChange={handleChange}
                                    id="marriedCheckbox" // Add an ID for accessibility
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="marriedCheckbox"
                                  >
                                    Married
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group position-relative">
                                  <label>Date of Marriage</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="marriageDate"
                                    value={formData.marriageDate}
                                    onChange={handleChange}
                                    required
                                  />
                                  <i
                                    className="fa fa-calendar position-absolute"
                                    style={{
                                      right: "15px",
                                      top: "65%",
                                      transform: "translateY(-50%)",
                                      pointerEvents: "none",
                                      fontSize: "18px",
                                    }}
                                  ></i>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Husband/Spouse Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="spouseName"
                                    value={formData.spouseName}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>{" "}
                                height: "370px",
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group position-relative">
                                  <label className="form-label">ID Proof</label>
                                  <div style={{ position: "relative" }}>
                                    <select
                                      className="form-control"
                                      name="idProof"
                                      value={formData.idProof}
                                      onChange={handleChange}
                                      required
                                      style={{
                                        paddingRight: "30px",
                                        appearance: "none",
                                        WebkitAppearance: "none",
                                        MozAppearance: "none",
                                      }}
                                    >
                                      <option value="PAN">PAN</option>
                                      <option value="Aadhar">Aadhar</option>
                                      <option value="Driving License">
                                        Driving License
                                      </option>
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
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>ID Number</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="idNumber"
                                    value={formData.idNumber}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary mt-3"
                            >
                              Update
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Address details */}
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body pt-3">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4 className="fs-18 text-black font-w600 mb-0">
                        Address Details
                      </h4>
                      <span>
                        <Link
                          to="#"
                          className="edit-staff"
                          onClick={handleEditAddressClick}
                        >
                          <i className="fa fa-pencil fs-18 text-success"></i>
                        </Link>
                      </span>
                    </div>
                    <div className="row mb-2">
                      <div className="col-12 mb-3">
                        <h5 className="f-w-500">Temporary Address:</h5>
                        <span>
                          {formData.tempAddressLine1},{" "}
                          {formData.tempAddressLine2}, {formData.tempArea},{" "}
                          {formData.tempCity}, {formData.tempState},{" "}
                          {formData.tempPincode}
                        </span>
                      </div>
                      <div className="col-12">
                        <h5 className="f-w-500">Permanent Address:</h5>
                        <span>
                          {formData.addressLine1}, {formData.addressLine2},{" "}
                          {formData.area}, {formData.city}, {formData.state},{" "}
                          {formData.pincode}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal */}
                <div
                  className={`modal fade ${isAddressModalOpen ? "show" : ""}`}
                  style={{
                    display: isAddressModalOpen ? "block" : "none",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="editAddressModalLabel"
                  aria-hidden={!isAddressModalOpen}
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="editAddressModalLabel">
                          Edit Address Details
                        </h5>
                        <button
                          type="button"
                          className="btn-close btn-sm"
                          onClick={() => setIsAddressModalOpen(false)}
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleSubmitAddress}>
                          <h5>Temporary Address</h5>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Address Line 1</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="tempAddressLine1"
                                  value={formData.tempAddressLine1}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Address Line 2</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="tempAddressLine2"
                                  value={formData.tempAddressLine2}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label> Area</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="tempArea"
                                  value={formData.tempArea}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>City</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="tempCity"
                                  value={formData.tempCity}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group position-relative">
                                <label className="form-label">State</label>
                                <div style={{ position: "relative" }}>
                                  <select
                                    className="form-control"
                                    name="state"
                                    value={formData.tempStatestate}
                                    onChange={handleChange}
                                    required
                                    style={{
                                      paddingRight: "30px",
                                      appearance: "none",
                                      WebkitAppearance: "none",
                                      MozAppearance: "none",
                                    }}
                                  >
                                    <option value="">Select State</option>
                                    <option value="Andhra Pradesh">
                                      Andhra Pradesh
                                    </option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Madhya Pradesh">
                                      Madhya Pradesh
                                    </option>
                                    <option value="Maharashtra">
                                      Maharashtra
                                    </option>
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
                            <div className="col-md-6">
                              <div className="form-group">
                                <label> Temporay Pincode</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="tempPincode"
                                  value={formData.tempPincode}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group position-relative">
                                <label className="form-label">Country</label>
                                <div style={{ position: "relative" }}>
                                  <select
                                    className="form-control"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    style={{
                                      paddingRight: "30px",
                                      appearance: "none",
                                      WebkitAppearance: "none",
                                      MozAppearance: "none",
                                    }}
                                  >
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                    <option value="UK">UK</option>
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
                          </div>
                          <h5 className="mt-4">Permanent Address</h5>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Address Line 1</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="addressLine1"
                                  value={formData.addressLine1}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Address Line 2</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="addressLine2"
                                  value={formData.addressLine2}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Area</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="area"
                                  value={formData.area}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>City</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="city"
                                  value={formData.city}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group position-relative">
                                <label className="form-label">State</label>
                                <div style={{ position: "relative" }}>
                                  <select
                                    className="form-control"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                    style={{
                                      paddingRight: "30px",
                                      appearance: "none",
                                      WebkitAppearance: "none",
                                      MozAppearance: "none",
                                    }}
                                  >
                                    <option value="">Select State</option>
                                    <option value="Andhra Pradesh">
                                      Andhra Pradesh
                                    </option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Madhya Pradesh">
                                      Madhya Pradesh
                                    </option>
                                    <option value="Maharashtra">
                                      Maharashtra
                                    </option>
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
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Pincode</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="pincode"
                                  value={formData.pincode}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group position-relative">
                                <label className="form-label">Country</label>
                                <div style={{ position: "relative" }}>
                                  <select
                                    className="form-control"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    style={{
                                      paddingRight: "30px",
                                      appearance: "none",
                                      WebkitAppearance: "none",
                                      MozAppearance: "none",
                                    }}
                                  >
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                    <option value="UK">UK</option>
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
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary mt-3"
                          >
                            Update
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* otrher infromation*/}
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="fs-18 text-black font-w600 mb-4">
                      Other Information
                    </h4>
                    <div className="row mb-2">
                      <div className="col-6">
                        <h5 className="f-w-500">Ad Name:</h5>
                        <span> Ad Name</span>
                      </div>
                      <div className="col-6">
                        <h5 className="f-w-500">Ad Set:</h5>
                        <span> Ad Set</span>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-6">
                        <h5 className="f-w-500">Campaign Name:</h5>
                        <span>Campaign Name</span>
                      </div>
                      <div className="col-6">
                        <h5 className="f-w-500">Lead Source:</h5>
                        <span> Faceboook</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body ">
                  <div className="profile-tab">
                    <div className="custom-tab-1">
                      <Tab.Container defaultActiveKey="Appointments">
                        <Nav as="ul" className="nav nav-tabs">
                          <Nav.Item as="li" className="nav-item">
                            <Nav.Link eventKey="Appointments">
                              Appointments
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item">
                            <Nav.Link eventKey="Questionnaire">
                              Questionnaire
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item">
                            <Nav.Link eventKey="Notes">Notes</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li" className="nav-item">
                            <Nav.Link eventKey="Follow-up">Follow up</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content>
                          {/* <Tab.Pane eventKey="Appointments">
                            <div className="card shadow-none">
                              <div className="card-body">
                                <div className="animated fadeIn demo-app">
                                  <Row>
                                    <Col lg={12}>
                                      <Card>
                                        <Card.Body>
                                          <h5 className="font-weight-bold">
                                            Weekly Appointment Schedule
                                          </h5>
                                          <div
                                            className="demo-app-calendar"
                                            id="mycalendartest"
                                          >
                                            <FullCalendar
                                              initialView="timeGridWeek"
                                              headerToolbar={{
                                                left: "prev,next today",
                                                center: "title",
                                                right:
                                                  "timeGridWeek,timeGridDay",
                                              }}
                                              plugins={[
                                                timeGridPlugin,
                                                interactionPlugin,
                                              ]}
                                              events={calendarEvents}
                                              editable={false}
                                              eventContent={renderEventContent}
                                              eventClick={handleEventClick}
                                            />
                                          </div>
                                        </Card.Body>
                                      </Card>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane> */}
                          <Tab.Pane eventKey="Appointments">
                          <div className="card shadow-none">
      <div className="card-body">
        <div
          style={{
            maxHeight: "80vh", // Adjust height to your preference
            overflowY: "auto", // Enables vertical scrolling
            paddingRight: "15px", // Prevents overlapping of scrollbar on content
          }}
        >
          <div classNam="row mb-3">
            <h5 className="font-weight-bold mb-4 text-primary">
              Weekly Appointment Schedule
            </h5>
            <div className="demo-app-calendar" id="mycalendartest">
              <FullCalendar
                initialView="timeGridWeek" // Default view set to week
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay", // Added month and week views
                }}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Include month and week view plugins
                events={calendarEvents} // Set the events to display
                editable={false} // Disable editing of events
                eventContent={renderEventContent} // Custom rendering of event content
                eventClick={handleEventClick} // Handle event clicks
                dateClick={handleDateClick}
                slotMinTime="09:00:00"
                slotMaxTime="21:00:00"
                eventDisplay="block" // Ensures events are displayed as blocks
                height="auto" // Makes the calendar responsive
              />
            </div>
          </div>
        </div>
      </div>
    </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="Questionnaire">
                            <div className="card shadow-none">
                              <div className="card-body">
                                <div
                                  style={{
                                    maxHeight: "80vh", // Adjust height to your preference
                                    overflowY: "auto", // Enables vertical scrolling
                                    paddingRight: "15px", // Prevents overlapping of scrollbar on content
                                  }}
                                >
                                  <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                      {/* Surname */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          Surname
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter surname"
                                          name="surname"
                                          value={formData.surname}
                                          onChange={handleInputChange}
                                        />
                                      </div>

                                      {/* First Name */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          First Name{" "}
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter first name"
                                          name="firstName"
                                          value={formData.firstName}
                                          onChange={handleInputChange}
                                          required
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      {/* Husband or Father Name */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          Husband or Father Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter husband or father name"
                                          name="husbandOrFatherName"
                                          value={formData.husbandOrFatherName}
                                          onChange={handleInputChange}
                                        />
                                      </div>

                                      {/* Date of Birth */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          Date of Birth
                                        </label>
                                        <input
                                          type="date"
                                          className="form-control"
                                          name="dob"
                                          value={formData.dob1}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      {/* Age */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          Age
                                        </label>
                                        <input
                                          type="number"
                                          className="form-control"
                                          placeholder="Enter age"
                                          name="age"
                                          value={formData.age}
                                          onChange={handleInputChange}
                                        />
                                      </div>

                                      {/* WhatsApp Number */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          WhatsApp Number
                                        </label>
                                        <input
                                          type="tel"
                                          className="form-control"
                                          placeholder="Enter WhatsApp number"
                                          name="whatsappNumber"
                                          value={formData.whatsappNumber1}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      {/* Weight Options */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          Weight
                                        </label>
                                        <div>
                                          <div className="form-check">
                                            <input
                                              type="radio"
                                              className="form-check-input"
                                              name="weight"
                                              value="35-45kg"
                                              checked={
                                                formData.weighting === "35-45kg"
                                              }
                                              onChange={handleInputChange}
                                            />
                                            <label className="form-check-label">
                                              35-45kg
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input
                                              type="radio"
                                              className="form-check-input"
                                              name="weight"
                                              value="46-60kg"
                                              checked={
                                                formData.weighting === "46-60kg"
                                              }
                                              onChange={handleInputChange}
                                            />
                                            <label className="form-check-label">
                                              46-60kg
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input
                                              type="radio"
                                              className="form-check-input"
                                              name="weight"
                                              value="61-70kg"
                                              checked={
                                                formData.weighting === "61-70kg"
                                              }
                                              onChange={handleInputChange}
                                            />
                                            <label className="form-check-label">
                                              61-70kg
                                            </label>
                                          </div>
                                          <div className="form-check">
                                            <input
                                              type="radio"
                                              className="form-check-input"
                                              name="weight"
                                              value="over 70kg"
                                              checked={
                                                formData.weighting ===
                                                "over 70kg"
                                              }
                                              onChange={handleInputChange}
                                            />
                                            <label className="form-check-label">
                                              Over 70kg
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      {/* City */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          City
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Name of the city or town"
                                          name="city"
                                          value={formData.city1}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      {/* District Name */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          District Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter district name"
                                          name="district"
                                          value={formData.district}
                                          onChange={handleInputChange}
                                        />
                                      </div>

                                      {/* Profession */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          Profession
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter profession"
                                          name="profession"
                                          value={formData.profession}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      {/* Stomach Cleaned Frequency */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          How often is the stomach cleaned?
                                        </label>
                                        <div>
                                          <input
                                            type="radio"
                                            name="stomachCleaned"
                                            value="1 time"
                                            onChange={handleInputChange}
                                          />{" "}
                                          1 time
                                          <br />
                                          <input
                                            type="radio"
                                            name="stomachCleaned"
                                            value="2 times"
                                            onChange={handleInputChange}
                                          />{" "}
                                          2 times
                                          <br />
                                          <input
                                            type="radio"
                                            name="stomachCleaned"
                                            value="3 times"
                                            onChange={handleInputChange}
                                          />{" "}
                                          3 times
                                          <br />
                                          <input
                                            type="radio"
                                            name="stomachCleaned"
                                            value="more than 3 times"
                                            onChange={handleInputChange}
                                          />{" "}
                                          More than 3 times
                                        </div>
                                      </div>

                                      {/* Stomach Cleared Feeling */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          After the stomach is cleared, how do
                                          you feel?
                                        </label>
                                        <div>
                                          <input
                                            type="radio"
                                            name="stomachClearedFeeling"
                                            value="Satisfied"
                                            onChange={handleInputChange}
                                          />{" "}
                                          Satisfied
                                          <br />
                                          <input
                                            type="radio"
                                            name="stomachClearedFeeling"
                                            value="Dissatisfied"
                                            onChange={handleInputChange}
                                          />{" "}
                                          Dissatisfied
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      {/* Hunger Level */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          How do you get hungry?
                                        </label>
                                        <div>
                                          <input
                                            type="radio"
                                            name="hungerLevel"
                                            value="More"
                                            onChange={handleInputChange}
                                          />{" "}
                                          More
                                          <br />
                                          <input
                                            type="radio"
                                            name="hungerLevel"
                                            value="Organized"
                                            onChange={handleInputChange}
                                          />{" "}
                                          Organized
                                          <br />
                                          <input
                                            type="radio"
                                            name="hungerLevel"
                                            value="Less"
                                            onChange={handleInputChange}
                                          />{" "}
                                          Less
                                        </div>
                                      </div>

                                      {/* Breakfast Time */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          When do you have breakfast?
                                        </label>
                                        <div>
                                          <input
                                            type="checkbox"
                                            value="Morning"
                                            onChange={handleCheckboxChange(
                                              "breakfastTime"
                                            )}
                                          />{" "}
                                          Morning
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="Afternoon"
                                            onChange={handleCheckboxChange(
                                              "breakfastTime"
                                            )}
                                          />{" "}
                                          Afternoon
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="Evening"
                                            onChange={handleCheckboxChange(
                                              "breakfastTime"
                                            )}
                                          />{" "}
                                          Evening
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="At Night"
                                            onChange={handleCheckboxChange(
                                              "breakfastTime"
                                            )}
                                          />{" "}
                                          At Night
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="No"
                                            onChange={handleCheckboxChange(
                                              "breakfastTime"
                                            )}
                                          />{" "}
                                          No
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      {/* Meal and Snack Times Regularity */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          Are meal and snack times regular?
                                        </label>
                                        <div>
                                          <input
                                            type="radio"
                                            name="mealRegularity"
                                            value="Yes"
                                            onChange={handleInputChange}
                                          />{" "}
                                          Yes
                                          <br />
                                          <input
                                            type="radio"
                                            name="mealRegularity"
                                            value="No"
                                            onChange={handleInputChange}
                                          />{" "}
                                          No
                                        </div>
                                      </div>

                                      {/* Occasional Eating Habit */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          Do you have the habit of eating
                                          occasionally, apart from breakfast and
                                          lunch?
                                        </label>
                                        <div>
                                          <input
                                            type="radio"
                                            name="occasionalEating"
                                            value="Yes"
                                            onChange={handleInputChange}
                                          />{" "}
                                          Yes
                                          <br />
                                          <input
                                            type="radio"
                                            name="occasionalEating"
                                            value="No"
                                            onChange={handleInputChange}
                                          />{" "}
                                          No
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      {/* Food Preferences */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          What is more in food?
                                        </label>
                                        <div>
                                          <input
                                            type="checkbox"
                                            value="Non-veg"
                                            onChange={handleCheckboxChange(
                                              "foodPreference"
                                            )}
                                          />{" "}
                                          Non-veg
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="Bakery items"
                                            onChange={handleCheckboxChange(
                                              "foodPreference"
                                            )}
                                          />{" "}
                                          Bakery items
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="Stale items"
                                            onChange={handleCheckboxChange(
                                              "foodPreference"
                                            )}
                                          />{" "}
                                          Stale items
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="Fermented items"
                                            onChange={handleCheckboxChange(
                                              "foodPreference"
                                            )}
                                          />{" "}
                                          Fermented items
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="Fast food"
                                            onChange={handleCheckboxChange(
                                              "foodPreference"
                                            )}
                                          />{" "}
                                          Fast food
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="Junk food"
                                            onChange={handleCheckboxChange(
                                              "foodPreference"
                                            )}
                                          />{" "}
                                          Junk food
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="Spicy foods"
                                            onChange={handleCheckboxChange(
                                              "foodPreference"
                                            )}
                                          />{" "}
                                          Spicy foods
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="Fried food"
                                            onChange={handleCheckboxChange(
                                              "foodPreference"
                                            )}
                                          />{" "}
                                          Fried food
                                          <br />
                                          <input
                                            type="checkbox"
                                            value="None of these"
                                            onChange={handleCheckboxChange(
                                              "foodPreference"
                                            )}
                                          />{" "}
                                          None of these
                                        </div>
                                      </div>

                                      {/* Thirst Level */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          How thirsty are you?
                                        </label>
                                        <div>
                                          <input
                                            type="radio"
                                            name="thirstLevel"
                                            value="More"
                                            onChange={handleInputChange}
                                          />{" "}
                                          More
                                          <br />
                                          <input
                                            type="radio"
                                            name="thirstLevel"
                                            value="Moderate"
                                            onChange={handleInputChange}
                                          />{" "}
                                          Moderate
                                          <br />
                                          <input
                                            type="radio"
                                            name="thirstLevel"
                                            value="Less"
                                            onChange={handleInputChange}
                                          />{" "}
                                          Less
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      {/* Water Drinking Habit */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          Do you have the habit of drinking
                                          water for no reason?
                                        </label>
                                        <div>
                                          <input
                                            type="checkbox"
                                            name="waterHabit"
                                            value="Yes"
                                            onChange={handleInputChange}
                                          />{" "}
                                          Yes
                                          <br />
                                          <input
                                            type="checkbox"
                                            name="waterHabit"
                                            value="No"
                                            onChange={handleInputChange}
                                          />{" "}
                                          No
                                        </div>
                                      </div>

                                      {/* Daytime Sleeping Habit */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          Do you have the habit of sleeping
                                          during the day?
                                        </label>
                                        <div>
                                          <input
                                            type="checkbox"
                                            name="sleepHabit"
                                            value="Yes"
                                            onChange={handleInputChange}
                                          />{" "}
                                          Yes
                                          <br />
                                          <input
                                            type="checkbox"
                                            name="sleepHabit"
                                            value="No"
                                            onChange={handleInputChange}
                                          />{" "}
                                          No
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row mb-3">
                                      {/* Medication */}
                                      <div className="col-xl-6">
                                        <label className="form-label">
                                          Are you taking any medication?
                                        </label>
                                        <div>
                                          <input
                                            type="radio"
                                            name="medication"
                                            value="Yes"
                                            onChange={handleInputChange}
                                          />{" "}
                                          Yes
                                          <br />
                                          <input
                                            type="radio"
                                            name="medication"
                                            value="No"
                                            onChange={handleInputChange}
                                          />{" "}
                                          No
                                        </div>
                                      </div>
                                    </div>

                                    {/* Submit */}
                                    <div className="text-center mt-3">
                                      <button
                                        type="submit"
                                        className="btn btn-primary"
                                      >
                                        Send Form Link
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>

                          <Tab.Pane eventKey="Notes">
                            <div className="card shadow-none">
                              <div className="card-body">
                                {/* Notes Button */}
                                <div className="text-end mb-3">
                                  <Button
                                    variant="primary"
                                    onClick={handleShow}
                                  >
                                    Add Notes
                                  </Button>
                                </div>
                                <div className="mb-2 custom-timeline-panel timeline-panel bgl-dark flex-wrap border-0 p-3 rounded">
                                  <h6 className="font-weight-bold">
                                    Patient missed last appointment,
                                    rescheduling requested.
                                  </h6>
                                  <p className="fs-15 mb-0">
                                    Date: Jan 10, 2025
                                  </p>
                                </div>
                                <div className="mb-2 custom-timeline-panel timeline-panel bgl-dark flex-wrap border-0 p-3 rounded">
                                  <h6 className="font-weight-bold">
                                    Patient confirmed visit for general
                                    check-up.
                                  </h6>
                                  <p className="fs-15 mb-0">
                                    Date: Jan 10, 2025
                                  </p>
                                </div>
                                <div className="mb-2 custom-timeline-panel timeline-panel bgl-dark flex-wrap border-0 p-3 rounded">
                                  <h6 className="font-weight-bold">
                                    Multiple calls, no response. Try again
                                    later.
                                  </h6>
                                  <p className="fs-15 mb-0">
                                    Date: Jan 10, 2025
                                  </p>
                                </div>
                                <div className="mb-2 custom-timeline-panel timeline-panel bgl-dark flex-wrap border-0 p-3 rounded">
                                  <h6 className="font-weight-bold">
                                    Patient postponed due to personal reasons.
                                  </h6>
                                  <p className="fs-15 mb-0">
                                    Date: Jan 10, 2025
                                  </p>
                                </div>
                                <div className="mb-2 custom-timeline-panel timeline-panel bgl-dark flex-wrap border-0 p-3 rounded">
                                  <h6 className="font-weight-bold">
                                    Interested in a health package, requested
                                    more details.
                                  </h6>
                                  <p className="fs-15 mb-0">
                                    Date: Jan 10, 2025
                                  </p>
                                </div>
                                <div className="mb-2 custom-timeline-panel timeline-panel bgl-dark flex-wrap border-0 p-3 rounded">
                                  <h6 className="font-weight-bold">
                                    Prescribed By: Dr. John Doe
                                  </h6>
                                  <p className="fs-15 mb-0">
                                    Date: Jan 10, 2025
                                  </p>
                                </div>
                                <div className="mb-2 custom-timeline-panel timeline-panel bgl-dark flex-wrap border-0 p-3 rounded">
                                  <h6 className="font-weight-bold">
                                    Prescribed By: Dr. John Doe
                                  </h6>
                                  <p className="fs-15 mb-0">
                                    Date: Jan 10, 2025
                                  </p>
                                </div>

                                {/* Modal for Adding Notes */}
                                <Modal show={showModal} onHide={handleClose}>
                                  <Modal.Header closeButton>
                                    <Modal.Title>Add Notes</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <label className="form-label">Notes:</label>
                                    <textarea
                                      className="form-control"
                                      rows="4"
                                      value={noteDescription}
                                      onChange={(e) =>
                                        setNoteDescription(e.target.value)
                                      }
                                      placeholder="Enter your notes here..."
                                    />
                                  </Modal.Body>
                                  <Modal.Footer className="d-flex justify-content-between">
                                    <Button
                                      variant="primary"
                                      onClick={handleAddNote}
                                    >
                                      Add
                                    </Button>
                                  </Modal.Footer>
                                </Modal>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="Follow-up">
                            <div className="card shadow-none">
                              <div className="card-body">
                                {/* Button to Add Follow-Up */}
                                <div className="text-end mb-3">
                                  <Button
                                    variant="primary"
                                    onClick={openFollowUpModal}
                                  >
                                    Add Follow-Up
                                  </Button>
                                </div>
                                {/* Existing Follow-Ups */}
                                <div className="mb-2 custom-timeline-panel timeline-panel bgl-dark flex-wrap border-0 p-3 rounded">
                                  <h6 className="font-weight-bold">
                                    08-Feb-2025
                                  </h6>
                                  <p className="fs-15 mb-0">
                                    Rescheduling confirmation
                                  </p>
                                  <p className="fs-15 mb-0">
                                    Next action - Call again on 10-Feb
                                  </p>
                                  <p className="fs-15 mb-0">
                                    <strong>Next Follow-Up:</strong> 10-Feb-2025
                                  </p>
                                </div>
                                <div className="mb-2 custom-timeline-panel timeline-panel bgl-dark flex-wrap border-0 p-3 rounded">
                                  <h6 className="font-weight-bold">
                                    05-Feb-2025
                                  </h6>
                                  <p className="fs-15 mb-0">
                                    Missed appointment reminder
                                  </p>
                                  <p className="fs-15 mb-0">
                                    Next action - No response, try again
                                  </p>
                                  <p className="fs-15 mb-0">
                                    <strong>Next Follow-Up:</strong> 08-Feb-2025
                                  </p>
                                </div>
                                <div className="mb-2 custom-timeline-panel timeline-panel bgl-dark flex-wrap border-0 p-3 rounded">
                                  <h6 className="font-weight-bold">
                                    01-Feb-2025
                                  </h6>
                                  <p className="fs-15 mb-0">
                                    Follow-up on reschedule
                                  </p>
                                  <p className="fs-15 mb-0">
                                    Next action - Requested 05-Feb date
                                  </p>
                                  <p className="fs-15 mb-0">
                                    <strong>Next Follow-Up:</strong> 05-Feb-2025
                                  </p>
                                </div>
                                {/* Modal for Adding Follow-Up */}
                                <Modal
                                  show={isFollowUpModalVisible}
                                  onHide={closeFollowUpModal}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title>Add Follow Up</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Reason for Follow-Up:
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        rows="4"
                                        value={followUpReason}
                                        onChange={(e) =>
                                          setFollowUpReason(e.target.value)
                                        }
                                        placeholder="Enter reason for follow-up"
                                      />
                                    </div>
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Next action:
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={nextAction}
                                        onChange={(e) =>
                                          setNextAction(e.target.value)
                                        }
                                        placeholder="Enter next action"
                                      />
                                    </div>
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Next Follow-Up:
                                      </label>
                                      <input
                                        type="date"
                                        className="form-control"
                                        value={nextFollowUpDate}
                                        onChange={(e) =>
                                          setNextFollowUpDate(e.target.value)
                                        }
                                      />
                                    </div>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button
                                      variant="primary"
                                      onClick={handleAddFollowUp}
                                    >
                                      Save Follow-Up
                                    </Button>
                                  </Modal.Footer>
                                </Modal>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
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

export default ViewLead;
