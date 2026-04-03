import React, { useState, useEffect, useRef } from "react";
import "./Movies.css";

/* ═══════════════════════════════════════
   FEATURED CAROUSEL DATA
═══════════════════════════════════════ */
const FEATURED = [
  {
    id: "f1",
    title: "Toxic",
    tagline: "A fairy tale for grown-ups.",
    genres: ["Action", "Thriller", "Gangster"],
    rating: "8.7",
    votes: "75K",
    duration: "2h 30m",
    language: "Kannada",
    year: 2025,
    description:
      "Set in a dark underworld, a mysterious man rises through crime and chaos, blurring the line between hero and villain.",
    formats: ["2D", "IMAX", "4DX"],
    poster: "https://preview.redd.it/toxic-new-poster-v0-cuw4ucdgy1cg1.png?width=640&crop=smart&auto=webp&s=54c0ae552505d01f68674eaf5c044279adfea78c",
    bg: "linear-gradient(135deg,#000a0a 0%,#003333 55%,#001a1a 100%)",
    accent: "#14b8a6",
    accentRgb: "20,184,166",
    trailer: "https://www.youtube.com/embed/0WWzgGyAH6Y",
  },
  {
    id: "f2",
    title: "Peddi",
    tagline: "One man. One rage. One legacy.",
    genres: ["Action", "Drama", "Mass"],
    rating: "8.4",
    votes: "42K",
    duration: "2h 45m",
    language: "Telugu",
    year: 2025,
    description:
      "A fearless village warrior rises against powerful enemies to protect his people, turning into a symbol of resistance and raw power.",
    formats: ["2D", "IMAX", "4DX"],
    poster: "https://pbs.twimg.com/media/HEZPUSXbAAAO3H6.jpg",
    bg: "linear-gradient(135deg,#1a0000 0%,#4d0000 55%,#0f0000 100%)",
    accent: "#ef4444",
    accentRgb: "239,68,68",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "f3",
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
    poster: "https://m.media-amazon.com/images/I/51LfoIGyibL._AC_UF894,1000_QL80_.jpg",
    bg: "linear-gradient(135deg,#0f0600 0%,#2e1200 55%,#1a0800 100%)",
    accent: "#f59e0b",
    accentRgb: "245,158,11",
    trailer: "https://www.youtube-nocookie.com/embed/qd_-T4QlPrQ?autoplay=1&rel=0",
  },
  {
    id: "f4",
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
    id: "f5",
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
    poster: "https://lh4.googleusercontent.com/proxy/Ci6tzFExqfU76K9jWLhdsLKSNOShSQ_zMKzkvhxyFa5w3zIEHXqnWwUsRlmkeqGHhGZ9aFG-dAfKIrhOuxVi6AcmMW-kQm72Sj9JLeZrpRgSlA",
    bg: "linear-gradient(135deg,#000814 0%,#001840 55%,#000c22 100%)",
    accent: "#818cf8",
    accentRgb: "129,140,248",
    trailer: "https://www.youtube-nocookie.com/embed/m9PU-HMBsOk?autoplay=1&rel=0",
  },
  {
    id: "f6",
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
    poster: "https://preview.redd.it/new-official-poster-for-snow-white-v0-lq51fbddin4e1.jpeg?auto=webp&s=c012b3fa697bb421cf537f75ce9cd02b10f7607b",
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
  { id: 1,  title: "Chhaava",                genres: ["Action","History"],      lang: "Hindi",     rating: 8.5, votes: "112K", dur: "2h 42m", badge: "Blockbuster",  year: 2025, formats: ["2D","3D","IMAX 3D","4DX"], poster: "https://m.media-amazon.com/images/I/51LfoIGyibL._AC_UF894,1000_QL80_.jpg",                                                                                          color: "#2e1200", description: "The untold story of Chhatrapati Sambhaji Maharaj, the fearless Maratha warrior king.", trailer: "https://www.youtube-nocookie.com/embed/qd_-T4QlPrQ?autoplay=1&rel=0" },
  { id: 2,  title: "Sky Force",              genres: ["Action","Drama"],        lang: "Hindi",     rating: 7.8, votes: "68K",  dur: "2h 25m", badge: "Superhit",     year: 2025, formats: ["2D","3D"],                  poster: "https://cinema.mu/wp-content/uploads/2025/01/Sky-Force-poster-500x740.jpg",                                                                                               color: "#00152b", description: "India's first air strike — a story inspired by the IAF's fearless 1965 Operation.", trailer: "https://www.youtube-nocookie.com/embed/8cYq8CPVaV0?autoplay=1&rel=0" },
  { id: 3,  title: "Deva",                   genres: ["Action","Thriller"],     lang: "Hindi",     rating: 6.9, votes: "42K",  dur: "2h 11m", badge: null,           year: 2025, formats: ["2D","3D"],                  poster: "https://m.media-amazon.com/images/M/MV5BZTllOTk2MDgtZmZmYy00MDBhLThiMzctNzhmNTk5ODdkZTcwXkEyXkFqcGc@._V1_.jpg",                                                       color: "#1a0a00", description: "A fearless Mumbai cop with a fractured past races to uncover a conspiracy hiding in plain sight.", trailer: "https://www.youtube-nocookie.com/embed/r9h8yBGgBi0?autoplay=1&rel=0" },
  { id: 4,  title: "Pushpa 2: The Rule",     genres: ["Action","Drama"],        lang: "Hindi",     rating: 7.6, votes: "88K",  dur: "3h 23m", badge: "Trending",     year: 2024, formats: ["2D","3D","IMAX"],           poster: "https://urbanasian.com/wp-content/uploads/2024/08/967dc0fe-b2b1-46da-ae36-707d7cf70f5c.jpeg",                                                                            color: "#3d1200", description: "Pushpa Raj returns more powerful than ever to crush anyone who dares stand between him and his empire.", trailer: "https://www.youtube-nocookie.com/embed/LIfnBeyMpRo?autoplay=1&rel=0" },
  { id: 5,  title: "Azaad",                  genres: ["Adventure","Drama"],     lang: "Hindi",     rating: 6.4, votes: "18K",  dur: "2h 15m", badge: null,           year: 2025, formats: ["2D"],                       poster: "https://media-cache.cinematerial.com/p/500x/px4jgbnc/azaad-indian-movie-poster.jpg?v=1730726598",                                                                        color: "#1a1000", description: "A spirited young man and a magnificent horse forge an unbreakable bond in colonial India.", trailer: "https://www.youtube-nocookie.com/embed/aaZ-6NMHXFQ?autoplay=1&rel=0" },
  { id: 6,  title: "Captain America: BNW",   genres: ["Action","Sci-Fi"],       lang: "English",   rating: 6.3, votes: "280K", dur: "1h 58m", badge: "Now Showing",  year: 2025, formats: ["2D","3D","IMAX 3D","4DX"], poster: "https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",                                                                                              color: "#001a40", description: "Sam Wilson suits up as the new Captain America and navigates a dangerous international incident.", trailer: "https://www.youtube-nocookie.com/embed/vBK6YEt9fL8?autoplay=1&rel=0" },
  { id: 7,  title: "Mickey 17",              genres: ["Sci-Fi","Comedy"],       lang: "English",   rating: 7.0, votes: "95K",  dur: "2h 17m", badge: "New",          year: 2025, formats: ["2D","3D","IMAX","4DX"],    poster: "https://posterspy.com/wp-content/uploads/2024/09/mick177.jpg",                                                                                                     color: "#001840", description: "An expendable astronaut keeps dying and coming back — until clone #17 decides enough is enough.", trailer: "https://www.youtube-nocookie.com/embed/m9PU-HMBsOk?autoplay=1&rel=0" },
  { id: 8,  title: "Sonic the Hedgehog 3",   genres: ["Animation","Action"],    lang: "English",   rating: 7.5, votes: "195K", dur: "1h 49m", badge: "Hit",          year: 2024, formats: ["2D","3D","4DX"],           poster: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",                                                                                                  color: "#001a2a", description: "Sonic, Knuckles, and Tails face their greatest threat yet — Shadow the Hedgehog.", trailer: "https://www.youtube-nocookie.com/embed/38pS0wt1n-U?autoplay=1&rel=0" },
  { id: 9,  title: "Mufasa: The Lion King",  genres: ["Animation","Family"],    lang: "English",   rating: 7.2, votes: "220K", dur: "1h 58m", badge: null,           year: 2024, formats: ["2D","3D","IMAX 3D","4DX"], poster: "https://image.tmdb.org/t/p/w500/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",                                                                                              color: "#2a1500", description: "The story of how a lost cub named Mufasa grew up to become one of the great kings of the Pride Lands.", trailer: "https://www.youtube-nocookie.com/embed/kVPIgZhCLFA?autoplay=1&rel=0" },
  { id: 10, title: "Nosferatu",              genres: ["Horror","Thriller"],     lang: "English",   rating: 7.4, votes: "165K", dur: "2h 12m", badge: null,           year: 2024, formats: ["2D"],                       poster: "https://i.redd.it/xvpevrhx0spd1.jpeg",                                                                                                                            color: "#0a0005", description: "A gothic tale of obsession between a haunted young woman and an ancient vampire.", trailer: "https://www.youtube-nocookie.com/embed/3p3gHY3iHkY?autoplay=1&rel=0" },
  { id: 11, title: "Gladiator II",           genres: ["Action","Epic"],         lang: "English",   rating: 7.1, votes: "310K", dur: "2h 28m", badge: "Hit",          year: 2024, formats: ["2D","IMAX"],               poster: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",                                                                                               color: "#1a0000", description: "Years after witnessing his father's death in the Colosseum, Lucius is thrust into Rome's brutal arena once again.", trailer: "https://www.youtube-nocookie.com/embed/vzUMCKSfbL4?autoplay=1&rel=0" },
  { id: 12, title: "Snow White",             genres: ["Fantasy","Family"],      lang: "English",   rating: 1.9, votes: "18K",  dur: "1h 49m", badge: "New",          year: 2025, formats: ["2D","3D","IMAX"],           poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUuXcN_8kr9RFDklqqzOrwSuD3uzoqh9f5w&s",                                                                    color: "#1a0040", description: "Disney's live-action reimagining of the timeless fairy tale.", trailer: "https://www.youtube-nocookie.com/embed/o-yPwBi5OGo?autoplay=1&rel=0" },
  { id: 13, title: "A Working Man",          genres: ["Action","Thriller"],     lang: "English",   rating: 6.5, votes: "32K",  dur: "1h 56m", badge: "New",          year: 2025, formats: ["2D"],                       poster: "https://lh4.googleusercontent.com/proxy/PpuuKxpIZCfNNVvO6n1na4Sb7yXQSE6kJ0cNw1Fb4HZhSpkFsS8Udv6LE7OdpNRZUGdJuFHWaPPwqK8HY5czwQQXugFTxOcflgv7dC0",               color: "#0a1000", description: "A construction worker discovers his coworker is being trafficked and risks everything to bring her home.", trailer: "https://www.youtube-nocookie.com/embed/MbmroHLK5Cg?autoplay=1&rel=0" },
  { id: 14, title: "Game Changer",           genres: ["Action","Drama"],        lang: "Telugu",    rating: 5.6, votes: "55K",  dur: "2h 41m", badge: null,           year: 2025, formats: ["2D","3D","IMAX"],           poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/game-changer-et00311772-1731311322.jpg",                                                       color: "#20000a", description: "An IAS officer takes on political corruption with the iron fist that defines a true Game Changer.", trailer: "https://www.youtube-nocookie.com/embed/HLkqg9TtSMM?autoplay=1&rel=0" },
  { id: 15, title: "Sankranthiki Vasthunam", genres: ["Comedy","Action"],       lang: "Telugu",    rating: 7.3, votes: "47K",  dur: "2h 38m", badge: "Hit",          year: 2025, formats: ["2D","3D"],                  poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4DFhLbT6bQL1DuRdcAMSo5xQ5HMPd032bg&s",                                                                       color: "#1a1000", description: "A retired CBI officer is pulled back into action to solve an unexpected festive case.", trailer: "https://www.youtube-nocookie.com/embed/IyE-8-4JRPQ?autoplay=1&rel=0" },
  { id: 16, title: "Daaku Maharaaj",         genres: ["Action","Drama"],        lang: "Telugu",    rating: 7.0, votes: "38K",  dur: "2h 45m", badge: null,           year: 2025, formats: ["2D","3D"],                  poster: "https://m.media-amazon.com/images/M/MV5BZjA2ZDBjZDItNTkzYi00MDc5LTgyNTEtYWYyMTgyZmRmYmZmXkEyXkFqcGc@._V1_.jpg",                                                       color: "#0f0a00", description: "A legendary outlaw with a fearsome reputation fights for justice in a world that fears his name.", trailer: "https://www.youtube-nocookie.com/embed/Nep7MFEhx1g?autoplay=1&rel=0" },
  { id: 17, title: "Vidaamuyarchi",          genres: ["Action","Thriller"],     lang: "Tamil",     rating: 7.2, votes: "43K",  dur: "2h 20m", badge: "Trending",     year: 2025, formats: ["2D","3D"],                  poster: "https://i.pinimg.com/736x/62/90/4c/62904cc072cc8a4c4138145b564f4b63.jpg",                                                                                                 color: "#1a0505", description: "A man races across Azerbaijan to find his missing wife, stopping at nothing to bring her back alive.", trailer: "https://www.youtube-nocookie.com/embed/r0Jqj6VH-kM?autoplay=1&rel=0" },
  { id: 18, title: "Marco",                  genres: ["Action","Crime"],        lang: "Malayalam", rating: 8.3, votes: "62K",  dur: "2h 22m", badge: "Blockbuster",  year: 2024, formats: ["2D"],                       poster: "https://media-cache.cinematerial.com/p/500x/i8tbzjsp/marco-indian-movie-poster.jpg?v=1727071212",                                                                        color: "#1a0000", description: "A ruthless man is driven to extremes when his family is threatened, unleashing a bloody rampage.", trailer: "https://www.youtube-nocookie.com/embed/nGEFcDWxCko?autoplay=1&rel=0" },
  { id: 19, title: "Identity",               genres: ["Thriller","Mystery"],    lang: "Malayalam", rating: 7.6, votes: "28K",  dur: "2h 5m",  badge: "Must Watch",   year: 2025, formats: ["2D"],                       poster: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f1c095208024019.6777a0b24988a.jpg",                                                                           color: "#050520", description: "A claustrophobic thriller set inside a university lab where one student's identity is in question.", trailer: "https://www.youtube-nocookie.com/embed/g8kFEbQ5J4A?autoplay=1&rel=0" },
  { id: 20, title: "Moana 2",                genres: ["Animation","Adventure"], lang: "English",   rating: 6.9, votes: "305K", dur: "1h 40m", badge: null,           year: 2024, formats: ["2D","3D","IMAX 3D","4DX"], poster: "https://i.ebayimg.com/images/g/QhEAAOSwICpnAe6n/s-l400.png",                                                                                                   color: "#001a2a", description: "Moana sets sail on a daring mission to find a fabled island and discovers a new world of wonders.", trailer: "https://www.youtube-nocookie.com/embed/e3dNqLkqjLY?autoplay=1&rel=0" },
  { id: 21, title: "Wolf Man",               genres: ["Horror","Thriller"],     lang: "English",   rating: 5.4, votes: "55K",  dur: "1h 43m", badge: null,           year: 2025, formats: ["2D"],                       poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmP5lQjmScHxL467gQ4Xyv3mk6lyoEpd08nw&s",                                                                       color: "#080a00", description: "A family trapped in a remote farmhouse is terrorised by an unseen predator hunting them in the dark.", trailer: "https://www.youtube-nocookie.com/embed/WDMkFEgkEfI?autoplay=1&rel=0" },
  { id: 22, title: "The Brutalist",          genres: ["Drama","History"],       lang: "English",   rating: 7.6, votes: "98K",  dur: "3h 35m", badge: "Oscar Buzz",   year: 2024, formats: ["2D","IMAX"],               poster: "https://m.media-amazon.com/images/M/MV5BM2U0MWRjZTMtMDVhNC00MzY4LTgwOTktZGQ2MDdiYTI4OWMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",                                      color: "#101010", description: "A visionary Hungarian-Jewish architect flees Europe for America and fights to rebuild his life and legacy.", trailer: "https://www.youtube-nocookie.com/embed/fgoCqhB_Fok?autoplay=1&rel=0" },
  { id: 23, title: "Conclave",               genres: ["Drama","Mystery"],       lang: "English",   rating: 7.4, votes: "145K", dur: "2h 1m",  badge: "Award Winner", year: 2024, formats: ["2D"],                       poster: "https://image.tmdb.org/t/p/original/vYEyxF1UT779RiEalpMjUT6kfdf.jpg",                                                                                                    color: "#050505", description: "A cardinal navigates the deadly politics and secrets of selecting the new Pope after a sudden death.", trailer: "https://www.youtube-nocookie.com/embed/xfUe5LbhSe8?autoplay=1&rel=0" },
  { id: 24, title: "Paddington in Peru",     genres: ["Comedy","Family"],       lang: "English",   rating: 7.1, votes: "42K",  dur: "1h 46m", badge: null,           year: 2024, formats: ["2D","3D"],                  poster: "https://image.tmdb.org/t/p/original/rzfqeLdHIysJGrspMICyedpqDqt.jpg",                                                                                                    color: "#2a1500", description: "Paddington and the Brown family travel to Peru to visit his Aunt Lucy — and end up on a wild adventure.", trailer: "https://www.youtube-nocookie.com/embed/QMSFq1y3RIo?autoplay=1&rel=0" },
];

/* ═══════════════════════════════════════
   COMING SOON — 2025-2026
═══════════════════════════════════════ */
const COMING_SOON = [
  { id: "cs1", title: "A Minecraft Movie",                    genres: ["Animation","Adventure"], formats: ["2D","3D","IMAX 3D","4DX"], lang: "English",               releaseDate: "Apr 4, 2025",  poster: "https://i.redd.it/8b15yijpcgtc1.png",                                                                                                        color: "#1a3a00", description: "Four misfits are pulled into the Overworld and must master it to return home.",                                          trailer: "https://www.youtube-nocookie.com/embed/PeHH3e2-lkA?autoplay=1&rel=0" },
  { id: "cs2", title: "Thunderbolts*",                        genres: ["Action","Superhero"],    formats: ["2D","3D","IMAX 3D"],       lang: "English",               releaseDate: "May 2, 2025",  poster: "https://lh4.googleusercontent.com/proxy/y1INP4XK0QYR0Na0BD4NZafVD35q02BL5oyjXNr2710BkioyCnKYJoPsGYT4HX9MXMUxt9Wepo1O7dP2C3QDi-31QTDPBar3_g",  color: "#0a0a1a", description: "A group of Marvel antiheroes assemble for a dangerous mission with competing agendas.",                             trailer: "https://www.youtube-nocookie.com/embed/8oLCBaSnWEo?autoplay=1&rel=0" },
  { id: "cs3", title: "Mission: Impossible – Final Reckoning", genres: ["Action","Thriller"],    formats: ["2D","IMAX","4DX"],         lang: "English, Hindi",        releaseDate: "May 23, 2025", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YkJDubvXD0EXdztmNHBEaKbNw9s8yFwgww&s",                                             color: "#0a1500", description: "Ethan Hunt faces his deadliest and most personal mission yet — the fate of the world hangs by a thread.",              trailer: "https://www.youtube-nocookie.com/embed/avz06PDqDbM?autoplay=1&rel=0" },
  { id: "cs4", title: "Superman",                             genres: ["Action","Sci-Fi"],       formats: ["2D","3D","IMAX 3D"],       lang: "English",               releaseDate: "Jul 11, 2025", poster: "https://www.fomostore.in/cdn/shop/files/Fomo-Store-Posters-Movies-Superman-Image-1_d727d91c-79a5-4631-a457-2d36a3bd8bb0.jpg?v=1721974674&width=2048", color: "#001040", description: "James Gunn's bold new take on the Man of Steel — Clark Kent battles villainy while holding on to his humanity.",  trailer: "https://www.youtube-nocookie.com/embed/2lABWJy4UAU?autoplay=1&rel=0" },
  { id: "cs5", title: "Fantastic Four: First Steps",          genres: ["Action","Sci-Fi"],       formats: ["2D","3D","IMAX 3D","4DX"], lang: "English, Hindi",        releaseDate: "Jul 25, 2025", poster: "https://posterspy.com/wp-content/uploads/2025/06/Affiche-Fantastic-4-v2-1.jpg",                                                                 color: "#001a30", description: "Marvel's First Family steps into the MCU with their iconic retro-futuristic adventure.",                                trailer: "https://www.youtube-nocookie.com/embed/kG5mdPRVFoA?autoplay=1&rel=0" },
  { id: "cs6", title: "Avengers: Doomsday",                   genres: ["Action","Superhero"],    formats: ["2D","3D","IMAX 3D","4DX"], lang: "English, Hindi, Tamil, Telugu", releaseDate: "May 1, 2026", poster: "https://i.redd.it/b8a68egs9n2f1.jpeg",                                                                                                color: "#1a0030", description: "The Avengers reassemble for an earth-shattering confrontation with Doctor Doom.",                                        trailer: "https://www.youtube-nocookie.com/embed/5K8gBf1BhYE?autoplay=1&rel=0" },
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
  const [loaded,            setLoaded]            = useState(false);
  const [activeLang,        setActiveLang]        = useState("All");
  const [activeGenre,       setActiveGenre]       = useState("All");
  const [search,            setSearch]            = useState("");
  const [revealed,          setRevealed]          = useState(new Set());
  const [trailerUrl,        setTrailerUrl]        = useState(null);
  const [watchlist,         setWatchlist]         = useState(new Set());
  const [sortBy,            setSortBy]            = useState("Default");
  const [showWatchlistOnly, setShowWatchlistOnly] = useState(false);
  const [quickViewMovie,    setQuickViewMovie]    = useState(null);
  const [legalModal,        setLegalModal]        = useState(null); // "terms" | "privacy" | "refund" | null

  /* ── PURE REACT CAROUSEL STATE ── */
  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex(prev => (prev + 1) % FEATURED.length);
  const prevSlide = () => setIndex(prev => prev === 0 ? FEATURED.length - 1 : prev - 1);

  const gridRef = useRef(null);

  /* current featured movie shorthand */
  const f = FEATURED[index];

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

  /* ── AUTO-PLAY: advances every 4s, resets timer on manual nav ── */
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [index]);

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
    const onKey = e => { if (e.key === "Escape") { setTrailerUrl(null); setQuickViewMovie(null); setLegalModal(null); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = trailerUrl || quickViewMovie || legalModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [trailerUrl, quickViewMovie, legalModal]);

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

      {/* ══════════════════ HERO CAROUSEL — Pure React, zero Bootstrap ══════════════════ */}
      <div className="mvp-carousel">

        {/* Single active slide — swaps on index change */}
        <div className="mvp-slide" style={{ background: f.bg, transition: "background 0.6s ease" }}>
          <div className="mvp-slide-noise" />
          <div className="mvp-slide-body">

            {/* ── Text ── */}
            <div className="mvp-slide-text">
              <div className="mvp-genres">
                {f.genres.map(g => (
                  <span key={g} className="mvp-gpill"
                    style={{ border: `1px solid ${f.accent}`, color: f.accent }}>
                    {g}
                  </span>
                ))}
              </div>
              <h1 className="mvp-slide-title">{f.title}</h1>
              <p className="mvp-slide-tag">{f.tagline}</p>
              <p className="mvp-slide-desc">{f.description}</p>
              <div className="mvp-slide-meta" style={{ marginBottom: f.formats ? "16px" : "40px" }}>
                <span style={{ color: f.accent }}>★ {f.rating} <small>({f.votes})</small></span>
                <span className="mvp-sep" />
                <span>{f.duration}</span>
                <span className="mvp-sep" />
                <span>{f.language}</span>
              </div>
              {f.formats && (
                <div className="mvp-formats">
                  {f.formats.map(fmt => (
                    <span key={fmt} className="mvp-gpill"
                      style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", background: "rgba(255,255,255,0.08)" }}>
                      {fmt}
                    </span>
                  ))}
                </div>
              )}
              <div className="mvp-slide-ctas">
                <button className="mvp-btn-book" style={{ background: f.accent }}>🎟 Book Tickets</button>
                <button className="mvp-btn-ghost" onClick={() => setTrailerUrl(f.trailer)}>▶ Trailer</button>
              </div>
            </div>

            {/* ── Poster ── */}
            <div className="mvp-slide-poster">
              <div className="mvp-poster-glow"
                style={{ background: `radial-gradient(ellipse,rgba(${f.accentRgb},.4) 0%,transparent 70%)` }} />
              <div className="mvp-slide-poster-img">
                <Poster src={f.poster} alt={f.title} color={f.bg} />
                <button className="mvp-poster-play-btn" onClick={() => setTrailerUrl(f.trailer)}>▶</button>
              </div>
            </div>

          </div>
        </div>

        {/* ── Prev / Next — plain onClick, no data-bs-* ── */}
        <button
          className="carousel-control-prev mvp-ctrl"
          type="button"
          onClick={prevSlide}
          style={{ position: "absolute", top: "50%", left: "32px", transform: "translateY(-50%)", zIndex: 10 }}
        >
          <span className="mvp-arrow">&#8249;</span>
        </button>
        <button
          className="carousel-control-next mvp-ctrl"
          type="button"
          onClick={nextSlide}
          style={{ position: "absolute", top: "50%", right: "32px", transform: "translateY(-50%)", zIndex: 10 }}
        >
          <span className="mvp-arrow">&#8250;</span>
        </button>

        {/* ── Dot indicators ── */}
        <div style={{
          position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: "10px", zIndex: 10,
        }}>
          {FEATURED.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? "56px" : "28px",
                height: "4px",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
                background: i === index ? "#fff" : "rgba(255,255,255,0.3)",
                boxShadow: i === index ? "0 0 10px rgba(255,255,255,0.5)" : "none",
              }}
            />
          ))}
        </div>

      </div>
      {/* ══════════════════ END CAROUSEL ══════════════════ */}

      {/* ══════════════════ STAT CARDS ══════════════════ */}
      <div className="mvp-stats">
        {[
          { label: "Now Showing", value: ALL_MOVIES.length,  icon: "🎬", color: "#7c3aed" },
          { label: "Coming Soon", value: COMING_SOON.length, icon: "📅", color: "#0891b2" },
          { label: "Watchlisted", value: watchlist.size,     icon: "♥",  color: "#e8175d" },
          { label: "Avg Rating",  value: "7.2",              icon: "⭐", color: "#d97706" },
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
            <button onClick={() => {
              setActiveLang("All"); setActiveGenre("All");
              setSearch(""); setShowWatchlistOnly(false);
            }}>
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

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(2,2,4,0.8)",
        backdropFilter: "blur(20px)",
        padding: "48px 40px 32px",
        marginTop: "20px",
      }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>

          {/* Top row: brand + links */}
          <div style={{
            display: "flex", alignItems: "flex-start",
            justifyContent: "space-between", flexWrap: "wrap", gap: "40px",
            marginBottom: "48px",
          }}>

            {/* Brand block */}
            <div style={{ maxWidth: "320px" }}>
              <div style={{
                fontSize: "1.8rem", fontWeight: 900, letterSpacing: "-0.03em",
                fontFamily: "var(--font-core)", marginBottom: "12px",
                background: "linear-gradient(to right, #fff, #888)",
                WebkitBackgroundClip: "text", backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                🎬 FLICKOVA
              </div>
              <p style={{
                fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.4)",
                fontFamily: "var(--font-core)",
              }}>
                Your ultimate destination for booking movie tickets across all formats — 2D, 3D, IMAX, 4DX and more. Discover, watch, and experience cinema like never before.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                {["🎞", "📱", "💬", "📧"].map((icon, i) => (
                  <button key={i} style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff", fontSize: "1rem", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                  >{icon}</button>
                ))}
              </div>
            </div>

            {/* Links columns */}
            <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
              {[
                {
                  heading: "Explore",
                  links: ["Now Showing", "Coming Soon", "Trending", "Top Rated", "Languages"],
                },
                {
                  heading: "Formats",
                  links: ["2D", "3D", "IMAX", "4DX", "IMAX 3D"],
                },
                {
                  heading: "Company",
                  links: ["About Us", "Careers", "Press", "Partners", "Contact"],
                },
              ].map(col => (
                <div key={col.heading}>
                  <p style={{
                    fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
                    marginBottom: "16px", fontFamily: "var(--font-core)",
                  }}>{col.heading}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {col.links.map(link => (
                      <li key={link}>
                        <button style={{
                          background: "none", border: "none", color: "rgba(255,255,255,0.55)",
                          fontSize: "0.88rem", cursor: "pointer", padding: 0,
                          fontFamily: "var(--font-core)", fontWeight: 500,
                          transition: "color 0.2s ease",
                        }}
                          onMouseEnter={e => { e.currentTarget.style.color = "#fff"; }}
                          onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                        >{link}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px" }}>
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", flexWrap: "wrap", gap: "16px",
            }}>
              {/* Copyright */}
              <p style={{
                fontSize: "0.82rem", color: "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-core)",
              }}>
                © {new Date().getFullYear()} Flickova. All rights reserved. Designed &amp; built with ♥ in India.
              </p>

              {/* Legal links */}
              <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                {[
                  { label: "Terms & Conditions", key: "terms" },
                  { label: "Privacy Policy", key: "privacy" },
                  { label: "Refund Policy", key: "refund" },
                ].map(item => (
                  <button
                    key={item.key}
                    onClick={() => setLegalModal(item.key)}
                    style={{
                      background: "none", border: "none",
                      color: "rgba(255,255,255,0.35)", fontSize: "0.82rem",
                      cursor: "pointer", fontFamily: "var(--font-core)",
                      transition: "color 0.2s ease", padding: 0,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </footer>

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

      {/* ══════════════════ LEGAL MODAL ══════════════════ */}
      {legalModal && (() => {
        const LEGAL_CONTENT = {
          terms: {
            title: "Terms & Conditions",
            sections: [
              { heading: "1. Acceptance of Terms", body: "By accessing or using Flickova ('the Platform'), you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions herein, do not use the Platform. Flickova reserves the right to update these terms at any time without prior notice." },
              { heading: "2. Ticket Booking & Payment", body: "All ticket bookings are subject to availability. Payment must be completed at the time of booking. Flickova uses secure third-party payment gateways. We do not store your card details. Prices are inclusive of all applicable taxes unless stated otherwise. Convenience fees may apply." },
              { heading: "3. Cancellation & Refund Policy", body: "Cancellations made more than 2 hours before the show time are eligible for a refund minus the convenience fee. No refunds will be issued for cancellations made within 2 hours of show time. Refunds are processed within 5–7 business days to the original payment method." },
              { heading: "4. User Responsibilities", body: "You must be at least 18 years old to create an account and make bookings. You are responsible for maintaining the confidentiality of your account credentials. You agree not to use the Platform for any unlawful purpose or in any way that could damage, disable, or impair the Platform." },
              { heading: "5. Intellectual Property", body: "All content on this Platform, including but not limited to text, graphics, logos, and software, is the property of Flickova and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission." },
              { heading: "6. Limitation of Liability", body: "Flickova shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Platform. Our maximum liability shall not exceed the amount paid by you for the specific booking giving rise to the claim." },
              { heading: "7. Governing Law", body: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India." },
              { heading: "8. Contact Us", body: "If you have any questions about these Terms, please contact us at legal@flickova.in or write to us at Flickova Technologies Pvt. Ltd., Bengaluru, Karnataka, India — 560001." },
            ],
          },
          privacy: {
            title: "Privacy Policy",
            sections: [
              { heading: "1. Information We Collect", body: "We collect information you provide directly to us, such as your name, email address, phone number, and payment information when you create an account or make a booking. We also collect usage data, device information, and cookies to improve your experience." },
              { heading: "2. How We Use Your Information", body: "Your information is used to process bookings, send confirmation emails and SMS, personalise your experience, improve our services, send promotional offers (with your consent), and comply with legal obligations." },
              { heading: "3. Data Sharing", body: "We do not sell your personal data. We may share data with trusted partners such as payment processors, cinemas, and analytics providers solely for the purpose of providing our services. All third parties are contractually obligated to protect your data." },
              { heading: "4. Data Retention", body: "We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting privacy@flickova.in." },
              { heading: "5. Cookies", body: "We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser. Disabling cookies may affect some features of the Platform." },
              { heading: "6. Your Rights", body: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at privacy@flickova.in." },
            ],
          },
          refund: {
            title: "Refund Policy",
            sections: [
              { heading: "1. Eligibility for Refund", body: "Refunds are applicable only on bookings cancelled more than 2 hours before the scheduled show time. Tickets for shows that have already commenced are non-refundable under any circumstance." },
              { heading: "2. Non-Refundable Fees", body: "Convenience fees, internet handling charges, and any promotional discount amounts are non-refundable. The refund will be processed for the base ticket price only." },
              { heading: "3. Refund Processing Time", body: "Approved refunds are processed within 5–7 business days. The amount will be credited to the original payment method. Bank processing times may vary and are outside our control." },
              { heading: "4. Show Cancellation by Cinema", body: "In the event of a show being cancelled by the cinema, a full refund including the convenience fee will be issued automatically within 48 hours. No action is required from your end." },
              { heading: "5. Technical Payment Failures", body: "If your payment was deducted but the booking was not confirmed, the amount will be automatically reversed within 3–5 business days. If the issue persists, contact support@flickova.in with your transaction ID." },
              { heading: "6. How to Request a Refund", body: "Go to My Bookings → Select the booking → Click 'Cancel & Refund'. Alternatively, contact our support team at support@flickova.in or call our helpline. Refund requests must be submitted before the show time." },
            ],
          },
        };

        const content = LEGAL_CONTENT[legalModal];
        return (
          <div className="trailer-modal" onClick={() => setLegalModal(null)} style={{ alignItems: "flex-end" }}>
            <div
              onClick={e => e.stopPropagation()}
              style={{
                background: "rgba(8,8,14,0.95)",
                backdropFilter: "blur(40px) saturate(200%)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "28px 28px 0 0",
                width: "100%",
                maxWidth: "860px",
                margin: "0 auto",
                maxHeight: "82vh",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 -20px 60px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.1)",
              }}
            >
              {/* Modal header */}
              <div style={{
                padding: "28px 36px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexShrink: 0,
              }}>
                <div>
                  <p style={{
                    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em",
                    textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
                    fontFamily: "var(--font-core)", marginBottom: "6px",
                  }}>Flickova Legal</p>
                  <h2 style={{
                    fontSize: "1.8rem", fontWeight: 900, letterSpacing: "-0.02em",
                    fontFamily: "var(--font-core)", color: "#fff",
                  }}>{content.title}</h2>
                </div>
                <button className="trailer-close" onClick={() => setLegalModal(null)}>✕</button>
              </div>

              {/* Tab switcher */}
              <div style={{ padding: "16px 36px 0", display: "flex", gap: "8px", flexShrink: 0 }}>
                {[
                  { key: "terms",   label: "Terms & Conditions" },
                  { key: "privacy", label: "Privacy Policy" },
                  { key: "refund",  label: "Refund Policy" },
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setLegalModal(tab.key)}
                    style={{
                      padding: "8px 18px", borderRadius: "100px",
                      border: legalModal === tab.key ? "none" : "1px solid rgba(255,255,255,0.12)",
                      background: legalModal === tab.key ? "#fff" : "transparent",
                      color: legalModal === tab.key ? "#000" : "rgba(255,255,255,0.5)",
                      fontFamily: "var(--font-core)", fontSize: "0.82rem",
                      fontWeight: 700, cursor: "pointer", transition: "all 0.25s ease",
                    }}
                  >{tab.label}</button>
                ))}
              </div>

              {/* Scrollable content */}
              <div style={{
                overflowY: "auto", padding: "28px 36px 40px",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255,255,255,0.1) transparent",
              }}>
                {content.sections.map((sec, i) => (
                  <div key={i} style={{ marginBottom: "28px" }}>
                    <h3 style={{
                      fontSize: "0.95rem", fontWeight: 700, color: "#fff",
                      fontFamily: "var(--font-core)", marginBottom: "10px",
                    }}>{sec.heading}</h3>
                    <p style={{
                      fontSize: "0.9rem", lineHeight: 1.75,
                      color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-core)",
                    }}>{sec.body}</p>
                  </div>
                ))}

                {/* Footer row */}
                <div style={{
                  marginTop: "32px", paddingTop: "24px",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", flexWrap: "wrap", gap: "12px",
                }}>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-core)" }}>
                    Last updated: April 2025 &nbsp;·&nbsp; Effective immediately
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-core)" }}>
                    © {new Date().getFullYear()} Flickova Technologies Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

    </div>
  );
};

export default Movies;