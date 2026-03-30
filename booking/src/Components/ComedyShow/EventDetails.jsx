import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventDetails.css";
import shows from "../../data/ShowsData";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = shows.find((e) => e.id === Number(id));

  // ✅ Safety check
  if (!event) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Event not found</h2>
        <button onClick={() => navigate("/comedyshow")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="details">
      <h1 className="heading">{event.title}</h1>

      <div className="details-container">
        <img
          src={event.image}
          alt={event.title}
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/300")
          }
        />

        <div className="info">
          <p><strong>📅 Date:</strong> {event.date}</p>
          <p><strong>⏰ Time:</strong> {event.time}</p>
          <p><strong>💰 Price:</strong> {event.price}</p>

          <button className="book-btn">Book Tickets</button>
        </div>
      </div>
    </div>
  );
}