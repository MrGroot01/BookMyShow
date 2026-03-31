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
        <div className="share-icon">🔗</div>
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
          <div className="popup">
            <button className="close" onClick={() => setShowMTicket(false)}>✖</button>
            <h2>How to use the M-ticket for Live Events</h2>
            <p>Login → Orders → Show QR code at entry</p>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close" onClick={() => setShowTerms(false)}>✖</button>
            <h2>Terms & Conditions</h2>
            <ol>
              <li>Tickets cannot be refunded</li>
              <li>Internet fee may apply</li>
              <li>Arrive early</li>
              <li>Follow rules</li>
              <li>No resale allowed</li>
              <li>Rights reserved</li>
            </ol>
          </div>
        </div>
      )}

    </div>
  );
}