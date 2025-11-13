// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom"

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      pathname: "/",
      query: {},
      asPath: "/",
    }
  },
  usePathname() {
    return "/"
  },
  useSearchParams() {
    return new URLSearchParams()
  },
}))

// Mock Next.js Image component
jest.mock("next/image", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require("react")
  const Image = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return React.createElement("img", props)
  }
  Image.displayName = "Image"
  return {
    __esModule: true,
    default: Image,
  }
})

// Mock Next.js Link component
jest.mock("next/link", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require("react")
  interface LinkProps {
    children: React.ReactNode
    href: string
    [key: string]: unknown
  }
  const Link = ({ children, href, ...props }: LinkProps) => {
    return React.createElement("a", { href, ...props }, children)
  }
  Link.displayName = "Link"
  return Link
})

