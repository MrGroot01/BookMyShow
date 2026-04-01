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
    price: "₹250",
    about:
      "ParSEC is a one-of-a-kind science centre located in Jayanagar. Interactive science exhibits for kids.",
  },
  {
    id: 2,
    title: "Rambo Circus - Bengaluru",
    image: "https://in.bmscdn.com/events/moviecard/ET00345678.jpg",
    date: "Fri, 24 Apr onwards",
    place: "St. John's Auditorium",
    category: "Entertainment",
    price: "₹350",
    about: "Enjoy live circus performances with family.",
  },
];

export default function KidsPage() {
  const [selected, setSelected] = useState(null);
  const [slide, setSlide] = useState(0);

  const sliderImages = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1686033612345_web.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1686033612346_web.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1686033612347_web.jpg",
  ];

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="page">

      {/* ================= NAVBAR CLICK PAGE ================= */}
      {!selected && (
        <>
          {/* 🔥 TOP SLIDER */}
          <div className="slider">
            <button onClick={prevSlide}>‹</button>
            <img src={sliderImages[slide]} />
            <button onClick={nextSlide}>›</button>
          </div>

          {/* 🔥 MAIN CONTENT */}
          <div className="main">

            {/* LEFT FILTER */}
            <div className="filters">
              <h2>Filters</h2>

              <div className="box">
                <h4>Date</h4>
                <button>Today</button>
                <button>Tomorrow</button>
                <button>This Weekend</button>
              </div>

              <div className="box"><h4>Categories</h4></div>
              <div className="box"><h4>More Filters</h4></div>
              <div className="box"><h4>Price</h4></div>

              <button className="browse">Browse by Venues</button>
            </div>

            {/* RIGHT SIDE */}
            <div className="content">
              <h2>Kids In Bengaluru</h2>

              <div className="chips">
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
        </>
      )}

      {/* ================= DETAILS PAGE ================= */}
      {selected && (
        <div className="details">

          <h1>{selected.title}</h1>

          <div className="top">

            {/* IMAGE */}
            <img src={selected.image} className="big-img" />

            {/* RIGHT BOOK BOX */}
            <div className="book-box">
              <p>Thu 2 Apr 2026 - Sun 12 Apr 2026</p>
              <p>1 Hour</p>
              <p>All age groups</p>
              <p>{selected.place}</p>

              <h2>{selected.price}</h2>
              <button>Book Now</button>
            </div>
          </div>

          {/* TAGS */}
          <div className="tags">
            <span>Education</span>
            <span>Entertainment</span>
            <span>Kids</span>
          </div>

          {/* LEFT DETAILS */}
          <div className="info">

            <h2>About The Event</h2>
            <p>{selected.about}</p>

            <h2>You Should Know</h2>
            <div className="info-box">
              Parsec Jayanagar is closed on November 23rd and 24th.
            </div>

            <h2>M-Ticket</h2>
            <div className="info-box">
              Contactless Ticketing & Fast-track Entry
            </div>

            <h2>Gallery</h2>
            <div className="gallery">
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