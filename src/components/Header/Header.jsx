import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/image/logo.png";

const Header = () => {
  const navStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      textUnderlineOffset: "5px",
    };
  };

  return (
    <header className="header">
      <section className="container">
        <div className="header-container">
          <NavLink to="/" className="no-decoration">
            <img src={logo} alt="logo" />
            <h1 className="hearder-text">
              <span className="bigger-police">W</span>EALTH
              <span className="bigger-police">H</span>EALTH
            </h1>
          </NavLink>
          <h2 className="header-tm"> HRnet</h2>
          <div className="header-links">
            <NavLink to="/" style={navStyles}>
              Create Employee
            </NavLink>
            <NavLink to="/list" style={navStyles}>
              List Employee
            </NavLink>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
