/**
 * @file __mocks__/next/navigation.ts
 * @description Mock reutilizable para next/navigation
 */

export const useRouter = jest.fn(() => ({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  pathname: "/",
  query: {},
  asPath: "/",
}))

export const usePathname = jest.fn(() => "/")

export const useSearchParams = jest.fn(() => new URLSearchParams())

