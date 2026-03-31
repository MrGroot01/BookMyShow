import React, { useState, useEffect, useRef } from "react";
import "./Movies.css";

/* ═══════════════════════════════════════
   FEATURED CAROUSEL DATA
═══════════════════════════════════════ */
const FEATURED = [
  {
    id: "f1",
    title: "Chhaava",
    tagline: "Roar of the lion never dies.",
    genres: ["Action", "History", "Drama"],
    rating: "8.5",
    votes: "112K",
    duration: "2h 42m",
    language: "Hindi",
    year: 2025,
    description:
      "The story of Chhatrapati Sambhaji Maharaj — the fearless Maratha warrior king who stood against the mighty Mughal empire.",
    formats: ["2D", "3D", "IMAX 3D", "4DX"],
    poster: "https://image.tmdb.org/t/p/w500/dWMCzs6t8PjFKlBlbMqvdqnALH6.jpg",
    bg: "linear-gradient(135deg,#0f0600 0%,#2e1200 55%,#1a0800 100%)",
    accent: "#f59e0b",
    accentRgb: "245,158,11",
    trailer: "https://www.youtube-nocookie.com/embed/qd_-T4QlPrQ?autoplay=1&rel=0",
  },
  {
    id: "f2",
    title: "Captain America: Brave New World",
    tagline: "A new world demands a new hero.",
    genres: ["Action", "Sci-Fi", "Superhero"],
    rating: "6.3",
    votes: "280K",
    duration: "1h 58m",
    language: "English",
    year: 2025,
    description:
      "Sam Wilson suits up as the new Captain America and finds himself in the middle of an international incident involving a mystery villain.",
    formats: ["2D", "3D", "IMAX 3D", "4DX"],
    poster: "https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
    bg: "linear-gradient(135deg,#000d20 0%,#001a40 55%,#000e28 100%)",
    accent: "#38bdf8",
    accentRgb: "56,189,248",
    trailer: "https://www.youtube-nocookie.com/embed/vBK6YEt9fL8?autoplay=1&rel=0",
  },
  {
    id: "f3",
    title: "Mickey 17",
    tagline: "He dies. He comes back. Repeat.",
    genres: ["Sci-Fi", "Comedy", "Thriller"],
    rating: "7.0",
    votes: "95K",
    duration: "2h 17m",
    language: "English",
    year: 2025,
    description:
      "An expendable employee on a human expedition to colonize an ice planet is sent to die — again and again — until clone #17 wonders if this job is worth it.",
    formats: ["2D", "3D", "IMAX", "4DX"],
    poster: "https://image.tmdb.org/t/p/w500/ie2iLJh8EbZwXb8QxnHBiVi3PQE.jpg",
    bg: "linear-gradient(135deg,#000814 0%,#001840 55%,#000c22 100%)",
    accent: "#818cf8",
    accentRgb: "129,140,248",
    trailer: "https://www.youtube-nocookie.com/embed/m9PU-HMBsOk?autoplay=1&rel=0",
  },
  {
    id: "f4",
    title: "Snow White",
    tagline: "The fairest story ever told, reimagined.",
    genres: ["Fantasy", "Adventure", "Family"],
    rating: "1.9",
    votes: "18K",
    duration: "1h 49m",
    language: "English",
    year: 2025,
    description:
      "Disney's live-action reimagining of the beloved animated classic — Snow White embarks on a journey to reclaim her kingdom.",
    formats: ["2D", "3D", "IMAX"],
    poster: "https://image.tmdb.org/t/p/w500/oLwSOakNXcqRFNZdqFPQBBfuB8P.jpg",
    bg: "linear-gradient(135deg,#0a001a 0%,#1a0040 55%,#0d0025 100%)",
    accent: "#e879f9",
    accentRgb: "232,121,249",
    trailer: "https://www.youtube-nocookie.com/embed/o-yPwBi5OGo?autoplay=1&rel=0",
  },
];

/* ═══════════════════════════════════════
   NOW SHOWING — 24 current 2025 movies
═══════════════════════════════════════ */
const ALL_MOVIES = [
  { id: 1,  title: "Chhaava",                    genres: ["Action","History"],       lang: "Hindi",     rating: 8.5, votes: "112K", dur: "2h 42m", badge: "Blockbuster",   year: 2025, formats: ["2D","3D","IMAX 3D","4DX"], poster: "https://image.tmdb.org/t/p/w500/dWMCzs6t8PjFKlBlbMqvdqnALH6.jpg", color: "#2e1200", description: "The untold story of Chhatrapati Sambhaji Maharaj, the fearless Maratha warrior king.", trailer: "https://www.youtube-nocookie.com/embed/qd_-T4QlPrQ?autoplay=1&rel=0" },
  { id: 2,  title: "Sky Force",                  genres: ["Action","Drama"],         lang: "Hindi",     rating: 7.8, votes: "68K",  dur: "2h 25m", badge: "Superhit",      year: 2025, formats: ["2D","3D"],                  poster: "https://image.tmdb.org/t/p/w500/fqC9P5bKLqGMoVMVpRTLQ7qdV3f.jpg", color: "#00152b", description: "India's first air strike — a story inspired by the IAF's fearless 1965 Operation.", trailer: "https://www.youtube-nocookie.com/embed/8cYq8CPVaV0?autoplay=1&rel=0" },
  { id: 3,  title: "Deva",                       genres: ["Action","Thriller"],      lang: "Hindi",     rating: 6.9, votes: "42K",  dur: "2h 11m", badge: null,            year: 2025, formats: ["2D","3D"],                  poster: "https://image.tmdb.org/t/p/w500/7qkMhBh6K9EhRSFHFKBbGCkBaQi.jpg", color: "#1a0a00", description: "A fearless Mumbai cop with a fractured past races to uncover a conspiracy hiding in plain sight.", trailer: "https://www.youtube-nocookie.com/embed/r9h8yBGgBi0?autoplay=1&rel=0" },
  { id: 4,  title: "Pushpa 2: The Rule",         genres: ["Action","Drama"],         lang: "Hindi",     rating: 7.6, votes: "88K",  dur: "3h 23m", badge: "Trending",      year: 2024, formats: ["2D","3D","IMAX"],           poster: "https://image.tmdb.org/t/p/w500/eBNUFn6kVCvFtNqkGqSfk2cSRMU.jpg", color: "#3d1200", description: "Pushpa Raj returns more powerful than ever to crush anyone who dares stand between him and his empire.", trailer: "https://www.youtube-nocookie.com/embed/LIfnBeyMpRo?autoplay=1&rel=0" },
  { id: 5,  title: "Azaad",                      genres: ["Adventure","Drama"],      lang: "Hindi",     rating: 6.4, votes: "18K",  dur: "2h 15m", badge: null,            year: 2025, formats: ["2D"],                       poster: "https://image.tmdb.org/t/p/w500/naSHNpgxmY5XnrVV2RQ7J5FAsxm.jpg", color: "#1a1000", description: "A spirited young man and a magnificent horse forge an unbreakable bond in colonial India.", trailer: "https://www.youtube-nocookie.com/embed/aaZ-6NMHXFQ?autoplay=1&rel=0" },
  { id: 6,  title: "Captain America: BNW",       genres: ["Action","Sci-Fi"],        lang: "English",   rating: 6.3, votes: "280K", dur: "1h 58m", badge: "Now Showing",   year: 2025, formats: ["2D","3D","IMAX 3D","4DX"], poster: "https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg", color: "#001a40", description: "Sam Wilson suits up as the new Captain America and navigates a dangerous international incident.", trailer: "https://www.youtube-nocookie.com/embed/vBK6YEt9fL8?autoplay=1&rel=0" },
  { id: 7,  title: "Mickey 17",                  genres: ["Sci-Fi","Comedy"],        lang: "English",   rating: 7.0, votes: "95K",  dur: "2h 17m", badge: "New",           year: 2025, formats: ["2D","3D","IMAX","4DX"],    poster: "https://image.tmdb.org/t/p/w500/ie2iLJh8EbZwXb8QxnHBiVi3PQE.jpg", color: "#001840", description: "An expendable astronaut keeps dying and coming back — until clone #17 decides enough is enough.", trailer: "https://www.youtube-nocookie.com/embed/m9PU-HMBsOk?autoplay=1&rel=0" },
  { id: 8,  title: "Sonic the Hedgehog 3",       genres: ["Animation","Action"],     lang: "English",   rating: 7.5, votes: "195K", dur: "1h 49m", badge: "Hit",           year: 2024, formats: ["2D","3D","4DX"],           poster: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg", color: "#001a2a", description: "Sonic, Knuckles, and Tails face their greatest threat yet — Shadow the Hedgehog.", trailer: "https://www.youtube-nocookie.com/embed/38pS0wt1n-U?autoplay=1&rel=0" },
  { id: 9,  title: "Mufasa: The Lion King",      genres: ["Animation","Family"],     lang: "English",   rating: 7.2, votes: "220K", dur: "1h 58m", badge: null,            year: 2024, formats: ["2D","3D","IMAX 3D","4DX"], poster: "https://image.tmdb.org/t/p/w500/lurEK87kukWNaHd0zYnsi3yzJrs.jpg", color: "#2a1500", description: "The story of how a lost cub named Mufasa grew up to become one of the great kings of the Pride Lands.", trailer: "https://www.youtube-nocookie.com/embed/kVPIgZhCLFA?autoplay=1&rel=0" },
  { id: 10, title: "Nosferatu",                  genres: ["Horror","Thriller"],      lang: "English",   rating: 7.4, votes: "165K", dur: "2h 12m", badge: null,            year: 2024, formats: ["2D"],                       poster: "https://image.tmdb.org/t/p/w500/5qGIxdEO841C0tdY8vza3S9TEQV.jpg", color: "#0a0005", description: "A gothic tale of obsession between a haunted young woman and an ancient vampire who has become her terrifying fixation.", trailer: "https://www.youtube-nocookie.com/embed/3p3gHY3iHkY?autoplay=1&rel=0" },
  { id: 11, title: "Gladiator II",               genres: ["Action","Epic"],          lang: "English",   rating: 7.1, votes: "310K", dur: "2h 28m", badge: "Hit",           year: 2024, formats: ["2D","IMAX"],               poster: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg", color: "#1a0000", description: "Years after witnessing his father's death in the Colosseum, Lucius is thrust into Rome's brutal arena once again.", trailer: "https://www.youtube-nocookie.com/embed/vzUMCKSfbL4?autoplay=1&rel=0" },
  { id: 12, title: "Snow White",                 genres: ["Fantasy","Family"],       lang: "English",   rating: 1.9, votes: "18K",  dur: "1h 49m", badge: "New",           year: 2025, formats: ["2D","3D","IMAX"],           poster: "https://image.tmdb.org/t/p/w500/oLwSOakNXcqRFNZdqFPQBBfuB8P.jpg", color: "#1a0040", description: "Disney's live-action reimagining of the timeless fairy tale.", trailer: "https://www.youtube-nocookie.com/embed/o-yPwBi5OGo?autoplay=1&rel=0" },
  { id: 13, title: "A Working Man",              genres: ["Action","Thriller"],      lang: "English",   rating: 6.5, votes: "32K",  dur: "1h 56m", badge: "New",           year: 2025, formats: ["2D"],                       poster: "https://image.tmdb.org/t/p/w500/6KePsWzEMbHt3rAHMOGR3nAJGiT.jpg", color: "#0a1000", description: "A construction worker discovers his coworker is being trafficked and risks everything to bring her home safely.", trailer: "https://www.youtube-nocookie.com/embed/MbmroHLK5Cg?autoplay=1&rel=0" },
  { id: 14, title: "Game Changer",               genres: ["Action","Drama"],         lang: "Telugu",    rating: 5.6, votes: "55K",  dur: "2h 41m", badge: null,            year: 2025, formats: ["2D","3D","IMAX"],           poster: "https://image.tmdb.org/t/p/w500/lGQxcqbN0e3EhLyCFJfk0D6CNYT.jpg", color: "#20000a", description: "An IAS officer takes on political corruption with the iron fist that defines a true Game Changer.", trailer: "https://www.youtube-nocookie.com/embed/HLkqg9TtSMM?autoplay=1&rel=0" },
  { id: 15, title: "Sankranthiki Vasthunam",     genres: ["Comedy","Action"],        lang: "Telugu",    rating: 7.3, votes: "47K",  dur: "2h 38m", badge: "Hit",           year: 2025, formats: ["2D","3D"],                  poster: "https://image.tmdb.org/t/p/w500/tVDFpkRzFPkB43gM5xwMFBHdNAD.jpg", color: "#1a1000", description: "A retired CBI officer is pulled back into action to solve an unexpected festive case.", trailer: "https://www.youtube-nocookie.com/embed/IyE-8-4JRPQ?autoplay=1&rel=0" },
  { id: 16, title: "Daaku Maharaaj",             genres: ["Action","Drama"],         lang: "Telugu",    rating: 7.0, votes: "38K",  dur: "2h 45m", badge: null,            year: 2025, formats: ["2D","3D"],                  poster: "https://image.tmdb.org/t/p/w500/pPVOdphRlhBRHwqHIJGQ1DRmkFV.jpg", color: "#0f0a00", description: "A legendary outlaw with a fearsome reputation fights for justice in a world that fears his name.", trailer: "https://www.youtube-nocookie.com/embed/Nep7MFEhx1g?autoplay=1&rel=0" },
  { id: 17, title: "Vidaamuyarchi",              genres: ["Action","Thriller"],      lang: "Tamil",     rating: 7.2, votes: "43K",  dur: "2h 20m", badge: "Trending",      year: 2025, formats: ["2D","3D"],                  poster: "https://image.tmdb.org/t/p/w500/naMbWQDU8TJBwlQJVj9KSPbFQkl.jpg", color: "#1a0505", description: "A man races across Azerbaijan to find his missing wife, stopping at nothing to bring her back alive.", trailer: "https://www.youtube-nocookie.com/embed/r0Jqj6VH-kM?autoplay=1&rel=0" },
  { id: 18, title: "Marco",                      genres: ["Action","Crime"],         lang: "Malayalam", rating: 8.3, votes: "62K",  dur: "2h 22m", badge: "Blockbuster",   year: 2024, formats: ["2D"],                       poster: "https://image.tmdb.org/t/p/w500/raBHNrVXvHVqRWpHnM8ZZNLQbpV.jpg", color: "#1a0000", description: "A ruthless man is driven to extremes when his family is threatened, unleashing a bloody rampage.", trailer: "https://www.youtube-nocookie.com/embed/nGEFcDWxCko?autoplay=1&rel=0" },
  { id: 19, title: "Identity",                   genres: ["Thriller","Mystery"],     lang: "Malayalam", rating: 7.6, votes: "28K",  dur: "2h 5m",  badge: "Must Watch",    year: 2025, formats: ["2D"],                       poster: "https://image.tmdb.org/t/p/w500/7JgNS1RBVquvj3LFCnFQJfT1LXj.jpg", color: "#050520", description: "A claustrophobic thriller set inside a university lab where one student's identity is in question.", trailer: "https://www.youtube-nocookie.com/embed/g8kFEbQ5J4A?autoplay=1&rel=0" },
  { id: 20, title: "Moana 2",                    genres: ["Animation","Adventure"],  lang: "English",   rating: 6.9, votes: "305K", dur: "1h 40m", badge: null,            year: 2024, formats: ["2D","3D","IMAX 3D","4DX"], poster: "https://image.tmdb.org/t/p/w500/4YZgsHLUEEeKDjXNRGJimkAFHRY.jpg", color: "#001a2a", description: "Moana sets sail on a daring mission to find a fabled island and discovers a new world of wonders.", trailer: "https://www.youtube-nocookie.com/embed/e3dNqLkqjLY?autoplay=1&rel=0" },
  { id: 21, title: "Wolf Man",                   genres: ["Horror","Thriller"],      lang: "English",   rating: 5.4, votes: "55K",  dur: "1h 43m", badge: null,            year: 2025, formats: ["2D"],                       poster: "https://image.tmdb.org/t/p/w500/AkPlQRBvfebYeYxN4f7v7FPbxCE.jpg", color: "#080a00", description: "A family trapped in a remote farmhouse is terrorised by an unseen predator hunting them in the dark.", trailer: "https://www.youtube-nocookie.com/embed/WDMkFEgkEfI?autoplay=1&rel=0" },
  { id: 22, title: "The Brutalist",              genres: ["Drama","History"],        lang: "English",   rating: 7.6, votes: "98K",  dur: "3h 35m", badge: "Oscar Buzz",    year: 2024, formats: ["2D","IMAX"],               poster: "https://image.tmdb.org/t/p/w500/4lHToQbfzHl3E0vAqgYV0J1OZDM.jpg", color: "#101010", description: "A visionary Hungarian-Jewish architect flees Europe for America and fights to rebuild his life and legacy.", trailer: "https://www.youtube-nocookie.com/embed/fgoCqhB_Fok?autoplay=1&rel=0" },
  { id: 23, title: "Conclave",                   genres: ["Drama","Mystery"],        lang: "English",   rating: 7.4, votes: "145K", dur: "2h 1m",  badge: "Award Winner",  year: 2024, formats: ["2D"],                       poster: "https://image.tmdb.org/t/p/w500/m5Wm0vSBQMdfpqcbAvVN0PCQXLG.jpg", color: "#050505", description: "A cardinal navigates the deadly politics and secrets of selecting the new Pope after a sudden death.", trailer: "https://www.youtube-nocookie.com/embed/xfUe5LbhSe8?autoplay=1&rel=0" },
  { id: 24, title: "Paddington in Peru",         genres: ["Comedy","Family"],        lang: "English",   rating: 7.1, votes: "42K",  dur: "1h 46m", badge: null,            year: 2024, formats: ["2D","3D"],                  poster: "https://image.tmdb.org/t/p/w500/x9yjkm9gIz5qI4yAMaFZfDqM3DV.jpg", color: "#2a1500", description: "Paddington and the Brown family travel to Peru to visit his Aunt Lucy — and end up on a wild adventure.", trailer: "https://www.youtube-nocookie.com/embed/QMSFq1y3RIo?autoplay=1&rel=0" },
];

/* ═══════════════════════════════════════
   COMING SOON — 2025-2026
═══════════════════════════════════════ */
const COMING_SOON = [
  { id: "cs1", title: "A Minecraft Movie",                   genres: ["Animation","Adventure"], formats: ["2D","3D","IMAX 3D","4DX"], lang: "English",        releaseDate: "Apr 4, 2025",  poster: "https://image.tmdb.org/t/p/w500/kOlLqLah2iXcGJgMEBJxAiHCMiY.jpg", color: "#1a3a00", description: "Four misfits are pulled into the Overworld and must master it to return home.", trailer: "https://www.youtube-nocookie.com/embed/PeHH3e2-lkA?autoplay=1&rel=0" },
  { id: "cs2", title: "Thunderbolts*",                       genres: ["Action","Superhero"],    formats: ["2D","3D","IMAX 3D"],       lang: "English",        releaseDate: "May 2, 2025",  poster: "https://image.tmdb.org/t/p/w500/q5gVW8BLXI6MjxolxmVlKnRCfnk.jpg", color: "#0a0a1a", description: "A group of Marvel antiheroes assemble for a dangerous mission with competing agendas.", trailer: "https://www.youtube-nocookie.com/embed/8oLCBaSnWEo?autoplay=1&rel=0" },
  { id: "cs3", title: "Mission: Impossible – Final Reckoning",genres: ["Action","Thriller"],    formats: ["2D","IMAX","4DX"],         lang: "English, Hindi", releaseDate: "May 23, 2025", poster: "https://image.tmdb.org/t/p/w500/z53D0a9P7YMnMKGYxFoB9CoeRwZ.jpg", color: "#0a1500", description: "Ethan Hunt faces his deadliest and most personal mission yet — the fate of the world hangs by a thread.", trailer: "https://www.youtube-nocookie.com/embed/avz06PDqDbM?autoplay=1&rel=0" },
  { id: "cs4", title: "Superman",                            genres: ["Action","Sci-Fi"],       formats: ["2D","3D","IMAX 3D"],       lang: "English",        releaseDate: "Jul 11, 2025", poster: "https://image.tmdb.org/t/p/w500/1QFAXoFVDGEfMnLLSWOZSBiYiPO.jpg", color: "#001040", description: "James Gunn's bold new take on the Man of Steel — Clark Kent battles villainy while holding on to his humanity.", trailer: "https://www.youtube-nocookie.com/embed/2lABWJy4UAU?autoplay=1&rel=0" },
  { id: "cs5", title: "Fantastic Four: First Steps",         genres: ["Action","Sci-Fi"],       formats: ["2D","3D","IMAX 3D","4DX"], lang: "English, Hindi", releaseDate: "Jul 25, 2025", poster: "https://image.tmdb.org/t/p/w500/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg", color: "#001a30", description: "Marvel's First Family steps into the MCU with their iconic retro-futuristic adventure.", trailer: "https://www.youtube-nocookie.com/embed/kG5mdPRVFoA?autoplay=1&rel=0" },
  { id: "cs6", title: "Avengers: Doomsday",                  genres: ["Action","Superhero"],    formats: ["2D","3D","IMAX 3D","4DX"], lang: "English, Hindi, Tamil, Telugu", releaseDate: "May 1, 2026", poster: "https://image.tmdb.org/t/p/w500/2t6VqHKIEHPISY5Q3D2s4V8IRKR.jpg", color: "#1a0030", description: "The Avengers reassemble for an earth-shattering confrontation with Doctor Doom.", trailer: "https://www.youtube-nocookie.com/embed/5K8gBf1BhYE?autoplay=1&rel=0" },
];

const LANGUAGES = ["All", "Hindi", "English", "Telugu", "Tamil", "Malayalam"];
const GENRES    = ["All", "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller", "Animation"];

/* ═══════════════════════════════════════
   POSTER with shimmer + fallback
═══════════════════════════════════════ */
const Poster = ({ src, alt, color }) => {
  const [status, setStatus] = useState("loading");
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {status !== "err" && (
        <img
          src={src}
          alt={alt}
          className="card-img"
          loading="lazy"
          style={{ opacity: status === "ok" ? 1 : 0, transition: "opacity 0.35s ease" }}
          onLoad={() => setStatus("ok")}
          onError={() => setStatus("err")}
        />
      )}
      {status !== "ok" && (
        <div
          className="fallback-poster"
          style={{
            position: "absolute", inset: 0,
            background: status === "err"
              ? `linear-gradient(160deg,${color} 0%,#080810 100%)`
              : undefined,
            animation: status === "loading" ? "shimmer 1.4s infinite" : undefined,
            backgroundSize: status === "loading" ? "200% 100%" : undefined,
          }}
        >
          {status === "err" && <span>{alt}</span>}
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
const Movies = () => {
  const [loaded,           setLoaded]           = useState(false);
  const [activeLang,       setActiveLang]       = useState("All");
  const [activeGenre,      setActiveGenre]      = useState("All");
  const [search,           setSearch]           = useState("");
  const [revealed,         setRevealed]         = useState(new Set());
  const [trailerUrl,       setTrailerUrl]       = useState(null);
  const [watchlist,        setWatchlist]        = useState(new Set());
  const [sortBy,           setSortBy]           = useState("Default");
  const [showWatchlistOnly,setShowWatchlistOnly]= useState(false);
  const [quickViewMovie,   setQuickViewMovie]   = useState(null);
  const gridRef = useRef(null);

  /* toggle watchlist */
  const toggleWatchlist = (e, id) => {
    e.stopPropagation();
    setWatchlist(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  /* anti-glitch: defer render until paint */
  useEffect(() => {
    const raf = requestAnimationFrame(() => setTimeout(() => setLoaded(true), 50));
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Bootstrap CDN */
  useEffect(() => {
    if (!document.getElementById("mv-bs-css")) {
      const link = Object.assign(document.createElement("link"), {
        id: "mv-bs-css", rel: "stylesheet",
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
      if (el && window.bootstrap)
        new window.bootstrap.Carousel(el, { interval: 4000, ride: "carousel", pause: "hover" });
    };
    document.body.appendChild(js);
    return () => document.body.contains(js) && document.body.removeChild(js);
  }, []);

  /* IntersectionObserver: staggered card reveal */
  useEffect(() => {
    if (!gridRef.current) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setRevealed(p => new Set([...p, e.target.dataset.cid]));
      }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    gridRef.current.querySelectorAll("[data-cid]").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [activeLang, activeGenre, search, showWatchlistOnly]);

  /* close modals on Escape + lock body scroll */
  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") { setTrailerUrl(null); setQuickViewMovie(null); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = trailerUrl || quickViewMovie ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [trailerUrl, quickViewMovie]);

  /* filtered + sorted movies */
  let filtered = ALL_MOVIES.filter(m =>
    (activeLang  === "All" || m.lang === activeLang) &&
    (activeGenre === "All" || m.genres.includes(activeGenre)) &&
    m.title.toLowerCase().includes(search.toLowerCase()) &&
    (!showWatchlistOnly || watchlist.has(m.id))
  );
  if (sortBy === "Rating") filtered.sort((a, b) => b.rating - a.rating);
  else if (sortBy === "Title") filtered.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className={`mvp ${loaded ? "mvp--ready" : ""}`}>

      {/* ══════════════════ HERO CAROUSEL ══════════════════ */}
      <div id="heroCarousel" className="carousel slide mvp-carousel" data-bs-ride="carousel" data-bs-interval="4000">

        <div className="carousel-indicators mvp-dots">
          {FEATURED.map((_, i) => (
            <button key={i} type="button" data-bs-target="#heroCarousel"
              data-bs-slide-to={i} aria-label={`Slide ${i + 1}`}
              className={i === 0 ? "active" : ""} />
          ))}
        </div>

        <div className="carousel-inner">
          {FEATURED.map((m, i) => (
            <div key={m.id} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <div className="mvp-slide" style={{ background: m.bg }}>
                <div className="mvp-slide-noise" />
                <div className="mvp-slide-body">

                  {/* text */}
                  <div className="mvp-slide-text">
                    <div className="mvp-genres">
                      {m.genres.map(g => (
                        <span key={g} className="mvp-gpill"
                          style={{ border: `1px solid ${m.accent}`, color: m.accent }}>{g}</span>
                      ))}
                    </div>
                    <h1 className="mvp-slide-title">{m.title}</h1>
                    <p className="mvp-slide-tag">{m.tagline}</p>
                    <p className="mvp-slide-desc">{m.description}</p>
                    <div className="mvp-slide-meta" style={{ marginBottom: m.formats ? "16px" : "40px" }}>
                      <span style={{ color: m.accent }}>★ {m.rating} <small>({m.votes})</small></span>
                      <span className="mvp-sep" />
                      <span>{m.duration}</span>
                      <span className="mvp-sep" />
                      <span>{m.language}</span>
                    </div>
                    {m.formats && (
                      <div className="mvp-formats">
                        {m.formats.map(f => (
                          <span key={f} className="mvp-gpill"
                            style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", background: "rgba(255,255,255,0.08)" }}>{f}</span>
                        ))}
                      </div>
                    )}
                    <div className="mvp-slide-ctas">
                      <button className="mvp-btn-book" style={{ background: m.accent }}>🎟 Book Tickets</button>
                      <button className="mvp-btn-ghost" onClick={() => setTrailerUrl(m.trailer)}>▶ Trailer</button>
                    </div>
                  </div>

                  {/* poster */}
                  <div className="mvp-slide-poster">
                    <div className="mvp-poster-glow"
                      style={{ background: `radial-gradient(ellipse,rgba(${m.accentRgb},.4) 0%,transparent 70%)` }} />
                    <div className="mvp-slide-poster-img">
                      <Poster src={m.poster} alt={m.title} color={m.bg} />
                      <button className="mvp-poster-play-btn" onClick={() => setTrailerUrl(m.trailer)}>▶</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev mvp-ctrl" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="mvp-arrow">&#8249;</span>
        </button>
        <button className="carousel-control-next mvp-ctrl mvp-ctrl--r" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="mvp-arrow">&#8250;</span>
        </button>
      </div>

      {/* ══════════════════ STAT CARDS ══════════════════ */}
      <div className="mvp-stats">
        {[
          { label: "Now Showing", value: ALL_MOVIES.length,  icon: "🎬", color: "#7c3aed" },
          { label: "Coming Soon", value: COMING_SOON.length, icon: "📅", color: "#0891b2" },
          { label: "Watchlisted", value: watchlist.size,      icon: "♥",  color: "#e8175d" },
          { label: "Avg Rating",  value: "7.2",               icon: "⭐", color: "#d97706" },
        ].map((s, i) => (
          <div key={s.label} className="mvp-stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="mvp-stat-icon" style={{ background: `${s.color}22`, color: s.color }}>{s.icon}</div>
            <div>
              <p className="mvp-stat-val">{s.value}</p>
              <p className="mvp-stat-lbl">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ══════════════════ FILTER BAR ══════════════════ */}
      <div className="mvp-bar">
        <div className="mvp-bar-inner">

          <div className="mvp-search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="mvp-search-ico">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input className="mvp-search" type="text" placeholder="Search movies…"
              value={search} onChange={e => setSearch(e.target.value)} />
            {search && <button className="mvp-clear" onClick={() => setSearch("")}>✕</button>}
          </div>

          <div className="mvp-filters">
            <div className="mvp-pills-row">
              <span className="mvp-label">Lang</span>
              {LANGUAGES.map(l => (
                <button key={l} onClick={() => setActiveLang(l)}
                  className={`mvp-pill ${activeLang === l ? "mvp-pill--on" : ""}`}>{l}</button>
              ))}
            </div>
            <div className="mvp-pills-row">
              <span className="mvp-label">Genre</span>
              {GENRES.map(g => (
                <button key={g} onClick={() => setActiveGenre(g)}
                  className={`mvp-pill ${activeGenre === g ? "mvp-pill--on" : ""}`}>{g}</button>
              ))}
            </div>
            <div className="mvp-pills-row">
              <span className="mvp-label">Sort</span>
              {["Default", "Rating", "Title"].map(s => (
                <button key={s} onClick={() => setSortBy(s)}
                  className={`mvp-pill ${sortBy === s ? "mvp-pill--on" : ""}`}>{s}</button>
              ))}
            </div>
            <div className="mvp-pills-row">
              <span className="mvp-label">List</span>
              <button onClick={() => setShowWatchlistOnly(!showWatchlistOnly)}
                className={`mvp-pill mvp-pill--heart ${showWatchlistOnly ? "mvp-pill--on" : ""}`}>
                ♥ My Watchlist {watchlist.size > 0 && `(${watchlist.size})`}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════ TRENDING STRIP ══════════════════ */}
      <section className="mvp-sec">
        <div className="mvp-sec-head">
          <h2 className="mvp-sec-title"><span className="mvp-fire">🔥</span> Trending Now</h2>
          <button className="mvp-viewall">View All <span>→</span></button>
        </div>
        <div className="mvp-hscroll">
          {ALL_MOVIES.slice(0, 12).map(m => (
            <div key={m.id} className="mvp-tc" onClick={() => setQuickViewMovie(m)}>
              <div className="mvp-tc-img">
                <Poster src={m.poster} alt={m.title} color={m.color} />
                {m.badge && <span className="mvp-badge">{m.badge}</span>}
                <button className={`mvp-btn-heart ${watchlist.has(m.id) ? "active" : ""}`}
                  onClick={e => toggleWatchlist(e, m.id)}>
                  {watchlist.has(m.id) ? "♥" : "♡"}
                </button>
                <div className="mvp-hover-ov">
                  <div className="mvp-tc-btns">
                    <button className="mvp-mini-book"
                      onClick={e => { e.stopPropagation(); setTrailerUrl(m.trailer); }}>▶ Trailer</button>
                    <button className="mvp-mini-book mvp-mini-book--book"
                      onClick={e => { e.stopPropagation(); setQuickViewMovie(m); }}>Book</button>
                  </div>
                </div>
              </div>
              <p className="mvp-tc-name">{m.title}</p>
              <p className="mvp-tc-meta">★ {m.rating} · {m.lang}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ NOW SHOWING GRID ══════════════════ */}
      <section className="mvp-sec">
        <div className="mvp-sec-head">
          <h2 className="mvp-sec-title">Now Showing</h2>
          <span className="mvp-count">{filtered.length} results</span>
        </div>

        {filtered.length === 0 ? (
          <div className="mvp-empty">
            <div className="mvp-empty-ico">🎬</div>
            <p>No movies match your filters</p>
            <button onClick={() => { setActiveLang("All"); setActiveGenre("All"); setSearch(""); setShowWatchlistOnly(false); }}>
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="mvp-grid" ref={gridRef}>
            {filtered.map((m, i) => (
              <div key={m.id} data-cid={String(m.id)}
                className={`mvp-card ${revealed.has(String(m.id)) ? "mvp-card--in" : ""}`}
                style={{ transitionDelay: `${(i % 8) * 0.055}s` }}
                onClick={() => setQuickViewMovie(m)}>
                <div className="mvp-card-img">
                  <Poster src={m.poster} alt={m.title} color={m.color} />
                  {m.badge && <span className="mvp-badge">{m.badge}</span>}
                  <button className={`mvp-btn-heart ${watchlist.has(m.id) ? "active" : ""}`}
                    onClick={e => toggleWatchlist(e, m.id)}>
                    {watchlist.has(m.id) ? "♥" : "♡"}
                  </button>
                  <div className="mvp-hover-ov mvp-hover-ov--lg">
                    <div className="mvp-card-btns">
                      {m.trailer && (
                        <button className="mvp-card-trailer"
                          onClick={e => { e.stopPropagation(); setTrailerUrl(m.trailer); }}>▶ Trailer</button>
                      )}
                      <button className="mvp-book-full"
                        onClick={e => { e.stopPropagation(); setQuickViewMovie(m); }}>🎟 Book</button>
                    </div>
                  </div>
                </div>
                <div className="mvp-card-body">
                  <div className="mvp-card-rating">
                    <span className="mvp-star">★</span>
                    <span className="mvp-rval">{m.rating}</span>
                    <span className="mvp-rvotes">{m.votes}</span>
                  </div>
                  <h3 className="mvp-card-title">{m.title}</h3>
                  <p className="mvp-card-info">{m.lang} · {m.dur}</p>
                  <div className="mvp-tags">
                    {(m.formats || ["2D"]).slice(0, 2).map(f => (
                      <span key={f} className="mvp-tag mvp-tag--fmt">{f}</span>
                    ))}
                    {m.genres.map(g => (
                      <span key={g} className="mvp-tag">{g}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ══════════════════ COMING SOON ══════════════════ */}
      <section className="mvp-sec mvp-sec--soon">
        <div className="mvp-sec-head">
          <h2 className="mvp-sec-title"><span className="mvp-pulse-dot" /> Coming Soon</h2>
          <button className="mvp-viewall">View All <span>→</span></button>
        </div>
        <div className="mvp-hscroll">
          {COMING_SOON.map(m => (
            <div key={m.id} className="mvp-tc">
              <div className="mvp-tc-img">
                <Poster src={m.poster} alt={m.title} color={m.color} />
                <div className="mvp-soon-veil" />
                <div className="mvp-soon-date">{m.releaseDate}</div>
                <div className="mvp-hover-ov">
                  <div className="mvp-tc-btns">
                    {m.trailer && (
                      <button className="mvp-mini-book"
                        onClick={e => { e.stopPropagation(); setTrailerUrl(m.trailer); }}>▶ Trailer</button>
                    )}
                    <button className="mvp-mini-book mvp-mini-book--notify">🔔 Notify</button>
                  </div>
                </div>
              </div>
              <p className="mvp-tc-name">{m.title}</p>
              <p className="mvp-tc-meta" style={{ marginTop: "3px" }}>
                {(m.formats || ["2D"]).slice(0, 3).join(" · ")}
              </p>
              <p className="mvp-tc-meta">{m.genres.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 72 }} />

      {/* ══════════════════ TRAILER MODAL ══════════════════ */}
      {trailerUrl && (
        <div className="trailer-modal" onClick={() => setTrailerUrl(null)}>
          <div className="trailer-content" onClick={e => e.stopPropagation()}>
            <button className="trailer-close" onClick={() => setTrailerUrl(null)}>✕</button>
            <iframe src={trailerUrl} title="Trailer" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          </div>
        </div>
      )}

      {/* ══════════════════ QUICK VIEW MODAL ══════════════════ */}
      {quickViewMovie && (
        <div className="trailer-modal qv-overlay" onClick={() => setQuickViewMovie(null)}>
          <div className="trailer-content qv-modal" onClick={e => e.stopPropagation()}>
            <button className="trailer-close" onClick={() => setQuickViewMovie(null)}>✕</button>
            <div className="qv-body">
              <div className="qv-poster">
                <Poster src={quickViewMovie.poster} alt={quickViewMovie.title} color={quickViewMovie.color} />
              </div>
              <div className="qv-info">
                <h2>{quickViewMovie.title}</h2>
                <div className="qv-meta">
                  {quickViewMovie.rating && <><span className="qv-rating">★ {quickViewMovie.rating}</span><span className="mvp-sep" /></>}
                  {quickViewMovie.lang    && <><span>{quickViewMovie.lang}</span><span className="mvp-sep" /></>}
                  <span>{quickViewMovie.dur || quickViewMovie.releaseDate}</span>
                </div>
                <div className="mvp-tags" style={{ marginBottom: "16px" }}>
                  {(quickViewMovie.formats || ["2D"]).map(f => (
                    <span key={f} className="mvp-tag mvp-tag--fmt">{f}</span>
                  ))}
                  {quickViewMovie.genres.map(g => (
                    <span key={g} className="mvp-tag">{g}</span>
                  ))}
                </div>
                <p className="qv-desc">
                  {quickViewMovie.description || "Get ready for an epic cinematic journey. Secure your tickets now and experience the magic on the big screen."}
                </p>
                <div className="qv-actions">
                  <button className="mvp-book-full">🎟 Book Tickets</button>
                  {quickViewMovie.trailer && (
                    <button className="mvp-btn-ghost"
                      onClick={() => { setQuickViewMovie(null); setTrailerUrl(quickViewMovie.trailer); }}>
                      ▶ Trailer
                    </button>
                  )}
                  <button
                    className={`mvp-btn-heart mvp-btn-heart--lg ${watchlist.has(quickViewMovie.id) ? "active" : ""}`}
                    onClick={e => toggleWatchlist(e, quickViewMovie.id)}>
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