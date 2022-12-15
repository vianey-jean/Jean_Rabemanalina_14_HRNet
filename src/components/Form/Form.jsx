import DatePicker from "react-datepicker";
import moment from "moment";
import "./form.css";
import "../../../src/App.css";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";



const Form = () => {
  //to get the size of the total employee inside array

  return (
    <>

      <div className="form-wrapper">
        <form className="form-inputs" >
          <div className="form-fieldsets">
            <fieldset className="form-fieldset">
              <legend>Employee identity</legend>

              <label htmlFor="firstname">First Name </label>
              <input
                id="firstname"
                autoComplete="off"
                name="firstname"
                type="text"
                
              />
             
              <label htmlFor="lastname">Last Name</label>
              <input
                id="lastname"
                autoComplete="off"
                name="lastname"
                type="text"
              />
           

              <label htmlFor="datebirth">Date of Birth</label>
              <DatePicker
                id="datebirth"
                name="datebirth"
                
                placeholderText={"dd/mm/yyyy"}
                yearDropdownItemNumber={60}
                minDate={moment().subtract(60, "years")._d}
                maxDate={moment().subtract(18, "years")._d}
                scrollableYearDropdown
                dateFormat="dd/MM/yyyy"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
             

              <label htmlFor="startdate">Start Date </label>
              <DatePicker
                id="startdate"
                name="startdate"
              
                placeholderText={"dd/mm/yyyy"}
                minDate={new Date()}
                maxDate={moment().add(10, "weeks")._d}
                dateFormat="dd/MM/yyyy"
                
                peekNextMonth
                showMonthDropdown
                dropdownMode="select"
                todayButton="today"
              />
            </fieldset>
            <fieldset className="form-fieldset title">
              <legend>Employee Address</legend>
              <label htmlFor="street">Street</label>
              <input
                id="street"
                autoComplete="off"
                name="street"
                type="text"
              />
              <label htmlFor="city">City </label>
              <input
                id="city"
                autoComplete="off"
                name="city"
                type="text"
              />
              <label htmlFor="countrystate">
                State
                <Select
                  id="countrystate"
                  name="countrystate"
                  placeholder="Select state"
                />
              </label>
              <label htmlFor="zipcode">Zip Code</label>
              <input
                id="zipcode"
                autoComplete="off"
                name="zipcode"
                type="number"
              />
            </fieldset>

            <fieldset className="form-fieldset title">
              <legend>Departament</legend>
              <label htmlFor="departament">
                Departament
                <Select
                  id="departament"
                  name="departament"
                  placeholder="Select departament"
                />
              </label>
            </fieldset>
          </div>
          <button className="form-button">Save</button>
        </form>
      </div>
    </>
  );
};
export default Form;
