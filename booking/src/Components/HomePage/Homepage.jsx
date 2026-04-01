import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

const heroSlides = [
  
  {
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80",
    tag: "Live Concert",
    title: ["FEEL THE", "MUSIC LIVE"],
    sub: "Catch your favourite artists perform live. From indie to Bollywood — find the gig.",
  },
  {
    img: "https://images.openai.com/static-rsc-4/OkLYX5MhABPoONdBqeypu7qnyWEmG-taystWFXnRwDWuL6CZ627j_kU9KJY2xvbSw9fgC8v3l4jPhEz2ozrQM-w6wi0qXa_CBqrkliinDfWodV56ibUECXhZh1BVNXVJwRrn8fylQnWzrPepxb2cp6r6JIaHArUcjFJ4ZpdQI71KpztISGFu1VSeEWpsXqsV?purpose=fullsize",
    tag: "Top Sports",
    title: ["THRILL OF", "LIVE SPORT"],
    sub: "IPL, chess, basketball and more. Book your courtside experience today.",
  },
  {
    img: "https://images.unsplash.com/photo-1627787073760-20934bf2114e?q=80&w=672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Theatre Plays",
    title: ["STORIES", "ON STAGE"],
    sub: "English, Hindi, Kannada, Tamil — world-class theatre right in your city.",
  },
];

const categories = [
  { icon: "🎬", label: "Movies", count: "120+ Now Showing", path: "/movies" },
  { icon: "🎵", label: "Concerts", count: "45+ Events", path: "/concerts" },
  {
    icon: "😂",
    label: "Comedy Shows",
    count: "185+ Events",
    path: "/comedyshow",
  },
  { icon: "🎭", label: "Theatre Plays", count: "70+ Shows", path: "/plays" },
  { icon: "⚽", label: "Sports", count: "30+ Events", path: "/sports" },
  { icon: "🎡", label: "Adventure", count: "275+ Events", path: "/adventure" },
  { icon: "👶", label: "Kids", count: "30+ Events", path: "/kids" },
];
const movies = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjipISzZjzXAASttdzsb64dz4EliLDSQpBQ&s",
    cat: "Trending",
    genre: "Action / Thriller",
    name: "Dhurandhar The Revenge",
    rating: "9.5",
    votes: "352K",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BNWNmOWQ0NjUtMzRiZi00MWIxLTg5YTgtYzI1ODYwZWNlMzk5XkEyXkFqcGc@._V1_.jpg",
    cat: "Trending",
    genre: "Drama / Family",
    name: "Love Mocktail 3",
    rating: "9.3",
    votes: "7.9K",
  },
  {
    img: "https://champaca.in/cdn/shop/products/81Ck2nTaH2L_1024x1024@2x.jpg?v=1679641791",
    cat: "Trending",
    genre: "Sci-Fi / Adventure",
    name: "Project Hail Mary",
    rating: "9.0",
    votes: "5.4K",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BNDZmZTlmNDAtZGM4MS00MmVkLWEzMjEtMmNlOWI0ZjIzYzlhXkEyXkFqcGc@._V1_.jpg",
    genre: "Comedy / Romantic",
    name: "Youth",
    rating: "8.9",
    votes: "16.3K",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPN7lusU5PuSkVOh34KS_kMriE5hbdePaNg&s",
    genre: "Comedy / Drama",
    name: "Happy Raj",
    rating: "9.4",
    votes: "790",
  },
  {
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/prathichaya-et00491497-1773643630.jpg",
    genre: "Drama / Biopic",
    name: "Prathichaya",
    rating: "8.7",
    votes: "2.1K",
  },
  {
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ustaad-bhagat-singh-et00339939-1771925113.jpg",
    genre: "Drama / Biopic",
    name: "Ustaad Bhagat Singh",
    rating: "8.7",
    votes: "2.1K",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/6/6c/Hoppers_film_poster.jpg",
    genre: "Drama / Biopic",
    name: "Hoppers ",
    rating: "8.7",
    votes: "2.1K",
  },
];

const upcomingMovies = [
  {
    img: "https://cdn.district.in/movies-assets/images/cinema/Toxic-postger-889bd080-ed1e-11f0-b69f-07304f113f86.jpg",
    name: "Toxic ",
    release: "Comming Soon",
    likes: "526K+",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BNzMxMDdiYzAtNGM0Ni00ZWQxLWI0ZTUtMzdkMjBkMzExYWZmXkEyXkFqcGc@._V1_.jpg",
    name: "Spirit",
    release: "Comming Soon",
    likes: "400K+",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mZ_rszxkWmGfHfL4M6B1cptJOcYgSdiVZg&s",
    name: "Salaar 2",
    release: "Comming Soon",
    likes: "450K+",
  },

  {
    img: "https://cdn.district.in/movies-assets/images/cinema/Peddi-d7366cb0-0b9b-11f0-a701-97473cbbbc80.jpg",
    name: "Peddi",
    release: "Comming Soon",
    likes: "300K+",
  },
  {
    img: "https://d2lnbwhcsmj8tp.cloudfront.net/ianslive_watermark/202508083475498.jpeg",
    name: "Paradise",
    release: "Coming Soon",
    likes: "350K+",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYHzQ49bDw3R9N0MBs3G4-QT0KgMIf8GjYg&s",
    name: "Chiranjeevi Hanuman: The Eternal",
    release: "Comming Soon",
    likes: "205K+",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BZTAwOWIwYTgtNWU3Yi00MTc1LWIxNmQtMTEwZjU4YjAyODhhXkEyXkFqcGc@._V1_.jpg",
    name: "Dacoit",
    release: "Comming Soon",
    likes: "250K+",
  },
  {
    img: "https://filmfare.wwmindia.com/content/2025/jun/chiranjeevi-in-vishwambhara-poster.jpg",
    name: "Vishwambhara",
    release: "Comming Soon",
    likes: "300K+",
  },
];

const events = [
  {
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
    date: "4 APR · SAT",
    cat: "CONCERT",
    name: "Shaan Live in Bengaluru — Infinity Tour",
    venue: "Phoenix Market City",
  },
  {
    img: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&q=80",
    date: "28 MAR · SAT",
    cat: "COMEDY",
    name: "Loner Stoners: Stand-Up Comedy Show",
    venue: "Just BLR Comedy Club",
  },
  {
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
    date: "24 APR · FRI",
    cat: "COMEDY",
    name: "Kanan Gill Live — Not This Again",
    venue: "Good Shepherd Auditorium",
  },
  {
    img: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600&q=80",
    date: "29 MAR · SUN",
    cat: "CLUB",
    name: "Marsh Live — All Night Long",
    venue: "Sunburn Union, Bengaluru",
  },
  {
    img: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600&q=80",
    date: "29 MAR · SUN",
    cat: "CLUB",
    name: "Marsh Live — All Night Long",
    venue: "Sunburn Union, Bengaluru",
  },
];

const premieres = [
  {
    img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&q=80",
    name: "Halves",
    lang: "Hinglish",
  },
  {
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
    name: "C'mon C'mon",
    lang: "English",
  },
  {
    img: "https://images.unsplash.com/photo-1615462820839-85a3faef3083?w=400&q=80",
    name: "Kangaroo",
    lang: "English",
  },
  {
    img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80",
    name: "Sari Agidum",
    lang: "Tamil",
  },
];

const plays = [
  {
    img: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=500&q=80",
    name: "Amrita Sher-Gill",
    lang: "English",
    date: "28 Mar onwards",
  },
  {
    img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=500&q=80",
    name: "Apne Ghar Jaisa",
    lang: "Hindi",
    date: "29 Mar",
  },
  {
    img: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&q=80",
    name: "Jab Shahar Hamara Sota Hai",
    lang: "Hindi",
    date: "23 May onwards",
  },
  {
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80",
    name: "Paaka Kranthi",
    lang: "Kannada",
    date: "12 Apr",
  },
];

const sports = [
  {
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80",
    name: "Gujarat Titans — IPL Registrations",
    date: "Fri, 17 Apr",
    venue: "Narendra Modi Stadium, Ahmedabad",
  },
  {
    img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80",
    name: "Chess Circle",
    date: "Sun, 29 Mar",
    venue: "Waaw Cafe, Bengaluru",
  },
  {
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
    name: "Get Active: 75-Min Basketball",
    date: "Mon, 30 Mar onwards",
    venue: "MN Krishna Rao Park, Bengaluru",
  },
];

const activities = [
  {
    img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&q=80",
    name: "Nehru Planetarium Shows",
    date: "28 Mar onwards",
  },
  {
    img: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500&q=80",
    name: "Harry Potter Trivia Night",
    date: "28 Mar",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80",
    name: "Gokarna Beach Trek",
    date: "Fri, 3 Apr onwards",
  },
  {
    img: "https://images.unsplash.com/photo-1585016495481-91f5f19744e2?w=500&q=80",
    name: "Bhutan Trip from Bengaluru",
    date: "Tue, 12 May",
  },
];

// ── Reusable Components ──

const SectionHeader = ({ title, accent, path, link = true }) => (
  <div className="sec-header">
    <div className="sec-title">
      {title} <span>{accent}</span>
    </div>

    {link && (
      <Link to={path} className="see-all">
        See All ›
      </Link>
    )}
  </div>
);

const MovieCard = ({ img, genre, name, rating, votes, cat }) => (
  <div className="movie-card">
    <img src={img} alt={name} />

    {/* 🔥 TRENDING BADGE */}
    {cat === "Trending" && <div className="badge">🔥 Trending</div>}

    <div className="card-overlay">
      <div className="card-genre">{genre}</div>
      <div className="card-name">{name}</div>
      <div className="card-rating">
        ⭐ {rating} <span>{votes} votes</span>
      </div>
    </div>
  </div>
);
const UpcomingCard = ({ img, name, release, likes }) => (
  <div className="up-card">
    <img src={img} alt={name} />
     
    <div className="up-overlay">
      <h3>{name}</h3>

      {/* 🎬 Release */}
      <p className="release">🎬 {release}</p>

      {/* 👍 Likes BELOW */}
      <p className="likes">👍 {likes} Likes</p>
    </div>
  </div>
);
const EventCard = ({ img, date, cat, name, venue }) => (
  <div className="event-card">
    <div className="event-img">
      <img src={img} alt={name} />
      <div className="event-date-badge">{date}</div>
      <div className="event-cat-badge">{cat}</div>
    </div>
    <div className="event-body">
      <div className="event-name">{name}</div>
      <div className="event-venue">📍 {venue}</div>
    </div>
  </div>
);

// ── FadeUp Wrapper ──
const FadeUp = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

// ── MAIN COMPONENT ──
const HomePage = () => {
  const scrollRef = useRef();
  const scroll = (dir) => {
    if (dir === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % heroSlides.length),
      4000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="homepage">
      {/* HERO */}
      <div className="hero">
        <div className="hero-slides">
          {heroSlides.map((s, i) => (
            <div
              key={i}
              className={`hero-slide ${i === current ? "active" : ""}`}
            >
              <img src={s.img} alt={s.tag} />
              <div className="hero-gradient" />
            </div>
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-tag">{heroSlides[current].tag}</div>
          <h1 className="hero-title">
            {heroSlides[current].title[0]}
            <br />
            {heroSlides[current].title[1]}
          </h1>
          <p className="hero-subtitle">{heroSlides[current].sub}</p>
          <div className="hero-btns">
            <button className="btn-primary">🎬 Browse Movies</button>
            <button className="btn-outline">Explore Events →</button>
          </div>
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      {/* SEARCH */}
      <FadeUp className="search-wrap">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies, events, plays, sports…"
          />
          <div className="search-divider" />
          <select>
            <option>All Categories</option>
            <option>Movies</option>
            <option>Events</option>
            <option>Plays</option>
            <option>Sports</option>
          </select>
          <div className="search-divider" />
          <select>
            <option>Bengaluru</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Hyderabad</option>
          </select>
          <button>🔍</button>
        </div>
      </FadeUp>

      {/* CATEGORIES */}
      <FadeUp>
        <section>
          <SectionHeader title="BROWSE" accent="CATEGORIES" link={false} />
          <div className="cat-strip">
            {categories.map((c) => (
              <div
                key={c.label}
                className="cat-pill"
                onClick={() => navigate(c.path)}
                style={{ cursor: "pointer" }}
              >
                <div className="cat-icon">{c.icon}</div>
                <div className="cat-info">
                  <div className="cat-label">{c.label}</div>
                  <div className="cat-count">{c.count}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* MOVIES */}
      <FadeUp>
        <section>
          <SectionHeader title="RECOMMENDED" accent="MOVIES" path="/movies" />
          <div className="cards-grid">
            {movies.map((m) => (
              <MovieCard key={m.name} {...m} />
            ))}
          </div>
        </section>
      </FadeUp>

      {/*Upcoming  */}
      <FadeUp>
        <section>
          <SectionHeader title="UPCOMING" accent="MOVIES" path="/movies" />

          <div className="carousel-wrapper">
            <button className="arrow left" onClick={() => scroll("left")}>
              ‹
            </button>

            <div className="carousel" ref={scrollRef}>
              {upcomingMovies.map((m, i) => (
                <UpcomingCard key={i} {...m} />
              ))}
            </div>

            <button className="arrow right" onClick={() => scroll("right")}>
              ›
            </button>
          </div>
        </section>
      </FadeUp>
      {/* EVENTS */}
      <FadeUp>
        <section>
          <SectionHeader
            title="HOT EVENTS IN"
            accent="BENGALURU"
            path="/concerts"
          />
          <div className="events-grid">
            {events.map((e) => (
              <EventCard key={e.name} {...e} />
            ))}
          </div>
        </section>
      </FadeUp>

      {/* PREMIERE */}
      <FadeUp>
        <section className="premiere-section">
          <div className="premiere-header">
            <div className="play-icon">▶</div>
            <div>
              <div className="premiere-label">PREMIERE</div>
              <div className="premiere-sub">
                Watch brand-new movies at home, every Friday
              </div>
            </div>
          </div>
          <div className="premiere-cards">
            {premieres.map((p) => (
              <div key={p.name} className="premiere-card">
                <img src={p.img} alt={p.name} />
                <div className="premiere-badge">
                  <div className="p-tag">PREMIERE</div>
                  <div className="p-name">{p.name}</div>
                  <div className="p-lang">{p.lang}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* PLAYS */}
      <FadeUp>
        <section>
          <SectionHeader title="LATEST" accent="ComedyShow" path="/comedyshow" />
          <div className="plays-grid">
            {plays.map((p) => (
              <div key={p.name} className="play-card">
                <img src={p.img} alt={p.name} />
                <div className="play-body">
                  <div className="play-name">{p.name}</div>
                  <div className="play-lang">{p.lang}</div>
                  <div className="play-date">{p.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* SPORTS */}
      <FadeUp>
        <section>


          {/* <SectionHeader title="TOP" accent="SPORTS EVENTS"path="/sports" /> */}
          <SectionHeader title="TOP" accent="SPORTS EVENTS" path="/sports" />
          <div className="sports-grid">
            {sports.map((s) => (
              <div key={s.name} className="sport-card">
                <img src={s.img} alt={s.name} />
                <div className="sport-overlay">
                  <div className="sport-name">{s.name}</div>
                  <div className="sport-date">{s.date}</div>
                  <div className="sport-venue">{s.venue}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ACTIVITIES */}
      <FadeUp>
        <section>
          <SectionHeader
            title="EXPLORE"
            accent="ACTIVITIES"
            path="/adventure"
          />
          <div className="act-grid">
            {activities.map((a) => (
              <div key={a.name} className="act-card">
                <img src={a.img} alt={a.name} />
                <div className="act-label">
                  <div className="act-name">{a.name}</div>
                  <div className="act-count">{a.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo footer-logo">
              Show<span>Time</span>
            </div>
            <p className="footer-tagline">
              Your one-stop destination for movies, live events, concerts,
              sports, and unforgettable experiences across India.
            </p>
            <div className="footer-socials">
              {["f", "𝕏", "in", "▶"].map((s) => (
                <a key={s} className="social-icon" href="#">
                  {s}
                </a>
              ))}
            </div>
          </div>
          {[
            {
              title: "Discover",
              links: [
                "Movies Now Showing",
                "Upcoming Movies",
                "Live Events",
                "Plays & Theatre",
                "Sports Events",
              ],
            },
            {
              title: "Top Cities",
              links: [
                "Bengaluru",
                "Mumbai",
                "Delhi NCR",
                "Hyderabad",
                "Chennai",
              ],
            },
            {
              title: "Help",
              links: [
                "About Us",
                "Contact Us",
                "FAQs",
                "Terms & Conditions",
                "Privacy Policy",
              ],
            },
          ].map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 ShowTime. All rights reserved.</span>
          <span>Made with ❤️ for entertainment lovers</span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
