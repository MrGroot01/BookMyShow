import React from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";

// ✅ IMPORT DATA
import shows from "../../data/ShowsData";

export default function EventDetails() {
  const { id } = useParams();

  const show = shows.find((s) => s.id === parseInt(id));

  if (!show) return <h2 style={{ color: "white" }}>Event not found</h2>;

  return (
    <div className="event-container">
      
      {/* LEFT SIDE */}
      <div className="event-left">
        
        <img src={show.image} alt={show.title} className="main-image" />

        <div className="tags">
          <span>{show.category}</span>
          <span>Comedy Shows</span>
        </div>

        <div className="interest">
          👍 841 are interested
          <button>I’m Interested</button>
        </div>

        <div className="about">
          <h2>About The Event</h2>
          <p>{show.title} is one of the best live comedy experiences in Bengaluru.</p>
          <p><b>Venue:</b> {show.venue}</p>
          <p><b>Date:</b> {show.date}</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="event-right">
        <div className="booking-box">
          <p>📅 {show.date}</p>
          <p>📍 {show.venue}</p>
          <p>🎭 {show.category}</p>

          <h3>{show.price}</h3>

          <button className="book-btn">Book Now</button>
        </div>
      </div>

    </div>
  );
}