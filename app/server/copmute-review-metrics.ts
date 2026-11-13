import { reviews } from "./reviews";

export async function computeReviewMetrics() {
  const total_reviews = reviews.length;
  const total_rate = reviews.reduce((acc, curr) => {
    acc += curr.rating;
    return acc;
  }, 0);
  const average_rating = total_reviews === 0 ? 0 : total_rate / total_reviews;
  return {
    average_rating,
    total_reviews,
  };
}
