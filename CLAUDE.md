# Contexto del proyecto

Portafolio personal de Jweloper. Next.js 16 (App Router) + React 19 + TypeScript estricto + Tailwind CSS 4. Gestor: **bun** (usa `bun add` / `bunx`, nunca `npm` / `npx`). Antes de tocar APIs de Next, next-intl, Motion o shadcn, revisa la versión en `package.json` y consulta los docs de esa versión (no confíes en memoria).

Comunícate y escribe planes en **español**. Código, nombres de archivos y carpetas en **inglés**. Los comentarios y JSDoc del repo están en **español** (respeta ese estilo). Todo texto visible al usuario va en `messages/` (nunca hardcodeado).

# Configuración base

- Sin carpeta `src/`: todo vive en la raíz. Alias `@/*` → `./*`.
- Scripts: `dev`, `build`, `lint`, `format`, `format:check`, `test`, `test:ci`, y `quality-check` (`lint` + `format` + `build` + `test:ci`; ojo: `format` reescribe archivos).
- Stack: Next 16.4, React 19.3, TypeScript 5 (TS 7 no es compatible con typescript-eslint), Tailwind 4, next-intl 4, next-themes, Motion 14, Redux Toolkit 2, shadcn/ui (Radix), Jest 30, ESLint 10 + Prettier.
- **No des una tarea por terminada sin `bunx tsc --noEmit`, `bun run lint`, `bun run test:ci` y `bun run build` en verde.** Si algo falla, repórtalo tal cual.
- No crear archivos de test nuevos sin que se pidan; sí ajustar los existentes que rompa un cambio.

# Estructura de carpetas

```
<raíz>/
├── app/
│   ├── layout.tsx              # Layout raíz (solo children)
│   └── [locale]/               # Rutas internacionalizadas + config de next-intl
│       ├── layout.tsx          # <html lang>, providers (next-intl, tema, Redux), sidebar
│       ├── i18n-routing.ts     # Locales soportados (fuente única)
│       ├── i18n-navigation.ts  # Link / useRouter / usePathname con locale
│       └── i18n-request.ts     # Carga de mensajes
├── components/
│   ├── ui/                     # Primitivos de shadcn/ui (instalados por CLI). NO modificar
│   ├── atomic-design/          # Componentes propios que extienden los de ui/ (ver reglas abajo)
│   ├── glass-design/           # Sistema atomic design de la v2 (Liquid Glass). Ver "Sistema glass (v2)"
│   └── pages/                  # Piezas de cada página (app-web, ia-chat…)
├── config/                     # Rutas (APP_ROUTES), links, iconos, multimedia
├── hooks/                      # Hooks genéricos, sin dominio
├── store/                      # Redux (estado de UI global)
├── messages/                   # Traducciones: es.json, en.json (mismas claves)
├── lib/                        # Utilidades compartidas (cn…)
└── proxy.ts                    # Proxy de Next 16: negociación de locale (next-intl)
```

# Atomic Design (obligatorio)

`components/ui` tiene los primitivos de shadcn. `components/atomic-design` los **reutiliza y personaliza**; nunca se usa un componente de `ui/` directo en páginas u organismos si existe (o debe existir) su átomo.

- **atoms/**: SOLO el primitivo base; no usa otros componentes propios. Ej: `Icon` (única base de iconos: nunca importar `@iconify/react` directo), `Typography` (extiende `ui/typography`; único átomo de texto: `variant` h1–h4/p/lead/large/small/muted y `color`), `Switch`, `Input` (input base: size, variant, error vía aria-invalid) y `Label` (label base: `required`). `Card` (div por defecto; `href` → enlace, `onClick` → interactivo accesible; expone CardHeader/Title/…), `Badge`. No hay átomo de botón. Las moléculas que diseñan sobre un átomo base usan sufijo de variante (`CardA`, `BadgeA`) para no chocar con el nombre del átomo.
- **molecules/**: combinan atoms. **Si algo usa un átomo, es molécula.** Ej: `buttons/button` (extiende `ui/button` + átomo `Icon` para `leadingIcon`/`trailingIcon`), `buttons/button-icon` (CTA: molécula `Button` + `Icon` animados).
- **organism/**: bloques completos. Ej: `navigate/sidebar`, `navigate/breadcrumb`.
- **templates/**: esqueletos de página (hoy ninguno en `atomic-design`; la v2 usa los de `glass-design`).

**Cada componente va dentro de una carpeta de categoría** (`nivel/categoría/componente`). Nunca carpetas genéricas como `custom/` o componentes sueltos en la raíz del nivel:

```
molecules/
├── badges/badge-a           # átomo Badge + Icon
├── buttons/button           # ui/button + átomo Icon
├── buttons/button-icon      # CTA: Button + Icon animados
├── cards/card-a             # diseño de card sobre el átomo Card
└── inputs/InputField        # Label opcional (+obligatorio) + Input; un solo componente para todos los `type` (date con icono)
```

Cada categoría y cada nivel expone un barrel `index.ts`. Entre niveles se importa **desde el barrel del nivel**:

```ts
import { Icon, Typography } from "@/components/atomic-design/atoms"; // ✅
import { Button, ButtonIcon } from "@/components/atomic-design/molecules"; // ✅
import { Button } from "@/components/atomic-design/molecules/buttons/button"; // ❌ ruta interna (fuera de molecules)
```

Dentro del mismo nivel (ej: una molécula que usa otra) se importa desde la carpeta del componente con alias, nunca desde el barrel del propio nivel (ciclo) ni con `../`.

# Sistema glass (v2)

La v2 de app-web (estilo Liquid Glass de Apple) tiene su **propio sistema atomic design** en `components/glass-design/` (`atoms/`, `molecules/<categoría>/`, `organisms/<categoría>/`, `templates/`, con barrels y raíz `@/components/glass-design`).

- **`glass-design` = solo primitivos genéricos y reutilizables**, con nombres genéricos (`GlassHeading`, `GlassCard`, `GlassCarousel`…). Las decoraciones e indicadores propios del diseño de la v2 (`GlassWatermark`, `GlassWindowControls`, `GlassStat`) viven en `v2/components` y se inyectan por slots (`GlassSection.background`, `GlassCard.headerAction`): sin tipos de dominio (`ProjectType`, `SkillType`…), sin textos de `messages` de una página y sin datos. Reciben todo por props.
- **Lo que conoce el dominio** va en `components/pages/app-web/v2/components/<categoría>` (ej: `code/glass-code-window`), o en `fragments/` de la sección si solo la usa ella (ej: `section-03/fragments/project-card` sobre el genérico `GlassCard`), componiendo los primitivos de `glass-design`. Las secciones (`v2/fragments`) solo conectan datos con esos componentes.

- **No se mezcla con la v1**: la v1 y `atomic-design` nunca importan de `glass-design`, y `glass-design` nunca importa moléculas, organismos ni templates de `atomic-design`.
- **Compartido (permitido)**: los átomos neutrales `Icon` y `Typography` de `@/components/atomic-design/atoms`, los primitivos de `components/ui` y los datos (`useExperiences`, `useProjects`, `SKILLS`, `SOCIAL_MEDIA`, `messages/`).
- **Vidrio** siempre con el átomo `GlassSurface` o las utilidades `glass` / `glass-liquid` (`app/globals.css`); nunca `backdrop-blur` sueltos. `glass-liquid` usa el filtro `#liquid-glass` (`GlassDistortionFilter`, montado una vez en la v2) y solo distorsiona en Chromium; el resto ve el vidrio esmerilado. Con `prefers-reduced-transparency` cae a fondo sólido.
- El vidrio necesita algo detrás: `GlassBackdrop` (manchas con los tokens `--glass-orb-1/2`).
- Texto sobre vidrio con tokens (`text-foreground`, `text-muted-foreground`) y contraste ≥ 4.5:1 en claro y oscuro.

# Internacionalización (next-intl)

- Todo texto visible: clave en `messages/es.json` **y** `messages/en.json` (mismas claves). En componentes: `useTranslations("<namespace>")`.
- Las constantes guardan **claves** de traducción, no textos.
- Mensajes con formato ICU: no uses `<`, `>` ni `{` literales (se interpretan como etiquetas o variables). Decoración tipo `<Título/>` va en el componente, no en el mensaje.
- Navegación interna con `Link`, `useRouter`, `usePathname` de `@/app/[locale]/i18n-navigation` (conservan el idioma). Enlaces externos, PDFs e imágenes con `next/link`.
- Cambio de idioma: hook `useLocaleSwitch` (`@/hooks`).

# Reglas por tecnología

## Next.js 16 (App Router)

- **Server Components por defecto.** `"use client"` solo si el componente usa estado, efectos, eventos, hooks de cliente o APIs del navegador; súbelo lo más abajo posible del árbol.
- `params` y `searchParams` son `Promise`: siempre `await` (o `use()` en cliente).
- Metadata con `generateMetadata` (localizada con `getTranslations`), nunca `<head>` manual.
- Imágenes con `next/image` (con `alt` traducido); el middleware es `proxy.ts` (Next 16), no `middleware.ts`.
- Enlaces externos con `target="_blank"` llevan `rel="noopener noreferrer"`.

## React 19 + React Compiler

- El compilador está activo (`reactCompiler: true`): **no** agregues `useMemo` / `useCallback` / `React.memo` manuales salvo que midas un problema.
- Respeta las reglas `react-hooks/*` del linter: nada de `setState` síncrono dentro de `useEffect`, ni leer `ref.current` durante el render. Para suscripciones externas usa `useSyncExternalStore`; para inicializar una vez, `useState(() => …)`.
- Efectos solo para sincronizar con sistemas externos; el estado derivado se calcula en el render.

## TypeScript (strict)

- Prohibido `any`, `@ts-ignore` y `!` (non-null) sin justificación en comentario.
- Props tipadas con interfaz/tipo exportado `<Componente>Props` y `Readonly<…>`; nunca props inline sin tipo.
- `import type` para importar solo tipos.
- Deriva tipos con `Pick` / `Omit` / `keyof typeof` en lugar de redeclarar campos; mapas constantes con `as const` y `satisfies`.

## Tailwind CSS 4 + shadcn/ui

- Une clases siempre con `cn()` (`@/lib/utils`); nunca concatenes strings de clases a mano.
- Colores solo con tokens del tema (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`…) para que funcione claro/oscuro. Hex arbitrarios solo con motivo (ej: la paleta VS Code de `code-editor`).
- Variantes de componente en un mapa constante (`const VARIANTS = { … } as const`), no en `switch` ni ternarios anidados.
- Componentes de shadcn: `bunx shadcn@latest add <nombre>`; revisa que los imports generados usen los alias de `components.json` (`@/lib/utils`). `components/ui/` es código de shadcn: **no se modifica** (ni refactors, ni migraciones de imports, ni estilos); toda personalización va en `atomic-design`. Única excepción: corregir un error que deje el CLI al instalar (ej: un import con alias roto).

## Tema (next-themes)

- Tema con `useTheme()` de `next-themes`, usando `resolvedTheme` para leer y `EnumTheme` para escribir. Nunca guardes el tema en Redux ni leas `localStorage` a mano.
- El `ThemeProvider` se usa vía su wrapper `app/[locale]/fragments/theme-provider.tsx` (evita el aviso de `<script>` de React 19). UI que depende del tema se renderiza solo tras montar (`useIsMounted` de `@/hooks`) para no romper la hidratación.

## Motion

- Importa de `motion/react`. Animaciones decorativas: respeta `prefers-reduced-motion` (`useReducedMotion` o `MotionConfig reducedMotion="user"`).
- No animes en paralelo con CSS (`transition-*`) la misma propiedad que anima Motion.

## Redux Toolkit

- Solo estado global de UI que no tenga otra casa (hoy: versión de app-web). Slices en `store/slices/`; en componentes usa `useAppSelector` / `useAppDispatch` de `@/store/hooks`, nunca los hooks sin tipar de `react-redux`.

## Iconos

- Iconify siempre vía el átomo `Icon`, con nombres desde `ICONS` (`config/icons.ts`); nunca strings de iconos sueltos en componentes.
- `lucide-react` solo dentro de componentes de shadcn/`ui` o donde ya se usa como componente (sidebar).

## Testing (Jest 30 + Testing Library)

- Tests en `__tests__/` junto al componente. Consulta por rol, label o texto (lo que ve el usuario), no por clases ni estructura.
- Mocks globales en `jest.setup.ts` y `__mocks__/` (next/navigation, next/link, next-intl con los textos de `messages/es.json`, i18n-navigation, next-themes). Si un test mockea un barrel, el mock debe incluir todo lo que el código importe de él.
- Umbral de cobertura en `jest.config.js` (85% líneas/ramas); no lo bajes para que pase un cambio.

# Código limpio

- **Nombres**: componentes `PascalCase`; hooks `useXxx` en archivos `use-xxx.ts`; constantes `UPPER_SNAKE_CASE`; enums `EnumXxx`; booleanos `is/has/should…`. Nombres descriptivos, sin abreviaturas.
- **Anatomía de un componente**: `index.tsx` (render) y, si hace falta, `utils/` (`constants.ts`, `types.ts`, `functions.ts` con su barrel) y `fragments/` para subcomponentes propios. Encabezado JSDoc `@file` / `@description` y `@name` en exports; imports agrupados con comentarios `// Import of …`.
- **Funciones cortas y con una sola tarea**; _early return_ en vez de anidar `if`; sin ternarios anidados en JSX.
- **Sin números ni strings mágicos**: van a constantes, `config/`, enums o `messages/`.
- **Sin código muerto**: nada comentado, sin exports, archivos o dependencias sin uso (si tu cambio deja algo huérfano, bórralo).
- **Sin `console.log`**; `console.error` solo en rutas de error reales.
- **Composición sobre configuración**: antes que agregar muchas props booleanas, compón (`children`, slots, partes tipo `CardHeader`).
- **Errores**: nunca tragues errores en silencio; muestra un estado de error al usuario (texto en `messages/`).
- **Seguridad**: sin `dangerouslySetInnerHTML`; valida datos en límites (URL, query params con `useQueryParams`).

# Principios (obligatorios)

Antes de escribir código, sube esta escalera y detente en el primer peldaño que sirva:

1. ¿Hace falta? Si no, no lo hagas (YAGNI).
2. ¿Ya existe un componente, hook, util, constante, enum o tipo del proyecto? Reúsalo o extiéndelo con una prop opcional.
3. ¿Lo resuelve Next, la plataforma o una dependencia ya instalada?
4. Solo entonces, el mínimo código que funcione.

- **Enums y tipos existentes, nunca strings sueltos**: usa los de `app/utils/types.ts` (`EnumTheme`, `EnumSkills`, `EnumSocialMedia`…) y las claves tipadas de `config/` (`APP_ROUTES`, `ICONS`). Las variantes de props de componentes (`variant`, `size`) quedan como uniones de strings.
- **DRY**: nada duplicado (constantes, mensajes, bloques de UI). Si se repite 2+ veces → constante, util, hook o componente.
- **KISS / SOLID**: una responsabilidad por archivo; los componentes genéricos no conocen el dominio.
- **Cambios quirúrgicos**: toca solo lo que pide la tarea. No agregues props, variantes ni features no pedidas; no borres comentarios ni refactorices lo que no se pidió (menciónalo).
- **No inventar**: si falta un componente o la tarea es ambigua, pregunta o propone un plan corto.
- **Nunca recortar**: accesibilidad (`aria-label`, contraste WCAG AA), manejo de errores.
- Atajos deliberados con `// lazy: <límite y cuándo mejorarlo>`.

# Forma de trabajo

- Commits (solo si se piden) en inglés con Conventional Commits: `feat(scope): …`, `fix(scope): …`, `refactor(scope): …`.

- Sin commits, ramas ni PRs salvo pedido explícito; los cambios quedan en el working tree.
- Al terminar: resumen corto de lo hecho, lo omitido y lo que hay que validar en el navegador.
