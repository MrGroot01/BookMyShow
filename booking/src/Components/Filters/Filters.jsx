import React, { useState } from "react";
import "./Filter.css";

const FilterSection = ({ title, items }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="filter-box">
      <div className="filter-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="clear">Clear</span>
      </div>

      {open && (
        <div className="filter-items">
          {items.map((item, index) => (
            <button key={index}>{item}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Filters() {
  return (
    <div className="filters">
      <FilterSection
        title="Language"
        items={["English", "Hindi", "Hinglish", "Tamil", "Kannada", "Telugu", "Malayalam", "Bengali"]}
      />

      <FilterSection
        title="Categories"
        items={["Stand up Comedy", "Open Mic Comedy", "Improv Comedy", "Surprise Act", "Roast", "Sketch"]}
      />

      <FilterSection
        title="More Filters"
        items={["Outdoor Events", "Fast Filling", "Must Attend", "Online Streaming", "Unmissable Events"]}
      />
    </div>
  );
}