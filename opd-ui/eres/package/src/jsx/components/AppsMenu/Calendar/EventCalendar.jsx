import React, { useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const initialEvents = [
  {
    title: "Vaman<br>Treatment 1",
    start: new Date("2025-01-01 00:00"),
    end: new Date("2025-01-01 01:00"),
    id: "vaman",
    classNames: ["bg-primary"],
    completed: true,
  },
  {
    title: "Vaman<br>Treatment 2",
    start: new Date("2025-01-02 00:00"),
    end: new Date("2025-01-02 01:00"),
    id: "vaman-2",
    classNames: ["bg-primary"],
    completed: true,
  },
  {
    title: "Vaman<br>Treatment 3",
    start: new Date("2025-01-03 00:00"),
    end: new Date("2025-01-03 01:00"),
    id: "vaman-3",
    classNames: ["bg-primary"],
    completed: true,
  },
  {
    title: "Vaman<br>Treatment 4",
    start: new Date("2025-01-04 00:00"),
    end: new Date("2025-01-04 01:00"),
    id: "vaman-4",
    classNames: ["bg-primary"],
    completed: true,
  },
  {
    title: "Vaman<br>Treatment 5",
    start: new Date("2025-01-06 00:00"),
    end: new Date("2025-01-06 01:00"),
    id: "vaman-5",
    classNames: ["bg-primary"],
    completed: true,
  },
  {
    title: "Vaman<br>Treatment 6",
    start: new Date("2025-01-07 00:00"),
    end: new Date("2025-01-07 01:00"),
    id: "vaman-6",
    classNames: ["bg-primary"],
    completed: true,
  },
  {
    title: "Virechan<br>Treatment 1",
    start: new Date("2025-01-08 00:00"),
    end: new Date("2025-01-08 01:00"),
    id: "virechan-1",
    classNames: ["bg-secondary"],
    completed: false,
  },
  {
    title: "Virechan<br>Treatment 2",
    start: new Date("2025-01-09 00:00"),
    end: new Date("2025-01-09 01:00"),
    id: "virechan-2",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Virechan<br>Treatment 3",
    start: new Date("2025-01-10 00:00"),
    end: new Date("2025-01-10 01:00"),
    id: "virechan-3",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Virechan<br>Treatment 4",
    start: new Date("2025-01-11 00:00"),
    end: new Date("2025-01-11 01:00"),
    id: "virechan-4",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Virechan<br>Treatment 5",
    start: new Date("2025-01-13 00:00"),
    end: new Date("2025-01-13 01:00"),
    id: "virechan-5",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Basti<br>Treatment 1",
    start: new Date("2025-01-16 00:00"),
    end: new Date("2025-01-16 01:00"),
    id: "basti-1",
    classNames: ["bg-red"],
    completed: false,
  },
  {
    title: "Basti<br>Treatment 2",
    start: new Date("2025-01-17 00:00"),
    end: new Date("2025-01-17 01:00"),
    id: "basti-2",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Basti<br>Treatment 3",
    start: new Date("2025-01-18 00:00"),
    end: new Date("2025-01-18 01:00"),
    id: "basti-3",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Basti<br>Treatment 4",
    start: new Date("2025-01-20 00:00"),
    end: new Date("2025-01-20 01:00"),
    id: "basti-4",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Basti<br>Treatment 5",
    start: new Date("2025-01-21 00:00"),
    end: new Date("2025-01-21 01:00"),
    id: "basti-5",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Nasya<br>Treatment 1",
    start: new Date("2025-01-22 00:00"),
    end: new Date("2025-01-22 01:00"),
    id: "nasya-1",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Nasya<br>Treatment 2",
    start: new Date("2025-01-23 00:00"),
    end: new Date("2025-01-23 01:00"),
    id: "nasya-2",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Nasya<br>Treatment 3",
    start: new Date("2025-01-24 00:00"),
    end: new Date("2025-01-24 01:00"),
    id: "nasya-3",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Nasya<br>Treatment 4",
    start: new Date("2025-01-25 00:00"),
    end: new Date("2025-01-25 01:00"),
    id: "nasya-4",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Nasya<br>Treatment 5",
    start: new Date("2025-01-27 00:00"),
    end: new Date("2025-01-27 01:00"),
    id: "nasya-5",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Raktamokshan<br>Treatment 1",
    start: new Date("2025-01-28 00:00"),
    end: new Date("2025-01-28 01:00"),
    id: "raktamokshan-1",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Raktamokshan<br>Treatment 2",
    start: new Date("2025-01-29 00:00"),
    end: new Date("2025-01-29 01:00"),
    id: "raktamokshan-2",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Raktamokshan<br>Treatment 3",
    start: new Date("2025-01-30 00:00"),
    end: new Date("2025-01-30 01:00"),
    id: "raktamokshan-3",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Raktamokshan<br>Treatment 4",
    start: new Date("2025-01-31 00:00"),
    end: new Date("2025-01-31 01:00"),
    id: "raktamokshan-4",
    classNames: ["bg-warning"],
    completed: false,
  },
  {
    title: "Raktamokshan<br>Treatment 5",
    start: new Date("2025-02-01 00:00"),
    end: new Date("2025-02-01 01:00"),
    id: "raktamokshan-5",
    classNames: ["bg-warning"],
    completed: false,
  },
];

const EventCalendar = () => {
  const [calendarEvents, setCalendarEvents] = useState(initialEvents);

  const eventClick = (eventClick) => {
    const event = eventClick.event;
    if (event.extendedProps.completed) {
      Swal.fire({
        title: event.title,
        text: "This Treatment is completed.",
        icon: "info",
      });
      return;
    }

    Swal.fire({
      title: event.title,
      html: generateTreatmentCheckboxes(),
      showCancelButton: true,
      confirmButtonText: "Remove",
      confirmButtonColor: "#d33",
      cancelButtonText: "Close",
      preConfirm: () => {
        event.remove();
        Swal.fire("Deleted!", "Your Event has been deleted.", "success");
      },
    });
  };

  const generateTreatmentCheckboxes = () => {
    return `
      <div style="text-align: left;">
        ${[1, 2, 3].map((i) => `
          <div class="form-check mb-1" style="display: flex; justify-content: space-between; align-items: center;">
            <label class="form-check-label" for="treatment${i}">Treatment ${i}</label>
            <input type="checkbox" class="form-check-input" id="treatment${i}" />
          </div>
        `).join('')}
      </div>
    `;
  };

  const handleEventDrop = (info) => {
    const { event } = info;
    const newStart = info.event.start;
    const oldStart = info.oldEvent.start;

    if (newStart < oldStart) {
      Swal.fire({
        title: "Invalid Action",
        text: "You cannot move events to previous dates.",
        icon: "error",
      });
      info.revert();
      return;
    }

    if (event.extendedProps.completed) {
      Swal.fire({
        title: "Invalid Action",
        text: "You cannot move completed events.",
        icon: "error",
      });
      info.revert();
      return;
    }

    const daysDiff = Math.floor((newStart - oldStart) / (1000 * 60 * 60 * 24));
    const updatedEvents = calendarEvents.map((e) => {
      if (new Date(e.start) >= oldStart) {
        const newEventStart = new Date(e.start);
        newEventStart.setDate(newEventStart.getDate() + daysDiff);
        const newEventEnd = new Date(e.end);
        newEventEnd.setDate(newEventEnd.getDate() + daysDiff);
        return { ...e, start: newEventStart, end: newEventEnd };
      }
      return e;
    });

    setCalendarEvents(updatedEvents);
    Swal.fire({
      title: "Events Rescheduled",
      text: `The selected event have been moved by ${daysDiff} day(s).`,
      icon: "info",
    });
  };

  const handleEventDragStart = (info) => {
    if (info.event.extendedProps.completed) {
      info.jsEvent.preventDefault();
    }
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div
        className={eventInfo.event.classNames.join(" ")}
        style={{
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          textAlign: "center",
          fontSize: "1.2em",
        }}
        dangerouslySetInnerHTML={{ __html: eventInfo.event.title }}
      />
    );
  };

  return (
    <div className="animated fadeIn demo-app">
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="mb-3">
                <h5 className="font-weight-bold">Patient Information</h5>
                <Row>
                  <Col md={2}>
                    <h6>Patient ID:</h6>
                    <p>46M10</p>
                  </Col>
                  <Col md={2}>
                    <h6>Patient Name:</h6>
                    <p>Cive Slauw</p>
                  </Col>
                  <Col md={2}>
                    <h6>Doctor Name:</h6>
                    <p>Dr. Jhon Doe</p>
                  </Col>
                  <Col className="d-flex justify-content-end mb-3">
                    <Link to="/app-patient-details" className="btn-btn-link">
                      <Button variant="primary"> Back </Button>
                    </Link>
                  </Col>
                </Row>
              </div>

              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <h5 className="font-weight-bold">Panchkarma Status</h5>
                </li>
              </ol>

              <div className="d-md-flex d-block mb-3 align-items-center">
                <div className="widget-timeline-icon py-3 py-md-2 px-1 overflow-auto">
                  <ul className="timeline">
                    {[
                      {
                        date: "Jan 1, 2025",
                        treatment: "Completed",
                        status: "Vaman",
                        color: "bg-primary",
                      },
                      {
                        date: "Jan 08, 2025",
                        treatment: "Ongoing",
                        status: "Virechan",
                        color: "bg-info",
                      },
                      {
                        date: "Jan 16, 2025",
                        treatment: "Delayed",
                        status: "Basti",
                        color: "bg-red",
                      },
                      {
                        date: "Jan 22, 2025",
                        treatment: "Pending",
                        status: "Nasya",
                        color: "bg-warning",
                      },
                      {
                        date: "Jan 28, 2025",
                        treatment: "Pending",
                        status: "Raktamokshan",
                        color: "bg-warning",
                      },
                    ].map((event, index) => (
                      <li key={index}>
                        <div className={`icon ${event.color}`} />
                        <Link className="timeline-panel text-muted" to="#">
                          <h4 className="mb-2 mt-0 fs-16 font-w600">{event.status}</h4>
                          <h4 className="fs-14 mb-0">
                            <strong>Date:</strong> {event.date}
                          </h4>
                          <h4 className="fs-14 mb-1">
                            <strong>Status:</strong> {event.treatment}
                          </h4>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="demo-app-calendar" id="mycalendartest">
                <FullCalendar
                  defaultView="dayGridMonth"
                 
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                  }}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  events={calendarEvents}
                  editable={true}
                  droppable={true}
                  eventDurationEditable={false}
                  eventClick={eventClick}
                  eventContent={renderEventContent}
                  eventDrop={handleEventDrop}
                  eventDragStart={handleEventDragStart}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EventCalendar;