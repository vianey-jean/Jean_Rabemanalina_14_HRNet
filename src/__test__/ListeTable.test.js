import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ListeTable from "../components/TableGroupe/ListeTable";

import { store } from "../redux/store";

describe("Should be display the list form", () => {
  test("it should have inputs", async () => {
    render(
      <Provider store={store}>
        <ListeTable />
      </Provider>
    );
  });
});
