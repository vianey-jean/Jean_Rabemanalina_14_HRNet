import { createSlice } from "@reduxjs/toolkit";
import MOCK from "../../Moks/MOCK.json";

/**
 * Create EmployeeSlice to relate App and Routes
 * @returns {React.ReactElement} JSX.Element - The slice for redux
 */


//start array employee array with mock data
const initialState = {
  arrayEmployee: [...MOCK],
};

export const newEmployeeSlice = createSlice({
  name: "newEmployee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.arrayEmployee.push(action.payload);
    },
  },
});

export const { addEmployee } = newEmployeeSlice.actions;

export default newEmployeeSlice.reducer;
