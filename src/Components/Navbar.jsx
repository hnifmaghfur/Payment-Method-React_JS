import React from "react";
import { NavLink } from "react-router-dom";
const Home = (props) => {
  return (
    <>
      <div className="bg-white h-100 navigation d-flex flex-column justify-content-between rounded-12 shadow-sm py-3 px-4">
        <ul className="m-0 pl-md-3">
          <NavLink
            exact
            className="text-decoration-none text-dark"
            activeClassName="text-theme"
            to="/"
          >
            <li className="d-flex align-text-center py-3 mt-4 mb-3">
              <img src="" />
              <div> Dashboard</div>
            </li>
          </NavLink>
          <NavLink
            exact
            className="text-decoration-none text-dark"
            activeClassName="text-theme"
            to="/transfer"
          >
            <li className="d-flex align-text-center py-3 mt-4 mb-3">
              <img src="" />
              <div> Transfer</div>
            </li>
          </NavLink>
          <NavLink
            exact
            className="text-decoration-none text-dark"
            activeClassName="text-theme"
            to="/topup"
          >
            <li className="d-flex align-text-center py-3 mt-4 mb-3">
              <img src="" />
              <div> Top Up</div>
            </li>
          </NavLink>
          <NavLink
            exact
            className="text-decoration-none text-dark"
            activeClassName="text-theme"
            to="/profile"
          >
            <li className="d-flex align-text-center py-3 mt-4 mb-3">
              <img src="" />
              <div> Profile</div>
            </li>
          </NavLink>
        </ul>

        <ul className="m-0 pl-md-3">
          <li className="d-flex align-items-center py-4">
            <img src="" />
            <div>Logout</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
