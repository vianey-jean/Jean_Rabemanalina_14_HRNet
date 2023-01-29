import GlobalFilter from "../components/TableGroupe/GlobalFilter";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { store } from "../redux/store";

describe('GlobalFilter', () => {
  it('Should display the input', () => {
    render(
      <Provider store={store}>
        <GlobalFilter />
      </Provider>
    );
    const input = screen.getAllByLabelText('Search:')
    expect(input).toBeInTheDocument()
    expect(input.value).toBe('')
  });
});

    