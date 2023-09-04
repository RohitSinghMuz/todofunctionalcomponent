import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Productpage from "../Productpage";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockedUsedNavigate,
}));

describe("Productpage Component", () => {
  beforeEach(() => {
    //@ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              title: "Product 1",
              price: 10,
              image: "product1.jpg",
            },
            {
              id: 2,
              title: "Product 2",
              price: 20,
              image: "product2.jpg",
            },
          ]),
      })
    );
  });

  afterEach(() => {
    //@ts-ignore
    global.fetch.mockClear();
  });

  it("renders product cards", async () => {
    render(<Productpage />);
    await screen.findByTestId("cardElementId-0");
    expect(screen.getByTestId("cardElementId-0")).toBeInTheDocument();
    expect(screen.getByTestId("cardElementId-1")).toBeInTheDocument();
  });

  it("navigates to the product page when a card is clicked", async () => {
    render(<Productpage />);
    await screen.findByTestId("cardElementId-0");
    fireEvent.click(screen.getByTestId("cardElementId-0"));
  });
});
