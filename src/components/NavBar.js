import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="topnav">
      <li className="nav-logo">
        <a href="#home">Karl-Yann Assah</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a className="active" href="#speaking">
          Speaking
        </a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#edentity">Edentity</a>
      </li>
      <li className="right">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};
