import Bienvenue from "../../components/Bienvenue/Bienvenue";
import "./home.css";

/**
 * home - links to user pages based on data type (mocked or retrieve from API)
 * @returns {React.ReactElement} JSX.Element - Link to user page
 */


const Home = () => {
  return (
    <main className="container center">
      <h2 className="form-title">Bienvenue sur WealthHealth</h2>
      <Bienvenue />
    </main>
  );
};

export default Home;
