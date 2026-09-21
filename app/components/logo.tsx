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
    container: cn("size-10 rounded-full", container),
  };

  return <img src="/photos/logo.png" className={_styling.container} />;
}

export function LogoName() {
  return (
    <div className="flex flex-col gap-px text-white tracking-widest font-georgia">
      <div className="flex items-baseline gap-1 text-sm">
        <span>DAHLIA</span>
        <span className="text-accent-1">&</span>
        <span>CEDAR</span>
      </div>
      <div className="text-xs">HOSPITALITY</div>
    </div>
  );
}

export function FullLogo({
  styling: { container } = {},
}: {
  styling?: { container?: string };
}) {
  const _styling = {
    container: cn("flex gap-2", container),
  };
  return (
    <div className={_styling.container}>
      <LogoImage />
      <LogoName />
    </div>
  );
}
