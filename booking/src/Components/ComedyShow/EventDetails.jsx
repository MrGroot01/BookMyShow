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
  },
  {
    id: 2,
    title: "Standup Comedy Night",
    image: "https://in.bmscdn.com/events/moviecard/ET00345678.jpg",
    date: "Sun 20 Apr",
    time: "7:30 PM",
    price: "₹499 onwards"
  },
  {
    id: 3,
    title: "Improv Comedy Show",
    image: "https://in.bmscdn.com/events/moviecard/ET00378901.jpg",
    date: "Mon 22 Apr",
    time: "8:00 PM",
    price: "₹399 onwards"
  },
  {
    id: 4,
    title: "Roast Battle Live",
    image: "https://in.bmscdn.com/events/moviecard/ET00365432.jpg",
    date: "Tue 23 Apr",
    time: "6:30 PM",
    price: "₹599 onwards"
  },
  {
    id: 5,
    title: "Open Mic Comedy",
    image: "https://in.bmscdn.com/events/moviecard/ET00398765.jpg",
    date: "Wed 24 Apr",
    time: "5:00 PM",
    price: "₹199 onwards"
  },
  {
    id: 6,
    title: "Comedy Festival Special",
    image: "https://in.bmscdn.com/events/moviecard/ET00374125.jpg",
    date: "Fri 26 Apr",
    time: "9:00 PM",
    price: "₹1299 onwards"
  }
];

export default function EventDetails() {
  const { id } = useParams();
  const event = shows.find((e) => e.id === Number(id));

  // ✅ IMPORTANT FIX (prevents crash)
  if (!event) {
    return <h2 style={{ padding: "20px" }}>Event not found</h2>;
  }

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