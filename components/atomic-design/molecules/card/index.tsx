import * as React from "react"
import {
  Card as BaseCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card"
import { Button } from "@/components/atomic-design/atoms/button"
import { Heading } from "@/components/atomic-design/atoms/heading"
import { Text } from "@/components/atomic-design/atoms/text"

/**
 * Molecule: Card
 * Componente compuesto que extiende el Card de shadcn/ui
 * Combina Card base con Heading, Text y Button personalizados
 */

interface CardProps extends React.ComponentProps<typeof BaseCard> {
  /** Título de la tarjeta */
  title?: string
  /** Descripción de la tarjeta */
  description?: string
  /** Contenido de la tarjeta */
  children?: React.ReactNode
  /** Texto del botón en el footer */
  buttonText?: string
  /** Acción del botón */
  onButtonClick?: () => void
  /** Variante del botón */
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
  /** Mostrar acción en el header */
  showHeaderAction?: boolean
  /** Contenido de la acción del header */
  headerAction?: React.ReactNode
}

export function Card({
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
}: CardProps) {
  return (
    <BaseCard className={className} {...props}>
      {(title || description || showHeaderAction) && (
        <CardHeader>
          {title && (
            <CardTitle>
              <Heading level={4} variant="accent">
                {title}
              </Heading>
            </CardTitle>
          )}
          {description && (
            <CardDescription>
              <Text variant="muted">{description}</Text>
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
  )
}

