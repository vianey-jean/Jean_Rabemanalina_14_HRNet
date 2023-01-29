import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import render from "../setupTests";
import List from "../Pages/listeEmployee/listeEmployee";
import { Provider } from "react-redux";

import { store } from "../redux/store";

const setup = () =>
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
describe("List Employee page", () => {
  setup();
  const main = screen.getByRole("main");
  it("Should have title display", () => {
    expect(main).toHaveTextContent("Liste Employee");
  });
});
