import { Link } from "react-router";
import { FullLogo } from "./logo";
import { ViewAvailabilityButton } from "./view-availability-button";

export function Footer() {
  return (
    <footer className="hidden md:grid h-16 bg-white grid-cols-3 items-center px-8 py-2">
      <FullLogo styling={{ container: "mr-auto" }} />
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs text-black/50 text-center">
          © 2026 Dahlia and Cedar Hospitality
        </span>
        <Link
          to="mailto:stay@dahliaandcedar.com?subject=The%20Garden%20Apartment%20Inquiry"
          className="text-accent-1 text-sm"
        >
          stay@dahliaandcedar.con
        </Link>
      </div>
      <ViewAvailabilityButton className="ml-auto" />
    </footer>
  );
}
