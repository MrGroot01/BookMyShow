import React from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";

const shows = [
  {
    id: 1,
    title: "Dhandho ft Munawar Faruqui",
    image: "https://in.bmscdn.com/events/moviecard/ET00312345.jpg",
    date: "Sat 18 Apr",
    time: "6:00 PM",
    price: "₹999 onwards"
  }
];

export default function EventDetails() {
  const { id } = useParams();
  const event = shows.find((e) => e.id === Number(id));

  return (
    <div className="details">
      {/* TITLE ABOVE IMAGE */}
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