import { FullLogo, LogoImage } from "./logo";
import { ViewAvailabilityButton } from "./view-availability-button";

export function Footer() {
  return (
    <footer className="h-16 bg-white grid grid-cols-3 items-center px-8 py-2">
      <FullLogo styling={{ container: "mr-auto" }} />
      <span className="text-xs text-black/50 text-center">
        © 2026 Dahlia and Cedar Hospitality
      </span>
      <ViewAvailabilityButton className="ml-auto" />
    </footer>
  );
}
