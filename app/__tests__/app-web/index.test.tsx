import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "@/store/makeStore";
import { setVersion } from "@/store/slices/versionSlice";
import AppWeb from "../../app-web/page";

// Mock del Carousel para evitar errores con embla-carousel
jest.mock("@/components/atomic-design/organism/carousel", () => ({
  Carousel: ({ items }: { items: Array<{ content: React.ReactNode }> }) => (
    <div data-testid="carousel">
      {items.map((item, idx) => (
        <div key={idx}>{item.content}</div>
      ))}
    </div>
  ),
}));

// Mock de los componentes de versión
jest.mock("@/components/pages/app-web", () => ({
  AppWebV1: () => <div data-testid="app-web-v1">AppWeb V1</div>,
  AppWebV2: () => <div data-testid="app-web-v2">AppWeb V2</div>,
}));

// Helper para renderizar con Redux Provider
const renderWithRedux = (component: React.ReactElement) => {
  const store = makeStore();
  return render(<Provider store={store}>{component}</Provider>);
};

describe("AppWeb Page", () => {
  it("should render the AppWeb page", () => {
    const { container } = renderWithRedux(<AppWeb />);
    const mainDiv = container.querySelector(".h-\\[calc\\(100dvh-96px\\)\\]");
    expect(mainDiv).toBeInTheDocument();
  });

  it("should render AppWebV1 by default (v1 is default)", () => {
    renderWithRedux(<AppWeb />);
    expect(screen.getByTestId("app-web-v1")).toBeInTheDocument();
    expect(screen.queryByTestId("app-web-v2")).not.toBeInTheDocument();
  });

  it("should render AppWebV2 when v2 is selected", () => {
    const store = makeStore();
    store.dispatch(setVersion("v2"));
    render(
      <Provider store={store}>
        <AppWeb />
      </Provider>
    );
    expect(screen.getByTestId("app-web-v2")).toBeInTheDocument();
    expect(screen.queryByTestId("app-web-v1")).not.toBeInTheDocument();
  });

  it("should render within a div container", () => {
    const { container } = renderWithRedux(<AppWeb />);
    const div = container.querySelector(".h-\\[calc\\(100dvh-96px\\)\\]");
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass("h-[calc(100dvh-96px)]");
  });

  it("should update when version changes in store", () => {
    const store = makeStore();
    const { rerender } = render(
      <Provider store={store}>
        <AppWeb />
      </Provider>
    );

    expect(screen.getByTestId("app-web-v1")).toBeInTheDocument();

    store.dispatch(setVersion("v2"));

    rerender(
      <Provider store={store}>
        <AppWeb />
      </Provider>
    );

    expect(screen.getByTestId("app-web-v2")).toBeInTheDocument();
    expect(screen.queryByTestId("app-web-v1")).not.toBeInTheDocument();
  });
});
