import { render, screen } from "@testing-library/react"
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyTable,
  TypographyTableHeader,
  TypographyTableRow,
  TypographyTableHead,
  TypographyTableCell,
  TypographyList,
  TypographyInlineCode,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
} from "../typography"

describe("Typography Components", () => {
  describe("TypographyH1", () => {
    it("should render h1 with text", () => {
      render(<TypographyH1>Heading 1</TypographyH1>)
      const heading = screen.getByRole("heading", { level: 1, name: /heading 1/i })
      expect(heading).toBeInTheDocument()
    })

    it("should accept custom className", () => {
      render(<TypographyH1 className="custom">H1</TypographyH1>)
      const heading = screen.getByRole("heading", { level: 1 })
      expect(heading).toHaveClass("custom")
    })
  })

  describe("TypographyH2", () => {
    it("should render h2 with text", () => {
      render(<TypographyH2>Heading 2</TypographyH2>)
      const heading = screen.getByRole("heading", { level: 2, name: /heading 2/i })
      expect(heading).toBeInTheDocument()
    })
  })

  describe("TypographyH3", () => {
    it("should render h3 with text", () => {
      render(<TypographyH3>Heading 3</TypographyH3>)
      const heading = screen.getByRole("heading", { level: 3, name: /heading 3/i })
      expect(heading).toBeInTheDocument()
    })
  })

  describe("TypographyH4", () => {
    it("should render h4 with text", () => {
      render(<TypographyH4>Heading 4</TypographyH4>)
      const heading = screen.getByRole("heading", { level: 4, name: /heading 4/i })
      expect(heading).toBeInTheDocument()
    })
  })

  describe("TypographyP", () => {
    it("should render paragraph with text", () => {
      render(<TypographyP>Paragraph text</TypographyP>)
      expect(screen.getByText("Paragraph text")).toBeInTheDocument()
    })
  })

  describe("TypographyBlockquote", () => {
    it("should render blockquote", () => {
      render(<TypographyBlockquote>Quote text</TypographyBlockquote>)
      expect(screen.getByText("Quote text")).toBeInTheDocument()
    })
  })

  describe("TypographyTable", () => {
    it("should render table wrapper", () => {
      render(
        <TypographyTable>
          <tbody>
            <tr>
              <td>Cell</td>
            </tr>
          </tbody>
        </TypographyTable>
      )
      expect(screen.getByText("Cell")).toBeInTheDocument()
    })
  })

  describe("TypographyTableHeader", () => {
    it("should render table header", () => {
      render(
        <table>
          <TypographyTableHeader>
            <tr>
              <th>Header</th>
            </tr>
          </TypographyTableHeader>
        </table>
      )
      expect(screen.getByText("Header")).toBeInTheDocument()
    })
  })

  describe("TypographyTableRow", () => {
    it("should render table row", () => {
      render(
        <table>
          <tbody>
            <TypographyTableRow>
              <td>Row Cell</td>
            </TypographyTableRow>
          </tbody>
        </table>
      )
      expect(screen.getByText("Row Cell")).toBeInTheDocument()
    })
  })

  describe("TypographyTableHead", () => {
    it("should render table head cell", () => {
      render(
        <table>
          <thead>
            <tr>
              <TypographyTableHead>Head Cell</TypographyTableHead>
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByText("Head Cell")).toBeInTheDocument()
    })
  })

  describe("TypographyTableCell", () => {
    it("should render table cell", () => {
      render(
        <table>
          <tbody>
            <tr>
              <TypographyTableCell>Cell</TypographyTableCell>
            </tr>
          </tbody>
        </table>
      )
      expect(screen.getByText("Cell")).toBeInTheDocument()
    })
  })

  describe("TypographyList", () => {
    it("should render list", () => {
      render(
        <TypographyList>
          <li>Item 1</li>
          <li>Item 2</li>
        </TypographyList>
      )
      expect(screen.getByText("Item 1")).toBeInTheDocument()
      expect(screen.getByText("Item 2")).toBeInTheDocument()
    })
  })

  describe("TypographyInlineCode", () => {
    it("should render inline code", () => {
      render(<TypographyInlineCode>const x = 1</TypographyInlineCode>)
      const code = screen.getByText("const x = 1")
      expect(code.tagName).toBe("CODE")
    })
  })

  describe("TypographyLead", () => {
    it("should render lead text", () => {
      render(<TypographyLead>Lead paragraph</TypographyLead>)
      expect(screen.getByText("Lead paragraph")).toBeInTheDocument()
    })
  })

  describe("TypographyLarge", () => {
    it("should render large text", () => {
      render(<TypographyLarge>Large text</TypographyLarge>)
      expect(screen.getByText("Large text")).toBeInTheDocument()
    })
  })

  describe("TypographySmall", () => {
    it("should render small text", () => {
      render(<TypographySmall>Small text</TypographySmall>)
      expect(screen.getByText("Small text")).toBeInTheDocument()
    })
  })

  describe("TypographyMuted", () => {
    it("should render muted text", () => {
      render(<TypographyMuted>Muted text</TypographyMuted>)
      expect(screen.getByText("Muted text")).toBeInTheDocument()
    })
  })
})

