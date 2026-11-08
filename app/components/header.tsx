import {
  useEffect,
  useState,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";
import { FullLogo } from "./logo";
import { ViewAvailabilityButton } from "./view-availability-button";
import { Menu } from "lucide-react";

export function Header({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // If the viewport grows past md while open, close the drawer
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const logo = (
    <div
      className="cursor-pointer"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <FullLogo styling={{ container: "mr-auto", icon: "size-32 mt-8" }} />
    </div>
  );

  return (
    <>
      <header
        {...rest}
        className="z-10 sticky top-0 h-(--header) bg-white py-4 px-4 md:px-8 flex justify-center gap-12 items-center border-b-4 border-accent-2"
      >
        <div className="mr-auto">{logo}</div>

        {/* Desktop nav */}
        <div className="hidden md:contents">
          {children}
          <ViewAvailabilityButton className="ml-auto" />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-5 text-black" />
        </button>
      </header>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-20 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
        // `inert` keeps hidden drawer contents out of the tab order
        inert={!open}
        className={`md:hidden fixed top-0 right-0 z-30 h-dvh w-72 max-w-[85vw] bg-white shadow-xl border-l-4 border-accent-2 flex flex-col gap-6 p-6 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="self-end p-2 -mr-2"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <Menu className="size-5 text-black" />
        </button>

        {/* Close the drawer when any nav item inside is clicked */}
        <nav
          className="flex flex-col gap-4"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a, button")) setOpen(false);
          }}
        >
          {children}
        </nav>

        <ViewAvailabilityButton className="mt-auto w-full" />
      </aside>
    </>
  );
}
