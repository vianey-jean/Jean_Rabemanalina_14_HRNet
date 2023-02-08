import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Form from "../components/Form/Form";

import { store } from "../redux/store";

describe("Should be display in create employee form", () => {
  test("it should have inputs", async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    expect(screen.getAllByRole("textbox")).toBeTruthy();

    expect(screen.getByLabelText("Date of Birth")).toBeTruthy();
    expect(screen.getByLabelText("Start Date")).toBeTruthy();
    expect(screen.getByLabelText("City")).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
