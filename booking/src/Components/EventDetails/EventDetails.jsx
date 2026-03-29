import React from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";

const shows = [
  {
    id: 1,
    title: "Drunk & Unhinged: The Weekend Late-night Show",
    image: "https://in.bmscdn.com/events/moviecard/ET00312345.jpg",
    date: "Sun, 29 Mar 2026",
    time: "10:00 PM",
    duration: "1 hour 15 minutes",
    venue: "Just BLR Comedy Club: Bengaluru",
    language: "English, Hindi",
    price: "₹199",
    about:
      "You love dark and dirty jokes? Then this is the show for you.",
  },
];

export default function EventDetails() {
  const { id } = useParams();
  const event = shows.find((e) => e.id === parseInt(id));

  return (
    <div className="event-page">
      <img src={event.image} className="banner" alt="" />

      <div className="event-main">
        {/* LEFT */}
        <div className="left">
          <h1>{event.title}</h1>

          <div className="tags">
            <span>Stand up Comedy</span>
            <span>Comedy Shows</span>
          </div>

          <h2>About The Event</h2>
          <p>{event.about}</p>
        </div>

        {/* RIGHT */}
        <div className="right">
          <p>📅 {event.date}</p>
          <p>⏰ {event.time}</p>
          <p>⏳ {event.duration}</p>
          <p>🌐 {event.language}</p>
          <p>📍 {event.venue}</p>

          <h2>{event.price}</h2>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}