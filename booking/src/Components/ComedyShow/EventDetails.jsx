import React from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";
import shows from "../../data/ShowsData";

export default function EventDetails() {
  const { id } = useParams();

  const show = shows.find((s) => s.id === parseInt(id));

  if (!show) return <h2 style={{ color: "white" }}>Event not found</h2>;

  return (
    <div className="event-container">

      {/* LEFT SIDE */}
      <div className="event-left">

        <img src={show.image} alt={show.title} className="main-image" />

        <div className="tags">
          <span>{show.category}</span>
          <span>Comedy Shows</span>
        </div>

        <div className="interest">
          👍 841 are interested
          <button>I’m Interested</button>
        </div>

        {/* ✅ ONLY ABOUT SECTION */}
        <div className="about">
          <h2>About The Event</h2>

          <p>
            Join us for an evening of laughter, socializing, and potential connections at our unique
            comedy matchmaking event, <b>Match Me Please!</b> Whether you're looking for love or just
            want to have a great time, our host will charm the crowd with hilarious crowd play and
            interactive games designed to bring out the best in everyone.
          </p>

          <p><b>Event Highlights:</b></p>

          <p>
            <b>Comedy & Crowd Play:</b> Our talented host will entertain and engage the audience
            with witty observations and playful interactions.
          </p>

          <p>
            <b>Matchmaking Fun:</b> Singles will have the chance to meet potential matches in a
            relaxed and humorous atmosphere.
          </p>

          <p>
            <b>Socializing Opportunities:</b> Enjoy dedicated socializing time between sets to
            mingle and get to know others.
          </p>

          <p>
            <b>Dress to Impress:</b> Come dressed to impress, as our event creates the perfect
            backdrop for making a memorable first impression.
          </p>

          <p>
            <b>Laughs & Connections:</b> Laugh along with the crowd and see if you can find that
            special someone who shares your sense of humor.
          </p>

          <p>
            Whether you're hoping to find love or just want to enjoy a fun time, <b>Match Me Please!</b>
            promises to be an evening full of laughter, camaraderie, and maybe even a spark of romance.
            Get ready to mingle, laugh, and potentially meet your match!
          </p>

          <p className="read-less">Read Less</p>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="event-right">
        <div className="booking-box">

          <div className="info-row">📅 <span>{show.date}</span></div>
          <div className="info-row">⏰ <span>5:00 PM</span></div>
          <div className="info-row">⏳ <span>1 Hour</span></div>
          <div className="info-row">👤 <span>Age Limit - 18yrs +</span></div>
          <div className="info-row">🌐 <span>English, Hindi, Kannada</span></div>
          <div className="info-row">🎭 <span>{show.category}</span></div>
          <div className="info-row">📍 <span>{show.venue}</span></div>

          <hr />

          <div className="price-section">
            <div>
              <h3>{show.price}</h3>
              <p className="available">Available</p>
            </div>

            <button className="book-btn">Book Now</button>
          </div>

        </div>
      </div>

    </div>
  );
}