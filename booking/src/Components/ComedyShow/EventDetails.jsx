import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventDetails.css";
import shows from "../../data/ShowsData";

export default function EventDetails() {
  const [showBooking, setShowBooking] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const show = shows.find((s) => s.id === parseInt(id));

  const [showMTicket, setShowMTicket] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (!show) return <h2>Event not found</h2>;

  return (
    <div className="page-wrapper">

      {/* HEADER */}
      <div className="header">
        <h1>{show.title}</h1>
        <div className="share-icon">🔗</div>
      </div>

      <div className="event-container">

        {/* LEFT */}
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
          </div>

          {/* ARTISTS */}
          <div className="artists">
            <h2>Artists</h2>
            <div className="artist-card">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="artist"/>
              <h4>Munawar Faruqui</h4>
              <p>Actor</p>
            </div>
          </div>

          {/* M-TICKET */}
          <div className="mticket">
            <h2>M-Ticket</h2>
            <div className="mticket-box">
              <span>🎫 Contactless Ticketing & Fast-track Entry with M-ticket.</span>
              <span className="learn" onClick={() => setShowMTicket(true)}>
                Learn How
              </span>
            </div>
          </div>

          {/* TERMS */}
          <div className="terms" onClick={() => setShowTerms(true)}>
            <h2>Terms & Conditions ❯</h2>
          </div>

          {/* ===== YOU MAY ALSO LIKE ===== */}
          <div className="recommend">
            <h2>You May Also Like</h2>
            <p>Events around you, book now</p>

            <div className="carousel-wrapper">

              <button className="arrow left" onClick={scrollLeft}>❮</button>

              <div className="carousel" ref={scrollRef}>
                {shows.map((item) => (
                  <div
                    key={item.id}
                    className="rec-card"
                    onClick={() => navigate(`/event/${item.id}`)}
                  >
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                  </div>
                ))}
              </div>

              <button className="arrow right" onClick={scrollRight}>❯</button>

            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="event-right">
          <div className="booking-box">

            <div className="info-row">📅 {show.date}</div>
            <div className="info-row">⏰ 6:00 PM</div>
            <div className="info-row">⏳ 1 hour 20 minutes</div>
            <div className="info-row">👤 Age Limit - 16yrs +</div>
            <div className="info-row">🌐 Hindi</div>
            <div className="info-row">🎭 {show.category}</div>
            <div className="info-row">📍 {show.venue}</div>

            <hr />

            <div className="price-section">
              <div>
                <h3>{show.price}</h3>
                <p className="available">Filling Fast</p>
              </div>

              <button className="book-btn" onClick={() => setShowBooking(true)}>
  Book Now
</button>
            </div>

          </div>
        </div>

      </div>

      {/* ===== M-TICKET POPUP ===== */}
      {showMTicket && (
        <div className="popup-overlay">
          <div className="popup large">
            <span className="close" onClick={() => setShowMTicket(false)}>✖</span>

            <h2 className="popup-title">How to use the M-ticket for Live Events</h2>

            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <p>Log in to BookMyShow from app or mobile browser.</p>
                <img src="https://s3.envato.com/files/491745873/screen-shots/02_preview2.jpg" />
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <p>In your profile section, click on your orders.</p>
                <img src="https://m.media-amazon.com/images/G/31/smartcommerce/blog/smartbiz/Click-on-order-details.png" />
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <p>Select your ticket and show the QR code at the event entry.</p>
                <img src="https://is2-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/5f/8b/dc/5f8bdc84-a4d3-a306-06c8-6bbb3109a7a9/3b7990d9-31e8-4ea3-b68a-b6e13c366c2a_Frame_17779.png/750x750bb.jpeg" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== TERMS POPUP ===== */}
      {showTerms && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={() => setShowTerms(false)}>✖</span>

            <h2>Terms & Conditions</h2>

            <ol>
              <li>Tickets once booked cannot be exchanged or refunded</li>
              <li>An Internet handling fee per ticket may be levied.</li>
              <li>Arrive 30 minutes early for smooth entry</li>
              <li>Follow safety and guidelines</li>
              <li>Do not attend if sick</li>
              <li>No resale allowed</li>
              <li>Rights reserved</li>
              <li>Terms subject to change</li>
            </ol>
          </div>
        </div>
      )}
{/* ===== BOOKING POPUP ===== */}
{showBooking && (
  <div className="popup-overlay">
    <div className="booking-popup">

      {/* HEADER */}
      <div className="booking-header">
        <span onClick={() => setShowBooking(false)}>←</span>
        <h2>{show.title}</h2>
      </div>

      {/* STEPS */}
      <div className="steps booking-steps">
        <span className="active">1 Ticket</span>
        <span>2 Registration</span>
        <span>3 Review & Pay</span>
      </div>

      {/* INFO */}
      <div className="event-info">
        <p>{show.venue}</p>
        <p>{show.date} | 6:00 PM</p>
      </div>

      {/* SELECT */}
      <h3>Select Tickets</h3>
      <p className="limit">You can add up to 10 tickets only</p>

      {/* TICKET LIST */}
      <div className="ticket-box">
        <div>
          <h4>SILVER TICKETS</h4>
          <p>₹999 | <span className="fast">Fast Filling</span></p>
        </div>
        <button>Add</button>
      </div>

      <div className="ticket-box">
        <div>
          <h4>GOLD TICKETS</h4>
          <p>₹1,499</p>
        </div>
        <button>Add</button>
      </div>

      <div className="ticket-box">
        <div>
          <h4>PLATINUM TICKETS</h4>
          <p>₹1,999</p>
        </div>
        <button>Add</button>
      </div>

      <div className="ticket-box">
        <div>
          <h4>DIAMOND TICKETS</h4>
          <p>₹2,499 | <span className="fast">Fast Filling</span></p>
        </div>
        <button>Add</button>
      </div>

      <div className="ticket-box disabled">
        <div>
          <h4>BRONZE TICKETS</h4>
          <p>₹799 | <span className="sold">Sold out</span></p>
        </div>
      </div>

      {/* FOOTER */}
      <button className="login-btn">Login To Book</button>

    </div>
  </div>
)}
    </div>
  );
}