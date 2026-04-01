import React, { useState } from "react";
import "./Kids.css";

const events = [
  {
    id: 1,
    title: "Parsec-Jayanagar by Param",
    image: "https://in.bmscdn.com/events/moviecard/ET00312345.jpg",
    date: "Thu, 2 Apr onwards",
    place: "Parsec - Jayanagar",
    category: "Education",
    price: "₹ 225 onwards",
    about:
      "ParSEC is a one-of-a-kind science centre located in Jayanagar...",
  },
  {
    id: 2,
    title: "Rambo Circus - Bengaluru",
    image: "https://in.bmscdn.com/events/moviecard/ET00345678.jpg",
    date: "Fri, 24 Apr onwards",
    place: "St. John's Auditorium",
    category: "Entertainment",
    price: "₹ 350 onwards",
    about: "Enjoy amazing circus performances for kids...",
  },
];

export default function KidsEvents() {
  const [selected, setSelected] = useState(null);

  // 👉 When clicking navbar → reset page
  const handleNavbarClick = () => {
    setSelected(null);
  };

  return (
    <div className="container">

      {/* NAVBAR */}
      <div className="navbar">
        <button onClick={handleNavbarClick}>Kids</button>
      </div>

      {/* ================= LIST PAGE ================= */}
      {!selected && (
        <div className="layout">
          {/* LEFT FILTER */}
          <div className="filters">
            <h2>Filters</h2>
            <button>Today</button>
            <button>Tomorrow</button>
            <button>This Weekend</button>
          </div>

          {/* RIGHT CARDS */}
          <div className="cards">
            {events.map((item) => (
              <div
                key={item.id}
                className="card"
                onClick={() => setSelected(item)}
              >
                <img src={item.image} alt="" />
                <div className="card-info">
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <p>{item.category}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= DETAILS PAGE ================= */}
      {selected && (
        <div className="details">

          {/* IMAGE + RIGHT BOX */}
          <div className="top-section">
            <img src={selected.image} className="main-img" />

            <div className="booking-box">
              <p>{selected.date}</p>
              <p>1 Hour</p>
              <p>All age groups</p>
              <p>{selected.place}</p>
              <h2>{selected.price}</h2>
              <button className="book-btn">Book Now</button>
            </div>
          </div>

          {/* TAGS */}
          <div className="tags">
            <span>Education</span>
            <span>Entertainment</span>
            <span>Kids</span>
          </div>

          {/* LEFT INFO */}
          <div className="info-section">

            <h2>About The Event</h2>
            <p>{selected.about}</p>

            <h2>You Should Know</h2>
            <div className="box">
              Parsec Jayanagar is closed on November 23rd and 24th.
            </div>

            <h2>M-Ticket</h2>
            <div className="box">
              Contactless Ticketing & Fast-track Entry
            </div>

            <h2>Gallery</h2>
            <div className="gallery">
              <img src={selected.image} />
              <img src={selected.image} />
              <img src={selected.image} />
              <img src={selected.image} />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}