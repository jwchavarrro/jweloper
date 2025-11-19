/**
 * @file __mocks__/next/link.tsx
 * @description Mock reutilizable para next/link
 */

import * as React from "react"

interface LinkProps {
  children: React.ReactNode
  href: string
  [key: string]: unknown
}

const Link = ({ children, href, ...props }: LinkProps) => {
  return React.createElement("a", { href, ...props }, children)
}

Link.displayName = "Link"

export default Link

