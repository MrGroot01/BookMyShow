import React from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";
import shows from "../../data/ShowsData";

export default function EventDetails() {
  const { id } = useParams();
  const event = shows.find((e) => e.id === Number(id));

  if (!event) return <h2>Event not found</h2>;

  return (
    <div className="details">
      <h1 className="heading">{event.title}</h1>

      <div className="details-container">
        
        {/* LEFT */}
        <div className="left">
          <img src={event.image} alt={event.title} />
        </div>

        {/* RIGHT */}
        <div className="right">
          <p>📅 {event.date}</p>
          <p>⏰ 6:00 PM</p>
          <p>⏳ 1 hour 20 minutes</p>
          <p>👥 Age Limit - 16yrs +</p>
          <p>🌐 English</p>
          <p>🎭 {event.category}</p>
          <p>📍 {event.venue}</p>

          <div className="price-box">
            <p className="price">{event.price}</p>
            <button className="book-btn">Book Now</button>
          </div>
        </div>

      </div>
    </div>
  );
}