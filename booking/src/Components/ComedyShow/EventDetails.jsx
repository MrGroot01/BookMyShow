import React from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";
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
          <p>
            Join us for an evening of laughter, socializing, and connections.
          </p>
          <p><b>Venue:</b> {show.venue}</p>
          <p><b>Date:</b> {show.date}</p>
        </div>

      </div>

      {/* RIGHT SIDE (UPDATED EXACT UI) */}
      <div className="event-right">
        <div className="booking-box">

          <div className="info-row">📅 <span>{show.date}</span></div>
          <div className="info-row">⏰ <span>5:00 PM</span></div>
          <div className="info-row">⏳ <span>1 Hour</span></div>
          <div className="info-row">👤 <span>Age Limit - 18yrs +</span></div>
          <div className="info-row">🌐 <span>English, Hindi, Kannada</span></div>
          <div className="info-row">🎭 <span>{show.category}</span></div>
          <div className="info-row">📍 <span>{show.venue}</span></div>

          <hr />

          <div className="price-section">
            <div>
              <h3>{show.price}</h3>
              <p className="available">Available</p>
            </div>

            <button className="book-btn">Book Now</button>
          </div>

        </div>
      </div>

    </div>
  );
}