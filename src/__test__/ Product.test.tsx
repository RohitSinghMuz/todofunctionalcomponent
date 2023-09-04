import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Product from "../Product";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockedUsedNavigate,
}));

describe("display data  from servers", () => {
  beforeEach(() => {
    //@ts-ignore
    jest.spyOn(window, "fetch").mockImplementationOnce((url: any) => {
      console.log("urlProduct----", url);
      if (url === "https://fakestoreapi.com/products/24") {
        return Promise.reject("please enter a valid id");
      }
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            id: 12,
          }),
      });
    });
  });

  test("renders the Product component correctly", async () => {
    act(() => {
      render(<Product />);
    });
  });

  test("User can click on expandNav Button to see sideBar Navigation List", async () => {
    act(() => {
      render(<Product />);
    });
    const expandNavProducttElement = screen.getByTestId("expandNavProductId");
    await act(async () => {
      fireEvent.click(expandNavProducttElement);
    });
  });
  test("User can click on expandNav Button to see sideBar Navigation List", async () => {
    act(() => {
      render(<Product />);
    });
    const noColorProductElement = screen.getByTestId("noColorProductId");
    await act(async () => {
      fireEvent.click(noColorProductElement);
    });
  });
});
