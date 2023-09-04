import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
test("renders the Header component with links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const homeLink = screen.getByTestId("homeLinkId");
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveAttribute("href", "/");
  const formLink = screen.getByTestId("formLinkId");
  expect(formLink).toBeInTheDocument();
  expect(formLink).toHaveAttribute("href", "/form");
});
