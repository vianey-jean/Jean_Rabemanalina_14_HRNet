import React from "react";
import { render, fireEvent } from "@testing-library/react";
import GlobalFilter from "../components/TableGroupe/GlobalFilter";

describe("SearchForm component", () => {
  it("should display the correct value", () => {
    const { getByLabelText } = render(<GlobalFilter />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByLabelText("Search:");
    expect(input.value).toBe("");
  });

  it("should update the value when the input is changed", () => {
    const { getByLabelText } = render(<GlobalFilter />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByLabelText("Search:");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });;
});
