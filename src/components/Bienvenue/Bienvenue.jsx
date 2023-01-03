import { NavLink } from "react-router-dom";
import "./bienvenue.css";
import "../../../src/App.css";

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
