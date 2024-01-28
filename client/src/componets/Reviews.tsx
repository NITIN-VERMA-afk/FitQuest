import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const ReviewSection = () => {
  const reviewsData = [
    { name: "John", review: "best fitness app i ever used." },
    { name: "Alice", review: "it help me improve my overall health." },
    { name: "Bob", review: "one place solution for all my problems." },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentReviewIndex(
        (prevIndex) => (prevIndex + 1) % reviewsData.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [reviewsData.length]);

  return (
    <>
    
      <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }} variant="h4">{reviewsData[currentReviewIndex].review}</Typography>
      <Typography variant="h5">{reviewsData[currentReviewIndex].name}</Typography>
      
    </>
  );
};

export default ReviewSection;