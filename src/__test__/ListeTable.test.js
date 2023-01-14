import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import GlobalFilter from "../components/TableGroupe/GlobalFilter";

import { store } from "../redux/store";

describe('GlobalFilter', () => {
  it('Should display the input', async() => {
    render(
      <Provider store={store}>
        <GlobalFilter />
      </Provider>
    );
    const input = screen.getByLabelText('search')
    expect(input).toBeInTheDocument()
    expect(input.value).toBe('')
  });
});
  