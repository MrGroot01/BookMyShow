import { useState, useEffect, useRef } from "react";
import "./Adventure.css";

/* ════════════════════════════════════════
   DATA
════════════════════════════════════════ */
const CITIES = [
  {
    id: "bengaluru", name: "Bengaluru", emoji: "🏙️", tagline: "Garden City & Silicon Valley of India",
    hero: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&q=80",
    color: "#FF6B35",
    places: [
      {
        id: "b1", name: "Nandi Hills", type: "Trek", rating: 4.9, distance: "60 km",
        desc: "Perched at 1,478 m above sea level, Nandi Hills is a beloved weekend escape for Bengalureans. The sunrise here — where the valley below disappears into a sea of clouds — is nothing short of magical. The ancient Bhoga Nandeeshwara temple and Tipu Sultan's summer retreat add layers of history to the hike.",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        entry: "₹20", bestTime: "Oct–Mar", difficulty: "Easy", duration: "3–4 hrs",
        timings: [
          { day: "Mon–Fri", time: "6:00 AM – 6:00 PM" },
          { day: "Saturday", time: "5:30 AM – 7:00 PM" },
          { day: "Sunday", time: "5:30 AM – 7:00 PM" },
          { day: "Holidays", time: "5:30 AM – 7:00 PM" },
        ],
        slots: [
          { time: "6:00 AM", available: 12 }, { time: "8:00 AM", available: 0 },
          { time: "10:00 AM", available: 5 }, { time: "12:00 PM", available: 18 },
          { time: "2:00 PM", available: 8 }, { time: "4:00 PM", available: 3 },
        ],
      },
      {
        id: "b2", name: "Bannerghatta National Park", type: "Wildlife", rating: 4.6, distance: "22 km",
        desc: "One of Bangalore's most accessible wildlife sanctuaries, Bannerghatta is home to Bengal tigers, Asiatic lions, leopards, and Indian elephants. The butterfly enclosure — one of India's largest — alone is worth the trip. Safari rides through the core zone bring you within safe viewing range of apex predators.",
        img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80",
        entry: "₹250", bestTime: "Nov–Feb", difficulty: "Easy", duration: "4–5 hrs",
        timings: [
          { day: "Mon–Fri", time: "9:00 AM – 5:00 PM" },
          { day: "Saturday", time: "9:00 AM – 6:00 PM" },
          { day: "Sunday", time: "9:00 AM – 6:00 PM" },
          { day: "Tuesday", time: "Closed", closed: true },
        ],
        slots: [
          { time: "9:00 AM", available: 20 }, { time: "10:30 AM", available: 0 },
          { time: "12:00 PM", available: 15 }, { time: "1:30 PM", available: 7 },
          { time: "3:00 PM", available: 0 }, { time: "4:30 PM", available: 9 },
        ],
      },
      {
        id: "b3", name: "Savandurga Trek", type: "Trek", rating: 4.7, distance: "50 km",
        desc: "Rising abruptly from the Deccan plateau, Savandurga is believed to be one of Asia's largest monolithic hills. The trek to the 1,226 m summit is a challenging scramble over bare granite, but the panoramic views of Arkavathi river valley make every hand-hold worthwhile. Ancient temples dot the base.",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
        entry: "₹50", bestTime: "Sep–Feb", difficulty: "Moderate", duration: "5–6 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 5:00 PM" },
          { day: "Monsoon", time: "Restricted access" },
        ],
        slots: [
          { time: "6:00 AM", available: 8 }, { time: "7:00 AM", available: 0 },
          { time: "8:00 AM", available: 14 }, { time: "9:00 AM", available: 6 },
          { time: "10:00 AM", available: 0 }, { time: "11:00 AM", available: 4 },
        ],
      },
      {
        id: "b4", name: "Skandagiri Night Trek", type: "Trek", rating: 4.8, distance: "68 km",
        desc: "Skandagiri, also called Kalavara Durga, is famous for its night treks that culminate in a cloud-sea sunrise at 1,450 m. The trail winds through dense forests past the ruins of a 17th-century fort. Trekkers often start at midnight and reach the summit just as dawn breaks over the Eastern Ghats.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
        entry: "₹300", bestTime: "Oct–Feb", difficulty: "Moderate", duration: "4–5 hrs",
        timings: [
          { day: "Mon–Sun", time: "11:00 PM – 9:00 AM (Night trek)" },
          { day: "Day trek", time: "6:00 AM – 2:00 PM" },
        ],
        slots: [
          { time: "11:00 PM", available: 10 }, { time: "12:00 AM", available: 6 },
          { time: "1:00 AM", available: 14 }, { time: "2:00 AM", available: 4 },
          { time: "3:00 AM", available: 0 }, { time: "6:00 AM", available: 18 },
        ],
      },
      {
        id: "b5", name: "Anthargange Cave Trek", type: "Trek", rating: 4.5, distance: "70 km",
        desc: "Anthargange near Kolar is a unique combination of volcanic rock formations, cave exploration, and a hilltop temple. The name means 'inner Ganga' — a perennial spring emerges from within the cave complex. Rock-hopping through narrow passages and emerging to sweeping plains below makes this a truly adventurous outing.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
        entry: "₹30", bestTime: "Aug–Mar", difficulty: "Moderate", duration: "4–5 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 5:00 PM" },
          { day: "Cave access", time: "7:00 AM – 4:00 PM" },
        ],
        slots: [
          { time: "6:00 AM", available: 15 }, { time: "8:00 AM", available: 0 },
          { time: "9:00 AM", available: 10 }, { time: "11:00 AM", available: 8 },
          { time: "1:00 PM", available: 5 }, { time: "3:00 PM", available: 2 },
        ],
      },
    ],
  },
  {
    id: "mysuru", name: "Mysuru", emoji: "🏰", tagline: "City of Palaces",
    hero: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
    color: "#E67E22",
    places: [
      {
        id: "m1", name: "Mysore Palace", type: "Heritage", rating: 4.9, distance: "2 km",
        desc: "The Mysore Palace is the official residence of the Wadiyar dynasty and one of the most visited monuments in India. Built in the Indo-Saracenic style, it gleams with intricate carvings, stained glass ceilings, and golden thrones. On Sunday evenings and public holidays, 97,000 light bulbs transform it into a surreal spectacle.",
        img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
        entry: "₹100", bestTime: "Oct–Feb", difficulty: "Easy", duration: "2–3 hrs",
        timings: [
          { day: "Mon–Sun", time: "10:00 AM – 5:30 PM" },
          { day: "Light show", time: "Sun & Holidays 7:00–7:45 PM" },
        ],
        slots: [
          { time: "10:00 AM", available: 0 }, { time: "11:30 AM", available: 22 },
          { time: "1:00 PM", available: 15 }, { time: "2:30 PM", available: 18 },
          { time: "4:00 PM", available: 10 }, { time: "5:00 PM", available: 5 },
        ],
      },
      {
        id: "m2", name: "Chamundi Hills", type: "Trek", rating: 4.7, distance: "10 km",
        desc: "Rising 1,062 m above Mysuru, Chamundi Hills is crowned by the 12th-century Chamundeshwari Temple. The famous 1,000-step stairway winds past a colossal 5-metre Nandi bull sculpture carved from a single rock. The hike rewards you with sweeping panoramic views over the palace city below.",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        entry: "Free", bestTime: "Oct–Mar", difficulty: "Moderate", duration: "2–3 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 9:00 PM" },
          { day: "Temple hours", time: "7:30 AM – 2:00 PM, 3:30–6:00 PM" },
        ],
        slots: [
          { time: "6:00 AM", available: 20 }, { time: "8:00 AM", available: 12 },
          { time: "10:00 AM", available: 0 }, { time: "12:00 PM", available: 8 },
          { time: "3:00 PM", available: 16 }, { time: "5:00 PM", available: 6 },
        ],
      },
      {
        id: "m3", name: "Nagarhole Tiger Reserve", type: "Wildlife", rating: 4.8, distance: "95 km",
        desc: "Part of the Nilgiri Biosphere Reserve, Nagarhole hosts one of India's densest tiger populations alongside leopards, dholes, and massive herds of gaur. The Kabini river forms a natural boundary where elephant herds gather spectacularly during the dry season. Boat safaris at dusk offer magical wildlife viewing along the banks.",
        img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80",
        entry: "₹350", bestTime: "Oct–May", difficulty: "Easy", duration: "3–4 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 9:30 AM, 3:30–6:00 PM" },
          { day: "Wednesday", time: "Closed", closed: true },
        ],
        slots: [
          { time: "6:00 AM", available: 8 }, { time: "6:30 AM", available: 0 },
          { time: "7:00 AM", available: 4 }, { time: "3:30 PM", available: 12 },
          { time: "4:00 PM", available: 0 }, { time: "4:30 PM", available: 6 },
        ],
      },
    ],
  },
  {
    id: "hampi", name: "Hampi", emoji: "🏛️", tagline: "UNESCO World Heritage Ruins",
    hero: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=900&q=80",
    color: "#8E44AD",
    places: [
      {
        id: "h1", name: "Virupaksha Temple", type: "Heritage", rating: 4.8, distance: "1 km",
        desc: "At the heart of Hampi's surreal boulder landscape stands the Virupaksha Temple, a living place of worship for over 700 years. Its 50-metre gopuram is the tallest in Karnataka and dominates the bazaar street leading to the Tungabhadra river. The resident elephant Lakshmi blesses pilgrims each morning.",
        img: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&q=80",
        entry: "₹50", bestTime: "Oct–Feb", difficulty: "Easy", duration: "1–2 hrs",
        timings: [
          { day: "Mon–Sun", time: "8:00 AM – 1:00 PM" },
          { day: "Evening", time: "5:00 PM – 8:30 PM" },
          { day: "Special puja", time: "6:00 AM – 7:30 AM" },
        ],
        slots: [
          { time: "8:00 AM", available: 0 }, { time: "9:30 AM", available: 18 },
          { time: "11:00 AM", available: 10 }, { time: "5:00 PM", available: 20 },
          { time: "6:00 PM", available: 14 }, { time: "7:00 PM", available: 8 },
        ],
      },
      {
        id: "h2", name: "Matanga Hill", type: "Trek", rating: 4.7, distance: "2 km",
        desc: "The highest point in the Hampi ruins complex, Matanga Hill offers what many consider the finest sunrise in all of Karnataka. As dawn light spills over the ancient Vijayanagara empire's ruins, boulders, and the Tungabhadra river below, the scene feels almost unreal. The short but steep climb takes about 45 minutes.",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        entry: "Free", bestTime: "Oct–Feb", difficulty: "Moderate", duration: "2 hrs",
        timings: [
          { day: "Mon–Sun", time: "5:30 AM – 6:00 PM" },
          { day: "Sunset", time: "Best at 5:30–6:00 PM" },
        ],
        slots: [
          { time: "5:30 AM", available: 6 }, { time: "6:30 AM", available: 14 },
          { time: "8:00 AM", available: 20 }, { time: "10:00 AM", available: 12 },
          { time: "3:00 PM", available: 18 }, { time: "5:00 PM", available: 8 },
        ],
      },
      {
        id: "h3", name: "Vittala Temple Complex", type: "Heritage", rating: 4.9, distance: "3 km",
        desc: "The Vittala Temple is the crown jewel of Hampi's architectural legacy. Its iconic Stone Chariot and the musical pillars — each producing a different note when tapped — showcase the unparalleled genius of Vijayanagara craftsmen. The 56 musical pillars of the main hall have baffled scientists for centuries.",
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
        entry: "₹600", bestTime: "Oct–Mar", difficulty: "Easy", duration: "2–3 hrs",
        timings: [
          { day: "Mon–Sun", time: "8:30 AM – 5:30 PM" },
          { day: "Sound & Light", time: "7:00 PM – 8:00 PM" },
        ],
        slots: [
          { time: "8:30 AM", available: 14 }, { time: "10:00 AM", available: 0 },
          { time: "11:30 AM", available: 8 }, { time: "1:00 PM", available: 20 },
          { time: "3:00 PM", available: 12 }, { time: "4:30 PM", available: 5 },
        ],
      },
    ],
  },
  {
    id: "coorg", name: "Coorg", emoji: "🌿", tagline: "Scotland of India",
    hero: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=900&q=80",
    color: "#1E8449",
    places: [
      {
        id: "c1", name: "Abbey Falls", type: "Waterfalls", rating: 4.5, distance: "8 km",
        desc: "Hidden within a canopy of coffee and spice plantations, Abbey Falls plunges 70 feet over a rocky cliff into a misty pool below. The wooden suspension bridge over the gorge offers a thrilling vantage point. The surrounding estate is fragrant with cardamom, pepper vines, and the earthy scent of Coorg's famous coffee.",
        img: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80",
        entry: "₹30", bestTime: "Jul–Nov", difficulty: "Easy", duration: "1–2 hrs",
        timings: [
          { day: "Mon–Sun", time: "8:00 AM – 5:30 PM" },
          { day: "Monsoon peak", time: "Best Jul–Sep" },
        ],
        slots: [
          { time: "8:00 AM", available: 20 }, { time: "10:00 AM", available: 0 },
          { time: "12:00 PM", available: 14 }, { time: "2:00 PM", available: 18 },
          { time: "3:30 PM", available: 7 }, { time: "5:00 PM", available: 0 },
        ],
      },
      {
        id: "c2", name: "Tadiandamol Peak", type: "Trek", rating: 4.8, distance: "35 km",
        desc: "At 1,748 m, Tadiandamol is the highest peak in Coorg and a trekker's dream. The trail passes through shola forests alive with Nilgiri langurs and giant Malabar squirrels, before emerging onto a grassy summit that feels like the edge of the world. On clear days you can see the plains of Kerala far below.",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        entry: "₹100", bestTime: "Sep–Mar", difficulty: "Hard", duration: "6–7 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 4:00 PM" },
          { day: "Monsoon", time: "Closed Jun–Aug" },
        ],
        slots: [
          { time: "6:00 AM", available: 8 }, { time: "7:00 AM", available: 0 },
          { time: "8:00 AM", available: 10 }, { time: "9:00 AM", available: 4 },
          { time: "10:00 AM", available: 0 }, { time: "11:00 AM", available: 2 },
        ],
      },
      {
        id: "c3", name: "Iruppu Falls", type: "Waterfalls", rating: 4.6, distance: "55 km",
        desc: "Set within the Brahmagiri Wildlife Sanctuary, Iruppu Falls (also called Lakshmana Tirtha Falls) cascades 170 feet through thick rainforest. The holy dip pool at the base is a sacred site for pilgrims. The trail to the falls passes through elephant country — sightings on the approach road are common.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        entry: "₹50", bestTime: "Aug–Nov", difficulty: "Easy", duration: "2–3 hrs",
        timings: [
          { day: "Mon–Sun", time: "8:00 AM – 5:00 PM" },
        ],
        slots: [
          { time: "8:00 AM", available: 16 }, { time: "10:00 AM", available: 8 },
          { time: "12:00 PM", available: 0 }, { time: "2:00 PM", available: 12 },
          { time: "3:30 PM", available: 5 }, { time: "5:00 PM", available: 0 },
        ],
      },
    ],
  },
  {
    id: "chikmagalur", name: "Chikmagalur", emoji: "☕", tagline: "Land of Coffee & Misty Peaks",
    hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    color: "#6F4E37",
    places: [
      {
        id: "ck1", name: "Mullayanagiri Peak", type: "Trek", rating: 4.9, distance: "25 km",
        desc: "At 1,930 m, Mullayanagiri is the highest peak in Karnataka. The trail to the summit weaves through cloud forests and shola grasslands, passing the Mullayanagiri temple perched dramatically at the top. On a clear day, the view stretches from the Arabian Sea in the west to the Deccan plateau in the east.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
        entry: "₹50", bestTime: "Sep–Mar", difficulty: "Moderate", duration: "4–5 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 5:00 PM" },
          { day: "Monsoon", time: "Limited access Jul–Aug" },
        ],
        slots: [
          { time: "6:00 AM", available: 10 }, { time: "7:30 AM", available: 0 },
          { time: "9:00 AM", available: 14 }, { time: "10:30 AM", available: 8 },
          { time: "12:00 PM", available: 5 }, { time: "2:00 PM", available: 3 },
        ],
      },
      {
        id: "ck2", name: "Baba Budangiri", type: "Trek", rating: 4.7, distance: "40 km",
        desc: "Named after the Sufi saint Baba Budan who brought coffee to India, this sacred mountain range at 1,895 m hosts both a Hindu and Muslim shrine at its summit — a rare symbol of religious harmony. The trek passes through coffee estates and shola forests, with mist rolling in unpredictably all year.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
        entry: "Free", bestTime: "Oct–Mar", difficulty: "Moderate", duration: "4–6 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 6:00 PM" },
          { day: "Urs festival", time: "Restricted access" },
        ],
        slots: [
          { time: "6:00 AM", available: 12 }, { time: "8:00 AM", available: 6 },
          { time: "10:00 AM", available: 0 }, { time: "12:00 PM", available: 14 },
          { time: "2:00 PM", available: 8 }, { time: "4:00 PM", available: 4 },
        ],
      },
      {
        id: "ck3", name: "Hebbe Falls", type: "Waterfalls", rating: 4.7, distance: "36 km",
        desc: "Hebbe Falls plunges 168 metres in two tiers through dense Kemmanagundi forest. The approach itself is an adventure — a 4WD ride through coffee plantations, followed by a 3 km trek through jungle. The upper fall (Great Hebbe) and lower fall (Small Hebbe) are both spectacular, with the spray creating permanent rainbows.",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
        entry: "₹100", bestTime: "Jul–Nov", difficulty: "Moderate", duration: "3–4 hrs",
        timings: [
          { day: "Mon–Sun", time: "7:00 AM – 5:00 PM" },
          { day: "Heavy rain days", time: "Closed for safety" },
        ],
        slots: [
          { time: "7:00 AM", available: 8 }, { time: "9:00 AM", available: 0 },
          { time: "11:00 AM", available: 12 }, { time: "1:00 PM", available: 6 },
          { time: "3:00 PM", available: 10 }, { time: "4:30 PM", available: 3 },
        ],
      },
      {
        id: "ck4", name: "Kudremukh National Park", type: "Wildlife", rating: 4.8, distance: "90 km",
        desc: "Kudremukh — meaning 'horse face' — is one of India's biodiversity hotspots and a UNESCO World Heritage nominee. The park shelters Lion-tailed macaques, gaur, leopards, and the endangered Malabar large-spotted civet. The rolling grasslands and shola forests draped in cloud make every visit feel like stepping into another world.",
        img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80",
        entry: "₹200", bestTime: "Sep–Feb", difficulty: "Moderate", duration: "Full day",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 6:00 PM" },
          { day: "Permits required", time: "Book 2 days in advance" },
        ],
        slots: [
          { time: "6:00 AM", available: 6 }, { time: "7:30 AM", available: 10 },
          { time: "9:00 AM", available: 4 }, { time: "11:00 AM", available: 0 },
          { time: "1:00 PM", available: 8 }, { time: "3:00 PM", available: 5 },
        ],
      },
    ],
  },
  {
    id: "gokarna", name: "Gokarna", emoji: "🏖️", tagline: "Temple Town & Pristine Beaches",
    hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    color: "#2980B9",
    places: [
      {
        id: "g1", name: "Kudle–Om Beach Trek", type: "Trek", rating: 4.6, distance: "1 km",
        desc: "The cliff-top trail connecting Kudle, Om, Half Moon, and Paradise beaches is one of India's most scenic coastal treks. Each hidden cove is more pristine than the last. The Om Beach gets its name from its natural Om-shaped shoreline, best appreciated from the rocky headland above. Dolphins are frequently spotted offshore.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        entry: "Free", bestTime: "Oct–Mar", difficulty: "Easy", duration: "3–4 hrs",
        timings: [
          { day: "Mon–Sun", time: "Open all day" },
          { day: "Best light", time: "Sunrise & Sunset" },
        ],
        slots: [
          { time: "6:00 AM", available: 20 }, { time: "8:00 AM", available: 15 },
          { time: "10:00 AM", available: 12 }, { time: "3:00 PM", available: 18 },
          { time: "4:30 PM", available: 10 }, { time: "6:00 PM", available: 8 },
        ],
      },
      {
        id: "g2", name: "Mahabaleshwara Temple", type: "Heritage", rating: 4.7, distance: "0.5 km",
        desc: "One of the seven sacred Shiva temples of Karnataka, the Mahabaleshwara Temple in Gokarna houses the Atmalinga — a self-manifested Shiva lingam that Ravana is said to have brought from Kailash. The 4th-century Dravidian structure is one of the most important pilgrimage sites on the western coast of India.",
        img: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&q=80",
        entry: "Free", bestTime: "Oct–Mar", difficulty: "Easy", duration: "1–2 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 12:30 PM" },
          { day: "Evening", time: "5:00 PM – 9:00 PM" },
        ],
        slots: [
          { time: "6:00 AM", available: 15 }, { time: "7:30 AM", available: 0 },
          { time: "9:00 AM", available: 20 }, { time: "10:30 AM", available: 12 },
          { time: "5:00 PM", available: 18 }, { time: "7:00 PM", available: 8 },
        ],
      },
    ],
  },
  {
    id: "badami", name: "Badami", emoji: "🗿", tagline: "Cradle of Chalukyan Architecture",
    hero: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80",
    color: "#C0392B",
    places: [
      {
        id: "ba1", name: "Badami Cave Temples", type: "Heritage", rating: 4.9, distance: "1 km",
        desc: "Carved into a dramatic red sandstone cliff overlooking Agastya Lake, the four cave temples of Badami (6th century CE) represent the finest rock-cut architecture in the Deccan. Cave 3 — dedicated to Vishnu — contains a stunning 5-metre sculpture of the 18-armed Trivikrama. The view over the lake from the cliff edge is breathtaking.",
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
        entry: "₹600", bestTime: "Oct–Mar", difficulty: "Easy", duration: "2–3 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 6:00 PM" },
        ],
        slots: [
          { time: "6:00 AM", available: 10 }, { time: "8:00 AM", available: 18 },
          { time: "10:00 AM", available: 0 }, { time: "12:00 PM", available: 14 },
          { time: "2:00 PM", available: 9 }, { time: "4:00 PM", available: 7 },
        ],
      },
      {
        id: "ba2", name: "Pattadakal Temples", type: "Heritage", rating: 4.8, distance: "22 km",
        desc: "A UNESCO World Heritage Site, Pattadakal is a stunning ensemble of 10 temples that served as the royal coronation site for the Chalukya kings. The temples blend North Indian Nagara and South Indian Dravida architectural styles in perfect harmony. The Virupaksha Temple here inspired the famous Kailasa Temple at Ellora.",
        img: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&q=80",
        entry: "₹600", bestTime: "Oct–Mar", difficulty: "Easy", duration: "2–3 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 6:00 PM" },
        ],
        slots: [
          { time: "6:00 AM", available: 12 }, { time: "8:00 AM", available: 20 },
          { time: "10:00 AM", available: 8 }, { time: "12:00 PM", available: 0 },
          { time: "2:00 PM", available: 15 }, { time: "4:00 PM", available: 6 },
        ],
      },
      {
        id: "ba3", name: "Aihole Temple Complex", type: "Heritage", rating: 4.7, distance: "38 km",
        desc: "Known as the 'cradle of Indian architecture', Aihole's 125+ temples (5th–12th century) served as the experimental ground where early Hindu and Jain temple forms were first developed. The Durga Temple with its apsidal plan and the Lad Khan Temple represent two of the earliest surviving Hindu temples in the subcontinent.",
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
        entry: "₹300", bestTime: "Oct–Feb", difficulty: "Easy", duration: "3–4 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 6:00 PM" },
          { day: "Closed", time: "National holidays", closed: true },
        ],
        slots: [
          { time: "6:00 AM", available: 18 }, { time: "8:30 AM", available: 12 },
          { time: "10:30 AM", available: 0 }, { time: "12:30 PM", available: 20 },
          { time: "2:30 PM", available: 10 }, { time: "4:30 PM", available: 5 },
        ],
      },
    ],
  },
  {
    id: "dandeli", name: "Dandeli", emoji: "🌊", tagline: "Adventure Capital of Karnataka",
    hero: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=80",
    color: "#117A65",
    places: [
      {
        id: "d1", name: "Dandeli Wildlife Sanctuary", type: "Wildlife", rating: 4.7, distance: "5 km",
        desc: "Dandeli–Anshi Tiger Reserve is one of Karnataka's largest protected areas and a stronghold for the Black Panther — extremely rare melanistic leopards are sighted here more than almost anywhere else in India. The Kali river flows through the sanctuary, and white-water rafting through tiger territory is an experience unlike any other.",
        img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80",
        entry: "₹300", bestTime: "Oct–May", difficulty: "Easy", duration: "4–5 hrs",
        timings: [
          { day: "Mon–Sun", time: "6:00 AM – 9:30 AM, 3:00–6:00 PM" },
          { day: "Wednesday", time: "Closed", closed: true },
        ],
        slots: [
          { time: "6:00 AM", available: 10 }, { time: "6:30 AM", available: 6 },
          { time: "7:00 AM", available: 0 }, { time: "3:00 PM", available: 14 },
          { time: "3:30 PM", available: 8 }, { time: "4:00 PM", available: 4 },
        ],
      },
      {
        id: "d2", name: "Syntheri Rocks", type: "Trek", rating: 4.6, distance: "22 km",
        desc: "A geological wonder deep inside Dandeli forest, Syntheri Rocks is a massive natural granite dome rising 300 feet above the Kaneri river. The surreal formation — which looks like something from another planet — is reached via a trail through dense sal and teak forest. Crocodiles sun themselves on the riverbanks below.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
        entry: "₹200", bestTime: "Oct–Mar", difficulty: "Easy", duration: "2–3 hrs",
        timings: [
          { day: "Mon–Sun", time: "7:00 AM – 5:00 PM" },
        ],
        slots: [
          { time: "7:00 AM", available: 15 }, { time: "9:00 AM", available: 0 },
          { time: "11:00 AM", available: 10 }, { time: "1:00 PM", available: 18 },
          { time: "3:00 PM", available: 6 }, { time: "4:30 PM", available: 3 },
        ],
      },
      {
        id: "d3", name: "Ulavi Caves & Waterfall", type: "Waterfalls", rating: 4.5, distance: "60 km",
        desc: "Ulavi is a hidden gem — a secluded waterfall and ancient cave temple complex deep in the Western Ghats near Dandeli. The approach trail through untouched forest is a wildlife corridor, making monkey, deer, and jungle fowl sightings almost guaranteed. The waterfall plunges 60 feet into a crystal pool perfect for a refreshing dip.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        entry: "Free", bestTime: "Aug–Dec", difficulty: "Moderate", duration: "3–4 hrs",
        timings: [
          { day: "Mon–Sun", time: "7:00 AM – 5:00 PM" },
        ],
        slots: [
          { time: "7:00 AM", available: 20 }, { time: "9:00 AM", available: 12 },
          { time: "11:00 AM", available: 8 }, { time: "1:00 PM", available: 0 },
          { time: "3:00 PM", available: 14 }, { time: "4:30 PM", available: 4 },
        ],
      },
    ],
  },
];

/* ── Additional standalone places for filter views ── */
const EXTRA_PLACES = [
  {
    id: "t_kudremukh", name: "Kudremukh Peak Trek", type: "Trek", rating: 4.8, distance: "90 km from Chikmagalur",
    desc: "The Kudremukh peak trail winds through the longest stretch of shola-grassland mosaic in the Western Ghats. At 1,894 m, the horse-face shaped summit offers panoramic views over three states.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    entry: "₹200", bestTime: "Sep–Feb", difficulty: "Hard", duration: "7–8 hrs",
    timings: [{ day: "Mon–Sun", time: "5:30 AM – 4:00 PM" }, { day: "Monsoon", time: "Restricted" }],
    slots: [
      { time: "5:30 AM", available: 8 }, { time: "6:30 AM", available: 0 },
      { time: "7:30 AM", available: 6 }, { time: "8:30 AM", available: 10 },
      { time: "9:30 AM", available: 4 }, { time: "10:30 AM", available: 2 },
    ],
  },
  {
    id: "t_ballalarayana", name: "Ballalarayana Durga Trek", type: "Trek", rating: 4.6, distance: "110 km from Mangaluru",
    desc: "One of Karnataka's least-trodden treks, Ballalarayana Durga leads to a 14th-century hillfort ruin at 1,509 m. The trail passes through pristine evergreen forest in the Bisle Ghat range.",
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    entry: "Free", bestTime: "Oct–Mar", difficulty: "Moderate", duration: "5–6 hrs",
    timings: [{ day: "Mon–Sun", time: "6:00 AM – 4:00 PM" }],
    slots: [
      { time: "6:00 AM", available: 14 }, { time: "7:00 AM", available: 8 },
      { time: "8:00 AM", available: 0 }, { time: "9:00 AM", available: 12 },
      { time: "10:00 AM", available: 6 }, { time: "11:00 AM", available: 4 },
    ],
  },
  {
    id: "t_kumara", name: "Kumara Parvatha Trek", type: "Trek", rating: 4.9, distance: "80 km from Mangaluru",
    desc: "Kumara Parvatha (1,712 m) is the toughest and most rewarding trek in coastal Karnataka. The 13 km trail from Kukke Subramanya climbs relentlessly through dense forests and emerges on a dramatic rocky ridge.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    entry: "₹150", bestTime: "Oct–Mar", difficulty: "Hard", duration: "8–10 hrs",
    timings: [{ day: "Mon–Sun", time: "5:00 AM – 3:00 PM" }, { day: "Monsoon", time: "Closed Jun–Sep" }],
    slots: [
      { time: "5:00 AM", available: 6 }, { time: "5:30 AM", available: 10 },
      { time: "6:00 AM", available: 0 }, { time: "6:30 AM", available: 4 },
      { time: "7:00 AM", available: 8 }, { time: "7:30 AM", available: 2 },
    ],
  },
  {
    id: "w_bandipur", name: "Bandipur Tiger Reserve", type: "Wildlife", rating: 4.9, distance: "80 km from Mysuru",
    desc: "Bandipur is one of the finest wildlife reserves in India, and the centrepiece of the Nilgiri Biosphere — the largest protected forest in South Asia. Home to over 100 tigers, 3,000 elephants, leopards, and gaur.",
    img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80",
    entry: "₹400", bestTime: "Oct–May", difficulty: "Easy", duration: "3–4 hrs",
    timings: [{ day: "Mon–Sun", time: "6:00 AM – 9:00 AM, 3:30–6:00 PM" }, { day: "Tuesday", time: "Closed", closed: true }],
    slots: [
      { time: "6:00 AM", available: 0 }, { time: "6:30 AM", available: 4 },
      { time: "7:00 AM", available: 8 }, { time: "3:30 PM", available: 6 },
      { time: "4:00 PM", available: 0 }, { time: "4:30 PM", available: 10 },
    ],
  },
  {
    id: "w_ranganathittu", name: "Ranganathittu Bird Sanctuary", type: "Wildlife", rating: 4.6, distance: "16 km from Mysuru",
    desc: "Ranganathittu on the Kaveri river is Karnataka's largest bird sanctuary and a spectacular breeding colony for painted storks, open-bill storks, and cormorants.",
    img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80",
    entry: "₹250", bestTime: "Jun–Nov", difficulty: "Easy", duration: "2–3 hrs",
    timings: [{ day: "Mon–Sun", time: "8:30 AM – 6:00 PM" }],
    slots: [
      { time: "8:30 AM", available: 15 }, { time: "10:00 AM", available: 0 },
      { time: "11:30 AM", available: 10 }, { time: "1:00 PM", available: 18 },
      { time: "3:00 PM", available: 8 }, { time: "4:30 PM", available: 5 },
    ],
  },
  {
    id: "h_belur", name: "Belur Chennakeshava Temple", type: "Heritage", rating: 4.9, distance: "220 km from Bengaluru",
    desc: "The Chennakeshava Temple at Belur, built in 1117 CE by the Hoysala king Vishnuvardhana, is considered the finest example of Hoysala architecture.",
    img: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&q=80",
    entry: "₹600", bestTime: "Oct–Mar", difficulty: "Easy", duration: "2–3 hrs",
    timings: [{ day: "Mon–Sun", time: "7:00 AM – 6:00 PM" }],
    slots: [
      { time: "7:00 AM", available: 10 }, { time: "9:00 AM", available: 0 },
      { time: "11:00 AM", available: 14 }, { time: "1:00 PM", available: 8 },
      { time: "3:00 PM", available: 20 }, { time: "5:00 PM", available: 6 },
    ],
  },
  {
    id: "wf_jog", name: "Jog Falls", type: "Waterfalls", rating: 4.9, distance: "380 km from Bengaluru",
    desc: "Jog Falls is India's second-highest plunge waterfall at 253 metres, where the Sharavathi river hurls itself off a sheer cliff in four distinct cascades — Raja, Rani, Rover, and Rocket.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    entry: "₹50", bestTime: "Jul–Dec", difficulty: "Easy", duration: "2–3 hrs",
    timings: [{ day: "Mon–Sun", time: "8:00 AM – 6:00 PM" }],
    slots: [
      { time: "8:00 AM", available: 20 }, { time: "10:00 AM", available: 0 },
      { time: "12:00 PM", available: 15 }, { time: "2:00 PM", available: 10 },
      { time: "4:00 PM", available: 18 }, { time: "5:30 PM", available: 8 },
    ],
  },
  {
    id: "wf_shivanasamudra", name: "Shivanasamudra Falls", type: "Waterfalls", rating: 4.7, distance: "130 km from Bengaluru",
    desc: "The Kaveri splits around Shivanasamudra island and plunges in two separate falls — Gaganachukki and Bharachukki — each over 90 metres in height.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    entry: "₹50", bestTime: "Jul–Nov", difficulty: "Easy", duration: "2–3 hrs",
    timings: [{ day: "Mon–Sun", time: "7:00 AM – 6:00 PM" }],
    slots: [
      { time: "7:00 AM", available: 15 }, { time: "9:00 AM", available: 0 },
      { time: "11:00 AM", available: 12 }, { time: "1:00 PM", available: 18 },
      { time: "3:00 PM", available: 8 }, { time: "5:00 PM", available: 6 },
    ],
  },
];

const ALL_PLACES = [...CITIES.flatMap((c) => c.places), ...EXTRA_PLACES];

const PACKAGES = [
  {
    id: "pkg1", name: "Heritage Grand Tour", featured: true, popular: true,
    desc: "Mysore Palace, Hampi ruins, Badami caves & Pattadakal — 6 days of royal Karnataka.",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&q=80",
    price: "₹14,999", per: "per person",
    tags: ["6 Days", "Heritage", "Guided", "Meals incl."],
  },
  {
    id: "pkg2", name: "Western Ghats Trek", featured: false, popular: false,
    desc: "Coorg, Chikmagalur & Kudremukh — 4 nights of trails, mist & coffee.",
    img: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=500&q=80",
    price: "₹8,999", per: "per person",
    tags: ["4 Days", "Trekking", "Camping", "Breakfast"],
  },
  {
    id: "pkg3", name: "Wildlife Weekend", featured: false, popular: false,
    desc: "Bandipur, Nagarhole & BRT safari — spot tigers, elephants & wild dogs in 3 nights.",
    img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&q=80",
    price: "₹9,499", per: "per person",
    tags: ["4 Days", "Wildlife", "Safari", "Resort stay"],
  },
  {
    id: "pkg4", name: "Bengaluru Day Escapes", featured: false, popular: false,
    desc: "Nandi Hills sunrise, Savandurga, Skandagiri & Anthargange — 4 day-treks from the city.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
    price: "₹3,499", per: "per person",
    tags: ["4 Days", "Day Trek", "Sunrise", "Transport incl."],
  },
  {
    id: "pkg5", name: "Waterfall Circuit", featured: false, popular: true,
    desc: "Jog Falls, Unchalli, Magod, Abbey Falls & Hebbe — 5 days of waterfalls in the Ghats.",
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80",
    price: "₹7,999", per: "per person",
    tags: ["5 Days", "Waterfalls", "Scenic", "Meals incl."],
  },
  {
    id: "pkg6", name: "North Karnataka Heritage", featured: false, popular: false,
    desc: "Hampi, Badami, Aihole, Pattadakal, Bidar & Bijapur — 7 days, 2,000 years of history.",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&q=80",
    price: "₹16,999", per: "per person",
    tags: ["7 Days", "Heritage", "UNESCO Sites", "Guided"],
  },
];

const TRENDING = [
  { id: "t1", name: "Kudle Beach, Gokarna", rank: 1, views: "24K this week", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", type: "Beach" },
  { id: "t2", name: "Jog Falls", rank: 2, views: "18K this week", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", type: "Waterfalls" },
  { id: "t3", name: "Kabini River Safari", rank: 3, views: "14K this week", img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&q=80", type: "Wildlife" },
  { id: "t4", name: "Mullayanagiri Peak", rank: 4, views: "11K this week", img: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&q=80", type: "Trek" },
  { id: "t5", name: "Badami Caves", rank: 5, views: "9K this week", img: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600&q=80", type: "Heritage" },
];

const TYPE_COLORS = {
  Trek: "#2980B9", Wildlife: "#16A085", Heritage: "#D35400",
  Waterfalls: "#1A5276", Beach: "#0E6655",
};

const CATEGORY_ITEMS = [
  { type: "Trek", icon: "⛰️" },
  { type: "Wildlife", icon: "🦁" },
  { type: "Heritage", icon: "🏛️" },
  { type: "Waterfalls", icon: "💧" },
];

/* ════════════════════════════════════════
   PLACE MODAL
════════════════════════════════════════ */
function PlaceModal({ place, onClose }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booked, setBooked] = useState(false);
  const col = TYPE_COLORS[place.type] || "#555";

  const handleBook = () => {
    if (selectedSlot === null) return;
    setBooked(true);
    setTimeout(() => { setBooked(false); setSelectedSlot(null); }, 2500);
  };

  return (
    <div className="ka-modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="ka-modal">
        <div className="ka-modal-handle" />
        <div className="ka-modal-hero">
          <img src={place.img} alt={place.name} loading="lazy" />
          <button className="ka-modal-close" onClick={onClose}>✕</button>
          <div className="ka-modal-type-badge" style={{ background: `${col}22`, color: col, border: `1px solid ${col}44` }}>
            {place.type}
          </div>
        </div>
        <div className="ka-modal-body">
          <div className="ka-modal-title">{place.name}</div>
          <div className="ka-modal-rating">
            <span className="ka-modal-stars">★ {place.rating}</span>
            <span className="ka-modal-reviews">· 2.4k reviews</span>
            <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--text-secondary)" }}>📍 {place.distance}</span>
          </div>
          <div className="ka-modal-desc">{place.desc}</div>

          <div className="ka-modal-chips">
            {[
              { icon: "🎟️", label: "Entry Fee", val: place.entry },
              { icon: "🌤️", label: "Best Season", val: place.bestTime },
              { icon: "🥾", label: "Difficulty", val: place.difficulty },
              { icon: "⏱️", label: "Duration", val: place.duration },
            ].map((chip) => (
              <div key={chip.label} className="ka-modal-chip">
                <span className="ka-modal-chip-icon">{chip.icon}</span>
                <div>
                  <span className="ka-modal-chip-label">{chip.label}</span>
                  <span className="ka-modal-chip-val">{chip.val}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="ka-timings-box">
            <div className="ka-timings-title">🕐 Opening Timings</div>
            <div className="ka-timings-grid">
              {place.timings.map((t, i) => (
                <div key={i} className="ka-timing-row">
                  <span className="ka-timing-day">{t.day}</span>
                  <span className={`ka-timing-time${t.closed ? " ka-timing-closed" : ""}`}>{t.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ka-book-section">
            <div className="ka-book-title">🗓️ Book a Slot</div>
            <div className="ka-slots-grid">
              {place.slots.map((slot, i) => (
                <div
                  key={i}
                  className={`ka-slot${slot.available === 0 ? " full" : ""}${selectedSlot === i ? " selected" : ""}`}
                  onClick={() => slot.available > 0 && setSelectedSlot(i)}
                >
                  <div className="ka-slot-time">{slot.time}</div>
                  <div className="ka-slot-avail">{slot.available === 0 ? "Full" : `${slot.available} left`}</div>
                </div>
              ))}
            </div>
            <button
              className={`ka-book-btn${booked ? " booked" : ""}`}
              onClick={handleBook}
              style={{ opacity: selectedSlot === null ? 0.5 : 1 }}
            >
              {booked
                ? "✓ Slot Confirmed!"
                : selectedSlot !== null
                  ? `Confirm ${place.slots[selectedSlot].time} Slot →`
                  : "Select a slot above"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   PLACE CARD
════════════════════════════════════════ */
function PlaceGridCard({ place, onOpen }) {
  const col = TYPE_COLORS[place.type] || "#555";
  return (
    <div className="ka-city-card" onClick={() => onOpen(place)}>
      <div className="ka-city-card-img-wrap">
        <img src={place.img} alt={place.name} loading="lazy" />
      </div>
      <div className="ka-city-card-body">
        <div className="ka-place-type" style={{ background: `${col}22`, color: col }}>{place.type}</div>
        <div className="ka-city-name">{place.name}</div>
        <div className="ka-city-sub">{place.desc.slice(0, 70)}…</div>
        <div className="ka-place-meta" style={{ marginTop: 10 }}>
          <span className="ka-rating">★ {place.rating}</span>
          <span className="ka-dist">📍 {place.distance}</span>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   CITY DETAIL
════════════════════════════════════════ */
function CityDetail({ city, onBack, onPlaceOpen }) {
  return (
    <div>
      <div className="ka-detail-hero">
        <img src={city.hero} alt={city.name} loading="lazy" />
        <button className="ka-back-btn" onClick={onBack}>← Back</button>
        <div className="ka-detail-overlay">
          <div>
            <div className="ka-slide-tag">{city.emoji} {city.places.length} Places</div>
            <div className="ka-detail-title">{city.name}</div>
            <div className="ka-detail-sub">{city.tagline}</div>
          </div>
        </div>
      </div>
      <div className="ka-detail-body">
        <div className="ka-section-title" style={{ marginBottom: 18 }}>Top Places to Visit</div>
        <div className="ka-places-list">
          {city.places.map((place) => <PlaceGridCard key={place.id} place={place} onOpen={onPlaceOpen} />)}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   FILTER VIEW
════════════════════════════════════════ */
function FilterView({ type, onBack, onPlaceOpen }) {
  const places = ALL_PLACES.filter((p) => p.type === type);
  const col = TYPE_COLORS[type] || "#555";
  const icons = { Trek: "⛰️", Wildlife: "🦁", Heritage: "🏛️", Waterfalls: "💧" };
  return (
    <div>
      <div className="ka-filter-header">
        <button className="ka-filter-back" onClick={onBack}>← Back</button>
        <div className="ka-filter-hero-banner" style={{ background: `${col}18`, border: `1px solid ${col}33`, borderRadius: 16, padding: "18px 22px", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 36 }}>{icons[type]}</span>
            <div>
              <div className="ka-filter-title">{type} Spots in Karnataka</div>
              <div className="ka-filter-count" style={{ color: col, fontWeight: 600 }}>{places.length} places found across the state</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ka-detail-body">
        <div className="ka-places-list" style={{ marginTop: 0 }}>
          {places.map((place) => <PlaceGridCard key={place.id} place={place} onOpen={onPlaceOpen} />)}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   HOME VIEW  — FIX: cities grid is now OUTSIDE ka-section-header
════════════════════════════════════════ */
function HomeView({ onCitySelect, onPlaceOpen, onFilterSelect, onSeeAllCities, onSeeAllPackages, onSeeAllTopPicks }) {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setSlide((s) => (s + 1) % CITIES.length), 4500);
    return () => clearInterval(timerRef.current);
  }, []);

  const goSlide = (n) => setSlide((n + CITIES.length) % CITIES.length);
  const handleArrow = (dir) => { clearInterval(timerRef.current); goSlide(slide + dir); };

  const topPicks = [...ALL_PLACES].sort((a, b) => b.rating - a.rating).slice(0, 10);

  return (
    <div>
      {/* HERO SLIDER */}
      <div className="ka-slider-wrap">
        <div className="ka-slides" style={{ transform: `translateX(-${slide * 100}%)` }}>
          {CITIES.map((city) => (
            <div key={city.id} className="ka-slide">
              <img className="ka-slide-img" src={city.hero} alt={city.name} loading="lazy" />
              <div className="ka-slide-overlay" onClick={() => onCitySelect(city)}>
                <div>
                  <div className="ka-slide-tag">{city.emoji} Explore</div>
                  <div className="ka-slide-title">{city.name}</div>
                  <div className="ka-slide-sub">{city.tagline}</div>
                  <div className="ka-slide-cta">Discover Places →</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ka-slider-controls">
          <button className="ka-arrow" onClick={() => handleArrow(-1)}>‹</button>
          <button className="ka-arrow" onClick={() => handleArrow(1)}>›</button>
        </div>
      </div>
      <div className="ka-dots">
        {CITIES.map((_, i) => (
          <button key={i} className={`ka-dot${i === slide ? " active" : ""}`} onClick={() => goSlide(i)} />
        ))}
      </div>

      {/* CATEGORY QUICK LINKS */}
      <div className="ka-section">
        <div className="ka-section-header">
          <div>
            <div className="ka-section-title">Browse by <span>Category</span></div>
            <div className="ka-section-sub">Explore all spots across Karnataka by type</div>
          </div>
        </div>
        <div className="ka-cat-grid">
          {CATEGORY_ITEMS.map((cat) => {
            const col = TYPE_COLORS[cat.type] || "#555";
            const count = ALL_PLACES.filter(p => p.type === cat.type).length;
            return (
              <div key={cat.type} className="ka-cat-card" style={{ borderColor: `${col}44` }} onClick={() => onFilterSelect(cat.type)}>
                <span style={{ fontSize: 32 }}>{cat.icon}</span>
                <div className="ka-cat-name">{cat.type}s</div>
                <div className="ka-cat-count" style={{ color: col }}>{count} spots</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── EXPLORE CITIES ── FIX: header and grid are siblings, not nested */}
      <div className="ka-section" style={{ paddingTop: 0 }}>
        <div className="ka-section-header">
          <div>
            <div className="ka-section-title">Explore <span>Cities</span></div>
            <div className="ka-section-sub">{CITIES.length} destinations across Karnataka</div>
          </div>
          <button className="ka-see-all" onClick={onSeeAllCities}>See all →</button>
        </div>
        {/* City cards grid — correctly placed OUTSIDE the header flex container */}
        <div className="ka-cities-grid">
          {CITIES.map((city) => (
            <div key={city.id} className="ka-city-card" onClick={() => onCitySelect(city)}>
              <div className="ka-city-card-img-wrap">
                <img src={city.hero} alt={city.name} loading="lazy" />
              </div>
              <div className="ka-city-card-body">
                <div className="ka-city-name">{city.emoji} {city.name}</div>
                <div className="ka-city-sub">{city.tagline}</div>
                <div className="ka-city-badge" style={{ background: `${city.color}22`, color: city.color }}>
                  {city.places.length} spots
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRENDING */}
      <div className="ka-section" style={{ paddingTop: 0 }}>
        <div className="ka-section-header">
          <div>
            <div className="ka-section-title">🔥 <span>Trending</span> This Week</div>
            <div className="ka-section-sub">Most viewed destinations right now</div>
          </div>
        </div>
        <div className="ka-trending-grid">
          {TRENDING.map((item) => (
            <div key={item.id} className="ka-trending-card">
              <img src={item.img} alt={item.name} loading="lazy" />
              <div className="ka-trending-overlay">
                <div className="ka-trending-rank">#{item.rank}</div>
                <div className="ka-trending-badge">🔥 Trending</div>
                <div className="ka-trending-name">{item.name}</div>
                <div className="ka-trending-meta">{item.type} · {item.views}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TOP PICKS */}
      <div className="ka-section" style={{ paddingTop: 0 }}>
        <div className="ka-section-header">
          <div>
            <div className="ka-section-title">⭐ Top <span>Picks</span></div>
            <div className="ka-section-sub">Highest rated across all cities & categories</div>
          </div>
          <button className="ka-see-all" onClick={onSeeAllTopPicks}>View all →</button>
        </div>
        <div className="ka-hscroll">
          {topPicks.map((place) => {
            const col = TYPE_COLORS[place.type] || "#555";
            return (
              <div key={place.id} className="ka-place-card" onClick={() => onPlaceOpen(place)}>
                <img src={place.img} alt={place.name} loading="lazy" />
                <div className="ka-place-card-body">
                  <div className="ka-place-type" style={{ background: `${col}22`, color: col }}>{place.type}</div>
                  <div className="ka-place-name">{place.name}</div>
                  <div className="ka-place-desc">{place.desc.slice(0, 65)}…</div>
                  <div className="ka-place-meta">
                    <span className="ka-rating">★ {place.rating}</span>
                    <span className="ka-dist">📍 {place.distance}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PACKAGES */}
      <div className="ka-section" style={{ paddingTop: 0 }}>
        <div className="ka-section-header">
          <div>
            <div className="ka-section-title">🎒 Travel <span>Packages</span></div>
            <div className="ka-section-sub">Curated multi-day experiences</div>
          </div>
          <button className="ka-see-all" onClick={onSeeAllPackages}>All packages →</button>
        </div>
        <div className="ka-packages-scroll">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className={`ka-package-card${pkg.featured ? " featured" : ""}`}>
              <div className="ka-package-img">
                <img src={pkg.img} alt={pkg.name} loading="lazy" />
                {pkg.popular && <div className="ka-package-popular">⭐ Popular</div>}
              </div>
              <div className="ka-package-body">
                <div className="ka-package-name">{pkg.name}</div>
                <div className="ka-package-desc">{pkg.desc}</div>
                <div className="ka-package-tags">
                  {pkg.tags.map((t) => <div key={t} className="ka-package-tag">{t}</div>)}
                </div>
                <div className="ka-package-footer">
                  <div className="ka-package-price">
                    <strong>{pkg.price}</strong>
                    <br /><span>{pkg.per}</span>
                  </div>
                  <button className="ka-package-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="ka-copyright-section">
        <div className="ka-copyright-grid">
          <div className="ka-copyright-brand">
            <div className="ka-logo-text" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 900, marginBottom: 10 }}>
              🧭 <span style={{ color: "var(--accent)" }}>Adventures</span> KA
            </div>
            <p>Your trusted guide to Karnataka's landscapes, heritage, wildlife & hidden gems. Crafted with love for every wanderer.</p>
          </div>
          <div className="ka-copyright-col">
            <h4>Explore</h4>
            <ul>
              {CITIES.map((c) => <li key={c.id}><a href="#">{c.name}</a></li>)}
            </ul>
          </div>
          <div className="ka-copyright-col">
            <h4>Activities</h4>
            <ul>
              {["Trekking", "Wildlife Safari", "Heritage Tours", "Waterfall Trails", "Beach Getaways"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="ka-copyright-col">
            <h4>Company</h4>
            <ul>
              {["About Us", "Blog", "Careers", "Privacy Policy", "Terms of Service"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ka-copyright-bottom">
          <div className="ka-copyright-text">
            © {new Date().getFullYear()} Adventures Karnataka. All rights reserved. Made with ❤️ in India.
          </div>
          <div className="ka-copyright-badges">
            <div className="ka-copyright-badge">Karnataka Tourism</div>
            <div className="ka-copyright-badge">Govt. Certified</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   SEARCH VIEW
════════════════════════════════════════ */
function SearchView({ onBack, onPlaceOpen, onCitySelect }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const q = query.trim().toLowerCase();
  const matchedPlaces = q.length > 0
    ? ALL_PLACES.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        (p.difficulty && p.difficulty.toLowerCase().includes(q))
      )
    : [];
  const matchedCities = q.length > 0
    ? CITIES.filter(c => c.name.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q))
    : [];
  const hasResults = matchedPlaces.length > 0 || matchedCities.length > 0;

  return (
    <div className="ka-search-view">
      <div className="ka-search-bar-wrap">
        <button className="ka-search-back-btn" onClick={onBack}>←</button>
        <div className="ka-search-input-wrap">
          <span className="ka-search-icon-inner">🔍</span>
          <input
            ref={inputRef}
            className="ka-search-input"
            type="text"
            placeholder="Search places, cities, treks…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && <button className="ka-search-clear" onClick={() => setQuery("")}>✕</button>}
        </div>
      </div>

      {q.length === 0 && (
        <div className="ka-search-empty">
          <div className="ka-search-empty-icon">🗺️</div>
          <div className="ka-search-empty-title">Discover Karnataka</div>
          <div className="ka-search-empty-sub">Search treks, wildlife, heritage, waterfalls or cities</div>
          <div className="ka-search-suggestions">
            {["Nandi Hills","Hampi","Jog Falls","Tiger Reserve","Coorg","Heritage","Trek","Wildlife"].map(s => (
              <button key={s} className="ka-search-chip" onClick={() => setQuery(s)}>{s}</button>
            ))}
          </div>
        </div>
      )}

      {q.length > 0 && !hasResults && (
        <div className="ka-search-empty">
          <div className="ka-search-empty-icon">😕</div>
          <div className="ka-search-empty-title">No results for "{query}"</div>
          <div className="ka-search-empty-sub">Try a city name, place type, or activity</div>
        </div>
      )}

      {hasResults && (
        <div className="ka-search-results">
          {matchedCities.length > 0 && (
            <>
              <div className="ka-search-section-label">Cities ({matchedCities.length})</div>
              <div className="ka-cities-grid" style={{ marginBottom: 24 }}>
                {matchedCities.map(city => (
                  <div key={city.id} className="ka-city-card" onClick={() => onCitySelect(city)}>
                    <div className="ka-city-card-img-wrap"><img src={city.hero} alt={city.name} loading="lazy" /></div>
                    <div className="ka-city-card-body">
                      <div className="ka-city-name">{city.emoji} {city.name}</div>
                      <div className="ka-city-sub">{city.tagline}</div>
                      <div className="ka-city-badge" style={{ background: `${city.color}22`, color: city.color }}>{city.places.length} spots</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {matchedPlaces.length > 0 && (
            <>
              <div className="ka-search-section-label">Places ({matchedPlaces.length})</div>
              <div className="ka-places-list" style={{ marginTop: 0 }}>
                {matchedPlaces.map(place => <PlaceGridCard key={place.id} place={place} onOpen={onPlaceOpen} />)}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════
   ALL CITIES VIEW
════════════════════════════════════════ */
function AllCitiesView({ onBack, onCitySelect }) {
  return (
    <div>
      <div className="ka-filter-header">
        <button className="ka-filter-back" onClick={onBack}>← Back</button>
        <div className="ka-filter-title">All Destinations</div>
        <div className="ka-filter-count" style={{ marginBottom: 20 }}>{CITIES.length} cities across Karnataka</div>
      </div>
      <div className="ka-detail-body">
        <div className="ka-cities-grid">
          {CITIES.map(city => (
            <div key={city.id} className="ka-city-card" onClick={() => onCitySelect(city)}>
              <div className="ka-city-card-img-wrap"><img src={city.hero} alt={city.name} loading="lazy" /></div>
              <div className="ka-city-card-body">
                <div className="ka-city-name">{city.emoji} {city.name}</div>
                <div className="ka-city-sub">{city.tagline}</div>
                <div className="ka-city-badge" style={{ background: `${city.color}22`, color: city.color }}>{city.places.length} spots</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   ALL PACKAGES VIEW
════════════════════════════════════════ */
function AllPackagesView({ onBack }) {
  return (
    <div>
      <div className="ka-filter-header">
        <button className="ka-filter-back" onClick={onBack}>← Back</button>
        <div className="ka-filter-title">🎒 Travel Packages</div>
        <div className="ka-filter-count" style={{ marginBottom: 20 }}>{PACKAGES.length} curated experiences</div>
      </div>
      <div className="ka-detail-body">
        <div className="ka-packages-full-grid">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className={`ka-package-card${pkg.featured ? " featured" : ""}`} style={{ minWidth: 0 }}>
              <div className="ka-package-img">
                <img src={pkg.img} alt={pkg.name} loading="lazy" />
                {pkg.popular && <div className="ka-package-popular">⭐ Popular</div>}
              </div>
              <div className="ka-package-body">
                <div className="ka-package-name">{pkg.name}</div>
                <div className="ka-package-desc">{pkg.desc}</div>
                <div className="ka-package-tags">{pkg.tags.map((t) => <div key={t} className="ka-package-tag">{t}</div>)}</div>
                <div className="ka-package-footer">
                  <div className="ka-package-price"><strong>{pkg.price}</strong><br /><span>{pkg.per}</span></div>
                  <button className="ka-package-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   ALL TOP PICKS VIEW
════════════════════════════════════════ */
function AllTopPicksView({ onBack, onPlaceOpen }) {
  const sorted = [...ALL_PLACES].sort((a, b) => b.rating - a.rating);
  return (
    <div>
      <div className="ka-filter-header">
        <button className="ka-filter-back" onClick={onBack}>← Back</button>
        <div className="ka-filter-title">⭐ Top Picks</div>
        <div className="ka-filter-count" style={{ marginBottom: 20 }}>{sorted.length} places ranked by rating</div>
      </div>
      <div className="ka-detail-body">
        <div className="ka-places-list" style={{ marginTop: 0 }}>
          {sorted.map(place => <PlaceGridCard key={place.id} place={place} onOpen={onPlaceOpen} />)}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   ROOT APP — FIX: back button now uses a navigation stack
════════════════════════════════════════ */
export default function Adventure() {
  // ── Navigation stack: each entry is { view, city?, type? } ──
  const [navStack, setNavStack] = useState([{ view: "home" }]);
  const [activeNav, setActiveNav] = useState("home");
  const [modalPlace, setModalPlace] = useState(null);
  const mainRef = useRef(null);

  const currentRoute = navStack[navStack.length - 1];
  const { view, city: selectedCity, type: filterType } = currentRoute;

  const scrollTop = () => mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });

  // Push a new route onto the stack
  const push = (route) => {
    setNavStack((prev) => [...prev, route]);
    scrollTop();
  };

  // Pop back — fixed: always goes to previous stack entry
  const goBack = () => {
    setNavStack((prev) => {
      if (prev.length <= 1) return prev;
      const next = prev.slice(0, -1);
      const top = next[next.length - 1];
      setActiveNav(top.view === "home" ? "home" : top.city?.id ?? "home");
      return next;
    });
    scrollTop();
  };

  const goHome = () => {
    setNavStack([{ view: "home" }]);
    setActiveNav("home");
    scrollTop();
  };

  const goCity = (city) => {
    push({ view: "city", city });
    setActiveNav(city.id);
  };

  const goFilter = (type) => push({ view: "filter", type });
  const goSearch = () => push({ view: "search" });
  const goAllCities = () => push({ view: "allcities" });
  const goAllPackages = () => push({ view: "allpackages" });
  const goAllTopPicks = () => push({ view: "alltoppicks" });
  const openPlace = (place) => setModalPlace(place);
  const closePlace = () => setModalPlace(null);

  const showBack = navStack.length > 1;

  return (
    <div className="ka-app">
      {/* SIDEBAR */}
      <aside className="ka-sidebar">
        <div className="ka-logo">
          <div className="ka-logo-text">🧭 <span>Adventures</span> KA</div>
          <div className="ka-logo-sub">Karnataka Tourism</div>
        </div>
        <div className="ka-sidebar-search" onClick={goSearch}>
          <span className="ka-sidebar-search-icon">🔍</span>
          <span className="ka-sidebar-search-placeholder">Search places…</span>
          <span className="ka-sidebar-search-kbd">⌘K</span>
        </div>
        <div className="ka-nav-section">Destinations</div>
        <div className={`ka-nav-item${activeNav === "home" ? " active" : ""}`} onClick={goHome}>
          <span className="ka-nav-icon">🏠</span> Home
        </div>
        {CITIES.map((city) => (
          <div key={city.id} className={`ka-nav-item${activeNav === city.id ? " active" : ""}`} onClick={() => goCity(city)}>
            <span className="ka-nav-icon">{city.emoji}</span> {city.name}
          </div>
        ))}
        <div className="ka-nav-section">Categories</div>
        {CATEGORY_ITEMS.map((cat) => {
          const count = ALL_PLACES.filter(p => p.type === cat.type).length;
          return (
            <div key={cat.type} className="ka-nav-item" onClick={() => goFilter(cat.type)}>
              <span className="ka-nav-icon">{cat.icon}</span> {cat.type}s
              <span style={{ marginLeft: "auto", fontSize: 10, background: "var(--border)", padding: "1px 7px", borderRadius: 20, color: "var(--text-secondary)" }}>{count}</span>
            </div>
          );
        })}
        <div className="ka-nav-section">Offers</div>
        <div className="ka-nav-item" onClick={goAllPackages}><span className="ka-nav-icon">🎒</span> Packages</div>
        <div className="ka-nav-item" onClick={() => goFilter("Trek")}><span className="ka-nav-icon">🔥</span> Trending</div>
        <div className="ka-sidebar-footer">
          <strong>Adventures Karnataka</strong><br />
          © {new Date().getFullYear()} All rights reserved
        </div>
      </aside>

      {/* MAIN */}
      <main className="ka-main" ref={mainRef}>
        <div className="ka-topbar">
          <div className="ka-topbar-left">
            {showBack
              ? <button className="ka-topbar-back-btn" onClick={goBack}>← Back</button>
              : <div className="ka-topbar-logo">🧭 <span>Adventures</span> KA</div>
            }
          </div>
          <button className="ka-topbar-search-btn" onClick={goSearch}>
            <span>🔍</span> Search
          </button>
        </div>

        {view === "home"        && <HomeView onCitySelect={goCity} onPlaceOpen={openPlace} onFilterSelect={goFilter} onSeeAllCities={goAllCities} onSeeAllPackages={goAllPackages} onSeeAllTopPicks={goAllTopPicks} />}
        {view === "city"        && selectedCity && <CityDetail city={selectedCity} onBack={goBack} onPlaceOpen={openPlace} />}
        {view === "filter"      && filterType   && <FilterView type={filterType} onBack={goBack} onPlaceOpen={openPlace} />}
        {view === "search"      && <SearchView onBack={goBack} onPlaceOpen={openPlace} onCitySelect={goCity} />}
        {view === "allcities"   && <AllCitiesView onBack={goBack} onCitySelect={goCity} />}
        {view === "allpackages" && <AllPackagesView onBack={goBack} />}
        {view === "alltoppicks" && <AllTopPicksView onBack={goBack} onPlaceOpen={openPlace} />}
      </main>

      {/* BOTTOM NAV */}
      <nav className="ka-bottom-nav">
        <div className="ka-bnav-items">
          <div className={`ka-bnav-item${view === "home" ? " active" : ""}`} onClick={goHome}>
            <div className="ka-bnav-icon">🏠</div>Home
          </div>
          <div className={`ka-bnav-item${view === "search" ? " active" : ""}`} onClick={goSearch}>
            <div className="ka-bnav-icon">🔍</div>Search
          </div>
          <div className="ka-bnav-item" onClick={() => goFilter("Trek")}>
            <div className="ka-bnav-icon">⛰️</div>Treks
          </div>
          <div className="ka-bnav-item" onClick={() => goFilter("Wildlife")}>
            <div className="ka-bnav-icon">🦁</div>Wild
          </div>
          <div className="ka-bnav-item" onClick={() => goFilter("Heritage")}>
            <div className="ka-bnav-icon">🏛️</div>Heritage
          </div>
        </div>
      </nav>

      {modalPlace && <PlaceModal place={modalPlace} onClose={closePlace} />}
    </div>
  );
}