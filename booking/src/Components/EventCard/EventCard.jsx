import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventCard.css";

export default function EventCard({ show }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/event/${show.id}`)}>
      <img src={show.image} alt={show.title} />

      <h3 className="title">{show.title}</h3>

      <div className="card-bottom">
        <div className="tags">
          <span>Stand up Comedy</span>
          <span>Comedy Shows</span>
        </div>

        <div className="interest">
          👍 391 are interested
        </div>

        <button className="btn">I'm Interested</button>
      </div>
    </div>
  );
}