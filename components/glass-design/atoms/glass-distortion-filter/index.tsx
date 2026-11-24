/**
 * @file index.tsx
 * @description Filtro SVG de distorsión (`#liquid-glass`) que usa la utilidad
 * `glass-liquid`. Se monta una sola vez por página.
 */

export function GlassDistortionFilter() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <filter
        id="liquid-glass"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.008 0.008"
          numOctaves={2}
          seed={7}
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation={2} result="soft" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="soft"
          scale={42}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}
