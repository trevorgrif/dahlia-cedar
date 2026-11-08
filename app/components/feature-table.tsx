import {
  BedDouble,
  DoorOpen,
  Sofa,
  SunSnow,
  WashingMachine,
  Wifi,
} from "lucide-react";
import type { PropsWithChildren } from "react";

export function FeatureTable() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FeatureCard>
        <FeatureIcon>
          <DoorOpen className="size-5 text-accent-1" />
        </FeatureIcon>
        <FeatureAction>Arrive</FeatureAction>
        <FeatureHeader>Private Entrance</FeatureHeader>
      </FeatureCard>
      <FeatureCard>
        <FeatureIcon>
          <Sofa className="size-5 text-accent-1" />
        </FeatureIcon>
        <FeatureAction>Settle In</FeatureAction>
        <FeatureHeader>Kitchen, Living & Dining</FeatureHeader>
      </FeatureCard>
      <FeatureCard>
        <FeatureIcon>
          <BedDouble className="size-5 text-accent-1" />
        </FeatureIcon>
        <FeatureAction>Rest</FeatureAction>
        <FeatureHeader>Queen Loft Bedroom</FeatureHeader>
      </FeatureCard>
      <FeatureCard>
        <FeatureIcon>
          <WashingMachine className="size-5 text-accent-1" />
        </FeatureIcon>
        <FeatureAction>Refresh</FeatureAction>
        <FeatureHeader>Washer & Dryer</FeatureHeader>
      </FeatureCard>
      <FeatureCard>
        <FeatureIcon>
          <Wifi className="size-5 text-accent-1" />
        </FeatureIcon>
        <FeatureAction>Connect</FeatureAction>
        <FeatureHeader>High-Speed Wi-Fi</FeatureHeader>
      </FeatureCard>
      <FeatureCard>
        <FeatureIcon>
          <SunSnow className="size-5 text-accent-1" />
        </FeatureIcon>
        <FeatureAction>Stay Comfortable</FeatureAction>
        <FeatureHeader>Heating & Air Conditioning</FeatureHeader>
      </FeatureCard>
    </div>
  );
}

function FeatureAction({ children }: PropsWithChildren) {
  return (
    <div className="uppercase text-xs text-accent-2 font-mono tracking-widest">
      {children}
    </div>
  );
}

function FeatureHeader({ children }: PropsWithChildren) {
  return (
    <div className="text-black 2xl:text-xl font-georgia font-medium tracking-wide text-base md:text-sm">
      {children}
    </div>
  );
}

function FeatureCard({ children }: PropsWithChildren) {
  return (
    <div className="border-primary-1/25 border flex flex-col gap-3 p-4 relative">
      <div className="absolute top-0 left-0 w-16 h-0.5 bg-accent-2" />
      {children}
    </div>
  );
}

function FeatureIcon({ children }: PropsWithChildren) {
  return <div className="absolute top-3 right-4">{children}</div>;
}
