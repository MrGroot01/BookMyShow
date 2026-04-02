import { useState, useEffect } from "react";
import "./Sports.css";

const sliderData = [
  {
    id: 1,
    title: "Summer 5K Run 2026",
    subtitle: "Feel the Rush, Beat Your Best",
    location: "Cubbon Park, Bengaluru",
    date: "April 2, 2026",
    tag: "Running",
    bg: "linear-gradient(135deg, #ff416c, #ff4b2b)",
    emoji: "🏃",
  },
  {
    id: 2,
    title: "Premier Cricket League",
    subtitle: "Six Sixes. One Winner.",
    location: "Chinnaswamy Stadium",
    date: "April 3, 2026",
    tag: "Cricket",
    bg: "linear-gradient(135deg, #1a1a2e, #16213e)",
    emoji: "🏏",
  },
  {
    id: 3,
    title: "Bengaluru Football Cup",
    subtitle: "The Beautiful Game Awaits",
    location: "Kanteerava Stadium",
    date: "April 5, 2026",
    tag: "Football",
    bg: "linear-gradient(135deg, #134e5e, #71b280)",
    emoji: "⚽",
  },
  {
    id: 4,
    title: "Hoops Championship 2026",
    subtitle: "Dribble. Dunk. Dominate.",
    location: "Koramangala Indoor Stadium",
    date: "April 6, 2026",
    tag: "Basketball",
    bg: "linear-gradient(135deg, #f7971e, #ffd200)",
    emoji: "🏀",
  },
];

const eventsData = [
  {
    id: 1,
    title: "Summer 5K Run 2026",
    category: "Running",
    when: "Today",
    whenColor: "#a78bfa",
    location: "Cubbon Park",
    price: 499,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    date: "Thu, 02 Apr",
    time: "6:00 AM",
    duration: "2 hours",
    ageLimit: "16yrs +",
    language: "English / Kannada",
    type: "Running Event",
    venue: "Cubbon Park, Bengaluru",
    interested: 214,
    about: "Join hundreds of runners for the Summer 5K Run 2026 at Bengaluru's iconic Cubbon Park. Whether you're a seasoned athlete or a first-timer, this event celebrates fitness, community, and the spirit of running.",
  },
  {
    id: 2,
    title: "Cricket League",
    category: "Cricket",
    when: "Tomorrow",
    whenColor: "#f472b6",
    location: "Chinnaswamy Stadium",
    price: 599,
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    date: "Fri, 03 Apr",
    time: "3:00 PM",
    duration: "4 hours",
    ageLimit: "All Ages",
    language: "Hindi / English",
    type: "Cricket Tournament",
    venue: "M. Chinnaswamy Stadium",
    interested: 512,
    about: "Experience the thrill of live cricket at the legendary Chinnaswamy Stadium. Watch top club teams compete in this high-octane T20 league. Cheer for your favourite team and soak in the electric atmosphere.",
  },
  {
    id: 3,
    title: "Football Tournament",
    category: "Football",
    when: "This Weekend",
    whenColor: "#34d399",
    location: "Kanteerava Stadium",
    price: 399,
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    date: "Sat, 05 Apr",
    time: "5:00 PM",
    duration: "3 hours",
    ageLimit: "14yrs +",
    language: "English / Kannada",
    type: "Football Tournament",
    venue: "Kanteerava Outdoor Stadium",
    interested: 389,
    about: "The Bengaluru Football Tournament returns! Watch the city's best football clubs battle it out on the turf at Kanteerava. Passionate crowds and top-quality football await this weekend.",
  },
  {
    id: 4,
    title: "Basketball Championship",
    category: "Basketball",
    when: "This Weekend",
    whenColor: "#34d399",
    location: "Koramangala Indoor",
    price: 299,
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    date: "Sun, 06 Apr",
    time: "4:00 PM",
    duration: "2.5 hours",
    ageLimit: "All Ages",
    language: "English",
    type: "Basketball Championship",
    venue: "Koramangala Indoor Stadium",
    interested: 176,
    about: "The Bengaluru Basketball Championship brings together the finest hoops talent in the city. Expect slam dunks, buzzer-beaters, and incredible displays of teamwork and skill.",
  },
  {
    id: 5,
    title: "Badminton Open 2026",
    category: "Badminton",
    when: "Next Week",
    whenColor: "#60a5fa",
    location: "Sree Kanteerava",
    price: 349,
    img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80",
    date: "Sat, 11 Apr",
    time: "10:00 AM",
    duration: "6 hours",
    ageLimit: "All Ages",
    language: "English / Kannada",
    type: "Badminton Tournament",
    venue: "Sree Kanteerava Indoor Stadium",
    interested: 143,
    about: "The Bengaluru Badminton Open 2026 is a full-day smash fest featuring singles and doubles categories. Players of all skill levels are welcome to participate and spectate.",
  },
  {
    id: 6,
    title: "Marathon City Run",
    category: "Running",
    when: "Next Week",
    whenColor: "#60a5fa",
    location: "MG Road, Bengaluru",
    price: 799,
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    date: "Sun, 12 Apr",
    time: "5:30 AM",
    duration: "5 hours",
    ageLimit: "18yrs +",
    language: "English",
    type: "Marathon",
    venue: "MG Road to Lalbagh",
    interested: 631,
    about: "Run through the heart of Bengaluru in the Marathon City Run 2026. Starting at MG Road and finishing at Lalbagh Botanical Garden across 21km. Medals and hydration stations await every finisher.",
  },
  {
    id: 7,
    title: "Table Tennis Masters",
    category: "Table Tennis",
    when: "Tomorrow",
    whenColor: "#f472b6",
    location: "BBMP Sports Complex",
    price: 199,
    img: "https://images.unsplash.com/photo-1593786082590-8e94b8e01ede?w=800&q=80",
    date: "Fri, 03 Apr",
    time: "9:00 AM",
    duration: "3 hours",
    ageLimit: "12yrs +",
    language: "English / Kannada",
    type: "Table Tennis",
    venue: "BBMP Sports Complex, Jayanagar",
    interested: 98,
    about: "The Table Tennis Masters tournament returns to Bengaluru! Fast reflexes, precision shots, and intense rallies make this one of the most exciting indoor sports events of the season.",
  },
  {
    id: 8,
    title: "Volleyball League",
    category: "Volleyball",
    when: "Today",
    whenColor: "#a78bfa",
    location: "Palace Grounds",
    price: 249,
    img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    date: "Thu, 02 Apr",
    time: "5:00 PM",
    duration: "3 hours",
    ageLimit: "All Ages",
    language: "English / Kannada",
    type: "Volleyball League",
    venue: "Palace Grounds, Bengaluru",
    interested: 267,
    about: "The Bengaluru Volleyball League brings the energy of volleyball to Palace Grounds. Multiple teams competing across the day — cheer your squad in this fantastic open-air setting.",
  },
  {
    id: 9,
    title: "Cycling Grand Prix",
    category: "Cycling",
    when: "This Weekend",
    whenColor: "#34d399",
    location: "Nandi Hills Circuit",
    price: 449,
    img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
    date: "Sat, 05 Apr",
    time: "7:00 AM",
    duration: "4 hours",
    ageLimit: "16yrs +",
    language: "English",
    type: "Cycling Race",
    venue: "Nandi Hills, Bengaluru",
    interested: 302,
    about: "The Cycling Grand Prix takes riders on a scenic and challenging circuit around the iconic Nandi Hills. With categories for amateurs and pros, this is the biggest cycling event on Bengaluru's calendar this season.",
  },
  {
    id: 10,
    title: "Boxing Invitational",
    category: "Boxing",
    when: "Next Week",
    whenColor: "#60a5fa",
    location: "Kanteerava Indoor",
    price: 549,
    img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80",
    date: "Fri, 10 Apr",
    time: "6:00 PM",
    duration: "3 hours",
    ageLimit: "18yrs +",
    language: "English / Hindi",
    type: "Boxing Tournament",
    venue: "Kanteerava Indoor Stadium",
    interested: 415,
    about: "Watch Bengaluru's top boxers clash in the Boxing Invitational 2026. With multiple weight categories, thrilling bouts, and championship belts on the line, this is a night of pure sporting intensity you won't want to miss.",
  },
  {
    id: 11,
    title: "Swimming Championship",
    category: "Swimming",
    when: "Tomorrow",
    whenColor: "#f472b6",
    location: "KSCA Aquatic Centre",
    price: 179,
    img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
    date: "Fri, 03 Apr",
    time: "8:00 AM",
    duration: "5 hours",
    ageLimit: "All Ages",
    language: "English / Kannada",
    type: "Swimming Meet",
    venue: "KSCA Aquatic Centre, Bengaluru",
    interested: 189,
    about: "The Annual Swimming Championship brings together the city's fastest swimmers to compete across freestyle, butterfly, backstroke, and relay events. Open to all age groups with separate categories for juniors and seniors.",
  },
  {
    id: 12,
    title: "Kabaddi Super League",
    category: "Kabaddi",
    when: "Today",
    whenColor: "#a78bfa",
    location: "Shree Shivaji Stadium",
    price: 149,
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80",
    date: "Thu, 02 Apr",
    time: "4:00 PM",
    duration: "3 hours",
    ageLimit: "All Ages",
    language: "Kannada / Hindi",
    type: "Kabaddi Tournament",
    venue: "Shree Shivaji Stadium, Bengaluru",
    interested: 523,
    about: "The Kabaddi Super League celebrates India's home-grown contact sport with electrifying matches between top city teams. High energy, big raids, and non-stop action — this is the ultimate Kabaddi experience in Bengaluru.",
  },
  {
    id: 13,
    title: "Tennis Open 2026",
    category: "Tennis",
    when: "Next Week",
    whenColor: "#60a5fa",
    location: "KSLTA Courts",
    price: 599,
    img: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80",
    date: "Mon, 14 Apr",
    time: "9:00 AM",
    duration: "8 hours",
    ageLimit: "All Ages",
    language: "English",
    type: "Tennis Tournament",
    venue: "KSLTA Tennis Complex, Bengaluru",
    interested: 274,
    about: "The Bengaluru Tennis Open 2026 features singles and doubles draws for amateur and semi-pro players. Held at the prestigious KSLTA courts, expect high-level baseline duels, net battles, and a vibrant crowd atmosphere.",
  },
  {
    id: 14,
    title: "Yoga & Wellness Fest",
    category: "Wellness",
    when: "This Weekend",
    whenColor: "#34d399",
    location: "Lalbagh Botanical Garden",
    price: 299,
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    date: "Sun, 06 Apr",
    time: "6:30 AM",
    duration: "3 hours",
    ageLimit: "All Ages",
    language: "English / Kannada",
    type: "Wellness Event",
    venue: "Lalbagh Botanical Garden, Bengaluru",
    interested: 447,
    about: "Start your Sunday right at the Yoga & Wellness Festival in the lush surroundings of Lalbagh. Expert instructors lead sessions in Hatha, Vinyasa, and meditation. Open to beginners and advanced practitioners alike.",
  },
  {
    id: 15,
    title: "Archery Masters Cup",
    category: "Archery",
    when: "Next Week",
    whenColor: "#60a5fa",
    location: "SAI Centre, Bengaluru",
    price: 249,
    img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80",
    date: "Sat, 12 Apr",
    time: "11:00 AM",
    duration: "4 hours",
    ageLimit: "14yrs +",
    language: "English / Kannada",
    type: "Archery Tournament",
    venue: "SAI Training Centre, Bengaluru",
    interested: 121,
    about: "The Archery Masters Cup brings precision, focus, and nerves of steel to the SAI Centre. Watch seasoned archers compete in recurve and compound categories for the coveted Masters Cup trophy.",
  },
  {
    id: 16,
    title: "Squash City Series",
    category: "Squash",
    when: "Tomorrow",
    whenColor: "#f472b6",
    location: "KSCA Squash Courts",
    price: 199,
    img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
    date: "Fri, 03 Apr",
    time: "2:00 PM",
    duration: "3 hours",
    ageLimit: "16yrs +",
    language: "English",
    type: "Squash Tournament",
    venue: "KSCA Squash Courts, Bengaluru",
    interested: 88,
    about: "The Squash City Series is a fast-paced knockout tournament for Bengaluru's top squash players. Watch blazing rallies and tactical brilliance unfold on the glass-walled courts at KSCA's world-class facility.",
  },
];

const timeFilters = ["Today", "Tomorrow", "Weekend", "Clear"];
const sportFilters = ["Running", "Cricket", "Football", "Basketball", "Badminton", "Cycling", "Boxing", "Kabaddi", "Tennis", "Clear"];

/* ══════════════════════════════
   EVENT DETAIL PAGE
══════════════════════════════ */
function EventDetail({ event, onBack }) {
  const [interested, setInterested] = useState(false);
  const [count, setCount] = useState(event.interested);

  const toggleInterest = () => {
    setInterested((prev) => !prev);
    setCount((prev) => (interested ? prev - 1 : prev + 1));
  };

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={onBack}>← Back to Events</button>
      <h1 className="detail-main-title">{event.title}</h1>

      <div className="detail-layout">
        <div className="detail-left">
          <div className="detail-banner">
            <img src={event.img} alt={event.title} className="detail-banner-img" />
            <div className="detail-banner-overlay">
              <span className="detail-banner-category">{event.category}</span>
            </div>
          </div>

          <div className="detail-tags">
            <span className="tag-pill dark">{event.type}</span>
            <span className="tag-pill dark">{event.category}</span>
          </div>

          <div className="detail-interest-row">
            <span className="interest-count">🔥 {count} are interested</span>
            <button className={`interest-btn ${interested ? "interested" : ""}`} onClick={toggleInterest}>
              {interested ? "✓ Interested" : "I'm Interested"}
            </button>
          </div>

          <div className="detail-about">
            <h2 className="about-title">About The Event</h2>
            <p className="about-text">{event.about}</p>
          </div>
        </div>

        <aside className="detail-info-card">
          <ul className="info-list">
            <li><span className="info-icon">📅</span>{event.date}</li>
            <li><span className="info-icon">⏰</span>{event.time}</li>
            <li><span className="info-icon">⏳</span>{event.duration}</li>
            <li><span className="info-icon">👤</span>Age Limit – {event.ageLimit}</li>
            <li><span className="info-icon">🌐</span>{event.language}</li>
            <li><span className="info-icon">🎭</span>{event.type}</li>
            <li><span className="info-icon">📍</span>{event.venue}</li>
          </ul>
          <div className="info-book-row">
            <div>
              <p className="info-price">₹{event.price} <span className="info-onwards">onwards</span></p>
              <p className="info-filling">Filling Fast</p>
            </div>
            <button className="info-book-btn">Book Now</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   MAIN SPORTS COMPONENT
══════════════════════════════ */
export default function Sports() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTime, setActiveTime] = useState(null);
  const [activeSport, setActiveSport] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
        setAnimating(false);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (i) => {
    setAnimating(true);
    setTimeout(() => { setCurrentSlide(i); setAnimating(false); }, 300);
  };

  const filteredEvents = eventsData.filter((e) => {
    const timeMatch =
      !activeTime ||
      (activeTime === "Today" && e.when === "Today") ||
      (activeTime === "Tomorrow" && e.when === "Tomorrow") ||
      (activeTime === "Weekend" && e.when === "This Weekend");
    const sportMatch = !activeSport || e.category === activeSport;
    return timeMatch && sportMatch;
  });

  const slide = sliderData[currentSlide];

  if (selectedEvent) {
    return (
      <div className="sports-page">
        <EventDetail event={selectedEvent} onBack={() => setSelectedEvent(null)} />
      </div>
    );
  }

  return (
    <div className="sports-page">
      {/* HERO SLIDER */}
      <div className="hero-slider" style={{ background: slide.bg }}>
        <div className={`slider-content ${animating ? "slide-out" : "slide-in"}`}>
          <span className="slide-tag">{slide.tag}</span>
          <h1 className="slide-title">{slide.emoji} {slide.title}</h1>
          <p className="slide-subtitle">{slide.subtitle}</p>
          <div className="slide-meta">
            <span>📍 {slide.location}</span>
            <span>📅 {slide.date}</span>
          </div>
          <button className="slide-cta">Register Now →</button>
        </div>
        <div className="slider-dots">
          {sliderData.map((_, i) => (
            <button key={i} className={`dot ${i === currentSlide ? "active" : ""}`} onClick={() => goToSlide(i)} />
          ))}
        </div>
        <button className="slider-arrow left" onClick={() => goToSlide((currentSlide - 1 + sliderData.length) % sliderData.length)}>‹</button>
        <button className="slider-arrow right" onClick={() => goToSlide((currentSlide + 1) % sliderData.length)}>›</button>
      </div>

      {/* MAIN CONTENT */}
      <div className="sports-layout">
        <aside className="sidebar">
          <div className="filter-group">
            <p className="filter-label">When</p>
            {timeFilters.map((f) =>
              f === "Clear" ? (
                <button key={f} className="filter-btn clear-btn" onClick={() => setActiveTime(null)}>{f}</button>
              ) : (
                <button key={f} className={`filter-btn ${activeTime === f ? "active" : ""}`} onClick={() => setActiveTime(f)}>{f}</button>
              )
            )}
          </div>
          <div className="filter-group">
            <p className="filter-label">Sport</p>
            {sportFilters.map((f) =>
              f === "Clear" ? (
                <button key={f} className="filter-btn clear-btn" onClick={() => setActiveSport(null)}>{f}</button>
              ) : (
                <button key={f} className={`filter-btn ${activeSport === f ? "active" : ""}`} onClick={() => setActiveSport(f)}>{f}</button>
              )
            )}
          </div>
        </aside>

        <main className="events-section">
          <h2 className="section-title">Sports In Bengaluru</h2>
          <p className="events-count">{filteredEvents.length} events found</p>
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <div className="event-card" key={event.id}>
                <div className="card-img-wrap">
                  <img src={event.img} alt={event.title} className="card-img" />
                  <span className="card-category">{event.category}</span>
                </div>
                <div className="card-body">
                  <p className="card-when" style={{ color: event.whenColor }}>{event.when}</p>
                  <h3 className="card-title">{event.title}</h3>
                  <p className="card-location">📍 {event.location}</p>
                  <div className="card-footer">
                    <span className="card-price">₹{event.price}</span>
                    <button className="book-btn" onClick={() => setSelectedEvent(event)}>Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredEvents.length === 0 && (
            <div className="no-results">No events found. Try clearing the filters.</div>
          )}
        </main>
      </div>
    </div>
  );
}