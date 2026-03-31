import React from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";



export default function EventDetails() {
  const { id } = useParams();
  const show = shows.find((s) => s.id === parseInt(id));

  if (!show) return <h2>Event not found</h2>;

  return (
    <div className="event-container">
      
      {/* LEFT SIDE */}
      <div className="event-left">
        
        {/* IMAGE */}
        <img src={show.image} alt={show.title} className="main-image" />

        {/* TAGS + INTEREST */}
        <div className="tags">
          <span>Open Mic Comedy</span>
          <span>Comedy Shows</span>
        </div>

        <div className="interest">
          👍 841 are interested
          <button>I’m Interested</button>
        </div>

        {/* ABOUT EVENT */}
        <div className="about">
          <h2>About The Event</h2>
          <p>
            Join us for an evening of laughter, socializing, and potential connections 
            at our unique comedy matchmaking event, <b>Match Me Please!</b>
          </p>

          <p><b>Comedy & Crowd Play:</b> Engage with witty interactions.</p>
          <p><b>Matchmaking Fun:</b> Meet potential matches.</p>
          <p><b>Socializing Opportunities:</b> Mingle with others.</p>
          <p><b>Dress to Impress:</b> Make a great impression.</p>
          <p><b>Laughs & Connections:</b> Enjoy and connect.</p>
        </div>
      </div>

      {/* RIGHT SIDE (STICKY) */}
      <div className="event-right">
        <div className="booking-box">
          <p>📅 Sat 4 Apr 2026 - Sat 2 May 2026</p>
          <p>⏰ 5:00 PM</p>
          <p>⏳ 1 Hour</p>
          <p>👤 Age Limit - 18yrs+</p>
          <p>🌐 Languages: English, Hindi, Kannada</p>
          <p>🎭 Comedy</p>
          <p>📍 Bengaluru</p>

          <h3>{show.price}</h3>

          <button className="book-btn">Book Now</button>
        </div>
      </div>

    </div>
  );
}