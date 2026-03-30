import React from "react";
import { useParams } from "react-router-dom";
import shows from "../../data/showsData"; // adjust if path different

export default function EventDetails() {
  const { id } = useParams();

  const event = shows?.find((e) => e.id === Number(id));

  // ✅ SAFETY CHECK (prevents blank screen crash)
  if (!event) {
    return <h2 style={{ padding: "20px" }}>Event not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{event.title}</h1>

      <img
        src={event.image}
        alt={event.title}
        style={{ width: "70%", borderRadius: "10px" }}
      />

      <div>
        <p>📅 {event.date}</p>
        <p>⏰ {event.time}</p>
        <p>💰 {event.price}</p>
      </div>
    </div>
  );
}