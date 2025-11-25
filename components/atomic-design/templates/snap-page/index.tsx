/**
 * @file snap-page.tsx
 * @description Componente genérico que hace scroll snap en la página.
 */

// Import of components custom
import {
  CounterIndicator,
  ScrollIndicator,
} from "@/components/atomic-design/molecules";

interface SnapPageProps {
  id: string;
  children: React.ReactNode;
}

export const SnapPage: React.FC<SnapPageProps> = ({ id, children }) => {
  return (
    <section className="relative h-[calc(100dvh-96px)] w-full snap-start flex items-center justify-center">
      {/* Elements of background */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="flex items-end">
          <CounterIndicator value={id} />
        </div>
        <div className="flex items-end justify-end">
          <ScrollIndicator />
        </div>
      </div>

      {/* Content */}
      {children}
    </section>
  );
};
