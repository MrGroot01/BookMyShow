import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventCard.css";

export default function EventCard({ show }) {
  const navigate = useNavigate();

  // ✅ Safety check (prevents crash)
  if (!show) return null;

  return (
    <div
      className="event-card"
      onClick={() => navigate(`/event/${show.id}`)}
    >
      <img
        src={show.image}
        alt={show.title}
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/300")
        }
      />

      <h3 className="title">{show.title}</h3>

      <div className="card-bottom">
        <div className="tags">
          <span>Stand up Comedy</span>
          <span>Comedy Shows</span>
        </div>

        <div className="interest">
          👍 391 interested
        </div>

        <button
          className="btn"
          onClick={(e) => e.stopPropagation()} // ✅ prevents navigation on button click
        >
          I'm Interested
        </button>
      </div>
    </div>
  );
}