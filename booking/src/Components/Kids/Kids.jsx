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
  },
  {
    id: 2,
    title: "Rambo Circus - Bengaluru",
    image: "https://in.bmscdn.com/events/moviecard/ET00345678.jpg",
    date: "Fri, 24 Apr onwards",
    place: "St. John's Auditorium",
    category: "Entertainment",
    price: "₹ 350 onwards",
  },
  {
    id: 3,
    title: "Jumbo Circus",
    image: "https://in.bmscdn.com/events/moviecard/ET00378901.jpg",
    date: "Thu, 2 Apr onwards",
    place: "Jumbo Circus",
    category: "Circus",
    price: "₹ 350 onwards",
  },
];

export default function KidsEvents() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="page">

      {/* NAVBAR */}
      <div className="navbar">
        <button onClick={() => setSelected(null)}>Kids</button>
      </div>

      {/* LIST PAGE */}
      {!selected && (
        <div className="main-container">

          {/* LEFT FILTER */}
          <div className="filters">
            <h2>Filters</h2>

            <div className="filter-box">
              <h4>Date</h4>
              <button>Today</button>
              <button>Tomorrow</button>
              <button>This Weekend</button>
            </div>

            <button className="browse">Browse by Venues</button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="content">
            <h2 className="title">Kids In Bengaluru</h2>

            <div className="tags">
              <span>Entertainment</span>
              <span>Hobby Classes</span>
              <span>Summer Camps</span>
              <span>Education</span>
              <span>Competition</span>
            </div>

            <div className="cards">
              {events.map((item) => (
                <div
                  key={item.id}
                  className="card"
                  onClick={() => setSelected(item)}
                >
                  <img src={item.image} />
                  <p className="date">{item.date}</p>

                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <p>{item.category}</p>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* DETAILS PAGE (same as before, no change needed) */}
      {selected && (
        <div className="details">
          <h1>{selected.title}</h1>
        </div>
      )}
    </div>
  );
}