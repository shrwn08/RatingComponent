import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ starNum }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (index) => {
    setRating(index);
  };

  const handleOnHover = (index) => {
    setHover(index);
  };

  const handleOnMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: starNum }, (_, idx) => {
        idx += 1;
        return (
          <FaStar
            style={{ fontSize: "20px", color: idx <= (hover || rating) ? "#ffc107" : "#e4e5e9" }}
            key={idx}
            onClick={() => handleOnClick(idx)}
            onMouseEnter={() => handleOnHover(idx)}
            onMouseLeave={handleOnMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default Rating;
