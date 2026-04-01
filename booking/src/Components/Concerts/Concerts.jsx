import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Concerts.css";

const musicShows = [
  // ── BOLLYWOOD ──
  { id: 101, title: "Arijit Singh Live", venue: "Palace Grounds, Bengaluru", category: "Bollywood", date: "Sat, 12 Apr", price: "₹999 onwards", image: "https://picsum.photos/seed/arijit/400/560", promoted: true },
  { id: 102, title: "Shreya Ghoshal Live", venue: "Kanteerava Stadium, Bengaluru", category: "Bollywood", date: "Fri, 2 May", price: "₹1299 onwards", image: "https://picsum.photos/seed/shreya2/400/560" },
  { id: 103, title: "Jubin Nautiyal Live", venue: "Nehru Stadium, Bengaluru", category: "Bollywood", date: "Sat, 10 May", price: "₹799 onwards", image: "https://picsum.photos/seed/jubin/400/560" },
  { id: 104, title: "Neha Kakkar Concert", venue: "BBMP Grounds, Bengaluru", category: "Bollywood", date: "Sun, 18 May", price: "₹599 onwards", image: "https://picsum.photos/seed/neha/400/560", promoted: true },
  { id: 105, title: "Sonu Nigam Live", venue: "Palace Grounds, Bengaluru", category: "Bollywood", date: "Fri, 23 May", price: "₹1199 onwards", image: "https://picsum.photos/seed/sonu/400/560" },
  { id: 106, title: "Sunidhi Chauhan Live", venue: "Chinnaswamy Stadium", category: "Bollywood", date: "Sat, 31 May", price: "₹899 onwards", image: "https://picsum.photos/seed/sunidhi/400/560" },
  { id: 107, title: "Armaan Malik Unplugged", venue: "Humming Tree, Indiranagar", category: "Bollywood", date: "Sun, 8 Jun", price: "₹699 onwards", image: "https://picsum.photos/seed/armaan/400/560" },
  { id: 108, title: "Atif Aslam Live", venue: "NICE Grounds, Bengaluru", category: "Bollywood", date: "Fri, 13 Jun", price: "₹1499 onwards", image: "https://picsum.photos/seed/atifas/400/560", promoted: true },
  { id: 109, title: "Udit Narayan Tribute Night", venue: "Chowdiah Hall", category: "Bollywood", date: "Sat, 21 Jun", price: "₹499 onwards", image: "https://picsum.photos/seed/udit/400/560" },
  { id: 110, title: "Kumar Sanu Hits Night", venue: "Town Hall, Bengaluru", category: "Bollywood", date: "Sun, 29 Jun", price: "₹399 onwards", image: "https://picsum.photos/seed/kumar/400/560" },
  { id: 111, title: "Bollywood Retro Bash", venue: "Sheraton Grand, Bengaluru", category: "Bollywood", date: "Sat, 5 Jul", price: "₹1099 onwards", image: "https://picsum.photos/seed/retro1/400/560" },
  { id: 112, title: "90s Bollywood Night", venue: "Hard Rock Cafe, Bengaluru", category: "Bollywood", date: "Fri, 11 Jul", price: "₹799 onwards", image: "https://picsum.photos/seed/90sb/400/560" },
  { id: 113, title: "Lata Tribute Evening", venue: "Ravindra Kalakshetra", category: "Bollywood", date: "Sat, 19 Jul", price: "₹599 onwards", image: "https://picsum.photos/seed/lata/400/560" },
  { id: 114, title: "Kishore Kumar Night", venue: "Chowdiah Memorial Hall", category: "Bollywood", date: "Sun, 27 Jul", price: "₹449 onwards", image: "https://picsum.photos/seed/kishore/400/560" },
  { id: 115, title: "Mika Singh Tadka Live", venue: "KSCA Grounds", category: "Bollywood", date: "Sat, 2 Aug", price: "₹699 onwards", image: "https://picsum.photos/seed/mika/400/560" },
  { id: 116, title: "Kailash Kher Live", venue: "Palace Grounds", category: "Bollywood", date: "Fri, 8 Aug", price: "₹899 onwards", image: "https://picsum.photos/seed/kailash/400/560" },
  { id: 117, title: "Bollywood Dance Party", venue: "Club Cabana, Bengaluru", category: "Bollywood", date: "Sat, 16 Aug", price: "₹349 onwards", image: "https://picsum.photos/seed/bdance/400/560" },
  { id: 118, title: "Himesh Reshammiya Live", venue: "NICE Grounds", category: "Bollywood", date: "Sun, 24 Aug", price: "₹799 onwards", image: "https://picsum.photos/seed/himesh/400/560", promoted: true },
  { id: 119, title: "Badshah Bollywood Night", venue: "Rave The Club", category: "Bollywood", date: "Fri, 29 Aug", price: "₹1199 onwards", image: "https://picsum.photos/seed/badshah/400/560" },
  { id: 120, title: "Shankar Mahadevan Live", venue: "Ravindra Kalakshetra", category: "Bollywood", date: "Sat, 6 Sep", price: "₹999 onwards", image: "https://picsum.photos/seed/shankar/400/560" },
  { id: 121, title: "A R Rahman Night", venue: "Kanteerava Stadium", category: "Bollywood", date: "Sat, 20 Sep", price: "₹1999 onwards", image: "https://picsum.photos/seed/arrahman/400/560", promoted: true },

  // ── INDIE / ROCK ──
  { id: 201, title: "The Local Train", venue: "Koramangala Indoor Stadium", category: "Indie / Rock", date: "Sun, 13 Apr", price: "₹599 onwards", image: "https://picsum.photos/seed/localtr/400/560" },
  { id: 202, title: "Prateek Kuhad Unplugged", venue: "Humming Tree, Indiranagar", category: "Indie / Rock", date: "Sat, 26 Apr", price: "₹799 onwards", image: "https://picsum.photos/seed/prateek/400/560" },
  { id: 203, title: "When Chai Met Toast", venue: "Phoenix Marketcity", category: "Indie / Rock", date: "Fri, 2 May", price: "₹499 onwards", image: "https://picsum.photos/seed/chai/400/560" },
  { id: 204, title: "Parvaaz Live", venue: "Fandom, Bengaluru", category: "Indie / Rock", date: "Sat, 10 May", price: "₹399 onwards", image: "https://picsum.photos/seed/parvaaz/400/560", promoted: true },
  { id: 205, title: "Bhayanak Maut", venue: "BFlat Bar, Bengaluru", category: "Indie / Rock", date: "Fri, 16 May", price: "₹299 onwards", image: "https://picsum.photos/seed/bhayanak/400/560" },
  { id: 206, title: "Lagori Live", venue: "The Bflat, Indiranagar", category: "Indie / Rock", date: "Sun, 25 May", price: "₹349 onwards", image: "https://picsum.photos/seed/lagori/400/560" },
  { id: 207, title: "Motherjane", venue: "Hard Rock Cafe", category: "Indie / Rock", date: "Fri, 30 May", price: "₹599 onwards", image: "https://picsum.photos/seed/motherjane/400/560" },
  { id: 208, title: "Indus Creed Live", venue: "Palace Grounds", category: "Indie / Rock", date: "Sat, 7 Jun", price: "₹799 onwards", image: "https://picsum.photos/seed/indus/400/560" },
  { id: 209, title: "Parikrama Live", venue: "NICE Grounds", category: "Indie / Rock", date: "Sun, 15 Jun", price: "₹699 onwards", image: "https://picsum.photos/seed/parikrama/400/560", promoted: true },
  { id: 210, title: "Thermal and a Quarter", venue: "Fandom, Bengaluru", category: "Indie / Rock", date: "Sat, 21 Jun", price: "₹299 onwards", image: "https://picsum.photos/seed/thermal/400/560" },
  { id: 211, title: "Avial Live", venue: "Koramangala Indoor Stadium", category: "Indie / Rock", date: "Fri, 27 Jun", price: "₹499 onwards", image: "https://picsum.photos/seed/avial/400/560" },
  { id: 212, title: "Zero Live", venue: "Phoenix Marketcity", category: "Indie / Rock", date: "Sun, 6 Jul", price: "₹399 onwards", image: "https://picsum.photos/seed/zero1/400/560" },
  { id: 213, title: "Agnee Live", venue: "Humming Tree", category: "Indie / Rock", date: "Sat, 12 Jul", price: "₹549 onwards", image: "https://picsum.photos/seed/agnee/400/560" },
  { id: 214, title: "Peter Cat Recording Co.", venue: "BFlat Bar", category: "Indie / Rock", date: "Fri, 18 Jul", price: "₹449 onwards", image: "https://picsum.photos/seed/peter/400/560" },
  { id: 215, title: "Skyharbor Live", venue: "Hard Rock Cafe", category: "Indie / Rock", date: "Sun, 27 Jul", price: "₹599 onwards", image: "https://picsum.photos/seed/sky/400/560", promoted: true },
  { id: 216, title: "Bloodywood Live", venue: "NICE Grounds", category: "Indie / Rock", date: "Sat, 2 Aug", price: "₹899 onwards", image: "https://picsum.photos/seed/bloodywood/400/560" },
  { id: 217, title: "Switch Live", venue: "Fandom, Bengaluru", category: "Indie / Rock", date: "Fri, 8 Aug", price: "₹299 onwards", image: "https://picsum.photos/seed/switch1/400/560" },
  { id: 218, title: "Advaita Live", venue: "Humming Tree", category: "Indie / Rock", date: "Sat, 16 Aug", price: "₹399 onwards", image: "https://picsum.photos/seed/advaita/400/560" },
  { id: 219, title: "Dualist Inquiry Live", venue: "BFlat Bar", category: "Indie / Rock", date: "Sun, 24 Aug", price: "₹499 onwards", image: "https://picsum.photos/seed/dualist/400/560" },
  { id: 220, title: "The F16s", venue: "Phoenix Marketcity", category: "Indie / Rock", date: "Fri, 29 Aug", price: "₹349 onwards", image: "https://picsum.photos/seed/f16s/400/560" },
  { id: 221, title: "Swarathma Live", venue: "Koramangala Indoor Stadium", category: "Indie / Rock", date: "Sat, 6 Sep", price: "₹449 onwards", image: "https://picsum.photos/seed/swarathma/400/560" },

  // ── EDM / ELECTRONIC ──
  { id: 301, title: "Sunburn Arena", venue: "NICE Grounds, Bengaluru", category: "EDM / Electronic", date: "Fri, 18 Apr", price: "₹1499 onwards", image: "https://picsum.photos/seed/sunburn/400/560" },
  { id: 302, title: "Nucleya Bass Camp", venue: "NICE Grounds, Bengaluru", category: "EDM / Electronic", date: "Sun, 27 Apr", price: "₹1199 onwards", image: "https://picsum.photos/seed/nucleya/400/560" },
  { id: 303, title: "Vh1 Supersonic", venue: "Palace Grounds", category: "EDM / Electronic", date: "Sat, 3 May", price: "₹1999 onwards", image: "https://picsum.photos/seed/vh1/400/560", promoted: true },
  { id: 304, title: "Lost Stories Live", venue: "Fandom, Bengaluru", category: "EDM / Electronic", date: "Fri, 9 May", price: "₹799 onwards", image: "https://picsum.photos/seed/lost/400/560" },
  { id: 305, title: "Armin van Buuren", venue: "Kanteerava Stadium", category: "EDM / Electronic", date: "Sat, 17 May", price: "₹2999 onwards", image: "https://picsum.photos/seed/armin/400/560", promoted: true },
  { id: 306, title: "Martin Garrix Live", venue: "NICE Grounds", category: "EDM / Electronic", date: "Fri, 23 May", price: "₹2499 onwards", image: "https://picsum.photos/seed/garrix/400/560" },
  { id: 307, title: "Hardwell On Air", venue: "Palace Grounds", category: "EDM / Electronic", date: "Sat, 31 May", price: "₹1999 onwards", image: "https://picsum.photos/seed/hardwell/400/560" },
  { id: 308, title: "Alan Walker Live", venue: "KSCA Grounds", category: "EDM / Electronic", date: "Sun, 8 Jun", price: "₹1799 onwards", image: "https://picsum.photos/seed/walker/400/560", promoted: true },
  { id: 309, title: "Marshmello Live", venue: "NICE Grounds", category: "EDM / Electronic", date: "Fri, 13 Jun", price: "₹2199 onwards", image: "https://picsum.photos/seed/marsh/400/560" },
  { id: 310, title: "DJ Snake India Tour", venue: "Palace Grounds", category: "EDM / Electronic", date: "Sat, 21 Jun", price: "₹1599 onwards", image: "https://picsum.photos/seed/snake/400/560" },
  { id: 311, title: "Afrojack Live", venue: "Kanteerava Stadium", category: "EDM / Electronic", date: "Sun, 29 Jun", price: "₹1899 onwards", image: "https://picsum.photos/seed/afrojack/400/560" },
  { id: 312, title: "Kshmr India Tour", venue: "NICE Grounds", category: "EDM / Electronic", date: "Sat, 5 Jul", price: "₹999 onwards", image: "https://picsum.photos/seed/kshmr/400/560" },
  { id: 313, title: "Nora En Pure", venue: "Fandom, Bengaluru", category: "EDM / Electronic", date: "Fri, 11 Jul", price: "₹1299 onwards", image: "https://picsum.photos/seed/nora/400/560" },
  { id: 314, title: "Rezz Live", venue: "BFlat Bar", category: "EDM / Electronic", date: "Sat, 19 Jul", price: "₹899 onwards", image: "https://picsum.photos/seed/rezz/400/560" },
  { id: 315, title: "Alok India Tour", venue: "Palace Grounds", category: "EDM / Electronic", date: "Sun, 27 Jul", price: "₹1499 onwards", image: "https://picsum.photos/seed/alok/400/560", promoted: true },
  { id: 316, title: "Tiësto Club Life", venue: "NICE Grounds", category: "EDM / Electronic", date: "Sat, 2 Aug", price: "₹2999 onwards", image: "https://picsum.photos/seed/tiesto/400/560" },
  { id: 317, title: "Dimitri Vegas Live", venue: "Kanteerava Stadium", category: "EDM / Electronic", date: "Fri, 8 Aug", price: "₹2499 onwards", image: "https://picsum.photos/seed/dmitri/400/560" },
  { id: 318, title: "Techno Rave Bengaluru", venue: "Rave The Club", category: "EDM / Electronic", date: "Sat, 16 Aug", price: "₹699 onwards", image: "https://picsum.photos/seed/rave1/400/560" },
  { id: 319, title: "Bass Collective BLR", venue: "KSCA Grounds", category: "EDM / Electronic", date: "Sun, 24 Aug", price: "₹799 onwards", image: "https://picsum.photos/seed/bass1/400/560" },
  { id: 320, title: "Zedd India Tour", venue: "Palace Grounds", category: "EDM / Electronic", date: "Fri, 29 Aug", price: "₹2199 onwards", image: "https://picsum.photos/seed/zedd/400/560", promoted: true },
  { id: 321, title: "Electronic India Fest", venue: "NICE Grounds", category: "EDM / Electronic", date: "Sat, 6 Sep", price: "₹1099 onwards", image: "https://picsum.photos/seed/eif/400/560" },

  // ── JAZZ & BLUES ──
  { id: 401, title: "Jazz at Blue Frog", venue: "Blue Frog, Indiranagar", category: "Jazz & Blues", date: "Thu, 10 Apr", price: "₹349 onwards", image: "https://picsum.photos/seed/jazz99/400/560" },
  { id: 402, title: "Bengaluru Jazz Festival", venue: "Chowdiah Memorial Hall", category: "Jazz & Blues", date: "Sat, 19 Apr", price: "₹599 onwards", image: "https://picsum.photos/seed/jazzfest/400/560", promoted: true },
  { id: 403, title: "Blues Night with Baiju", venue: "Humming Tree", category: "Jazz & Blues", date: "Fri, 25 Apr", price: "₹299 onwards", image: "https://picsum.photos/seed/blues1/400/560" },
  { id: 404, title: "Acoustic Jazz Trio", venue: "Windmill Craftworks", category: "Jazz & Blues", date: "Sun, 4 May", price: "₹249 onwards", image: "https://picsum.photos/seed/jazz3/400/560" },
  { id: 405, title: "Delhi Jazz Festival BLR", venue: "The Lalit Ashok", category: "Jazz & Blues", date: "Sat, 10 May", price: "₹799 onwards", image: "https://picsum.photos/seed/deljazz/400/560" },
  { id: 406, title: "Soulful Blues Evening", venue: "BFlat Bar, Indiranagar", category: "Jazz & Blues", date: "Thu, 15 May", price: "₹199 onwards", image: "https://picsum.photos/seed/soul1/400/560" },
  { id: 407, title: "Louis Banks Quartet", venue: "Chowdiah Hall", category: "Jazz & Blues", date: "Sat, 24 May", price: "₹449 onwards", image: "https://picsum.photos/seed/louis/400/560" },
  { id: 408, title: "Swing & Jazz Night", venue: "Sheraton Grand", category: "Jazz & Blues", date: "Fri, 30 May", price: "₹699 onwards", image: "https://picsum.photos/seed/swing/400/560" },
  { id: 409, title: "Blues Brothers Tribute", venue: "Hard Rock Cafe", category: "Jazz & Blues", date: "Sat, 7 Jun", price: "₹499 onwards", image: "https://picsum.photos/seed/bluesb/400/560", promoted: true },
  { id: 410, title: "Smooth Jazz Sunday", venue: "Windmill Craftworks", category: "Jazz & Blues", date: "Sun, 15 Jun", price: "₹199 onwards", image: "https://picsum.photos/seed/smooth/400/560" },
  { id: 411, title: "New Orleans Jazz Night", venue: "Blue Frog", category: "Jazz & Blues", date: "Fri, 20 Jun", price: "₹349 onwards", image: "https://picsum.photos/seed/neworl/400/560" },
  { id: 412, title: "Jazz & Wine Evening", venue: "The Lalit Ashok", category: "Jazz & Blues", date: "Sat, 28 Jun", price: "₹899 onwards", image: "https://picsum.photos/seed/jazzwine/400/560" },
  { id: 413, title: "Raghu Dixit Jazz", venue: "Humming Tree", category: "Jazz & Blues", date: "Fri, 4 Jul", price: "₹399 onwards", image: "https://picsum.photos/seed/raghu/400/560" },
  { id: 414, title: "East India Blues Night", venue: "BFlat Bar", category: "Jazz & Blues", date: "Sat, 12 Jul", price: "₹299 onwards", image: "https://picsum.photos/seed/eastblue/400/560" },
  { id: 415, title: "Jazz in the Park", venue: "Cubbon Park Amphitheatre", category: "Jazz & Blues", date: "Sun, 20 Jul", price: "₹149 onwards", image: "https://picsum.photos/seed/jazzpark/400/560" },
  { id: 416, title: "Latin Jazz Night", venue: "Windmill Craftworks", category: "Jazz & Blues", date: "Fri, 25 Jul", price: "₹299 onwards", image: "https://picsum.photos/seed/latin/400/560" },
  { id: 417, title: "Electric Blues Jam", venue: "Hard Rock Cafe", category: "Jazz & Blues", date: "Sat, 2 Aug", price: "₹399 onwards", image: "https://picsum.photos/seed/elecblue/400/560", promoted: true },
  { id: 418, title: "Sunday Jazz Brunch", venue: "The Lalit Ashok", category: "Jazz & Blues", date: "Sun, 10 Aug", price: "₹599 onwards", image: "https://picsum.photos/seed/brunch/400/560" },
  { id: 419, title: "Crossroads Blues Fest", venue: "Palace Grounds", category: "Jazz & Blues", date: "Sat, 16 Aug", price: "₹499 onwards", image: "https://picsum.photos/seed/cross/400/560" },
  { id: 420, title: "International Jazz Day", venue: "Chowdiah Hall", category: "Jazz & Blues", date: "Sun, 24 Aug", price: "₹349 onwards", image: "https://picsum.photos/seed/intjazz/400/560" },
  { id: 421, title: "Blues Legends Night", venue: "Blue Frog, Indiranagar", category: "Jazz & Blues", date: "Fri, 29 Aug", price: "₹449 onwards", image: "https://picsum.photos/seed/legend/400/560" },

  // ── CLASSICAL ──
  { id: 501, title: "Carnatic Fusion Night", venue: "Chowdiah Memorial Hall", category: "Classical", date: "Sat, 19 Apr", price: "₹299 onwards", image: "https://picsum.photos/seed/carnatic/400/560" },
  { id: 502, title: "Pandit Jasraj Tribute", venue: "Ravindra Kalakshetra", category: "Classical", date: "Sun, 27 Apr", price: "₹399 onwards", image: "https://picsum.photos/seed/jasraj/400/560", promoted: true },
  { id: 503, title: "Ravi Shankar Sitar Night", venue: "Chowdiah Hall", category: "Classical", date: "Sat, 3 May", price: "₹499 onwards", image: "https://picsum.photos/seed/sitar/400/560" },
  { id: 504, title: "MS Subbulakshmi Tribute", venue: "Ravindra Kalakshetra", category: "Classical", date: "Fri, 9 May", price: "₹349 onwards", image: "https://picsum.photos/seed/mss/400/560" },
  { id: 505, title: "Balamuralikrishna Night", venue: "Chowdiah Hall", category: "Classical", date: "Sat, 17 May", price: "₹299 onwards", image: "https://picsum.photos/seed/bala/400/560" },
  { id: 506, title: "Hindustani Classical Eve", venue: "IISc Auditorium", category: "Classical", date: "Sun, 25 May", price: "₹249 onwards", image: "https://picsum.photos/seed/hindust/400/560" },
  { id: 507, title: "Hariprasad Chaurasia Flute", venue: "Ravindra Kalakshetra", category: "Classical", date: "Sat, 31 May", price: "₹599 onwards", image: "https://picsum.photos/seed/flute/400/560", promoted: true },
  { id: 508, title: "Kuchipudi Dance Concert", venue: "Chowdiah Hall", category: "Classical", date: "Fri, 6 Jun", price: "₹199 onwards", image: "https://picsum.photos/seed/kuchi/400/560" },
  { id: 509, title: "Thyagaraja Aradhana", venue: "Ravindra Kalakshetra", category: "Classical", date: "Sat, 14 Jun", price: "₹149 onwards", image: "https://picsum.photos/seed/thyag/400/560" },
  { id: 510, title: "Shankar Mahadevan Classical", venue: "IISc Auditorium", category: "Classical", date: "Sun, 22 Jun", price: "₹499 onwards", image: "https://picsum.photos/seed/shankar2/400/560" },
  { id: 511, title: "Violin Maestro Night", venue: "Chowdiah Memorial Hall", category: "Classical", date: "Sat, 28 Jun", price: "₹299 onwards", image: "https://picsum.photos/seed/violin/400/560" },
  { id: 512, title: "Tabla & Sarod Jugalbandi", venue: "Ravindra Kalakshetra", category: "Classical", date: "Fri, 4 Jul", price: "₹399 onwards", image: "https://picsum.photos/seed/tabla/400/560" },
  { id: 513, title: "Carnatic Vocal Nite", venue: "IISc Auditorium", category: "Classical", date: "Sat, 12 Jul", price: "₹249 onwards", image: "https://picsum.photos/seed/vocal/400/560" },
  { id: 514, title: "Odissi Dance Recital", venue: "Chowdiah Hall", category: "Classical", date: "Sun, 20 Jul", price: "₹199 onwards", image: "https://picsum.photos/seed/odissi/400/560" },
  { id: 515, title: "Ragas of the Season", venue: "Ravindra Kalakshetra", category: "Classical", date: "Fri, 25 Jul", price: "₹349 onwards", image: "https://picsum.photos/seed/raga/400/560" },
  { id: 516, title: "Bhimsen Joshi Tribute", venue: "Chowdiah Memorial Hall", category: "Classical", date: "Sat, 2 Aug", price: "₹299 onwards", image: "https://picsum.photos/seed/bhimsen/400/560", promoted: true },
  { id: 517, title: "Veena Seshanna Night", venue: "IISc Auditorium", category: "Classical", date: "Sun, 10 Aug", price: "₹199 onwards", image: "https://picsum.photos/seed/veena/400/560" },
  { id: 518, title: "Kathak Dance Recital", venue: "Ravindra Kalakshetra", category: "Classical", date: "Sat, 16 Aug", price: "₹249 onwards", image: "https://picsum.photos/seed/kathak/400/560" },
  { id: 519, title: "Morning Raga Concert", venue: "Chowdiah Hall", category: "Classical", date: "Sun, 24 Aug", price: "₹149 onwards", image: "https://picsum.photos/seed/morn/400/560" },
  { id: 520, title: "Ustad Zakir Hussain Live", venue: "Palace Grounds", category: "Classical", date: "Sat, 30 Aug", price: "₹799 onwards", image: "https://picsum.photos/seed/zakir/400/560" },
  { id: 521, title: "Carnatic Youth Festival", venue: "IISc Auditorium", category: "Classical", date: "Sun, 7 Sep", price: "₹99 onwards", image: "https://picsum.photos/seed/youth/400/560" },

  // ── HIP-HOP ──
  { id: 601, title: "Divine Live", venue: "Rave The Club, Bengaluru", category: "Hip-Hop", date: "Sat, 12 Apr", price: "₹699 onwards", image: "https://picsum.photos/seed/divine/400/560", promoted: true },
  { id: 602, title: "Seedhe Maut Live", venue: "Hard Rock Cafe", category: "Hip-Hop", date: "Fri, 18 Apr", price: "₹599 onwards", image: "https://picsum.photos/seed/seedhe/400/560" },
  { id: 603, title: "Raftaar Live", venue: "NICE Grounds", category: "Hip-Hop", date: "Sat, 26 Apr", price: "₹899 onwards", image: "https://picsum.photos/seed/raftaar/400/560" },
  { id: 604, title: "Mc Stan Live", venue: "Palace Grounds", category: "Hip-Hop", date: "Sun, 4 May", price: "₹1199 onwards", image: "https://picsum.photos/seed/mcstan/400/560", promoted: true },
  { id: 605, title: "Kr$na Live", venue: "Koramangala Indoor Stadium", category: "Hip-Hop", date: "Fri, 9 May", price: "₹499 onwards", image: "https://picsum.photos/seed/krsna/400/560" },
  { id: 606, title: "Prabh Deep Live", venue: "Humming Tree", category: "Hip-Hop", date: "Sat, 17 May", price: "₹399 onwards", image: "https://picsum.photos/seed/prabh/400/560" },
  { id: 607, title: "Ikka Live", venue: "Fandom, Bengaluru", category: "Hip-Hop", date: "Sun, 25 May", price: "₹499 onwards", image: "https://picsum.photos/seed/ikka/400/560" },
  { id: 608, title: "Naezy Live", venue: "BFlat Bar", category: "Hip-Hop", date: "Fri, 30 May", price: "₹349 onwards", image: "https://picsum.photos/seed/naezy/400/560" },
  { id: 609, title: "Dino James Live", venue: "Hard Rock Cafe", category: "Hip-Hop", date: "Sat, 7 Jun", price: "₹449 onwards", image: "https://picsum.photos/seed/dino/400/560" },
  { id: 610, title: "Yungsta Live", venue: "Rave The Club", category: "Hip-Hop", date: "Sun, 15 Jun", price: "₹299 onwards", image: "https://picsum.photos/seed/yungsta/400/560" },
  { id: 611, title: "Hip-Hop India Festival", venue: "NICE Grounds", category: "Hip-Hop", date: "Sat, 21 Jun", price: "₹799 onwards", image: "https://picsum.photos/seed/hiphopind/400/560", promoted: true },
  { id: 612, title: "Rap God Night BLR", venue: "Palace Grounds", category: "Hip-Hop", date: "Fri, 27 Jun", price: "₹699 onwards", image: "https://picsum.photos/seed/rapgod/400/560" },
  { id: 613, title: "Street Rap Battle", venue: "Phoenix Marketcity", category: "Hip-Hop", date: "Sun, 6 Jul", price: "₹199 onwards", image: "https://picsum.photos/seed/battle/400/560" },
  { id: 614, title: "Underground Hip-Hop", venue: "BFlat Bar", category: "Hip-Hop", date: "Sat, 12 Jul", price: "₹249 onwards", image: "https://picsum.photos/seed/undergnd/400/560" },
  { id: 615, title: "Badshah x Raftaar", venue: "NICE Grounds", category: "Hip-Hop", date: "Fri, 18 Jul", price: "₹1499 onwards", image: "https://picsum.photos/seed/bxr/400/560" },
  { id: 616, title: "Trendy Flows BLR", venue: "Fandom, Bengaluru", category: "Hip-Hop", date: "Sun, 27 Jul", price: "₹349 onwards", image: "https://picsum.photos/seed/trendy/400/560" },
  { id: 617, title: "Gully Rap Night", venue: "Rave The Club", category: "Hip-Hop", date: "Sat, 2 Aug", price: "₹299 onwards", image: "https://picsum.photos/seed/gully/400/560" },
  { id: 618, title: "Trap & Bass Night", venue: "KSCA Grounds", category: "Hip-Hop", date: "Fri, 8 Aug", price: "₹499 onwards", image: "https://picsum.photos/seed/trap/400/560", promoted: true },
  { id: 619, title: "Old School Hip-Hop", venue: "Hard Rock Cafe", category: "Hip-Hop", date: "Sat, 16 Aug", price: "₹399 onwards", image: "https://picsum.photos/seed/oldskool/400/560" },
  { id: 620, title: "Freestyle Cypher BLR", venue: "BFlat Bar", category: "Hip-Hop", date: "Sun, 24 Aug", price: "₹199 onwards", image: "https://picsum.photos/seed/cypher/400/560" },
  { id: 621, title: "Desi Hip-Hop Awards", venue: "Palace Grounds", category: "Hip-Hop", date: "Sat, 30 Aug", price: "₹999 onwards", image: "https://picsum.photos/seed/desiawards/400/560" },

  // ── TELUGU ──
  { id: 701, title: "SS Thaman Live", venue: "BIEC, Bengaluru", category: "Telugu", date: "Sat, 12 Apr", price: "₹599 onwards", image: "https://picsum.photos/seed/thaman/400/560", promoted: true },
  { id: 702, title: "Sid Sriram Live", venue: "Palace Grounds", category: "Telugu", date: "Sun, 20 Apr", price: "₹799 onwards", image: "https://picsum.photos/seed/sid/400/560" },
  { id: 703, title: "Devi Sri Prasad Night", venue: "Kanteerava Stadium", category: "Telugu", date: "Sat, 26 Apr", price: "₹999 onwards", image: "https://picsum.photos/seed/dsp/400/560" },
  { id: 704, title: "Anirudh Telugu Special", venue: "NICE Grounds", category: "Telugu", date: "Fri, 2 May", price: "₹1299 onwards", image: "https://picsum.photos/seed/anirudh2/400/560", promoted: true },
  { id: 705, title: "Pushpa Beats Night", venue: "Phoenix Marketcity", category: "Telugu", date: "Sat, 10 May", price: "₹699 onwards", image: "https://picsum.photos/seed/pushpa/400/560" },
  { id: 706, title: "RRR Music Concert", venue: "Palace Grounds", category: "Telugu", date: "Sun, 18 May", price: "₹1499 onwards", image: "https://picsum.photos/seed/rrr/400/560" },
  { id: 707, title: "Sarrainodu Beats Night", venue: "BBMP Grounds", category: "Telugu", date: "Fri, 23 May", price: "₹499 onwards", image: "https://picsum.photos/seed/sarr/400/560" },
  { id: 708, title: "Naa Peru Surya Night", venue: "Koramangala Indoor Stadium", category: "Telugu", date: "Sat, 31 May", price: "₹599 onwards", image: "https://picsum.photos/seed/nps/400/560" },
  { id: 709, title: "Telugu Hits Carnival", venue: "NICE Grounds", category: "Telugu", date: "Sun, 8 Jun", price: "₹799 onwards", image: "https://picsum.photos/seed/telcarn/400/560" },
  { id: 710, title: "Ram Miriyala Live", venue: "Humming Tree", category: "Telugu", date: "Fri, 13 Jun", price: "₹349 onwards", image: "https://picsum.photos/seed/ram/400/560" },
  { id: 711, title: "Mangli Live", venue: "Ravindra Kalakshetra", category: "Telugu", date: "Sat, 21 Jun", price: "₹449 onwards", image: "https://picsum.photos/seed/mangli/400/560" },
  { id: 712, title: "Yazin Nizar Telugu Night", venue: "Fandom, Bengaluru", category: "Telugu", date: "Sun, 29 Jun", price: "₹399 onwards", image: "https://picsum.photos/seed/yazin/400/560" },
  { id: 713, title: "Vijay Prakash Telugu", venue: "IISc Auditorium", category: "Telugu", date: "Sat, 5 Jul", price: "₹299 onwards", image: "https://picsum.photos/seed/vijprak/400/560" },
  { id: 714, title: "Hemachandra Live", venue: "Palace Grounds", category: "Telugu", date: "Fri, 11 Jul", price: "₹499 onwards", image: "https://picsum.photos/seed/hema/400/560" },
  { id: 715, title: "Karthik Telugu Special", venue: "BBMP Grounds", category: "Telugu", date: "Sat, 19 Jul", price: "₹599 onwards", image: "https://picsum.photos/seed/karthik/400/560", promoted: true },
  { id: 716, title: "Smita Live", venue: "Chowdiah Memorial Hall", category: "Telugu", date: "Sun, 27 Jul", price: "₹349 onwards", image: "https://picsum.photos/seed/smita/400/560" },
  { id: 717, title: "Telugu Folk Night", venue: "Ravindra Kalakshetra", category: "Telugu", date: "Sat, 2 Aug", price: "₹249 onwards", image: "https://picsum.photos/seed/telfolk/400/560" },
  { id: 718, title: "Bheemla Nayak Night", venue: "NICE Grounds", category: "Telugu", date: "Fri, 8 Aug", price: "₹699 onwards", image: "https://picsum.photos/seed/bheemla/400/560" },
  { id: 719, title: "Geetha Madhuri Live", venue: "Koramangala Indoor Stadium", category: "Telugu", date: "Sat, 16 Aug", price: "₹399 onwards", image: "https://picsum.photos/seed/geetha/400/560" },
  { id: 720, title: "Tollywood Blockbusters", venue: "Palace Grounds", category: "Telugu", date: "Sun, 24 Aug", price: "₹899 onwards", image: "https://picsum.photos/seed/tollyw/400/560" },
  { id: 721, title: "Kalyan Nayak Night", venue: "Humming Tree", category: "Telugu", date: "Sat, 30 Aug", price: "₹299 onwards", image: "https://picsum.photos/seed/kalyan/400/560", promoted: true },

  // ── KANNADA ──
  { id: 801, title: "Rajkumar Hits Night", venue: "Kanteerava Stadium", category: "Kannada", date: "Sat, 12 Apr", price: "₹399 onwards", image: "https://picsum.photos/seed/rajkumar/400/560", promoted: true },
  { id: 802, title: "KGF Music Concert", venue: "Palace Grounds", category: "Kannada", date: "Sun, 20 Apr", price: "₹1499 onwards", image: "https://picsum.photos/seed/kgf/400/560" },
  { id: 803, title: "Ravi Basrur Live", venue: "NICE Grounds", category: "Kannada", date: "Fri, 25 Apr", price: "₹999 onwards", image: "https://picsum.photos/seed/ravi/400/560" },
  { id: 804, title: "Kannada Rajyotsava Night", venue: "Ravindra Kalakshetra", category: "Kannada", date: "Sat, 3 May", price: "₹299 onwards", image: "https://picsum.photos/seed/rajyot/400/560" },
  { id: 805, title: "Hamsalekha Tribute Night", venue: "Chowdiah Hall", category: "Kannada", date: "Sun, 11 May", price: "₹349 onwards", image: "https://picsum.photos/seed/hamsa/400/560" },
  { id: 806, title: "V Harikrishna Live", venue: "Kanteerava Stadium", category: "Kannada", date: "Sat, 17 May", price: "₹799 onwards", image: "https://picsum.photos/seed/vhari/400/560", promoted: true },
  { id: 807, title: "Puneeth Rajkumar Tribute", venue: "Palace Grounds", category: "Kannada", date: "Fri, 23 May", price: "₹499 onwards", image: "https://picsum.photos/seed/puneeth/400/560" },
  { id: 808, title: "Kannada Folk Evening", venue: "Ravindra Kalakshetra", category: "Kannada", date: "Sat, 31 May", price: "₹199 onwards", image: "https://picsum.photos/seed/kanfolk/400/560" },
  { id: 809, title: "Arjun Janya Live", venue: "NICE Grounds", category: "Kannada", date: "Sun, 8 Jun", price: "₹699 onwards", image: "https://picsum.photos/seed/arjun/400/560" },
  { id: 810, title: "Vijay Prakash Kannada", venue: "Humming Tree", category: "Kannada", date: "Fri, 13 Jun", price: "₹449 onwards", image: "https://picsum.photos/seed/vijkan/400/560" },
  { id: 811, title: "Kannada Sugama Sangeetha", venue: "Ravindra Kalakshetra", category: "Kannada", date: "Sat, 21 Jun", price: "₹249 onwards", image: "https://picsum.photos/seed/sugama/400/560" },
  { id: 812, title: "Shashaa Tirupati Kannada", venue: "IISc Auditorium", category: "Kannada", date: "Sun, 29 Jun", price: "₹399 onwards", image: "https://picsum.photos/seed/shashaa/400/560" },
  { id: 813, title: "Drama & Music Night", venue: "Chowdiah Hall", category: "Kannada", date: "Sat, 5 Jul", price: "₹299 onwards", image: "https://picsum.photos/seed/drama/400/560", promoted: true },
  { id: 814, title: "Sandalwood Blockbusters", venue: "NICE Grounds", category: "Kannada", date: "Fri, 11 Jul", price: "₹599 onwards", image: "https://picsum.photos/seed/sandal/400/560" },
  { id: 815, title: "Naanu Nanna Hendthi Night", venue: "BBMP Grounds", category: "Kannada", date: "Sat, 19 Jul", price: "₹349 onwards", image: "https://picsum.photos/seed/naanu/400/560" },
  { id: 816, title: "Kuvempu Sangeetha Eve", venue: "Ravindra Kalakshetra", category: "Kannada", date: "Sun, 27 Jul", price: "₹149 onwards", image: "https://picsum.photos/seed/kuv/400/560" },
  { id: 817, title: "Kannada Hip-Hop Night", venue: "Rave The Club", category: "Kannada", date: "Sat, 2 Aug", price: "₹499 onwards", image: "https://picsum.photos/seed/kanhip/400/560" },
  { id: 818, title: "Golden Era Kannada Songs", venue: "Chowdiah Memorial Hall", category: "Kannada", date: "Fri, 8 Aug", price: "₹249 onwards", image: "https://picsum.photos/seed/golden/400/560" },
  { id: 819, title: "Rockline Venkatesh Tribute", venue: "Palace Grounds", category: "Kannada", date: "Sat, 16 Aug", price: "₹699 onwards", image: "https://picsum.photos/seed/rock/400/560" },
  { id: 820, title: "Sonu Nigam Kannada Night", venue: "Chinnaswamy Stadium", category: "Kannada", date: "Sun, 24 Aug", price: "₹899 onwards", image: "https://picsum.photos/seed/sonukan/400/560" },
  { id: 821, title: "Kannada Yuva Sangeetha", venue: "IISc Auditorium", category: "Kannada", date: "Sat, 30 Aug", price: "₹199 onwards", image: "https://picsum.photos/seed/yuva/400/560" },

  // ── TAMIL ──
  { id: 901, title: "Anirudh Ravichander Live", venue: "Palace Grounds", category: "Tamil", date: "Sat, 12 Apr", price: "₹1299 onwards", image: "https://picsum.photos/seed/anirudh/400/560", promoted: true },
  { id: 902, title: "Vijay Antony Live", venue: "NICE Grounds", category: "Tamil", date: "Sun, 20 Apr", price: "₹799 onwards", image: "https://picsum.photos/seed/vijayant/400/560" },
  { id: 903, title: "Yuvan Shankar Raja Night", venue: "Kanteerava Stadium", category: "Tamil", date: "Fri, 25 Apr", price: "₹999 onwards", image: "https://picsum.photos/seed/yuvan/400/560" },
  { id: 904, title: "D Imman Live", venue: "BIEC, Bengaluru", category: "Tamil", date: "Sat, 3 May", price: "₹699 onwards", image: "https://picsum.photos/seed/dimman/400/560" },
  { id: 905, title: "Harris Jayaraj Concert", venue: "Palace Grounds", category: "Tamil", date: "Sun, 11 May", price: "₹1099 onwards", image: "https://picsum.photos/seed/harris/400/560", promoted: true },
  { id: 906, title: "AR Rahman Tamil Night", venue: "Kanteerava Stadium", category: "Tamil", date: "Sat, 17 May", price: "₹1999 onwards", image: "https://picsum.photos/seed/arrtamil/400/560" },
  { id: 907, title: "Kollywood Hits Night", venue: "BBMP Grounds", category: "Tamil", date: "Fri, 23 May", price: "₹599 onwards", image: "https://picsum.photos/seed/kollyw/400/560" },
  { id: 908, title: "Sid Sriram Tamil Special", venue: "Humming Tree", category: "Tamil", date: "Sat, 31 May", price: "₹899 onwards", image: "https://picsum.photos/seed/sidsri/400/560" },
  { id: 909, title: "Vijay Prakash Tamil", venue: "IISc Auditorium", category: "Tamil", date: "Sun, 8 Jun", price: "₹449 onwards", image: "https://picsum.photos/seed/vijprak2/400/560" },
  { id: 910, title: "SPB Tribute Night", venue: "Ravindra Kalakshetra", category: "Tamil", date: "Fri, 13 Jun", price: "₹349 onwards", image: "https://picsum.photos/seed/spb/400/560" },
  { id: 911, title: "Yazin Nizar Tamil Eve", venue: "Fandom, Bengaluru", category: "Tamil", date: "Sat, 21 Jun", price: "₹499 onwards", image: "https://picsum.photos/seed/yazintam/400/560" },
  { id: 912, title: "Ilaiyaraaja Tribute Eve", venue: "Palace Grounds", category: "Tamil", date: "Sun, 29 Jun", price: "₹499 onwards", image: "https://picsum.photos/seed/ilaiyr/400/560", promoted: true },
  { id: 913, title: "Tamil Folk Night BLR", venue: "BBMP Grounds", category: "Tamil", date: "Sat, 5 Jul", price: "₹299 onwards", image: "https://picsum.photos/seed/tamfolk/400/560" },
  { id: 914, title: "Kaala Hits Night", venue: "NICE Grounds", category: "Tamil", date: "Fri, 11 Jul", price: "₹699 onwards", image: "https://picsum.photos/seed/kaala/400/560" },
  { id: 915, title: "Thalaivaa Fan Concert", venue: "Kanteerava Stadium", category: "Tamil", date: "Sat, 19 Jul", price: "₹1499 onwards", image: "https://picsum.photos/seed/thalaivaa/400/560" },
  { id: 916, title: "Haricharan Live", venue: "Humming Tree", category: "Tamil", date: "Sun, 27 Jul", price: "₹399 onwards", image: "https://picsum.photos/seed/hari/400/560" },
  { id: 917, title: "Karthik Tamil Special", venue: "Chowdiah Hall", category: "Tamil", date: "Sat, 2 Aug", price: "₹549 onwards", image: "https://picsum.photos/seed/karthiktam/400/560" },
  { id: 918, title: "Mersal Beats Night", venue: "BBMP Grounds", category: "Tamil", date: "Fri, 8 Aug", price: "₹799 onwards", image: "https://picsum.photos/seed/mersal/400/560" },
  { id: 919, title: "Vikram Music Tribute", venue: "Palace Grounds", category: "Tamil", date: "Sat, 16 Aug", price: "₹599 onwards", image: "https://picsum.photos/seed/vikram/400/560" },
  { id: 920, title: "Tamil 2000s Hits Night", venue: "NICE Grounds", category: "Tamil", date: "Sun, 24 Aug", price: "₹449 onwards", image: "https://picsum.photos/seed/tam2000/400/560", promoted: true },
  { id: 921, title: "Shankar Mahadevan Tamil", venue: "Chowdiah Hall", category: "Tamil", date: "Sat, 30 Aug", price: "₹799 onwards", image: "https://picsum.photos/seed/shankartam/400/560" },
];

const CATEGORIES = [
  "Bollywood",
  "Indie / Rock",
  "EDM / Electronic",
  "Jazz & Blues",
  "Classical",
  "Hip-Hop",
  "Telugu",
  "Kannada",
  "Tamil",
];

const Concerts = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Bollywood");

  const filteredShows = musicShows.filter(
    (show) => show.category && show.category.trim() === activeCategory
  );

  return (
    <div className="music-main-container">
      {/* ── LEFT FILTER ── */}
      <div className="music-filters">
        <h2>Filters</h2>

        <div className="music-filter-box">
          <div className="music-filter-header">
            <span>Date</span>
            <span className="music-clear">Clear</span>
          </div>
          <div className="music-date-buttons">
            <button>Today</button>
            <button>Tomorrow</button>
            <button>This Weekend</button>
          </div>
          <label className="music-checkbox-label">
            <input type="checkbox" /> Date Range
          </label>
        </div>

        {["Language", "Categories", "More Filters", "Price"].map((item) => (
          <div className="music-filter-item" key={item}>
            <span>{item}</span>
            <span className="music-clear">Clear</span>
          </div>
        ))}

        <button className="music-browse-btn">Browse by Venues</button>
      </div>

      {/* ── RIGHT CONTENT ── */}
      <div className="music-content">
        <h2 className="music-heading">Music Shows In Bengaluru</h2>

        {/* Category Pills */}
        <div className="music-pills">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="music-grid">
          {filteredShows.length > 0 ? (
            filteredShows.map((show) => (
              <div
                key={show.id}
                className="music-card"
                onClick={() => navigate(`/music-event/${show.id}`)}
              >
                <div className="music-image-box">
                  {show.promoted && (
                    <div className="music-promoted">PROMOTED</div>
                  )}
                  <img
                    src={show.image}
                    alt={show.title}
                    onError={(e) =>
                      (e.target.src = "https://picsum.photos/400/560")
                    }
                  />
                  <div className="music-date-badge">{show.date}</div>
                </div>
                <div className="music-card-content">
                  <h3>{show.title}</h3>
                  <p className="music-venue">{show.venue}</p>
                  <p className="music-category">{show.category}</p>
                  <p className="music-price">{show.price}</p>
                </div>
              </div>
            ))
          ) : (
            <h3 className="music-no-shows">No shows found</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Concerts;