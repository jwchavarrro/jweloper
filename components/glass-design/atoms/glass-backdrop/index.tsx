/**
 * @file index.tsx
 * @description Fondo decorativo del sistema glass: manchas de color difuminadas que
 * el vidrio refracta (sin ellas el efecto no se percibe sobre un fondo liso).
 */

// Import of utilities
import { cn } from "@/lib/utils";

const ORBS = [
  "-left-40 top-[5%] size-[38rem] bg-(--glass-orb-1) opacity-55",
  "-right-32 top-[30%] size-[34rem] bg-(--glass-orb-2) opacity-45",
  "left-1/3 top-[58%] size-[40rem] bg-(--glass-orb-1) opacity-40",
  "right-[10%] top-[82%] size-[32rem] bg-(--glass-orb-2) opacity-40",
] as const;

export function GlassBackdrop({ className }: Readonly<{ className?: string }>) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    >
      {ORBS.map((orb) => (
        <div
          key={orb}
          className={cn("absolute rounded-full blur-[120px]", orb)}
        />
      ))}
    </div>
  );
}
