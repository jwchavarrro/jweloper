/**
 * @file index.tsx
 * @description Átomo base de badge. Extiende el Badge de shadcn/ui (mismas `variant`).
 */

import { Badge as BaseBadge, badgeVariants } from "@/components/ui/badge";

// Import of utilities
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: Readonly<React.ComponentProps<typeof BaseBadge>>) {
  return <BaseBadge className={cn(className)} {...props} />;
}

export { badgeVariants };
