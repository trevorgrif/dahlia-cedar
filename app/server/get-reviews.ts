import z from "zod";

export async function getReviews() {
  const url = "https://api.stayapi.com/v1/airbnb/listing/reviews-from-url";
  const params = {
    url: "https://www.airbnb.com/rooms/820213301107101560?unique_share_id=24513573-80d4-43ef-9e15-f215ca015fb7&viralityEntryPoint=1&s=76&source_impression_id=p3_1794552389_P3TC5PICgWpPg6h6",
    limit: "50",
    offset: "50",
    sort_by: "MOST_RECENT",
  };
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    const values = Array.isArray(value) ? value : [value];
    values.forEach((item) => searchParams.append(key, item));
  });
  const queryString = searchParams.toString();

  const data = await fetch(`${url}${queryString ? "?" + queryString : ""}`, {
    method: "GET",
    headers: {
      "x-api-key": process.env.STAY_API_KEY ?? "",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(JSON.stringify(data.reviews)))
    .catch((error) => console.error("Error:", error));
}

export type Review = z.infer<typeof schema>;

const schema = z.object({
  id: z.string(),
  rating: z.number(),
  text: z.string(),
  created_at: z.string(),
  reviewer: z.object({
    name: z.string(),
    picture_url: z.string(),
  }),
});
