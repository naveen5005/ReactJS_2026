import React, { useState } from "react";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const startContainerStyle = {
  display: "flex",
  gap: "4px",
};
const textStyle = {
  lineHeight: "1",
  margin: "0",
  color: "white",
};
const StarRating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);
  return (
    <div style={containerStyle}>
      <div style={startContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} onRate={() => setRating(i + 1)}
          full={rating >= i+1} />
        ))}
      </div>
      <p style={textStyle}>{rating || ""}</p>
    </div>
  );
};

export default StarRating;

function Star({ onRate,full }) {
  return (
    <span onClick={onRate} onMouseOver={onRate} style={{ cursor: "pointer" }}>
      {full ?'⭐' : '☆'}
    </span>
  );
}
