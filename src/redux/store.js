import { configureStore } from "@reduxjs/toolkit";
import newEmployeeReducer from "../features/newEmploye/newEmployeeSlice";


/**
 * Create Store to configure the redux
 * @returns {React.ReactElement} JSX.Element - the Store to redux
 */



export const store = configureStore({
  reducer: {
    newEmployee: newEmployeeReducer,
  },
});
