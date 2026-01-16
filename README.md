# Jweloper - Portafolio Personal

Portafolio personal de Jweloper (John Chavarro), desarrollador frontend especializado en React y Next.js. Aplicación web moderna con internacionalización, diseño atómico y múltiples vistas del CV.

## 🚀 Características

- **Internacionalización (i18n)**: Soporte para español e inglés con detección automática de idioma
- **Atomic Design**: Arquitectura de componentes escalable y mantenible
- **Diseño Responsivo**: Adaptado a diferentes tamaños de pantalla
- **Modo Oscuro/Claro**: Tema personalizable
- **CV Interactivo**: Dos versiones del portafolio (v1 y v2) con diferentes estilos
- **Chat con IA**: Interfaz de chat para consultas sobre el CV
- **Animaciones**: Transiciones suaves con Motion
- **Testing**: Suite completa de tests con Jest y Testing Library

## 🛠️ Tecnologías

### Core

- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first

### Estado y Datos

- **Redux Toolkit** - Gestión de estado global
- **React Redux** - Integración Redux con React

### UI y Componentes

- **Radix UI** - Componentes accesibles sin estilos
- **Lucide React** - Iconos
- **Motion** - Animaciones
- **Embla Carousel** - Carruseles

### Internacionalización

- **next-intl** - Internacionalización para Next.js
- **@formatjs/intl-localematcher** - Detección de locale

### Testing

- **Jest** - Framework de testing
- **Testing Library** - Utilidades para testing de componentes
- **Jest DOM** - Matchers personalizados para DOM

## 📦 Instalación

```bash
# Instalar dependencias
bun install

# O con npm
npm install
```

## 🏃 Scripts Disponibles

```bash
# Desarrollo
bun dev          # Inicia servidor de desarrollo
bun start        # Inicia servidor de producción

# Calidad de código
bun lint         # Ejecuta ESLint
bun lint:fix     # Corrige errores de ESLint automáticamente
bun format       # Formatea código con Prettier
bun format:check  # Verifica formato sin modificar

# Testing
bun test         # Ejecuta tests
bun test:watch   # Ejecuta tests en modo watch
bun test:coverage # Genera reporte de cobertura
bun test:ci      # Ejecuta tests en modo CI

# Calidad completa
bun quality-check # Ejecuta lint, format check, build y tests
```

## 📁 Estructura del Proyecto

```
jweloper/
├── app/                    # App Router de Next.js
│   ├── [locale]/          # Rutas internacionalizadas
│   │   ├── app-web/       # Portafolio interactivo
│   │   ├── ia-chat/       # Chat con IA
│   │   └── i18n-*.ts      # Utilidades de i18n
│   └── utils/             # Utilidades de la app
├── components/            # Componentes React
│   ├── atomic-design/     # Componentes por nivel (atoms, molecules, organisms)
│   ├── pages/             # Componentes de páginas
│   └── ui/                # Componentes base de UI
├── config/                # Configuraciones (rutas, iconos, multimedia)
├── hooks/                 # Custom hooks
├── store/                 # Redux store y slices
├── lib/                   # Utilidades compartidas
└── messages/              # Archivos de traducción (futuro)
```

## 🌐 Internacionalización

El proyecto soporta múltiples idiomas mediante:

- **EnumLocale**: Enum centralizado para locales (`ES`, `EN`)
- **Detección automática**: Basada en `Accept-Language` header
- **Rutas localizadas**: `/es/app-web`, `/en/app-web`
- **Diccionarios**: Sistema preparado para traducciones (archivos en `messages/`)

### Archivos i18n

- `app/[locale]/locales/utils/types.ts` - Enum y tipos de locales
- `app/[locale]/locales/utils/functions.ts` - Funciones de locales e i18n
- `middleware.js` - Middleware para redirecciones de locale

## 🎨 Atomic Design

El proyecto sigue la metodología Atomic Design:

- **Atoms**: Componentes básicos (Button, Text, Title, Input)
- **Molecules**: Componentes compuestos (Card, Badge)
- **Organisms**: Componentes complejos (Sidebar, Breadcrumb, Carousel)
- **Templates**: Plantillas de página (SnapPage)

## 🧪 Testing

El proyecto incluye una suite completa de tests:

- **Cobertura**: 82%+ en funciones, 85%+ en statements/branches/lines
- **Tests de componentes**: Con Testing Library
- **Tests de utilidades**: Funciones y constantes
- **Tests de integración**: Flujos completos

Ejecutar tests:

```bash
bun test              # Todos los tests
bun test:coverage      # Con reporte de cobertura
bun test:watch         # Modo watch
```

## 🚢 Despliegue

### Vercel (Recomendado)

El proyecto está optimizado para Vercel:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Build de Producción

```bash
bun run build    # Genera build de producción
bun start        # Inicia servidor de producción
```

## 📝 Convenciones

- **Nombres de archivos**: kebab-case para archivos, PascalCase para componentes
- **Estructura de componentes**: Un componente por carpeta con `index.tsx`
- **Tests**: Archivos `__tests__` junto a los componentes
- **Tipos**: Archivos `types.ts` para definiciones de tipos
- **Constantes**: Archivos `constants.ts` para valores constantes

## 🔧 Configuración

### Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico.

### TypeScript

Configuración en `tsconfig.json` con paths aliases:

- `@/` → raíz del proyecto

### ESLint y Prettier

- ESLint configurado con reglas de Next.js
- Prettier para formateo de código
- Integración con Tailwind CSS

## 📄 Licencia

Este proyecto es privado.

## 👤 Autor

**Jweloper (John Chavarro)**

- GitHub: [@jwchavarrro](https://github.com/jwchavarrro)
- LinkedIn: [John Chavarro Urrea](https://www.linkedin.com/in/john-chavarro-urrea-9b9200129/)
- Email: jwchavarrro023@gmail.com

---

Desarrollado con ❤️ usando Next.js y React
