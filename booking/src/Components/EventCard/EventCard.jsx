import React from "react";
import "./EventCard.css";

const EventCard = ({ title, image, date, venue, price, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
      
      {/* IMAGE */}
      <div className="event-image">
        <img src={image} alt={title} />
      </div>

      {/* DETAILS */}
      <div className="event-details">
        <h3>{title}</h3>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="price">{price}</p>
      </div>

    </div>
  );
};

export default EventCard;