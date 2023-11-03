import { Outlet, Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <ul className="topnav">
        <li className="nav-logo">
          <Link
            className={`${useLocation().pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Karl-Yann Assah
          </Link>
        </li>
        <li>
          <Link
            className={`${
              useLocation().pathname.includes("edentity") ? "active" : ""
            }`}
            to="/edentity"
          >
            Edentity
          </Link>
        </li>
        <li>
          <Link
            className={`${
              useLocation().pathname.includes("projects") ? "active" : ""
            }`}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={`${
              useLocation().pathname.includes("speaking") ? "active" : ""
            }`}
            to="/speaking"
          >
            Speaking
          </Link>
        </li>
        <li>
          <Link
            className={`${
              useLocation().pathname.includes("about") ? "active" : ""
            }`}
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
