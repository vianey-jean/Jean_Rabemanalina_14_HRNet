import React from "react";
import { useNavigate } from "react-router-dom";
import "./page404.css";


const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="hero-not-found">
        <section className="hero-not-found-content">
          <h2 className="sr-only">Something's wrong here!</h2>
          <p className="title">Something's wrong here!</p>
          <p className="text">
            The page you are looking for might have been removed or temporarily
            unavailable.
          </p>
          <div>
            <button
              className="hero-not-found-link"
              onClick={() => navigate(-1)}
            >
              Go back to home
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NotFound;
