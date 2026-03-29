import React from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";

const shows = [
  {
    id: 1,
    title: "Drunk & Unhinged: The Weekend Late-night Show",
    image:
      "https://in.bmscdn.com/events/moviecard/ET00312345.jpg",
    date: "Sun 29 Mar 2026",
    time: "10:00 PM",
    duration: "1 hour 15 minutes",
    age: "18yrs +",
    language: "English, Hindi",
    category: "Comedy",
    venue: "Just BLR Comedy Club: Bengaluru",
    price: "₹199",
  },
];

export default function EventDetails() {
  const { id } = useParams();
  const event = shows.find((e) => e.id === parseInt(id));

  return (
    <div className="event-wrapper">

      {/* HEADER ROW */}
      <div className="header-row">
        <h1 className="title">{event.title}</h1>

        <div className="interest-box">
          <span className="likes">👍 732 are interested</span>
          <button>I’m Interested</button>
        </div>
      </div>

      {/* TOP SECTION */}
      <div className="top-section">

        {/* LEFT IMAGE */}
        <div className="left">
          <img src={event.image} alt="" />
        </div>

        {/* RIGHT CARD */}
        <div className="right-card">
          <p>📅 {event.date}</p>
          <p>⏰ {event.time}</p>
          <p>⏳ {event.duration}</p>
          <p>👤 Age Limit - {event.age}</p>
          <p>🌐 {event.language}</p>
          <p>🎭 {event.category}</p>
          <p>📍 {event.venue}</p>

          <div className="note">
            Bookings are filling fast for Bengaluru
          </div>

          <div className="price-row">
            <div>
              <h2>{event.price}</h2>
              <span className="fast">Filling Fast</span>
            </div>

            <button>Book Now</button>
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