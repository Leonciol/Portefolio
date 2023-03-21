import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          exact
          className={({ isActive }) =>
            isActive ? "nav-active hover" : "hover"
          }
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/bio"
          exact
          className={({ isActive }) =>
            isActive ? "nav-active hover" : "hover"
          }
        >
          <li>Présentation</li>
        </NavLink>
        <NavLink
          to="/entreprise"
          exact
          className={({ isActive }) =>
            isActive ? "nav-active hover" : "hover"
          }
        >
          <li>Entreprise</li>
        </NavLink>
        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/project-1"
              className={({ isActive }) =>
                isActive ? "nav-active hover" : "hover"
              }
            >
              <li>Gestion de flotte</li>
            </NavLink>
            <NavLink
              to="/project-2"
              className={({ isActive }) =>
                isActive ? "nav-active hover" : "hover"
              }
            >
              <li>Timilo Application</li>
            </NavLink>
            <NavLink
              to="/project-3"
              className={({ isActive }) =>
                isActive ? "nav-active hover" : "hover"
              }
            >
              <li>Pousse Pousse</li>
            </NavLink>
            <NavLink
              to="/project-4"
              className={({ isActive }) =>
                isActive ? "nav-active hover" : "hover"
              }
            >
              <li>Valobéné</li>
            </NavLink>
          </ul>
        </li>
        {/* <NavLink
          to="/contact"
          exact
          className={({ isActive }) =>
            isActive ? "nav-active hover" : "hover"
          }
        >
          <li>Contact</li>
        </NavLink> */}
      </ul>
    </div>
  );
};

export default Navigation;
