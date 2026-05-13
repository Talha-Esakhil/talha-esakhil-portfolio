function Header() {
  return (
    <header className="hero">
      <div className="hero-container">
        <div className="hero__info">
          <div className="hero__info--top">
            <h1 className="hero__name">Hi, I'm Talha Esakhil</h1>
            <h3 className="hero__role">Frontend Developer</h3>
          </div>
          <div className="hero__info--bottom">
            <p className="hero__description">
              Passionate about building modern, responsive Web Applications
              using JavaScript, TypeScript, Tailwind CSS, and React.
            </p>
          </div>
          <div className="hero__action-btns">
            <button className="btn btn__view-projects">
              <a href="#projects" className="link">
                View Projects
              </a>
            </button>
            <button className="btn btn__contact-me">
              <a href="#contact" className="link">
                Contact Me
              </a>
            </button>
          </div>
        </div>

        <div className="hero-img">
          <div className="hero__image-container">
            <img
              src="talhaesakhil.png"
              alt="My Photo."
              className="image hero-image"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
