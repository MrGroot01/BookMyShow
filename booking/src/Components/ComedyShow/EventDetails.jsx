import React from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";
import shows from "../../data/ShowsData"; // ✅ FIXED

export default function EventDetails() {
  const { id } = useParams();

  const event = shows.find((e) => e.id === Number(id));

  // ✅ SAFETY (prevents blank screen)
  if (!event) {
    return <h2 style={{ padding: "20px" }}>Event not found</h2>;
  }

  return (
    <div className="details">
      <h1 className="heading">{event.title}</h1>

      <div className="details-container">
        <img src={event.image} alt={event.title} />

        <div className="info">
          <p>📅 {event.date}</p>
          <p>⏰ {event.time}</p>
          <p>💰 {event.price}</p>

          <button className="book-btn">Book Tickets</button>
        </div>
      </div>
    </div>
  );
}