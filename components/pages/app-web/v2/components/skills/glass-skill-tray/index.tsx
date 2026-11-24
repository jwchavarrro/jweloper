/**
 * @file index.tsx
 * @description Bandeja de vidrio con las tecnologías. Al pasar el cursor o enfocar
 * una tecnología avisa sus años de experiencia (`onHighlight`).
 */

"use client";

// Import of components custom
import { GlassSurface } from "@/components/glass-design/atoms";
import { GlassChip } from "@/components/glass-design/molecules";

// Import of types
import type { SkillType } from "@/components/pages/app-web";

export interface GlassSkillTrayProps {
  readonly skills: SkillType[];
  /** Años de la tecnología activa, o `null` al salir */
  readonly onHighlight?: (experience: string | null) => void;
  readonly label: string;
}

export function GlassSkillTray({
  skills,
  onHighlight,
  label,
}: Readonly<GlassSkillTrayProps>) {
  return (
    <GlassSurface
      as="ul"
      aria-label={label}
      className="flex flex-wrap justify-center gap-2 rounded-3xl p-3 xl:justify-start"
    >
      {skills.map((skill) => (
        <li key={skill.name}>
          <GlassChip
            icon={skill.icon}
            tabIndex={0}
            onMouseEnter={() => onHighlight?.(skill.experience)}
            onMouseLeave={() => onHighlight?.(null)}
            onFocus={() => onHighlight?.(skill.experience)}
            onBlur={() => onHighlight?.(null)}
            className="cursor-default outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {skill.name}
          </GlassChip>
        </li>
      ))}
    </GlassSurface>
  );
}
