import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Pro Plan !!</h2>
        <p className="description">
          Ideal for developers and startups who want power and performance !!
        </p>

        <div className="price">
          ₹999 <span className="per-month">/mo</span>
        </div>

        <ul className="features">
          <li>Unlimited Projects</li>
          <li>100 GB Storage</li>
          <li>Priority Support</li>
        </ul>

        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default App;
