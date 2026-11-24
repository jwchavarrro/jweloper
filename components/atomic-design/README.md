# Atomic Design Components

Componentes propios que **reutilizan y personalizan** los primitivos de shadcn/ui (`@/components/ui`) sin modificarlos. Las reglas completas están en el `CLAUDE.md` de la raíz.

## Niveles

- **`@/components/ui`**: primitivos de shadcn/ui, instalados por CLI. NO modificar.
- **atoms/**: el primitivo base; extiende un componente de `ui/` con los estilos del proyecto y no usa otros componentes propios.
- **molecules/**: combinan atoms. Si algo usa un átomo, es molécula.
- **organism/**: bloques completos (navegación).
- **templates/**: esqueletos de página (hoy ninguno aquí).

La v2 (Liquid Glass) tiene su propio sistema en `components/glass-design` (ver su README); no se mezclan.

## Estructura: nivel / categoría / componente

Cada componente vive dentro de una carpeta de **categoría**. No se usan carpetas genéricas (`custom/`) ni componentes sueltos en la raíz de un nivel.

```
atomic-design/
├── atoms/
│   ├── badge/                      # base: ui/badge
│   ├── card/                       # base: ui/card (div | enlace con href | interactivo con onClick)
│   ├── icon/                       # base única de iconos (iconify)
│   ├── input/                      # base: ui/input (size, variant)
│   ├── label/                      # base: ui/label (required)
│   ├── switch/
│   ├── typography/                 # h1–h4, p, lead, large, small, muted
│   └── index.ts
├── molecules/
│   ├── badges/badge-a/             # átomo Badge + Icon
│   ├── buttons/button/             # ui/button + átomo Icon
│   ├── buttons/button-icon/        # CTA: Button + Icon animados
│   ├── cards/card-a/               # diseño de card sobre el átomo Card
│   ├── inputs/InputField/          # Label opcional + Input; todos los `type` (date con icono)
│   └── index.ts                    # re-exporta cada categoría
├── organism/
│   ├── navigate/breadcrumb/
│   ├── navigate/sidebar/
│   └── index.ts
└── index.ts
```

Cada categoría y cada nivel tiene su barrel `index.ts`.

## Imports

Entre niveles, siempre desde el barrel del nivel:

```tsx
import { Icon, Typography } from "@/components/atomic-design/atoms"; // ✅
import {
  Button,
  ButtonIcon,
  CardA,
} from "@/components/atomic-design/molecules"; // ✅
import { Button } from "@/components/atomic-design/molecules/buttons/button"; // ❌ ruta interna (fuera de molecules)
```

Dentro del mismo nivel (una molécula que usa otra), desde la carpeta del componente con alias, nunca desde el barrel del propio nivel (ciclo) ni con `../`.

## Ejemplos

```tsx
// Átomo Icon: nombre iconify (normalmente desde ICONS)
<Icon icon={ICONS.ARROW_RIGHT_01} className="size-5" />

// Molécula Button: props de shadcn + iconos opcionales
<Button variant="ghost" size="sm" trailingIcon={ICONS.OPEN_IN_NEW}>EN</Button>

// Átomo Card: div por defecto, enlace con href, interactivo con onClick
<Card>…</Card>
<Card href="/app-web">…</Card>
<Card onClick={open}>…</Card>

// Molécula InputField: un solo componente para todos los tipos
<InputField label="Fecha" type="date" required />
<InputField label="Edad" type="number" helperText="Solo números" />

// Molécula ButtonIcon: Button + icono circular + texto animados
<ButtonIcon text={t("cvApp")} onClick={() => router.push(url)} />

// Átomo Typography: variant = h1–h4 | p | lead | large | small | muted;
// color = default | primary | secondary | accent | gradient
<Typography variant="h2" color="gradient">{t("title")}</Typography>
<Typography variant="lead" color="primary">{t("description")}</Typography>
```

## Ventajas

1. **No modifica componentes base**: los primitivos de shadcn/ui permanecen intactos.
2. **Fácil actualización**: se puede actualizar shadcn/ui sin perder las personalizaciones.
3. **Reutilizable**: los atoms se combinan en diferentes molecules.
4. **Mantenible**: separación clara entre primitivos base y componentes propios, agrupados por categoría.
