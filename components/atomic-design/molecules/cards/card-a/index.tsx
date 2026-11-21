import * as React from "react";
import { Button } from "@/components/atomic-design/molecules/buttons/button";
import {
  Card as BaseCard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Typography,
} from "@/components/atomic-design/atoms";

/**
 * Molecule: CardA
 * Card con título, descripción, acción y botón opcionales.
 * Compone el átomo Card (y sus partes), Typography y la molécula Button.
 */

interface CardAProps extends React.ComponentProps<typeof BaseCard> {
  readonly title?: string;
  readonly description?: string;
  readonly children?: React.ReactNode;
  readonly buttonText?: string;
  readonly onButtonClick?: () => void;
  readonly buttonVariant?: React.ComponentProps<typeof Button>["variant"];
  readonly showHeaderAction?: boolean;
  readonly headerAction?: React.ReactNode;
}

export function CardA({
  title,
  description,
  children,
  buttonText,
  onButtonClick,
  buttonVariant = "default",
  showHeaderAction = false,
  headerAction,
  className,
  ...props
}: CardAProps) {
  return (
    <BaseCard className={className} {...props}>
      {(title || description || showHeaderAction) && (
        <CardHeader>
          {title && (
            <CardTitle>
              <Typography variant="h4" color="primary">
                {title}
              </Typography>
            </CardTitle>
          )}
          {description && (
            <CardDescription>
              <Typography variant="muted">{description}</Typography>
            </CardDescription>
          )}
          {showHeaderAction && headerAction && (
            <CardAction>{headerAction}</CardAction>
          )}
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
      {buttonText && (
        <CardFooter>
          <Button variant={buttonVariant} onClick={onButtonClick}>
            {buttonText}
          </Button>
        </CardFooter>
      )}
    </BaseCard>
  );
}
