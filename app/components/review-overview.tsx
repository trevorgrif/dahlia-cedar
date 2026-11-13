import { Dot, Star } from "lucide-react";
import { use } from "react";
import { Link, Links, useLoaderData } from "react-router";
import type { MainLoader } from "~/routes/_index";
import { route_map } from "./routes";

export function ReviewOverview() {
  const { review_metrics } = useLoaderData<MainLoader>();
  const { average_rating, total_reviews } = use(review_metrics);

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  return (
    <div className="flex gap-2 items-center">
      <Star className="fill-amber-50 size-4" />
      {formatter.format(average_rating)}
      <Dot />
      <div className="flex items-baseline gap-1">
        <div>{total_reviews}</div>
        <div>reviews on Airbnb</div>
      </div>
      <Dot />
      Guest Favorite
    </div>
  );
}

export function ReviewOverviewVerbose() {
  const { review_metrics } = useLoaderData<MainLoader>();
  const { average_rating, total_reviews } = use(review_metrics);

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  return (
    <div className="flex gap-2 items-center text-black px-6 py-8 md:px-16 md:py-4">
      <Star className="fill-black size-4" />
      {formatter.format(average_rating)}
      <div className="flex items-baseline gap-1">
        <div>from</div>
        <div>{total_reviews}</div>
        <div>Airbnb reviews</div>
      </div>
      <Dot />
      <Link
        to={route_map._external.airbnb}
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read all reviews on Airbnb
      </Link>
    </div>
  );
}
