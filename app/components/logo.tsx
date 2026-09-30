import { cn } from "cn";

interface LogoStyling {
  container?: string;
}

export function LogoImage({
  styling: { container } = {},
}: {
  styling?: LogoStyling;
}) {
  const _styling = {
    container: cn("size-12 rounded-full p-px", container),
  };

  return <img src="/photos/logo/icon.png" className={_styling.container} />;
}

export function LogoName() {
  return (
    <div className="flex flex-col gap-px text-white tracking-widest font-georgia">
      <div className="flex items-baseline gap-1 text-sm">
        <span>DAHLIA</span>
        <span className="text-accent-2">&</span>
        <span>CEDAR</span>
      </div>
      <div className="text-xs">HOSPITALITY</div>
    </div>
  );
}

export function FullLogo({
  styling: { container, icon } = {},
}: {
  styling?: { container?: string; icon?: string };
}) {
  const _styling = {
    container: cn("flex gap-4 items-center", container),
    icon: cn(icon),
  };
  return (
    <div className={_styling.container}>
      <LogoImage styling={{ container: icon }} />
      <LogoName />
    </div>
  );
}
