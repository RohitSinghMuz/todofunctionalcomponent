import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import user from "@testing-library/user-event";
import Form from "../Form";
import { MemoryRouter } from "react-router-dom";
import ReactDOM from "react-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => mockedUsedNavigate,
}));

describe("Submit Form Data ", () => {
  test("user Display Form List", () => {
    render(<Form />);
    expect(screen).toBeTruthy();
  });

  test("User can Enter first name string input", async () => {
    render(<Form />);
    const firstNameInput = (
      await screen.getByTestId("firstNameId")
    )?.querySelector("input") as HTMLInputElement;
    act(() => {
      fireEvent.change(firstNameInput, { target: { value: "Rana" } });
    });
    expect(firstNameInput.value).toBe("Rana");
  });
  test("User can Enter last name string input", async () => {
    render(<Form />);
    const lastNameInput: any = (
      await screen.getByTestId("lastNameId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(lastNameInput, { target: { value: "Kumar" } });
    });
    expect(lastNameInput.value).toBe("Kumar");
  });
  test("User can Enter emailId string input", async () => {
    render(<Form />);
    const lastNameInput: any = (
      await screen.getByTestId("emailId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(lastNameInput, { target: { value: "rana@gmail.com" } });
    });
    expect(lastNameInput.value).toBe("rana@gmail.com");
  });
  test("User can Enter city name string input", async () => {
    render(<Form />);
    const lastNameInput: any = (
      await screen.getByTestId("cityId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(lastNameInput, { target: { value: "Delhi" } });
    });
    expect(lastNameInput.value).toBe("Delhi");
  });
  test("User can Enter pinCode number input", async () => {
    render(<Form />);
    const lastNameInput: any = (
      await screen.getByTestId("pincodeId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(lastNameInput, { target: { value: "500081" } });
    });
    expect(lastNameInput.value).toBe("500081");
  });

  test("User can Enter wrong input and submitt form", async () => {
    const handleSubmit = jest.fn();
    render(<Form />);
    const firstNameInput: any = (
      await screen.getByTestId("firstNameId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(firstNameInput, { target: { value: "Rn" } });
    });
    expect(firstNameInput.value).toBe("Rn");
    const lastNameInput: any = (
      await screen.getByTestId("lastNameId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(lastNameInput, { target: { value: "Kr" } });
    });
    expect(lastNameInput.value).toBe("Kr");
    const emailInput: any = (
      await screen.getByTestId("emailId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(emailInput, {
        target: { value: "ranagml.com" },
      });
    });
    expect(emailInput.value).toBe("ranagml.com");
    const cityName: any = (await screen.getByTestId("cityId"))?.querySelector(
      "input"
    );
    act(() => {
      fireEvent.change(cityName, { target: { value: "De" } });
    });
    expect(cityName.value).toBe("De");
    const pinCodeInput: any = (
      await screen.getByTestId("pincodeId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(pinCodeInput, { target: { value: "500" } });
    });
    expect(pinCodeInput.value).toBe("500");
    const saveBtn = screen.getByTestId("btnsubmitt");

    fireEvent.click(saveBtn);
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
  test("User can submitt Empty Form", async () => {
    const handleSubmit = jest.fn();
    render(<Form />);
    const firstNameInput: any = (
      await screen.getByTestId("firstNameId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(firstNameInput, { target: { value: "" } });
    });
    expect(firstNameInput.value).toBe("");
    const lastNameInput: any = (
      await screen.getByTestId("lastNameId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(lastNameInput, { target: { value: "" } });
    });
    expect(lastNameInput.value).toBe("");
    const emailInput: any = (
      await screen.getByTestId("emailId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(emailInput, {
        target: { value: "" },
      });
    });
    expect(emailInput.value).toBe("");
    const cityName: any = (await screen.getByTestId("cityId"))?.querySelector(
      "input"
    );
    act(() => {
      fireEvent.change(cityName, { target: { value: "" } });
    });
    expect(cityName.value).toBe("");
    const pinCodeInput: any = (
      await screen.getByTestId("pincodeId")
    )?.querySelector("input");
    act(() => {
      fireEvent.change(pinCodeInput, { target: { value: "" } });
    });
    expect(pinCodeInput.value).toBe("");
    const saveBtn = screen.getByTestId("btnsubmitt");

    fireEvent.click(saveBtn);
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });

  // let addNow = screen.getByTestId("addNowBtn");
  // console.log(addNow, "add");
  // await act(() => {
  //   fireEvent.click(addNow);
  // });
});
