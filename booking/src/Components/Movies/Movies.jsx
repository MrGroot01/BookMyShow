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
    formats: ["2D", "3D", "IMAX 3D", "4DX"],
    poster: "https://image.tmdb.org/t/p/w500/ie7A7pDhOQjqRZVgc3HqFNHoYfR.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/eBNUFn6kVCvFtNqkGqSfk2cSRMU.jpg",
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
    poster: "https://image.tmdb.org/t/p/w500/oLxWocqmS8tNBVAB4KATJMGV3PL.jpg",
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
    formats: ["2D", "IMAX 70mm"],
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
    formats: ["2D", "IMAX 70mm"],
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
    formats: ["2D", "IMAX 3D", "4DX"],
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
    genres: ["Animation", "Adventure"],
    formats: ["2D", "3D", "IMAX 3D", "4DX"],
    lang: "English, Hindi, Telugu",
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
    genres: ["Action", "Thriller"],
    formats: ["2D", "IMAX", "4DX"],
    lang: "English, Hindi, Tamil",
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
  const gridRef = useRef(null);

  /* ── New Features State ── */
  const [watchlist, setWatchlist] = useState(new Set());
  const [sortBy, setSortBy] = useState("Default");
  const [showWatchlistOnly, setShowWatchlistOnly] = useState(false);
  const [quickViewMovie, setQuickViewMovie] = useState(null);

  const toggleWatchlist = (e, id) => {
    e.stopPropagation();
    setWatchlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  /* ── Anti-glitch: wait for first paint ── */
  useEffect(() => {
    const raf = requestAnimationFrame(() =>
      setTimeout(() => setLoaded(true), 50),
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  /* ── Bootstrap via CDN (no npm needed) ── */
  useEffect(() => {
    if (!document.getElementById("mv-bs-css")) {
      const link = Object.assign(document.createElement("link"), {
        id: "mv-bs-css",
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      });
      document.head.appendChild(link);
    }

    const js = Object.assign(document.createElement("script"), {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      async: true,
    });
    js.onload = () => {
      const el = document.getElementById("heroCarousel");
      if (el && window.bootstrap) {
        new window.bootstrap.Carousel(el, {
          interval: 4000,
          ride: "carousel",
          pause: "hover",
        });
      }
    };
    document.body.appendChild(js);
    return () => document.body.contains(js) && document.body.removeChild(js);
  }, []);

  /* ── IntersectionObserver: staggered reveal ── */
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

  let filtered = ALL_MOVIES.filter(
    (m) =>
      (activeLang === "All" || m.lang === activeLang) &&
      (activeGenre === "All" || m.genres.includes(activeGenre)) &&
      m.title.toLowerCase().includes(search.toLowerCase()) &&
      (!showWatchlistOnly || watchlist.has(m.id))
  );

  if (sortBy === "Rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "Title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className={`mvp ${loaded ? "mvp--ready" : ""}`}>
      {/* ════════════════════════════════════
          BOOTSTRAP HERO CAROUSEL
      ════════════════════════════════════ */}
      <div
        id="heroCarousel"
        className="carousel slide mvp-carousel"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-indicators mvp-dots">
          {FEATURED.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={i}
              aria-label={`Slide ${i + 1}`}
              className={i === 0 ? "active" : ""}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {FEATURED.map((m, i) => (
            <div
              key={m.id}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
            >
              <div className="mvp-slide" style={{ background: m.bg }}>
                <div className="mvp-slide-noise" />
                <div className="mvp-slide-body">
                  <div className="mvp-slide-text">
                    <div className="mvp-genres">
                      {m.genres.map((g) => (
                        <span
                          key={g}
                          className="mvp-gpill"
                          style={{
                            border: `1px solid ${m.accent}`,
                            color: m.accent,
                          }}
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                    <h1 className="mvp-slide-title">{m.title}</h1>
                    <p className="mvp-slide-tag">{m.tagline}</p>
                    <p className="mvp-slide-desc">{m.description}</p>
                    <div className="mvp-slide-meta" style={{ marginBottom: m.formats ? '16px' : '40px' }}>
                      <span style={{ color: m.accent }}>
                        ★ {m.rating} <small>({m.votes})</small>
                      </span>
                      <span className="mvp-sep" />
                      <span>{m.duration}</span>
                      <span className="mvp-sep" />
                      <span>{m.language}</span>
                    </div>
                    {m.formats && (
                      <div className="mvp-formats" style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
                        {m.formats.map((f) => (
                          <span
                            key={f}
                            className="mvp-gpill"
                            style={{
                              border: '1px solid rgba(255,255,255,0.3)',
                              color: '#fff',
                              background: 'rgba(255,255,255,0.08)'
                            }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mvp-slide-ctas">
                      <button
                        className="mvp-btn-book"
                        style={{ background: m.accent }}
                      >
                        🎟 Book Tickets
                      </button>
                      <button
                        className="mvp-btn-ghost"
                        onClick={() => setTrailerUrl(m.trailer)}
                      >
                        ▶ Trailer
                      </button>
                    </div>
                  </div>

                  <div className="mvp-slide-poster">
                    <div
                      className="mvp-poster-glow"
                      style={{
                        background: `radial-gradient(ellipse,rgba(${m.accentRgb},.4) 0%,transparent 70%)`,
                      }}
                    />
                    <Poster src={m.poster} alt={m.title} color={m.bg} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev mvp-ctrl"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="mvp-arrow">&#8249;</span>
        </button>
        <button
          className="carousel-control-next mvp-ctrl mvp-ctrl--r"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="mvp-arrow">&#8250;</span>
        </button>
      </div>

      {/* ════════════════════════════════════
          STICKY FILTER BAR
      ════════════════════════════════════ */}
      <div className="mvp-bar">
        <div className="mvp-bar-inner">
          <div className="mvp-search-box">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="mvp-search-ico"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              className="mvp-search"
              type="text"
              placeholder="Search movies…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="mvp-filters">
            <div className="mvp-pills-row">
              <span className="mvp-label">Lang</span>
              {LANGUAGES.map((l) => (
                <button
                  key={l}
                  onClick={() => setActiveLang(l)}
                  className={`mvp-pill ${activeLang === l ? "mvp-pill--on" : ""}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="mvp-pills-row">
              <span className="mvp-label">Genre</span>
              {GENRES.map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveGenre(g)}
                  className={`mvp-pill ${activeGenre === g ? "mvp-pill--on" : ""}`}
                >
                  {g}
                </button>
              ))}
            </div>

            <div className="mvp-pills-row">
              <span className="mvp-label">Sort</span>
              {["Default", "Rating", "Title"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSortBy(s)}
                  className={`mvp-pill ${sortBy === s ? "mvp-pill--on" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="mvp-pills-row">
              <span className="mvp-label">Watchlist</span>
              <button
                onClick={() => setShowWatchlistOnly(!showWatchlistOnly)}
                className={`mvp-pill mvp-pill--heart ${showWatchlistOnly ? "mvp-pill--on" : ""}`}
              >
                ♥ My Favorites
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          TRENDING HORIZONTAL SCROLL
      ════════════════════════════════════ */}
      <section className="mvp-sec">
        <div className="mvp-sec-head">
          <h2 className="mvp-sec-title">
            <span className="mvp-fire">🔥</span> Trending Now
          </h2>
          <span className="mvp-count">{ALL_MOVIES.length} movies</span>
        </div>
        <div className="mvp-hscroll">
          {ALL_MOVIES.slice(0, 10).map((m) => (
            <div key={m.id} className="mvp-tc" onClick={() => setQuickViewMovie(m)}>
              <div className="mvp-tc-img">
                <Poster src={m.poster} alt={m.title} color={m.color} />
                {m.badge && <span className="mvp-badge">{m.badge}</span>}
                <button 
                  className={`mvp-btn-heart ${watchlist.has(m.id) ? "active" : ""}`}
                  onClick={(e) => toggleWatchlist(e, m.id)}
                >
                  {watchlist.has(m.id) ? "♥" : "♡"}
                </button>
                <div className="mvp-hover-ov">
                  <button className="mvp-mini-book" onClick={(e) => { e.stopPropagation(); setQuickViewMovie(m); }}>Book Now</button>
                </div>
              </div>
              <p className="mvp-tc-name">{m.title}</p>
              <p className="mvp-tc-meta">
                ★ {m.rating} · {m.lang}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          NOW SHOWING GRID
      ════════════════════════════════════ */}
      <section className="mvp-sec">
        <div className="mvp-sec-head">
          <h2 className="mvp-sec-title">Now Showing</h2>
          <span className="mvp-count">{filtered.length} results</span>
        </div>

        {filtered.length === 0 ? (
          <div className="mvp-empty">
            <div className="mvp-empty-ico">🎬</div>
            <p>No movies match your filters</p>
            <button
              onClick={() => {
                setActiveLang("All");
                setActiveGenre("All");
                setSearch("");
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="mvp-grid" ref={gridRef}>
            {filtered.map((m, i) => (
              <div
                key={m.id}
                data-cid={String(m.id)}
                className={`mvp-card ${revealed.has(String(m.id)) ? "mvp-card--in" : ""}`}
                style={{ transitionDelay: `${(i % 8) * 0.055}s` }}
                onClick={() => setQuickViewMovie(m)}
              >
                <div className="mvp-card-img">
                  <Poster src={m.poster} alt={m.title} color={m.color} />
                  {m.badge && <span className="mvp-badge">{m.badge}</span>}
                  <button 
                    className={`mvp-btn-heart ${watchlist.has(m.id) ? "active" : ""}`}
                    onClick={(e) => toggleWatchlist(e, m.id)}
                  >
                    {watchlist.has(m.id) ? "♥" : "♡"}
                  </button>
                  <div className="mvp-hover-ov mvp-hover-ov--lg">
                    <button className="mvp-book-full" onClick={(e) => { e.stopPropagation(); setQuickViewMovie(m); }}>🎟 Book Now</button>
                  </div>
                </div>
                <div className="mvp-card-body">
                  <div className="mvp-card-rating">
                    <span className="mvp-star">★</span>
                    <span className="mvp-rval">{m.rating}</span>
                    <span className="mvp-rvotes">{m.votes}</span>
                  </div>
                  <h3 className="mvp-card-title">{m.title}</h3>
                  <p className="mvp-card-info">
                    {m.lang} · {m.dur}
                  </p>
                  <div className="mvp-tags">
                    {(m.formats || ["2D"]).map((f) => (
                      <span key={f} className="mvp-tag mvp-tag--fmt">
                        {f}
                      </span>
                    ))}
                    {m.genres.map((g) => (
                      <span key={g} className="mvp-tag">
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
      <section className="mvp-sec mvp-sec--soon">
        <div className="mvp-sec-head">
          <h2 className="mvp-sec-title">
            <span className="mvp-pulse-dot" /> Coming Soon
          </h2>
        </div>
        <div className="mvp-hscroll">
          {COMING_SOON.map((m) => (
            <div key={m.id} className="mvp-tc mvp-tc--soon">
              <div className="mvp-tc-img">
                <Poster src={m.poster} alt={m.title} color={m.color} />
                <div className="mvp-soon-veil" />
                <div className="mvp-soon-date">{m.releaseDate}</div>
                <div className="mvp-hover-ov">
                  <button className="mvp-mini-book mvp-mini-book--notify">
                    🔔 Notify
                  </button>
                </div>
              </div>
              <p className="mvp-tc-name">{m.title}</p>
              <div className="mvp-tc-meta" style={{ marginTop: "4px" }}>
                <span>{(m.formats || ["2D"]).join(", ")}</span> • <span>{m.lang || "English"}</span>
              </div>
              <p className="mvp-tc-meta" style={{ marginTop: "2px" }}>{m.genres.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 72 }} />

      {trailerUrl && (
        <div className="trailer-modal" onClick={() => setTrailerUrl(null)}>
          <div className="trailer-content" onClick={(e) => e.stopPropagation()}>
            <button className="trailer-close" onClick={() => setTrailerUrl(null)}>✖</button>
            <iframe
              width="100%"
              height="400"
              src={trailerUrl}
              title="Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {quickViewMovie && (
        <div className="trailer-modal qv-overlay" onClick={() => setQuickViewMovie(null)}>
          <div className="trailer-content qv-modal" onClick={(e) => e.stopPropagation()}>
            <button className="trailer-close" onClick={() => setQuickViewMovie(null)}>✖</button>
            <div className="qv-body">
              <div className="qv-poster">
                <Poster src={quickViewMovie.poster} alt={quickViewMovie.title} color={quickViewMovie.color} />
              </div>
              <div className="qv-info">
                <h2>{quickViewMovie.title}</h2>
                <div className="qv-meta">
                  {quickViewMovie.rating && <><span className="qv-rating">★ {quickViewMovie.rating}</span><span className="mvp-sep"></span></>}
                  {quickViewMovie.lang && <><span>{quickViewMovie.lang}</span><span className="mvp-sep"></span></>}
                  <span>{quickViewMovie.dur || quickViewMovie.releaseDate}</span>
                </div>
                <div className="mvp-tags" style={{ marginBottom: "20px" }}>
                  {(quickViewMovie.formats || ["2D"]).map((f) => (
                    <span key={f} className="mvp-tag mvp-tag--fmt">
                      {f}
                    </span>
                  ))}
                  {quickViewMovie.genres.map((g) => (
                    <span key={g} className="mvp-tag">
                      {g}
                    </span>
                  ))}
                </div>
                <p className="qv-desc">
                  {quickViewMovie.description || "Get ready for an epic cinematic journey with stunning visuals and an unforgettable storyline. Secure your tickets now and experience the magic on the big screen."}
                </p>
                <div className="qv-actions mt-4">
                  <button className="mvp-book-full">🎟 Book Tickets</button>
                  <button 
                    className="mvp-btn-ghost" 
                    onClick={() => {
                      setQuickViewMovie(null);
                      setTrailerUrl(quickViewMovie.trailer || "https://www.youtube.com/embed/dQw4w9WgXcQ");
                    }}
                  >
                    ▶ Trailer
                  </button>
                  <button 
                    className={`mvp-btn-ghost ${watchlist.has(quickViewMovie.id) ? 'active-heart' : ''}`}
                    onClick={(e) => toggleWatchlist(e, quickViewMovie.id)}
                    style={{ padding: "16px", borderRadius: "50%", width: "52px", color: watchlist.has(quickViewMovie.id) ? "var(--primary)" : "var(--text-main)" }}
                  >
                    {watchlist.has(quickViewMovie.id) ? "♥" : "♡"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
