import type { Review } from "~/server/get-reviews";

export function ReviewCard({
  review: {
    text,
    reviewer: { name, picture_url },
    created_at,
    rating,
  },
  focusable,
}: {
  review: Review;
  focusable: boolean;
}) {
  const date = new Intl.DateTimeFormat(undefined, {
    month: "long",
    year: "numeric",
  }).format(new Date(created_at));

  return (
    <article
      tabIndex={focusable ? 0 : -1}
      className="flex w-[80vw] max-w-sm shrink-0 flex-col gap-3 rounded-2xl border border-black/10 bg-white p-5 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-80"
    >
      <header className="flex items-center gap-3">
        <img
          src={picture_url}
          alt=""
          loading="lazy"
          width={44}
          height={44}
          className="size-11 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="truncate font-medium text-black">{name}</p>
          <p className="text-sm text-neutral-500">{date}</p>
        </div>
      </header>

      <div
        role="img"
        aria-label={`Rated ${rating} out of 5`}
        className="text-sm tracking-wider text-amber-500"
      >
        {"★".repeat(Math.round(rating))}
        <span className="text-neutral-300">
          {"★".repeat(Math.max(0, 5 - Math.round(rating)))}
        </span>
      </div>

      <p className="line-clamp-5 text-sm leading-relaxed text-neutral-700">
        {text}
      </p>
    </article>
  );
}
