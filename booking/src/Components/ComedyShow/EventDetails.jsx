import React from "react";
import { useParams } from "react-router-dom";
import shows from "../../data/ShowsData";
import "./EventDetails.css";

export default function EventDetails() {
  const { id } = useParams();

  const event = shows.find((e) => e.id === Number(id));

  if (!event) return <h2>Event not found</h2>;

  return (
    <div className="details-page">

      <h1 className="title">{event.title}</h1>

      <div className="details-layout">

        {/* LEFT IMAGE */}
        <div className="left">
          <img src={event.image} alt="" />
        </div>

        {/* RIGHT INFO */}
        <div className="right">

          <div className="info-box">
            <p>📅 {event.date}</p>
            <p>⏰ {event.time}</p>
            <p>⌛ 1 hour 20 minutes</p>
            <p>👥 Age Limit - 16yrs +</p>
            <p>🗣️ {event.language || "English"}</p>
            <p>🎭 {event.category}</p>
            <p>📍 {event.venue}</p>

            <div className="price-box">
              <h3>{event.price}</h3>
              <button>Book Now</button>
            </div>
          </div>

        </div>

      </div>

      {/* TAGS */}
      <div className="tags">
        <span>Stand up Comedy</span>
        <span>Comedy Shows</span>
      </div>

    </div>
  );
}