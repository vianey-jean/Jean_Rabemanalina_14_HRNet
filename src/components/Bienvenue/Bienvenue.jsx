import { NavLink } from "react-router-dom";
import "./bienvenue.css";
import "../../../src/App.css";

/**
 * @name Bienvenue
 * @description create bienvenue component with 2 links to navigate to create employee form page and employee list page
 * @returns {JSX.Element}
 *
 */

const Bienvenue = () => {
  return (
    <>
      <div className="home-wrapper">
        <form className="home-inputs" >
          <NavLink to="/create" >
            <button className="home-button">Create Employee</button>
          </NavLink>
          <NavLink to="/list" >
            <button className="home-button">Liste Employee</button>
          </NavLink>
        </form>
      </div>
    </>
  );
};
export default Bienvenue;
