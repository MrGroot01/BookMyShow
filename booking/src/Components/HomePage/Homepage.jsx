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
    cat: "restaurants ",
    name: "Kanan Gill Live — Not This Again",
    venue: "Good Shepherd Auditorium",
  },
  {
    img: "https://www.bangaloreclub.com/img/facilities/bars.jpg",
    date: "29 MAR · SUN",
    cat: "CLUB",
    name: "Marsh Live — All Night Long",
    venue: "Sunburn Union, Bengaluru",
  },
  {
    img: "https://www.namasteindiatrip.com/blog/wp-content/uploads/2022/03/NoLimmits-Lounge-and-Club.jpg",
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZ16m0QbVwWhEsFZ1g7MGEQTb6jjp-OzRBg&s",
    name: "ramayana release ",
    lang: "Hindi",
    video: "https://www.youtube.com/embed/YleIZgpTF6w?autoplay=1",
  },
  
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxk9GTHZHsI3Cb3ELlsOlEXXBejeM_RuO9Q&s",
    name: "Toxic premium trailer",
    lang: "Kannada",
    video: "https://www.youtube.com/embed/aF08WVSvCok",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSNf6ADxd9-KTXNp-k1rhyxdAfikji5E6URQ&s",
    name: "love mocktail 3",
    lang: "Kannada",
    video: "https://www.youtube.com/embed/Xie9bskmX34?autoplay=1",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtLU_H-6-SDye-T_wEf4WLbfHWOOJQ69Nhg&s",
    name: "Peddi premium trailer",
    lang: "Telugu",
    video: "https://www.youtube.com/embed/hwVPb2j5v6A?autoplay=1",
  },
  {
    img: "https://i.ytimg.com/vi/NkZFnpDhdCk/maxresdefault.jpg",
    name: "Paradise premium trailer",
    lang: "Telugu",
    video: "https://www.youtube.com/embed/NkZFnpDhdCk?autoplay=1",
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/c9e38512e885c9ccf27d3133e13766ba72c668deaf5a9b8f592dd0b5df57c4c8.jpg",
    name: "spider man premium trailer",
    lang: "English",
    video: "https://www.youtube.com/embed/aBlsrtxuwss?autoplay=1",
  },
  {
    img: "https://i.ytimg.com/vi/nwf6Izfajxc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLFYtVVLTDDitgQ0JMWIYQ4F-r5A",
    name: "avatar 3  primum trailer",
    lang: "English",
    video: "https://www.youtube.com/embed/nb_fFj_0rq8?autoplay=1",
  },
  {
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202603/dhurandhar-2-185721408-16x9.jpg?VersionId=lFgQh1SeRCL9sO1RIvmMd8vNN5yazUu9&size=690:388",
    name: "dhurandhar the revenge",
    lang: "Hindi",
    video: "https://www.youtube.com/embed/CN0lNff-zm0?autoplay=1",
  },
 
];

const plays = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9GaYK9q21aMP3JxmoaUTItaf-MQ4iFCgLw&s",
    name: "Amrita Sher-Gill",
    lang: "Kannada",
    date: "28 April onwards",
  },
  {
    img: "https://in.bmscdn.com/events/moviecard/ET00492198.jpg",
    name: "Gangavathi Pranesh ",
    lang: "Kannada",
    date: "29 May onwards",
  },
  {
    img: "https://assets-in.bmscdn.com/nmcms/mobile/media-mobile-moor-jana-kannada-crowdwork-show--2025-11-11-t-13-45-37.jpg",
    name: "Sudha Baraguru",
    lang: "Kannada",
    date: "23 May onwards",
  },
  {
    img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00307718-eqjphustfp-landscape.jpg",
    name: "Karthik Pattar",
    lang: "Kannada",
    date: "12 Apr onwards",
  },
  {
    img: "https://i.ytimg.com/vi/X0ligk4IjA4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5zWkBjy7YNatSxsn06F86vGcDRw",
    name: "Sonu Venugopal ",
    lang: "Kannada",
    date: "15 Apr onwards",
  },
  {
    img: "https://i.ytimg.com/vi/-i_va5cZ_Go/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDz_5Sz8xb9VNVvbtoUw6Z9J5jpqQ",
    name: "Pavan Venugopal",
    lang: "Kannada",
    date: "24 Apr onwards",
  },
  {
    img: "https://assets-in.bmscdn.com/nmcms/mobile/media-mobile-masth-maja-madi-kannada-standup-comedy-live-2025-9-30-t-8-43-11.jpg",
    name: "Sudarshan Rangaprasad ",
    lang: "Kannada",
    date: "12 Apr onwards",
  },
];

const sports = [
  {
    img: "https://c.ndtvimg.com/2022-05/b4b1tdu8_narendra-modi-stadium-ipl-2022_625x300_29_May_22.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
    name: "Gujarat Titans — IPL Registrations",
    date: "Fri, 17 Apr",
    venue: "Narendra Modi Stadium, Ahmedabad",
  },
  {
    img: "https://sportsboardindia.com/wp-content/uploads/2025/08/Largest-Football-Stadium-In-India-edited.jpeg",
    name: "football ",
    date: "Sun, 29 Mar",
    venue: "Salt Lake,bengalore",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfS_IhRcJNK8pN-Cenix7LTR2uBwyXmF8cuw&s",
    name: "IPL Rcb",
    date: "Mon, 30 april onwards",
    venue: "M chinnaswamy stadium, Bengaluru",
  },
  {
    img: "https://thebridge.in/wp-content/uploads/2020/09/Salt-Lake-stadium-in-Kolkata-Source-Zee-News.jpg",
    name: "FootBall",
    date: "Mon, 30 April onwards",
    venue: "MN Krishna Rao , Bengaluru",
  },
  {
    img: "https://m.media-amazon.com/images/I/61QyNfP1LjL._AC_UF1000,1000_QL80_.jpg",
    name: "Chess Board",
    date: "Mon, 20 April onwards",
    venue: "krishan , Bengaluru",
  },
  {
    img: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_sm/f_auto/primary/kfsyzuaoipfhm4qonqci",
    name: "Badminton Ground",
    date: "Mon, 19 April onwards",
    venue: "Platform, Bengaluru",
  },
];

const Adventure = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcm6Ip8UrOi3o9ERKukZgnA9Q_fH84UelCA&s",
    name: "dadali place karnataka",
    date: "28 April onwards",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6WQZzG1VTOUPZcXots-P-tUuPiL8FelQbw&s",
    name: "kumara parvatha",
    date: "20 April onwards",
  },
  {
    img: "https://d26dp53kz39178.cloudfront.net/media/uploads/Location_Based_Travel_Guide_Images/Jetski_result-1762885935030.webp",
    name: "Gokarna Beach Trek",
    date: "Fri, 14 Apr onwards",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22FeKFqvzIW_OZW8-MrRFZhZt0uU9Mm1R6A&s",
    name: "Sakleshpur",
    date: "Tue, 12 May",
  },
  {
    img: "https://www.a2ztrip.com/images/packages/1761302568_Karnataka%2015.jpg",
    name: "murdeshwar,Temple",
    date: "Tue, 21 may onwards",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShqRkWrk2QvUhGLcDz5wWp4hWMGqEd1zje-A&s",
    name: "mysore safari",
    date: "Tue, 20 April",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRXMA8XVLisp2DhGNMys5cisVSIje6smhxw&s",
    name: "patla sakleshpur",
    date: "Tue, 24 April",
  },
  {
    img: "https://media1.thrillophilia.com/filestore/hs178da3y5a3tr8vxr0tjx2fhig5_Downpic.cc-image431526921.jpg",
    name: "zipline in sakleshpur",
    date: "Tue, 10 May",
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
  const [videoUrl, setVideoUrl] = useState(null);
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
              <div className="premiere-label">TRAILERS</div>
              <div className="premiere-sub">
                Experience upcoming blockbusters before they hit the big screen
              </div>
            </div>
          </div>

          <div className="premiere-cards">
            {premieres.map((p) => (
              <div
                key={p.name}
                className="premiere-card"
                onClick={() => setVideoUrl(p.video)} // ✅ FIX HERE
              >
                <img src={p.img} alt={p.name} />

                <div className="premiere-badge">
                  <div className="p-tag">PREMIERE</div>
                  <div className="p-name">{p.name}</div>
                  <div className="p-lang">{p.lang}</div>
                </div>

                {/* ▶ PLAY BUTTON */}
                <div className="play-btn">▶</div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* PLAYS */}
      <FadeUp>
        <section>
          <SectionHeader
            title="LATEST"
            accent="ComedyShow"
            path="/comedyshow"
          />
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
            accent="ADVENTURE "
            path="/adventure"
          />
          <div className="act-grid">
            {Adventure.map((a) => (
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
      {/* 🎬 VIDEO MODAL */}
     {videoUrl && (
  <div className="video-modal" onClick={() => setVideoUrl(null)}>
    <div
      className="video-container"
      onClick={(e) => e.stopPropagation()}
    >
      <iframe
        width="100%"
        height="500"
        src={videoUrl}
        title="Trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      <span className="close-btn" onClick={() => setVideoUrl(null)}>
        ✖
      </span>
    </div>
  </div>
)}
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
