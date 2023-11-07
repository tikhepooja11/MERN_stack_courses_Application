import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const StarRating = ({ ratings }) => {
  const [rating, setRating] = useState(0);
  console.log("ratings : " + rating);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <StarRatings
        rating={rating}
        starRatedColor="gold" // Customize the star color
        changeRating={changeRating}
        numberOfStars={5} // Number of stars
        starDimension="15px" // Size of the stars
        name="rating"
      />
    </div>
  );
};

export default StarRating;
