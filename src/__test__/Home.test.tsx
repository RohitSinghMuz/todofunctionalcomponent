import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import user from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "../Home";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockedUsedNavigate,
}));

describe("user can see Home Page Element ", () => {
  test("User can see Item from select option ", () => {
    let { getByTestId } = render(<Home />);
    const selectOptinElement = getByTestId("handleSelectItemId");
    fireEvent.click(selectOptinElement);
    console.log("selectOptinElementData");
  });
  test("User can clic on popular button to see popular element", async () => {
    let newElement = render(<Home />);
    const handlePopularBtn = await newElement.getByTestId("handlePopularBtnId");
    fireEvent.click(handlePopularBtn);
  });
  test("User can clic on popular button to see Recent element", async () => {
    let newElement = render(<Home />);
    const handleRecentBtn = await newElement.getByTestId(
      "handleRecentelementId"
    );
    fireEvent.click(handleRecentBtn);
  });
  test("User can clic on popular button to see ExpandNav element", async () => {
    let newElement = render(<Home />);
    const expandNavBtn = await newElement.getByTestId("expandNavId");
    fireEvent.click(expandNavBtn);
  });
  test("User can clic on popular button to see ExpandNav element", async () => {
    let newElement = render(<Home />);
    const handleNoColorBtn = await newElement.getByTestId("handleNoColorId");
    fireEvent.click(handleNoColorBtn);
  });
});
