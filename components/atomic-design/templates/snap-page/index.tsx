/**
 * @file snap-page.tsx
 * @description Componente genérico que hace scroll snap en la página.
 */

"use client";

// Import of components custom
import {
  CounterIndicator,
  ScrollIndicator,
} from "@/components/atomic-design/molecules";

// Import of utilities
import { cn } from "@/lib/utils";

interface SnapPageProps {
  id: string;
  anchorId?: string;
  hideCounter?: boolean;
  hideScrollIndicator?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const SnapPage: React.FC<SnapPageProps> = ({
  id,
  anchorId,
  hideCounter,
  hideScrollIndicator,
  className,
  children,
}) => {
  return (
    <section
      id={anchorId}
      className={cn("relative min-h-[calc(100dvh-96px)]", className)}
    >
      {/* Elements of background */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="flex items-end">
          {hideCounter ? null : <CounterIndicator value={id} />}
        </div>
        <div className="flex items-end justify-end">
          {hideScrollIndicator ? null : (
            <ScrollIndicator text="Scroll hacia abajo" />
          )}
        </div>
      </div>

      {/* Content */}
      {children}
    </section>
  );
};
