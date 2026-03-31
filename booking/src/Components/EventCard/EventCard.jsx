import { useState } from "react";
import "./EventCard.css";

const filterCategories = ["Stand up Comedy", "Open Mic Comedy", "Improv Comedy", "Surprise Act", "Roast", "Sketch"];

// ─── Detail Page ───────────────────────────────────────────────────────────────
function DetailPage({ event, onBack }) {
  return (
    <div className="detail-page">
      {/* Back nav */}
      <div className="detail-breadcrumb">
        <button className="back-btn" onClick={onBack}>
          <span className="back-arrow">←</span> Comedy Shows in Bengaluru
        </button>
      </div>

      <div className="detail-wrapper">
        {/* Left column */}
        <div className="detail-left">
          <div className="detail-title-row">
            <h1 className="detail-title">{event.title}</h1>
            <button className="share-btn" title="Share">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
          </div>

          {/* Poster banner */}
          <div className="detail-banner" style={{ background: event.posterBg }}>
            <div className="detail-banner-text">
              <span className="detail-banner-label">Standup comedy by</span>
              <div className="detail-banner-performer">{event.performer}</div>
              <div className="detail-banner-show">{event.showTitle}</div>
            </div>
            <img src={event.image} alt={event.title} className="detail-banner-img" />
          </div>

          {/* Tags + interested */}
          <div className="detail-bottom-row">
            <div className="detail-tags">
              {event.tags.map(t => (
                <span key={t} className="tag-pill dark">{t}</span>
              ))}
            </div>
            <div className="detail-interested">
              <span className="thumb-icon">👍</span>
              <span className="interested-num">{event.interested} are interested</span>
              <button className="btn-interested">I'm Interested</button>
            </div>
          </div>

          {/* Description */}
          {event.description && (
            <div className="detail-description">
              <h3>About the Show</h3>
              <p>{event.description}</p>
            </div>
          )}
        </div>

        {/* Right column — booking card */}
        <div className="detail-right">
          <div className="booking-card">
            <div className="booking-details">
              <div className="bk-row">
                <span className="bk-icon">📅</span><span>{event.fullDate}</span>
              </div>
              <div className="bk-row">
                <span className="bk-icon">🕕</span><span>{event.time}</span>
              </div>
              <div className="bk-row">
                <span className="bk-icon">⏱</span><span>{event.duration}</span>
              </div>
              <div className="bk-row">
                <span className="bk-icon">👤</span><span>Age Limit - {event.ageLimit}</span>
              </div>
              <div className="bk-row">
                <span className="bk-icon">🗣</span><span>{event.language}</span>
              </div>
              <div className="bk-row">
                <span className="bk-icon">🎭</span><span>{event.genre}</span>
              </div>
              <div className="bk-row">
                <span className="bk-icon">📍</span><span>{event.venue}</span>
              </div>
            </div>

            {event.bookingNote && (
              <div className="bk-note">
                <span className="bk-note-icon">ℹ</span>
                <span>{event.bookingNote}</span>
              </div>
            )}

            <div className="bk-footer">
              <div>
                <div className="bk-price">{event.price} onwards</div>
                {event.filling && <div className="bk-filling">Filling Fast</div>}
              </div>
              <button className="btn-book">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Event Card ────────────────────────────────────────────────────────────────
function EventCard({ event, onClick }) {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <div className="card-img-wrap">
        <img src={event.image} alt={event.title} className="card-img" />
        {event.promoted && <span className="promoted-badge">PROMOTED</span>}
        <div className="card-date-bar">{event.date}</div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{event.title}</h3>
        <p className="card-venue">{event.venueShort}</p>
        <p className="card-cat">{event.category}</p>
        <p className="card-price">{event.price} onwards</p>
      </div>
    </div>
  );
}

// ─── Listing Page ──────────────────────────────────────────────────────────────
function ListingPage({ onSelect }) {
  const [activeDateFilter, setActiveDateFilter] = useState(null);
  const [activeCategoryFilters, setActiveCategoryFilters] = useState([]);
  const [openSections, setOpenSections] = useState({ date: true, language: true, categories: true, moreFilters: true, price: true });

  const toggleSection = (key) =>
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));

  const toggleCategory = (cat) =>
    setActiveCategoryFilters(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );

  const filteredEvents = events.filter(e =>
    activeCategoryFilters.length === 0 || activeCategoryFilters.some(c => e.tags.includes(c))
  );

  return (
    <div className="listing-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Filters</h2>

        {/* Date */}
        <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection("date")}>
            <span className="filter-chevron">{openSections.date ? "∧" : "∨"}</span>
            <span className="filter-label">Date</span>
            <button className="clear-btn" onClick={e => { e.stopPropagation(); setActiveDateFilter(null); }}>Clear</button>
          </div>
          {openSections.date && (
            <div className="filter-body">
              <div className="date-pills">
                {["Today", "Tomorrow", "This Weekend"].map(d => (
                  <button
                    key={d}
                    className={`date-pill ${activeDateFilter === d ? "active" : ""}`}
                    onClick={() => setActiveDateFilter(activeDateFilter === d ? null : d)}
                  >{d}</button>
                ))}
              </div>
              <label className="checkbox-row">
                <input type="checkbox" />
                <span>Date Range</span>
              </label>
            </div>
          )}
        </div>

        {/* Language */}
        <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection("language")}>
            <span className="filter-chevron">{openSections.language ? "∧" : "∨"}</span>
            <span className="filter-label">Language</span>
            <button className="clear-btn">Clear</button>
          </div>
        </div>

        {/* Categories */}
        <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection("categories")}>
            <span className="filter-chevron">{openSections.categories ? "∧" : "∨"}</span>
            <span className="filter-label">Categories</span>
            <button className="clear-btn">Clear</button>
          </div>
        </div>

        {/* More Filters */}
        <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection("moreFilters")}>
            <span className="filter-chevron">{openSections.moreFilters ? "∧" : "∨"}</span>
            <span className="filter-label">More Filters</span>
            <button className="clear-btn">Clear</button>
          </div>
        </div>

        {/* Price */}
        <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection("price")}>
            <span className="filter-chevron">{openSections.price ? "∧" : "∨"}</span>
            <span className="filter-label">Price</span>
            <button className="clear-btn">Clear</button>
          </div>
        </div>

        <button className="browse-venues-btn">Browse by Venues</button>
      </aside>

      {/* Main */}
      <main className="listing-main">
        <h1 className="listing-title">Comedy Shows In Bengaluru</h1>

        {/* Category filter chips */}
        <div className="category-chips">
          {filterCategories.map(cat => (
            <button
              key={cat}
              className={`chip ${activeCategoryFilters.includes(cat) ? "chip-active" : ""}`}
              onClick={() => toggleCategory(cat)}
            >{cat}</button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="cards-grid">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} onClick={onSelect} />
          ))}
        </div>
      </main>
    </div>
  );
}

// ─── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="app-root">
      {selectedEvent ? (
        <DetailPage event={selectedEvent} onBack={() => setSelectedEvent(null)} />
      ) : (
        <ListingPage onSelect={setSelectedEvent} />
      )}
    </div>
  );
}
