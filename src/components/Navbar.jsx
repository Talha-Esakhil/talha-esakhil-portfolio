function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <div className="logo-container">
          <p className="logo">Talha Esakhil</p>
        </div>
        <div className="links">
          <li className="navbar-link">
            <a href="#" className="link">
              Home
            </a>
          </li>
          <li className="navbar-link">
            <a href="#projects" className="link">
              Projects
            </a>
          </li>
          <li className="navbar-link">
            <a href="#skills" className="link">
              Skills
            </a>
          </li>
          <li className="navbar-link">
            <a href="#aboutme" className="link">
              About Me
            </a>
          </li>
          <li className="navbar-link">
            <a href="#contact" className="link">
              Contact Me
            </a>
          </li>
        </div>
        <div className="github-btn">
          <li className="navbar-link btn btn-github">
            <a
              href="https://github.com/Talha-Esakhil"
              target="_blank"
              className="link"
            >
              Github →
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
