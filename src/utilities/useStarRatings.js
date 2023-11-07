const useStarRatings = (ratings) => {
  return (
    <div>
      <StarRatings
        rating={ratings}
        starRatedColor="gold" // Customize the star color
        // changeRating={changeRating}
        numberOfStars={5} // Number of stars
        starDimension="30px" // Size of the stars
        name="rating"
      />
    </div>
  );
};

export default useStarRatings;
