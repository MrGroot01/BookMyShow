import React from "react";
import "./ComedyShow.css";

const shows = [
  {
    id: 1,
    title: "Kannada Standup Comedy Show",
    venue: "Harivu Books: Bengaluru",
    category: "Stand up Comedy",
    price: "₹149 onwards",
    date: "Sun, 29 Mar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFd2wizuFy-gMaPCJpTZanEN07Fj6kiW7H2A&s"
  },
  {
    id: 2,
    title: "Kannada All Stars",
    venue: "The Stage Cafe: Bengaluru",
    category: "Stand up Comedy",
    price: "₹199",
    date: "Sat, 4 Apr",
    image: "https://assets-in.bmscdn.com/nmcms/mobile/media-mobile-kannada-all-stars-sanjay-nagar-2026-3-19-t-22-15-42.jpg"
  },
  {
    id: 3,
    title: "Improv Comedy Jam",
    venue: "Brik Oven: Bengaluru",
    category: "Improv Comedy",
    price: "₹499",
    date: "Sun, 29 Mar onwards",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOxIrxM5KoCDN_97-MSvA5W3Q34_fKJJEFA&s"
  },
  {
    id: 4,
    title: "Crowd Work Comedy Show",
    venue: "The Stage Cafe: Bengaluru",
    category: "Stand up Comedy",
    price: "₹399 onwards",
    date: "Sat, 11 Apr onwards",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARI9fQZ5YQlgcmFri7fIvyUeoZI-Gmw5uTw&s"
  },
  {
    id: 5,
    title: "Comedy Night Live",
    venue: "Indiranagar Club",
    category: "Stand up Comedy",
    price: "₹199",
    date: "Fri, 5 Apr",
    image: "https://cdn.colorstv.com/wp-content/uploads/2019/04/comedy-nights-live_1555156032.jpg"
  },
  {
    id: 6,
    title: "Open Mic Night",
    venue: "Koramangala Arena",
    category: "Open Mic",
    price: "₹99",
    date: "Sat, 6 Apr",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROY6jTd7_O-LEmbCJJV9HepOd6ZcR3kFt56Q&s"
  },
  {
    id: 7,
    title: "Laugh Riot",
    venue: "HSR Layout",
    category: "Stand up Comedy",
    price: "₹199",
    date: "Sun, 7 Apr",
    image: "https://m.media-amazon.com/images/M/MV5BYzgwZGYwNGItYmNiMC00ZmI0LTk5YTctZjc3YmM5MDRiMzk1XkEyXkFqcGc@._V1_QL75_UY281_CR0,0,190,281_.jpg"
  },
  {
    id: 8,
    title: "Standup Saturdays",
    venue: "BTM Stage",
    category: "Stand up Comedy",
    price: "₹249",
    date: "Sat, 13 Apr",
    image: "https://www.eventbrite.com/e/_next/image?url=https%3A%2F%2Fimg.evbuc.com%2Fhttps%253A%252F%252Fcdn.evbuc.com%252Fimages%252F906597773%252F53925857000%252F1%252Foriginal.20241126-081350%3Fcrop%3Dfocalpoint%26fit%3Dcrop%26w%3D600%26auto%3Dformat%252Ccompress%26q%3D75%26sharp%3D10%26fp-x%3D0.00410984848485%26fp-y%3D0.00378358214649%26s%3D499d46734853cfaff8c5a76577abd4e8&w=940&q=75"
  }
];

export default function ComedyShow() {
  return (
    <div className="container">

      {/* LEFT FILTER PANEL */}
      <div className="filters">
        <h2>Filters</h2>

        <div className="filter-box">
          <div className="filter-header">
            <span>Date</span>
            <span className="clear">Clear</span>
          </div>

          <div className="buttons">
            <button>Today</button>
            <button>Tomorrow</button>
            <button>This Weekend</button>
          </div>

          <label>
            <input type="checkbox" /> Date Range
          </label>
        </div>

        <div className="filter-box">
          <div className="filter-header">
            <span>Language</span>
            <span className="clear">Clear</span>
          </div>

          <div className="tags">
            <span>English</span>
            <span>Hindi</span>
            <span>Hinglish</span>
            <span className="active">Kannada</span>
            <span>Tamil</span>
            <span>Telugu</span>
            <span>Bengali</span>
            <span>Malayalam</span>
          </div>
        </div>

        <div className="filter-box">Categories</div>
        <div className="filter-box">More Filters</div>
        <div className="filter-box">Price</div>

        <button className="browse-btn">Browse by Venues</button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="content">
        <h2>Comedy Shows In Bengaluru</h2>

        <div className="pills">
          <span className="active">Kannada</span>
          <span>Stand up Comedy</span>
          <span>Open Mic Comedy</span>
          <span>Improv Comedy</span>
          <span>Surprise Act</span>
          <span>Roast</span>
          <span>Sketch</span>
        </div>

        <div className="grid">
          {shows.map((show) => (
            <div className="card" key={show.id}>
              
              <div className="image-box">
                <img src={show.image} alt="" />
                <div className="date">{show.date}</div>
              </div>

              <div className="card-content">
                <h3>{show.title}</h3>
                <p>{show.venue}</p>
                <p>{show.category}</p>
                <p className="price">{show.price}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}