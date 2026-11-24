# Glass Design (v2 - Liquid Glass)

Sistema atomic design de la **versión 2** de app-web, con el estilo Liquid Glass de Apple. Es independiente de `components/atomic-design` (v1): no se mezclan. Reglas completas en el `CLAUDE.md` de la raíz ("Sistema glass (v2)").

## Estructura

```
glass-design/                       # SOLO primitivos genéricos y reutilizables (sin dominio)
├── atoms/
│   ├── glass-surface/              # GlassSurface: superficie de vidrio base (as: div|article|ul)
│   ├── glass-distortion-filter/    # GlassDistortionFilter: <svg> con #liquid-glass (montar una vez)
│   └── glass-backdrop/             # GlassBackdrop: manchas de color que refracta el vidrio
├── molecules/
│   ├── buttons/glass-button/       # pill de vidrio, icono en círculo; href → enlace externo
│   ├── buttons/glass-icon-button/  # botón circular solo icono (aria-label obligatorio)
│   ├── cards/glass-card/           # tarjeta: título + headerAction opcional, cuerpo y footer opcional
│   ├── chips/glass-chip/           # chip translúcido con icono opcional
│   └── typography/glass-heading/   # encabezado (level 1–3, align, decorated → `<Texto/>`)
├── organisms/
│   └── carousels/glass-carousel/   # carrusel con flechas de vidrio (items + labels por props)
├── templates/
│   └── glass-section/              # sección snap a pantalla completa (slot `background`)
└── index.ts
```

Lo que conoce el dominio (tipos como `ProjectType`, textos de `messages` de una página, datos) **no va aquí**: vive en `components/pages/app-web/v2/components/<categoría>` (hoy: `code/glass-code-window`, `contact/glass-contact-panel`, `skills/glass-skill-tray`, `decorations/glass-watermark`, `decorations/glass-window-controls`, `indicators/glass-stat`) o como fragmento de la sección que lo usa (ej: `v2/fragments/section-03/fragments/project-card` sobre `GlassCard`), que componen estos primitivos.

## Base CSS

En `app/globals.css`:

- `glass`: vidrio esmerilado (fondo `color-mix` del tema, `backdrop-filter`, borde de luz, brillo interior y reflejo diagonal). Funciona en todos los navegadores.
- `glass-liquid`: añade la distorsión SVG `#liquid-glass` (solo Chromium).
- `prefers-reduced-transparency: reduce` → fondo sólido.
- Tokens `--glass-orb-1` / `--glass-orb-2` (claro y oscuro) para el fondo.

## Uso

```tsx
import {
  GlassBackdrop,
  GlassDistortionFilter,
  GlassSection,
  GlassSurface,
  GlassButton,
  GlassHeading,
} from "@/components/glass-design";

<div className="relative isolate">
  <GlassDistortionFilter />
  <GlassBackdrop className="fixed" />
  <GlassSection background={<GlassWatermark text="01" />}>
    <GlassSurface className="rounded-3xl p-6">
      <GlassHeading decorated>Título</GlassHeading>
      <GlassButton icon={ICONS.ARROW_RIGHT_01} onClick={action}>
        Acción
      </GlassButton>
    </GlassSurface>
  </GlassSection>
</div>;
```
