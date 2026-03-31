import React, { useState, useEffect, useRef } from "react";
import "./Movies.css";

/* ═══════════════ DATA ═══════════════ */

const FEATURED = [
  {
    id: "f1",
    title: "Kalki 2898-AD",
    tagline: "The mythology of tomorrow.",
    genres: ["Sci-Fi", "Action", "Epic"],
    rating: "8.3",
    votes: "62K",
    duration: "3h 1m",
    language: "Telugu",
    year: 2024,
    description:
      "In the dystopian future of Kali Yuga, a fierce warrior is destined to protect the last hope of humanity against an immortal tyrant.",
    poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26939389_p_v13_ab.jpg",
    bg: "linear-gradient(135deg,#06000f 0%,#150040 55%,#0d1545 100%)",
    accent: "#a855f7",
    accentRgb: "168,85,247",
    trailer: "https://www.youtube.com/embed/BfCIPsEGAS8",
  },
  {
    id: "f2",
    title: "Pushpa 2: The Rule",
    tagline: "Jhukega nahi saala.",
    genres: ["Action", "Crime", "Drama"],
    rating: "7.6",
    votes: "88K",
    duration: "3h 23m",
    language: "Telugu",
    year: 2024,
    description:
      "Pushpa Raj returns more powerful than ever, ready to crush anyone who dares stand between him and his empire.",
    poster: "https://m.media-amazon.com/images/M/MV5BZjllNTdiM2QtYjQ0Ni00ZGM1LWFlYmUtNWY0YjMzYWIxOTYxXkEyXkFqcGc@._V1_.jpg",
    bg: "linear-gradient(135deg,#150400 0%,#3d1200 55%,#1a0800 100%)",
    accent: "#f97316",
    accentRgb: "249,115,22",
    trailer: "https://www.youtube.com/embed/Q1NKMPhP8PY",
  },
  {
    id: "f3",
    title: "Stree 2",
    tagline: "She's back. She brought friends.",
    genres: ["Horror", "Comedy"],
    rating: "8.0",
    votes: "95K",
    duration: "2h 15m",
    language: "Hindi",
    year: 2024,
    description:
      "The legend of Stree continues as Chanderi faces a new supernatural threat far more terrifying than anything before.",
    poster: "https://st1.bollywoodlife.com/wp-content/uploads/2024/08/Stree-2-2.png",
    bg: "linear-gradient(135deg,#001505 0%,#002a12 55%,#001a0a 100%)",
    accent: "#22c55e",
    accentRgb: "34,197,94",
    trailer: "https://www.youtube.com/embed/0W7vH3cZ3pM",
  },
  {
    id: "f4",
    title: "Oppenheimer",
    tagline: "The world changed forever.",
    genres: ["Drama", "History"],
    rating: "8.9",
    votes: "610K",
    duration: "3h",
    language: "English",
    year: 2023,
    description:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb that changed the course of history.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    bg: "linear-gradient(135deg,#0f0800 0%,#2a1500 55%,#1a0e00 100%)",
    accent: "#f59e0b",
    accentRgb: "245,158,11",
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
  },
];

const ALL_MOVIES = [
  {
    id: 1,
    title: "Kalki 2898-AD",
    genres: ["Action", "Sci-Fi"],
    lang: "Telugu",
    rating: 8.3,
    votes: "62K",
    dur: "3h 1m",
    badge: "Blockbuster",
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/ie7A7pDhOQjqRZVgc3HqFNHoYfR.jpg",
    color: "#150040",
  },
  {
    id: 2,
    title: "Pushpa 2",
    genres: ["Action", "Drama"],
    lang: "Telugu",
    rating: 7.6,
    votes: "88K",
    dur: "3h 23m",
    badge: "Trending",
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/eBNUFn6kVCvFtNqkGqSfk2cSRMU.jpg",
    color: "#3d1200",
  },
  {
    id: 3,
    title: "Stree 2",
    genres: ["Horror", "Comedy"],
    lang: "Hindi",
    rating: 8.0,
    votes: "95K",
    dur: "2h 15m",
    badge: "Superhit",
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/oLxWocqmS8tNBVAB4KATJMGV3PL.jpg",
    color: "#002a12",
  },
  {
    id: 4,
    title: "Oppenheimer",
    genres: ["Drama", "History"],
    lang: "English",
    rating: 8.9,
    votes: "610K",
    dur: "3h",
    badge: "Oscar Winner",
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    color: "#2a1500",
  },
  {
    id: 5,
    title: "Barbie",
    genres: ["Comedy", "Fantasy"],
    lang: "English",
    rating: 6.9,
    votes: "420K",
    dur: "1h 54m",
    badge: null,
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/iuFNMS8vlbzLfBXveBtKTqW6gFj.jpg",
    color: "#3d0030",
  },
  {
    id: 6,
    title: "Devara Part 1",
    genres: ["Action", "Thriller"],
    lang: "Telugu",
    rating: 7.1,
    votes: "44K",
    dur: "2h 57m",
    badge: "Fan Favourite",
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/cllNHdnqPn1bvjMCXwCmpOzJFuH.jpg",
    color: "#00152b",
  },
  {
    id: 7,
    title: "The Dark Knight",
    genres: ["Action", "Crime"],
    lang: "English",
    rating: 9.0,
    votes: "2.8M",
    dur: "2h 32m",
    badge: "Classic",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    color: "#0a0a10",
  },
  {
    id: 8,
    title: "Inception",
    genres: ["Sci-Fi", "Thriller"],
    lang: "English",
    rating: 8.8,
    votes: "2.5M",
    dur: "2h 28m",
    badge: null,
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    color: "#001535",
  },
  {
    id: 9,
    title: "Interstellar",
    genres: ["Sci-Fi", "Drama"],
    lang: "English",
    rating: 8.7,
    votes: "2.0M",
    dur: "2h 49m",
    badge: null,
    year: 2014,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    color: "#050520",
  },
  {
    id: 10,
    title: "Bhool Bhulaiyaa 3",
    genres: ["Horror", "Comedy"],
    lang: "Hindi",
    rating: 7.2,
    votes: "37K",
    dur: "2h 24m",
    badge: "Trending",
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/dLMbb9xYJKB1dGFWyQNMBYDhqM4.jpg",
    color: "#1a001a",
  },
  {
    id: 11,
    title: "Spider-Man NWH",
    genres: ["Action", "Sci-Fi"],
    lang: "English",
    rating: 8.2,
    votes: "850K",
    dur: "2h 28m",
    badge: null,
    year: 2021,
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    color: "#000d2b",
  },
  {
    id: 12,
    title: "Dune Part Two",
    genres: ["Sci-Fi", "Epic"],
    lang: "English",
    rating: 8.5,
    votes: "400K",
    dur: "2h 46m",
    badge: "Must Watch",
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    color: "#1a1000",
  },
  {
    id: 13,
    title: "Avengers: Endgame",
    genres: ["Action", "Sci-Fi"],
    lang: "English",
    rating: 8.4,
    votes: "1.2M",
    dur: "3h 1m",
    badge: null,
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    color: "#0f0f1a",
  },
  {
    id: 14,
    title: "The Wild Robot",
    genres: ["Animation", "Family"],
    lang: "English",
    rating: 8.3,
    votes: "41K",
    dur: "1h 41m",
    badge: "Must Watch",
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
    color: "#001a0a",
  },
  {
    id: 15,
    title: "Singham Again",
    genres: ["Action", "Thriller"],
    lang: "Hindi",
    rating: 6.9,
    votes: "31K",
    dur: "2h 35m",
    badge: null,
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/fBHHXKC34ffxAsQvDr7TR6SQSPH.jpg",
    color: "#1a0a00",
  },
  {
    id: 16,
    title: "Venom: Last Dance",
    genres: ["Action", "Sci-Fi"],
    lang: "English",
    rating: 6.3,
    votes: "28K",
    dur: "1h 49m",
    badge: null,
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    color: "#0a0a1a",
  },
  {
    id: 17,
    title: "Animal",
    genres: ["Action", "Drama"],
    lang: "Hindi",
    rating: 7.0,
    votes: "120K",
    dur: "3h 21m",
    badge: "Trending",
    year: 2023,
    poster: "https://image.tmdb.org/t/p/w500/nRf0jRDVufIOmvKPSgBmXfBnVGl.jpg",
    color: "#1a0500",
  },
  {
    id: 18,
    title: "Fighter",
    genres: ["Action", "Thriller"],
    lang: "Hindi",
    rating: 6.8,
    votes: "48K",
    dur: "2h 46m",
    badge: null,
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/fDBELxnTe5Q4GNlEOsMlnHxenVS.jpg",
    color: "#00101a",
  },
  {
    id: 19,
    title: "Manjummel Boys",
    genres: ["Adventure", "Drama"],
    lang: "Malayalam",
    rating: 8.5,
    votes: "55K",
    dur: "2h 17m",
    badge: "Blockbuster",
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/5WT6BbfbHrVRJqWKilFnRHqMLnE.jpg",
    color: "#001020",
  },
  {
    id: 20,
    title: "Premalu",
    genres: ["Romance", "Comedy"],
    lang: "Malayalam",
    rating: 8.2,
    votes: "33K",
    dur: "2h 13m",
    badge: null,
    year: 2024,
    poster: "https://image.tmdb.org/t/p/w500/4zLMqZWR0WtGqb0KtQPhQfaTbEV.jpg",
    color: "#1a0015",
  },
];

const COMING_SOON = [
  {
    id: "cs1",
    title: "Mufasa",
    genres: ["Animation"],
    releaseDate: "Apr 2025",
    poster: "https://image.tmdb.org/t/p/w500/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
    color: "#2a1500",
  },
  {
    id: "cs2",
    title: "Gladiator II",
    genres: ["Action", "Epic"],
    releaseDate: "May 2025",
    poster: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    color: "#1a0000",
  },
  {
    id: "cs3",
    title: "Moana 2",
    genres: ["Animation"],
    releaseDate: "Jun 2025",
    poster: "https://image.tmdb.org/t/p/w500/4YZgsHLUEEeKDjXNRGJimkAFHRY.jpg",
    color: "#001a2a",
  },
  {
    id: "cs4",
    title: "Mission Impossible 8",
    genres: ["Action"],
    releaseDate: "Jul 2025",
    poster: "https://image.tmdb.org/t/p/w500/z53D0a9P7YMnMKGYxFoB9CoeRwZ.jpg",
    color: "#0a1500",
  },
];

const LANGUAGES = ["All", "Hindi", "English", "Telugu", "Tamil", "Malayalam"];
const GENRES = [
  "All",
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Thriller",
  "Animation",
];

/* ═══════════════ POSTER (with fallback) ═══════════════ */
const Poster = ({ src, alt, color }) => {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div
        className="fallback-poster"
        style={{
          background: `linear-gradient(160deg,${color} 0%,#080810 100%)`,
        }}
      >
        <span>{alt}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="card-img"
      loading="lazy"
      onError={() => setErr(true)}
    />
  );
};

/* ═══════════════ MAIN ═══════════════ */
const Movies = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeLang, setActiveLang] = useState("All");
  const [activeGenre, setActiveGenre] = useState("All");
  const [search, setSearch] = useState("");
  const [revealed, setRevealed] = useState(new Set());
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const gridRef = useRef(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() =>
      setTimeout(() => setLoaded(true), 50),
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  // Auto-advance hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            setRevealed((p) => new Set([...p, e.target.dataset.cid]));
        }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
    );
    gridRef.current
      .querySelectorAll("[data-cid]")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeLang, activeGenre, search]);

  const filtered = ALL_MOVIES.filter(
    (m) =>
      (activeLang === "All" || m.lang === activeLang) &&
      (activeGenre === "All" || m.genres.includes(activeGenre)) &&
      m.title.toLowerCase().includes(search.toLowerCase()),
  );

  const currentMovie = FEATURED[currentSlide];

  return (
    <div className={`mvp ${loaded ? "mvp--ready" : ""}`}>
      {/* ════════════════════════════════════
          MODERN HERO SECTION
      ════════════════════════════════════ */}
      <div className="hero-modern">
        <div className="hero-bg" style={{ background: currentMovie.bg }}>
          <div className="hero-gradient" />
          <div className="hero-noise" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badges">
              {currentMovie.genres.map((g) => (
                <span
                  key={g}
                  className="hero-badge"
                  style={{
                    background: `${currentMovie.accent}15`,
                    color: currentMovie.accent,
                    borderColor: `${currentMovie.accent}40`,
                  }}
                >
                  {g}
                </span>
              ))}
            </div>

            <h1 className="hero-title">{currentMovie.title}</h1>
            <p className="hero-tagline">{currentMovie.tagline}</p>
            <p className="hero-desc">{currentMovie.description}</p>

            <div className="hero-stats">
              <div className="stat">
                <svg viewBox="0 0 24 24" fill="currentColor" className="stat-icon">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="stat-val">{currentMovie.rating}</span>
                <span className="stat-label">({currentMovie.votes} votes)</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stat-icon">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="stat-val">{currentMovie.duration}</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stat-icon">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="stat-val">{currentMovie.language}</span>
              </div>
            </div>

            <div className="hero-actions">
              <button
                className="btn-primary"
                style={{ background: currentMovie.accent }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon">
                  <path d="M9 1v2h6V1h2v2h4a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h4V1h2z" />
                </svg>
                Book Tickets
              </button>
              <button
                className="btn-secondary"
                onClick={() => setTrailerUrl(currentMovie.trailer)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="btn-icon">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Trailer
              </button>
              <button className="btn-icon-only">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hero-poster">
            <div
              className="poster-glow"
              style={{
                background: `radial-gradient(circle at center, ${currentMovie.accent}40 0%, transparent 70%)`,
              }}
            />
            <div className="poster-frame">
              <Poster
                src={currentMovie.poster}
                alt={currentMovie.title}
                color={currentMovie.bg}
              />
            </div>
          </div>
        </div>

        <div className="hero-indicators">
          {FEATURED.map((_, i) => (
            <button
              key={i}
              className={`indicator ${i === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(i)}
              style={{
                background:
                  i === currentSlide ? currentMovie.accent : "transparent",
              }}
            />
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          MODERN FILTER BAR
      ════════════════════════════════════ */}
      <div className="filter-bar">
        <div className="filter-container">
          <div className="search-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="search-icon"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search for movies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="clear-btn" onClick={() => setSearch("")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          <div className="filter-group">
            <span className="filter-label">Languages</span>
            <div className="filter-chips">
              {LANGUAGES.map((l) => (
                <button
                  key={l}
                  onClick={() => setActiveLang(l)}
                  className={`chip ${activeLang === l ? "active" : ""}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">Genres</span>
            <div className="filter-chips">
              {GENRES.map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveGenre(g)}
                  className={`chip ${activeGenre === g ? "active" : ""}`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          TRENDING SECTION
      ════════════════════════════════════ */}
      <section className="section">
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2 className="section-title">Trending Now</h2>
            <span className="trend-indicator">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.5 11L12 6.5 16.5 11M12 18V7" />
              </svg>
            </span>
          </div>
          <span className="section-count">{ALL_MOVIES.length} movies</span>
        </div>

        <div className="scroll-container">
          {ALL_MOVIES.slice(0, 10).map((m) => (
            <div key={m.id} className="trending-card">
              <div className="trending-poster">
                <Poster src={m.poster} alt={m.title} color={m.color} />
                {m.badge && <span className="trending-badge">{m.badge}</span>}
                <div className="trending-overlay">
                  <button className="quick-book">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 1v2h6V1h2v2h4a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h4V1h2z" />
                    </svg>
                    Book Now
                  </button>
                </div>
              </div>
              <div className="trending-info">
                <h3 className="trending-title">{m.title}</h3>
                <div className="trending-meta">
                  <span className="rating">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {m.rating}
                  </span>
                  <span className="meta-dot">•</span>
                  <span>{m.lang}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          NOW SHOWING GRID
      ════════════════════════════════════ */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Now Showing</h2>
          <span className="section-count">{filtered.length} results</span>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="15" rx="2" />
                <polyline points="2 7 12 13 22 7" />
              </svg>
            </div>
            <h3>No movies found</h3>
            <p>Try adjusting your filters or search query</p>
            <button
              className="reset-btn"
              onClick={() => {
                setActiveLang("All");
                setActiveGenre("All");
                setSearch("");
              }}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="movie-grid" ref={gridRef}>
            {filtered.map((m, i) => (
              <div
                key={m.id}
                data-cid={String(m.id)}
                className={`movie-card ${revealed.has(String(m.id)) ? "revealed" : ""}`}
                style={{ transitionDelay: `${(i % 12) * 0.04}s` }}
              >
                <div className="movie-poster">
                  <Poster src={m.poster} alt={m.title} color={m.color} />
                  {m.badge && <span className="movie-badge">{m.badge}</span>}
                  <div className="movie-overlay">
                    <button className="overlay-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 1v2h6V1h2v2h4a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h4V1h2z" />
                      </svg>
                      Book Tickets
                    </button>
                  </div>
                </div>

                <div className="movie-info">
                  <div className="movie-rating">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span>{m.rating}</span>
                    <span className="votes">({m.votes})</span>
                  </div>

                  <h3 className="movie-title">{m.title}</h3>

                  <div className="movie-details">
                    <span>{m.lang}</span>
                    <span className="meta-dot">•</span>
                    <span>{m.dur}</span>
                  </div>

                  <div className="movie-genres">
                    {m.genres.map((g) => (
                      <span key={g} className="genre-tag">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ════════════════════════════════════
          COMING SOON
      ════════════════════════════════════ */}
      <section className="section section-coming">
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2 className="section-title">Coming Soon</h2>
            <div className="pulse-dot" />
          </div>
        </div>

        <div className="scroll-container">
          {COMING_SOON.map((m) => (
            <div key={m.id} className="coming-card">
              <div className="coming-poster">
                <Poster src={m.poster} alt={m.title} color={m.color} />
                <div className="coming-veil" />
                <div className="release-date">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {m.releaseDate}
                </div>
                <div className="coming-overlay">
                  <button className="notify-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    Notify Me
                  </button>
                </div>
              </div>
              <div className="coming-info">
                <h3 className="coming-title">{m.title}</h3>
                <p className="coming-genres">{m.genres.join(" • ")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          MODERN TRAILER MODAL
      ════════════════════════════════════ */}
      {trailerUrl && (
        <div className="modal-backdrop" onClick={() => setTrailerUrl(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setTrailerUrl(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="modal-video">
              <iframe
                src={trailerUrl}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
