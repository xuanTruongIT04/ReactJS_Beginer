import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        Test link
        <div>
          <button class="btn btn-success mr-2 pr-4">
            <Link to="/users">Go to User page</Link>
          </button>
          <button class="btn btn-success mr-2 pr-4">
            <Link to="/admins">Go to Admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
