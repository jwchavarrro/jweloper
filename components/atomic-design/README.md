# Atomic Design Components

Este directorio contiene componentes que extienden los componentes base de shadcn/ui (`@/components/ui`) sin modificarlos.

## Estructura

```
atomic-design/
├── atoms/
│   ├── index.ts     # Exportaciones de atoms
│   ├── button.tsx
│   ├── heading.tsx
│   └── text.tsx
├── molecules/
│   ├── index.ts     # Exportaciones de molecules
│   ├── card.tsx
│   └── hero-section.tsx
└── index.ts         # Exportaciones centralizadas (re-exporta desde atoms y molecules)
```

## Principio

- **`@/components/ui`**: Componentes base de shadcn/ui (NO modificar)
- **`@/components/atomic-design/atoms`**: Componentes que extienden los de ui con estilos personalizados
- **`@/components/atomic-design/molecules`**: Componentes compuestos que usan atoms

## Uso

### Importar desde el índice centralizado

```tsx
import {
  Button,
  Heading,
  Text,
  Card,
  HeroSection,
} from "@/components/atomic-design";
```

### O importar desde las subcarpetas

```tsx
// Desde atoms
import { Button, Heading, Text } from "@/components/atomic-design/atoms";

// Desde molecules
import { Card, HeroSection } from "@/components/atomic-design/molecules";

// O directamente
import { Button } from "@/components/atomic-design/atoms/button";
import { Card } from "@/components/atomic-design/molecules/card";
```

## Ejemplos

### Atoms

#### Button personalizado

```tsx
import { Button } from "@/components/atomic-design/atoms/button"

// Usa todas las props del Button base de shadcn/ui
<Button variant="default" size="lg">
  Click me
</Button>

// Con variantes personalizadas adicionales
<Button customVariant="gradient" variant="default">
  Gradient Button
</Button>

<Button customVariant="glow" variant="default">
  Glow Button
</Button>
```

#### Heading personalizado

```tsx
import { Heading } from "@/components/atomic-design/atoms/heading"

<Heading level={1} variant="gradient">
  Título con gradiente
</Heading>

<Heading level={2} variant="accent">
  Subtítulo con color primario
</Heading>
```

#### Text personalizado

```tsx
import { Text } from "@/components/atomic-design/atoms/text"

<Text variant="lead" color="primary">
  Texto destacado en color primario
</Text>

<Text variant="muted" color="accent">
  Texto atenuado con color de acento
</Text>
```

### Molecules

#### Card

```tsx
import { Card } from "@/components/atomic-design/molecules/card"

// Card básico con título y descripción
<Card
  title="Título de la tarjeta"
  description="Descripción opcional"
  buttonText="Acción"
  buttonVariant="default"
  onButtonClick={() => console.log("Clicked")}
>
  <p>Contenido adicional de la tarjeta</p>
</Card>

// Card con acción en el header
<Card
  title="Título"
  description="Descripción"
  showHeaderAction
  headerAction={<Button variant="ghost">Más</Button>}
>
  Contenido
</Card>
```

#### HeroSection

```tsx
import { HeroSection } from "@/components/atomic-design/molecules/hero-section";

<HeroSection
  title="Bienvenido a nuestra plataforma"
  subtitle="La mejor solución para tus necesidades"
  primaryButtonText="Comenzar"
  secondaryButtonText="Saber más"
  onPrimaryButtonClick={() => console.log("Primary")}
  onSecondaryButtonClick={() => console.log("Secondary")}
/>;
```

## Ventajas

1. **No modifica componentes base**: Los componentes de shadcn/ui permanecen intactos
2. **Fácil actualización**: Puedes actualizar shadcn/ui sin perder tus personalizaciones
3. **Reutilizable**: Los atoms pueden combinarse en diferentes molecules
4. **Mantenible**: Separación clara entre componentes base y personalizados
