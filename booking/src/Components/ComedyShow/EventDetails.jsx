import React, { useState } from "react";  // ✅ UPDATED (added useState)
import { useParams } from "react-router-dom";
import "./EventDetails.css";
import shows from "../../data/ShowsData";

export default function EventDetails() {
  const { id } = useParams();

  const show = shows.find((s) => s.id === parseInt(id));

  // ✅ ADDED STATES
  const [showMTicket, setShowMTicket] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  if (!show) return <h2>Event not found</h2>;

  return (
    <div className="page-wrapper">

      {/* TITLE + SHARE */}
      <div className="header">
        <h1>{show.title}</h1>
        <div className="share-icon"></div>
      </div>

      <div className="event-container">

        {/* LEFT SIDE */}
        <div className="event-left">

          <img src={show.image} alt={show.title} className="main-image" />

          <div className="tags">
            <span>{show.category}</span>
            <span>Comedy Shows</span>
          </div>

          <div className="interest">
            👍 392 are interested
            <button>I’m Interested</button>
          </div>

          {/* ABOUT */}
          <div className="about">
            <h2>About The Event</h2>

            <p>
              Join us for an evening of laughter, socializing, and potential connections at our unique
              comedy matchmaking event, <b>Match Me Please!</b> Whether you're looking for love or just
              want to have a great time, our host will charm the crowd with hilarious crowd play and
              interactive games designed to bring out the best in everyone.
            </p>

            <p><b>Event Highlights:</b></p>

            <p><b>Comedy & Crowd Play:</b> Our talented host will entertain and engage the audience.</p>
            <p><b>Matchmaking Fun:</b> Meet potential matches in a relaxed atmosphere.</p>
            <p><b>Socializing Opportunities:</b> Mingle and connect with others.</p>
            <p><b>Dress to Impress:</b> Make a memorable first impression.</p>
            <p><b>Laughs & Connections:</b> Enjoy and connect with like-minded people.</p>

            <p>
              Whether you're hoping to find love or just want to enjoy a fun time, <b>Match Me Please!</b>
              promises laughter and connection.
            </p>
          </div>

          {/* ✅ ===== ADDED START ===== */}

          {/* ARTISTS */}
          <div className="artists">
            <h2>Artists</h2>

            <div className="artist-card">
              <img
                src="https://in.bmscdn.com/artist-images/website/poster/large/munawar-faruqui-1054159-24-03-2020-12-29-33.jpg"
                alt="artist"
              />
              <h4>Munawar Faruqui</h4>
              <p>Actor</p>
            </div>
          </div>

          {/* M-TICKET */}
          <div className="mticket">
            <h2>M-Ticket</h2>

            <div className="mticket-box">
              <span>📱 Contactless Ticketing & Fast-track Entry with M-ticket.</span>
              <span className="learn" onClick={() => setShowMTicket(true)}>
                Learn How
              </span>
            </div>
          </div>

          {/* TERMS */}
          <div className="terms" onClick={() => setShowTerms(true)}>
            <h2>Terms & Conditions ›</h2>
          </div>

          {/* ✅ ===== ADDED END ===== */}

        </div>

        {/* RIGHT SIDE */}
        <div className="event-right">
          <div className="booking-box">

            <div className="info-row">📅 <span>{show.date}</span></div>
            <div className="info-row">⏰ <span>6:00 PM</span></div>
            <div className="info-row">⏳ <span>1 hour 20 minutes</span></div>
            <div className="info-row">👤 <span>Age Limit - 16yrs +</span></div>
            <div className="info-row">🌐 <span>Hindi</span></div>
            <div className="info-row">🎭 <span>{show.category}</span></div>
            <div className="info-row">📍 <span>{show.venue}</span></div>

            <hr />

            <div className="price-section">
              <div>
                <h3>{show.price}</h3>
                <p className="available">Filling Fast</p>
              </div>

              <button className="book-btn">Book Now</button>
            </div>

          </div>
        </div>

      </div>

      {/* ✅ POPUPS (ADDED) */}

     {showMTicket && (
  <div className="popup-overlay">
    <div className="popup large">

      <span className="close" onClick={() => setShowMTicket(false)}>✖</span>

      <h2 className="popup-title">
        How to use the M-ticket for Live Events
      </h2>

      <div className="steps">

        <div className="step">
          <div className="step-number">1</div>
          <p>Log in to BookMyShow from app or mobile browser.</p>
          <img src="https://in.bmscdn.com/m-ticket/assets/step1.png" alt="step1"/>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <p>In your profile section, click on your orders.</p>
          <img src="https://in.bmscdn.com/m-ticket/assets/step2.png" alt="step2"/>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <p>Select your ticket and show the QR code at the event entry.</p>
          <img src="https://in.bmscdn.com/m-ticket/assets/step3.png" alt="step3"/>
        </div>

      </div>
    </div>
  </div>
)}
{showTerms && (
  <div className="popup-overlay">
    <div className="popup">

      <span className="close" onClick={() => setShowTerms(false)}>✖</span>

      <h2>Terms & Conditions</h2>

      <ol>
        <li>Tickets once booked cannot be exchanged or refunded</li>
        <li>An Internet handling fee per ticket may be levied. Please check the total amount before payment</li>
        <li>We recommend that you arrive at-least 30 minutes prior at the venue for a seamless entry</li>
        <li>It is mandatory to wear masks at all times and follow social distancing norms</li>
        <li>Please do not purchase tickets if you feel sick</li>
        <li>Unlawful resale (or attempted unlawful resale) of a ticket would lead to seizure or cancellation of that ticket without refund or other compensation</li>
        <li>Rights of admission reserved</li>
        <li>These terms and conditions are subject to change from time to time at the discretion of the organizer</li>
      </ol>

    </div>
  </div>
)}

    </div>
  );
}