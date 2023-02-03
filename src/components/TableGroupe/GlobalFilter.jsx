import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import 'babel-polyfill';
/**
 * @name GlobalFilter
 * @description create globaleFilter component to filter search on the table with informations about employee (id, first name, last name, date of birth, start date, street, city, state, zipcode and departament)
 * @returns {JSX.Element}
 */


const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  //to simulate internet connection
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined);
  }, 100);


  return (
    <span>
      <label htmlFor="search">Search: </label>

      <input
        id="search"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};

export default GlobalFilter;

