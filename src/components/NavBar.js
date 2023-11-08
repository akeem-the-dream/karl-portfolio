import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

export const NavBar = () => {
  const locationPath = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationPath.pathname]);

  const [status, setStatus] = useState(true);
  return (
    <>
      <ul className="topnav">
        <div className={status === true ? "disable" : "enable"}>
          <li>
            <Link
              className={`${
                locationPath.pathname.includes("edentity") ? "active" : ""
              }`}
              to="/edentity"
            >
              Edentity
            </Link>
          </li>
          <li>
            <Link
              className={`${
                locationPath.pathname.includes("projects") ? "active" : ""
              }`}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={`${
                locationPath.pathname.includes("speaking") ? "active" : ""
              }`}
              to="/speaking"
            >
              Speaking
            </Link>
          </li>
          <li>
            <Link
              className={`${
                locationPath.pathname.includes("about") ? "active" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
        </div>
        <div className="nav-logo">
          <li>
            <Link
              className={`${locationPath.pathname === "/" ? "active" : ""}`}
              to="/"
            >
              Karl-Yann Assah
            </Link>
          </li>
          <div
            className="bar-menu"
            onClick={() => {
              setStatus(!status);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </ul>
      <Outlet />
    </>
  );
};
