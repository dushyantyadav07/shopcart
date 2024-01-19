import React from "react";
import "./Rating.css";
const Rating = ({ value, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  const handleStarClick = (selectedStar) => {
    const newValue = selectedStar === value ? 0 : selectedStar;
    onChange(newValue);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="rating-stars text-center">
          {stars.map((star) => (
            <span
              key={star}
              className={`star ${star <= value ? "filled" : ""}`}
              onClick={() => handleStarClick(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
